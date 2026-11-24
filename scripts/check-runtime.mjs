import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

// Test startup and asynchronous booking without third-party network requests.
const source = readFileSync('src/main.ts', 'utf8').replaceAll('import.meta.env', 'TEST_ENV')
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText

function start({ page = 'home', prerendered = true, spanish = false } = {}) {
  let htmlWrites = 0
  let audioAttachments = 0
  const resources = []
  const redirects = []
  let reloads = 0
  const openedBookings = []
  const windowEvents = new Map()
  const buttonEvents = new Map()
  const navigationEvents = new Map()
  const timers = new Map()
  let nextTimer = 0
  const app = {
    dataset: prerendered ? { page, language: 'fr' } : {},
    get innerHTML() { return 'Existing server-rendered content' },
    set innerHTML(value) { assert.ok(value.length); htmlWrites += 1 },
  }
  const button = { dataset: { brevoMeeting: 'voirClair' }, addEventListener: (event, listener) => buttonEvents.set(event, listener) }
  const audioNavigation = { dataset: { page: 'asseoir-son-identite' }, addEventListener: (event, listener) => navigationEvents.set(event, listener) }
  const window = {
    location: { pathname: page === 'home' ? '/' : `/${page}/`, search: '', hash: '', assign: url => redirects.push(url), reload: () => { reloads += 1 } },
    history: { pushState: (_state, _title, path) => { window.location.pathname = path } },
    localStorage: { getItem: () => null },
    addEventListener: (event, listener) => windowEvents.set(event, listener),
    scrollTo: () => {},
    setTimeout: listener => { timers.set(++nextTimer, listener); return nextTimer },
    clearTimeout: id => timers.delete(id),
  }
  const document = {
    title: '', documentElement: { lang: 'fr' }, body: { classList: { remove: () => {} } },
    querySelector: selector => selector === '#app' ? app : null,
    querySelectorAll: selector => {
      if (selector === '.nav-item:not(.dropdown)[data-page]') return [audioNavigation]
      if (selector === '[data-brevo-meeting]' && window.location.pathname === '/reserver/') return [button]
      return []
    },
    createElement: tagName => ({ tagName, remove() { this.removed = true } }),
    head: { append: (...nodes) => resources.push(...nodes) },
  }
  const exports = {}
  runInNewContext(code, {
    exports, window, document, TEST_ENV: { SSR: spanish },
    require: id => {
      if (id.endsWith('.json')) return { default: JSON.parse(readFileSync(`src/${id.slice(2)}`, 'utf8')) }
      if (id === './payhip-product') return { attachPayhipProduct: () => {} }
      if (id === './audio-page') return { attachAudioPlayer: () => { audioAttachments += 1 }, getAudioPageHtml: () => '<main>Audio</main>' }
      if (id.endsWith('.css')) return {}
      throw new Error(`Unexpected import: ${id}`)
    },
  })
  return { window, resources, redirects, openedBookings, exports, timers, buttonEvents, navigationEvents,
    get htmlWrites() { return htmlWrites }, get audioAttachments() { return audioAttachments },
    get reloads() { return reloads },
    bookingReady() {
      window.BrevoBookingPage = { initStaticButton: options => openedBookings.push(options.url) }
      resources.filter(node => !node.removed).forEach(node => node.onload())
    },
    visit(page) { window.location.pathname = `/${page}/`; windowEvents.get('popstate')() },
  }
}

const home = start()
assert.equal(home.htmlWrites, 0, 'Prerendered content must not be replaced at startup')
assert.equal(home.audioAttachments, 1, 'Existing markup still needs interactive handlers')
assert.equal(home.resources.length, 0, 'Home must not load the booking widget')
assert.equal(start({ prerendered: false }).htmlWrites, 1, 'Development must render an empty app')
const audio = start({ page: 'asseoir-son-identite' })
assert.equal(audio.htmlWrites, 0, 'Initial sales page must preserve server-rendered content')
const audioNavigation = start()
audioNavigation.navigationEvents.get('click')({ preventDefault() {} })
assert.equal(audioNavigation.redirects.length, 0, 'Product page navigation stays within the site')
assert.equal(audioNavigation.htmlWrites, 1, 'Sales page is rendered by client navigation')
audioNavigation.visit('asseoir-son-identite')
assert.equal(audioNavigation.reloads, 0, 'Product dialog supports history without a page reload')
assert.equal(audioNavigation.htmlWrites, 2, 'History restores the sales page')

