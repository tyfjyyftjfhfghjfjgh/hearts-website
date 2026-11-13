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
  const resources = [], timers = new Map(), bodyClasses = new Set()
  const documentEvents = new Map(), overlayEvents = new Map(), closeEvents = new Map(), frameEvents = new Map()
  let available = true, frame, mutationCallback, disconnected = false
  const status = { hidden: false, textContent: 'Chargement' }
  const triggers = [0, 1].map(() => ({ isConnected: true, focus() { document.activeElement = this }, closest() { return this } }))
  const closeButton = {
    focus() { document.activeElement = this },
    addEventListener: (name, listener) => closeEvents.set(name, listener),
    removeEventListener: name => closeEvents.delete(name),
  }
  const footerLink = { focus() { document.activeElement = this } }
  const dialog = {
    querySelector: selector => ({ '.payhip-embed-page': { querySelector: () => frame }, '[data-product-status]': status, '[data-product-close]': closeButton })[selector],
    querySelectorAll: () => [closeButton, footerLink],
  }
  const overlay = {
    hidden: true,
    querySelector: () => dialog,
    addEventListener: (name, listener) => overlayEvents.set(name, listener),
    removeEventListener: name => overlayEvents.delete(name),
  }
  const document = {
    activeElement: null,
    querySelector: () => available ? overlay : null,
    addEventListener: (name, listener) => documentEvents.set(name, listener),
    removeEventListener: name => documentEvents.delete(name),
    body: { classList: { add: name => bodyClasses.add(name), remove: name => bodyClasses.delete(name) } },
    createElement: () => ({ remove() { this.removed = true } }),
    head: { append: node => resources.push(node) },
  }
  const exports = {}
  runInNewContext(productCode, {
    exports, document,
    window: { setTimeout: listener => { timers.set(1, listener); return 1 }, clearTimeout: id => timers.delete(id) },
    MutationObserver: class {
      constructor(listener) { mutationCallback = listener }
      observe() {}
      disconnect() { disconnected = true }
    },
  })
  exports.attachPayhipProduct()
  return { overlay, resources, status, bodyClasses, timers, triggers, document, closeButton, footerLink,
    click(index, modifiers = {}) {
      let prevented = false, stopped = false
      documentEvents.get('click')({ ...modifiers, target: { closest: () => triggers[index] }, preventDefault() { prevented = true }, stopPropagation() { stopped = true } })
      assert.equal(stopped, true)
      return prevented
    },
    key(key, shiftKey = false) {
      let prevented = false
      documentEvents.get('keydown')({ key, shiftKey, preventDefault() { prevented = true } })
      return prevented
    },
    backdrop() { overlayEvents.get('click')({ target: overlay }) },
    loadFrame() {
      frame = { addEventListener: (name, listener) => frameEvents.set(name, listener) }
      mutationCallback()
      frameEvents.get('load')()
    },
    close() { closeEvents.get('click')() },
    replaceButton() { triggers[0] = { isConnected: true, focus() {}, closest() { return this } } },
    navigateAway() { available = false; exports.attachPayhipProduct() },
    get observerDisconnected() { return disconnected },
  }
}
const product = productDialog()
assert.equal(product.resources.length, 0, 'Product embed must not load before a click')
assert.equal(product.click(0), true, 'Clicks must be intercepted before any link handling')
assert.equal(product.overlay.hidden, false, 'Product opens without relying on showModal support')
assert.equal(product.bodyClasses.has('payhip-product-open'), true)
assert.equal(product.document.activeElement, product.closeButton)
assert.equal(product.resources[0].src, 'https://payhip.com/embed-page.js')
product.loadFrame()
assert.equal(product.status.hidden, true)
assert.equal(product.timers.size, 0)
assert.equal(product.key('Tab', true), true)
assert.equal(product.document.activeElement, product.footerLink)
assert.equal(product.key('Tab'), true)
assert.equal(product.document.activeElement, product.closeButton)
product.close()
assert.equal(product.overlay.hidden, true)
assert.equal(product.bodyClasses.size, 0)
assert.equal(product.document.activeElement, product.triggers[0], 'Closing restores focus to the purchase button')
product.replaceButton()
product.click(0)
assert.equal(product.overlay.hidden, false, 'Delegated clicks work after button replacement')
product.key('Escape')
assert.equal(product.overlay.hidden, true)
product.click(1, { ctrlKey: true })
assert.equal(product.resources.length, 1, 'Both buttons reuse the same product page')
product.backdrop()
assert.equal(product.overlay.hidden, true)
product.click(1)
product.navigateAway()
assert.equal(product.overlay.hidden, true)
assert.equal(product.bodyClasses.size, 0)
assert.equal(product.resources[0].removed, true)
assert.equal(product.observerDisconnected, true)
const unavailableProduct = productDialog()
unavailableProduct.click(0)
unavailableProduct.resources[0].onerror()
assert.equal(unavailableProduct.status.hidden, false)
assert.ok(unavailableProduct.status.textContent.includes('lien ci-dessous'))
assert.equal(unavailableProduct.overlay.hidden, false, 'Embed failure must keep the visitor on the site')
console.log('Checked startup, navigation, bookings, Spanish and product overlay without native dialog support, delegated clicks, keyboard, close, cleanup and failure.')
