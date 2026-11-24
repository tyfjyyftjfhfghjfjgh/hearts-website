let cleanup: (() => void) | undefined
let openCurrentProduct: ((trigger: HTMLElement) => void) | undefined
let clickHandlerInstalled = false

export function attachPayhipProduct(): void {
  // One delegated handler also covers buttons replaced by navigation or Vite.
  if (!clickHandlerInstalled) {
    document.addEventListener('click', event => {
      const trigger = (event.target as Element | null)?.closest<HTMLElement>('[data-payhip-product]')
      if (!trigger) return
      event.preventDefault()
      event.stopPropagation()
      openCurrentProduct?.(trigger)
    }, true)
    clickHandlerInstalled = true
  }
  cleanup?.()
  cleanup = undefined
  openCurrentProduct = undefined
  const overlay = document.querySelector<HTMLElement>('#payhip-product-overlay')
  if (!overlay) return
  const dialog = overlay.querySelector<HTMLElement>('[role="dialog"]')!
  const summary = dialog.querySelector<HTMLElement>('[data-product-summary]')!
  const startButton = dialog.querySelector<HTMLButtonElement>('[data-checkout-start]')!
  const loading = dialog.querySelector<HTMLElement>('[data-checkout-loading]')!
  const error = dialog.querySelector<HTMLElement>('[data-checkout-error]')!
  const checkout = dialog.querySelector<HTMLElement>('[data-checkout-container]')!
  const footer = dialog.querySelector<HTMLElement>('.audio-product-footer')!
  const paymentLink = footer.querySelector<HTMLAnchorElement>('a')!
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-product-close]')!
  let trigger: HTMLElement | undefined
  let frame: HTMLIFrameElement | undefined
  let timeout: number | undefined

  const resetCheckout = () => {
    window.clearTimeout(timeout)
    frame?.remove()
    frame = undefined
    checkout.hidden = true
    summary.hidden = false
    footer.hidden = true
    loading.hidden = true
    error.hidden = true
    startButton.removeAttribute('aria-disabled')
  }
  const close = () => {
    overlay.hidden = true
    resetCheckout()
    document.body.classList.remove('payhip-product-open')
    if (trigger?.isConnected) trigger.focus()
  }
  const startCheckout = () => {
    if (frame) return
    const attempt = document.createElement('iframe')
    const reportError = () => {
      if (frame !== attempt || loading.hidden) return
      resetCheckout()
      error.hidden = false
      footer.hidden = false
    }
    frame = attempt
    attempt.title = 'Paiement Payhip — Asseoir son identité'
    attempt.allow = 'payment'
    attempt.src = paymentLink.href
    attempt.addEventListener('error', reportError, { once: true })
    startButton.setAttribute('aria-disabled', 'true')
    error.hidden = true
    loading.hidden = false
    footer.hidden = false
    timeout = window.setTimeout(reportError, 12000)
    checkout.append(attempt)
  }
  const onCheckoutMessage = (event: MessageEvent) => {
    if (!frame || event.origin !== 'https://payhip.com' || event.source !== frame.contentWindow) return
    if (event.data?.action === 'checkout:closed') { close(); return }
    // Even an HTTP error document can fire iframe.load. Wait for the checkout itself.
    if (event.data?.action !== 'checkout:loaded' || loading.hidden) return
    window.clearTimeout(timeout)
    loading.hidden = true
    summary.hidden = true
    checkout.hidden = false
    if (document.activeElement === startButton || document.activeElement === document.body) frame.focus()
  }
  openCurrentProduct = button => {
    trigger = button
    overlay.hidden = false
    document.body.classList.add('payhip-product-open')
    closeButton.focus()
  }
  const onBackdrop = (event: MouseEvent) => { if (event.target === overlay) close() }
  const onKey = (event: KeyboardEvent) => {
    if (overlay.hidden) return
    if (event.key === 'Escape') { event.preventDefault(); close(); return }
    if (event.key !== 'Tab') return
    const controls = [...dialog.querySelectorAll<HTMLElement>('button, a[href], iframe, [tabindex]:not([tabindex="-1"])')].filter(control => !control.closest('[hidden]'))
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
  }
  closeButton.addEventListener('click', close)
  startButton.addEventListener('click', startCheckout)
  window.addEventListener('message', onCheckoutMessage)
  overlay.addEventListener('click', onBackdrop)
  document.addEventListener('keydown', onKey)
  cleanup = () => {
    close()
    closeButton.removeEventListener('click', close)
    startButton.removeEventListener('click', startCheckout)
    window.removeEventListener('message', onCheckoutMessage)
    overlay.removeEventListener('click', onBackdrop)
    document.removeEventListener('keydown', onKey)
  }
}