home.visit('reserver')
assert.equal(home.htmlWrites, 1, 'Client navigation must render the requested page')
assert.equal(home.resources.length, 2, 'Booking loads its script and stylesheet on the booking page')
home.bookingReady()
home.buttonEvents.get('click')()
await Promise.resolve()
await Promise.resolve()
assert.equal(home.openedBookings.length, 1)
assert.ok(home.openedBookings[0].includes('l=seance-voir-clair'))
assert.equal(home.resources.length, 2, 'Repeated use must reuse the widget')

const failure = start({ page: 'reserver' })
failure.resources[1].onerror()
await Promise.resolve()
failure.buttonEvents.get('click')()
assert.equal(failure.resources.length, 4, 'Failed widget loading can be retried')
failure.resources[3].onerror()
await Promise.resolve()
await Promise.resolve()
assert.equal(failure.redirects.length, 1, 'A failed widget must fall back to the direct booking page')
assert.ok(failure.redirects[0].includes('l=seance-voir-clair'))

const timeout = start({ page: 'reserver' })
timeout.buttonEvents.get('click')()
for (const listener of timeout.timers.values()) listener()
await Promise.resolve()
await Promise.resolve()
assert.equal(timeout.redirects.length, 1, 'A stalled widget must not trap the visitor')

const ssr = start({ spanish: true })
assert.ok(ssr.exports.getLocalizedPageHtml('home', 'es').includes('Coaching espiritual y lectura de registros akáshicos'))
const productCode = ts.transpileModule(readFileSync('src/payhip-product.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
function productDialog() {
  const documentEvents = new Map(), windowEvents = new Map(), timers = new Map(), bodyClasses = new Set()
  const document = {
    activeElement: null, querySelector: () => overlay, createElement: () => element(),
    addEventListener: (name, fn) => documentEvents.set(name, fn),
    removeEventListener: name => documentEvents.delete(name),
    body: { classList: { add: name => bodyClasses.add(name), remove: name => bodyClasses.delete(name) } },
  }
  function element(parent, hidden = false) {
    const events = new Map()
    return {
      parent, hidden, attrs: new Map(), contentWindow: {},
      closest() { return this.hidden ? this : this.parent?.closest('[hidden]') },
      focus() { document.activeElement = this },
      setAttribute(name, value) { this.attrs.set(name, value) },
      removeAttribute(name) { this.attrs.delete(name) },
      addEventListener: (name, fn) => events.set(name, fn),
      removeEventListener: name => events.delete(name),
      fire: (name, event) => events.get(name)?.(event),
      remove() { this.removed = true },
    }
  }
  const overlay = element(null, true), dialog = element(overlay), summary = element(dialog)
  const pay = element(summary), loading = element(dialog, true), error = element(dialog, true)
  const container = element(dialog, true), footer = element(dialog, true), link = element(footer), close = element(dialog)
  const triggers = [element(), element()], frames = []
  triggers.forEach(button => { button.isConnected = true })
  link.href = 'https://payhip.com/buy?link=dOrxa'
  container.append = frame => { frame.parent = container; frames.push(frame) }
  overlay.querySelector = () => dialog
  footer.querySelector = () => link
  dialog.querySelector = selector => ({
    '[data-product-summary]': summary, '[data-checkout-start]': pay, '[data-checkout-loading]': loading,
    '[data-checkout-error]': error, '[data-checkout-container]': container,
    '.audio-product-footer': footer, '[data-product-close]': close,
  })[selector]
  dialog.querySelectorAll = () => [close, pay, ...frames.filter(frame => !frame.removed), link]
  const exports = {}
  runInNewContext(productCode, {
    exports, document, window: {
      setTimeout: fn => { timers.set(1, fn); return 1 }, clearTimeout: id => timers.delete(id),
      addEventListener: (name, fn) => windowEvents.set(name, fn),
      removeEventListener: name => windowEvents.delete(name),
    },
  })
  exports.attachPayhipProduct()
  return { document, overlay, close, summary, pay, loading, error, container, footer, link, triggers, frames, bodyClasses, timers,
    open(index = 0) {
      let canceled = false
      documentEvents.get('click')({ target: { closest: () => triggers[index] }, preventDefault() { canceled = true }, stopPropagation() {} })
      assert.equal(canceled, true)
    },
    key(key, shiftKey = false) { documentEvents.get('keydown')({ key, shiftKey, preventDefault() {} }) },
    message(frame, action, origin = 'https://payhip.com') { windowEvents.get('message')?.({ data: { action }, source: frame.contentWindow, origin }) },
    navigateAway() { document.querySelector = () => null; exports.attachPayhipProduct() },
  }
}
const product = productDialog()
product.open()
assert.equal(product.overlay.hidden, false)
assert.equal(product.summary.hidden, false, 'The product must be readable immediately')
assert.equal(product.frames.length, 0, 'The first click must not contact Payhip')
assert.equal(product.document.activeElement, product.close)
product.key('Tab', true)
assert.equal(product.document.activeElement, product.pay, 'Focus trap skips hidden checkout controls')
product.pay.fire('click')
product.pay.fire('click')
assert.equal(product.frames.length, 1)
const [frame] = product.frames
assert.equal(frame.src, product.link.href)
assert.equal(frame.allow, 'payment')
product.message(frame, 'checkout:loaded', 'https://example.org')
product.message({ contentWindow: {} }, 'checkout:loaded')
frame.fire('load')
assert.equal(product.container.hidden, true, 'Only the active Payhip checkout can report readiness')
product.message(frame, 'checkout:loaded')
assert.equal(product.container.hidden, false)
assert.equal(product.summary.hidden, true)
assert.equal(product.document.activeElement, frame)
assert.equal(product.timers.size, 0)
product.close.fire('click')
assert.equal(product.document.activeElement, product.triggers[0])
assert.equal(frame.removed, true)
product.open(1)
assert.equal(product.summary.hidden, false)
product.pay.fire('click')
const stalled = product.frames.at(-1)
product.timers.get(1)()
assert.equal(stalled.removed, true)
assert.equal(product.loading.hidden, true)
assert.equal(product.error.hidden, false)
assert.equal(product.footer.hidden, false)
assert.equal(product.overlay.hidden, false)
product.pay.fire('click')
product.message(stalled, 'checkout:loaded')
assert.equal(product.container.hidden, true, 'Ignore late responses from abandoned attempts')
product.frames.at(-1).fire('error')
assert.equal(product.error.hidden, false)
product.pay.fire('click')
product.message(product.frames.at(-1), 'checkout:loaded')
assert.equal(product.container.hidden, false, 'Retry can reach checkout')
product.message(product.frames.at(-1), 'checkout:closed')
assert.equal(product.overlay.hidden, true)
assert.equal(product.document.activeElement, product.triggers[1])
product.open()
product.key('Escape')
assert.equal(product.overlay.hidden, true)
product.open()
product.overlay.fire('click', { target: product.overlay })
assert.equal(product.overlay.hidden, true)
product.open()
product.pay.fire('click')
product.navigateAway()
assert.equal(product.timers.size, 0)
assert.equal(product.bodyClasses.size, 0)
assert.equal(product.frames.at(-1).removed, true)
console.log('Checked startup, navigation, bookings, Spanish, local product details, checkout readiness, retry and dialog cleanup.')
