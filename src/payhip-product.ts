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
  const embed = dialog.querySelector<HTMLElement>('.payhip-embed-page')!
  const status = dialog.querySelector<HTMLElement>('[data-product-status]')!
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-product-close]')!
  let trigger: HTMLElement | undefined
  let script: HTMLScriptElement | undefined
  let timeout: number | undefined
  let observer: MutationObserver | undefined
  let loaded = false

  const close = () => {
    overlay.hidden = true
    document.body.classList.remove('payhip-product-open')
    if (trigger?.isConnected) trigger.focus()
  }
  const reportError = () => {
    if (loaded) return
    status.hidden = false
    status.textContent = 'La fiche n’a pas pu être affichée. Tu peux l’ouvrir sur Payhip avec le lien ci-dessous.'
  }
  const loadProduct = () => {
    if (script) return
    observer = new MutationObserver(() => {
      const frame = embed.querySelector('iframe')
      if (!frame) return
      frame.title = 'Fiche Payhip — Asseoir son identité'
      frame.addEventListener('load', () => {
        loaded = true
        status.hidden = true
        window.clearTimeout(timeout)
      }, { once: true })
      observer?.disconnect()
    })
    observer.observe(embed, { childList: true, subtree: true })
    script = document.createElement('script')
    script.src = 'https://payhip.com/embed-page.js'
    script.async = true
    script.onerror = reportError
    timeout = window.setTimeout(reportError, 20000)
    document.head.append(script)
  }
  openCurrentProduct = button => {
    trigger = button
    overlay.hidden = false
    document.body.classList.add('payhip-product-open')
    closeButton.focus()
    loadProduct()
  }
  const onBackdrop = (event: MouseEvent) => { if (event.target === overlay) close() }
  const onKey = (event: KeyboardEvent) => {
    if (overlay.hidden) return
    if (event.key === 'Escape') { event.preventDefault(); close(); return }
    if (event.key !== 'Tab') return
    const controls = dialog.querySelectorAll<HTMLElement>('button, a[href], iframe, [tabindex]:not([tabindex="-1"])')
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
  }
  closeButton.addEventListener('click', close)
  overlay.addEventListener('click', onBackdrop)
  document.addEventListener('keydown', onKey)
  cleanup = () => {
    window.clearTimeout(timeout)
    observer?.disconnect()
    script?.remove()
    close()
    closeButton.removeEventListener('click', close)
    overlay.removeEventListener('click', onBackdrop)
    document.removeEventListener('keydown', onKey)
  }
}
