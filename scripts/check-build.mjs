import assert from 'node:assert/strict'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const routes = JSON.parse(readFileSync('src/routes.json', 'utf8'))
const seo = JSON.parse(readFileSync('src/seo.json', 'utf8'))
const spanishEnabled = process.env.VITE_ENABLE_ES === 'true'
const languageSwitchShown = spanishEnabled && process.env.VITE_SHOW_LANGUAGE_SWITCH === 'true'
const languages = spanishEnabled ? ['fr', 'es'] : ['fr']
const site = 'https://heart-resonance.com'

for (const language of languages) {
  for (const route of ['home', ...routes]) {
    const relative = route === 'home' ? '' : `${route}/`
    const path = join('docs', language === 'es' ? 'es' : '', relative, 'index.html')
    assert.ok(existsSync(path), `Missing page: ${path}`)
    const html = readFileSync(path, 'utf8')
    const url = `${site}/${language === 'es' ? 'es/' : ''}${relative}`
    assert.ok(html.includes(`<html lang="${language}">`), `Wrong language: ${path}`)
    assert.ok(html.includes(`<title>${seo[route][language][0]}</title>`), `Wrong title: ${path}`)
    assert.ok(html.includes(`<link rel="canonical" href="${url}" />`), `Wrong canonical: ${path}`)
    assert.ok(html.includes('<meta name="description"'), `Missing description: ${path}`)
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `Expected one H1: ${path}`)
    assert.ok(!html.includes('Heart Resonance Style'), `Old title remains: ${path}`)
    if (route === 'home' && language === 'es') {
      assert.ok(html.includes('<h1>HEART RESONANCE</h1>'), `Missing brand title: ${path}`)
      assert.ok(html.includes('<h2 class="banner-service-title">Coaching espiritual y lectura de registros akáshicos</h2>'), `Missing Spanish service title: ${path}`)
    }
    if (route === 'faq') {
      assert.equal((html.match(/<details class="faq-item"/g) ?? []).length, 12, `Missing FAQ questions: ${path}`)
      assert.equal((html.match(/class="faq-group-title"/g) ?? []).length, 3, `Missing FAQ groups: ${path}`)
      assert.ok(html.includes('<details class="faq-item" open>'), `FAQ should start with one answer visible: ${path}`)
    }
    if (route === 'asseoir-son-identite') {
      for (const match of html.matchAll(/(?:src|srcset|data-horizontal|data-vertical)="(\/audio\/[^"\s]+)"/g)) {
        const asset = join('docs', match[1])
        assert.ok(existsSync(asset) && statSync(asset).size > 0, `Missing audio page media: ${asset}`)
      }
      for (const match of html.matchAll(/href="#([^"]+)"/g)) {
        assert.ok(html.includes(`id="${match[1]}"`), `Broken audio section link: ${match[0]}`)
      }
      const config = JSON.parse(readFileSync('src/audio-config.json', 'utf8'))
      if (!config.checkoutUrl) {
        assert.ok(html.includes('Bientôt disponible'), 'Unpublished audio must show its availability')
        assert.ok(!html.includes('Acheter l’audio —'), 'Unpublished audio must not offer checkout')
      } else {
        const buttons = [...html.matchAll(/<button\b[^>]*\bdata-payhip-product[^>]*>[^<]*<\/button>/g)]
        assert.equal(buttons.length, 2, 'Expected two product-page buttons')
        const product = new URL(config.checkoutUrl).pathname.split('/')[2]
        for (const [button] of buttons) {
          assert.ok(button.includes('type="button"'), 'Purchase controls must be buttons')
          assert.ok(button.includes('aria-haspopup="dialog"') && button.includes('aria-controls="payhip-product-dialog"'), 'Missing product dialog attributes')
          assert.ok(button.includes('discover-button audio-button') && button.includes('19 €'), 'Purchase button must retain site styling and price')
          assert.ok(!button.includes('target=') && !button.includes('href='), 'Purchase buttons must never open another page or tab')
        }
        const orderSection = html.indexOf('id="commander"')
        assert.ok(buttons[0].index < orderSection && buttons[1].index > orderSection, 'Purchase buttons must appear in the middle and bottom sections')
        assert.ok(html.includes('id="payhip-product-dialog" class="audio-product-dialog" role="dialog"'), 'Missing product dialog')
        assert.ok(html.includes(`class="payhip-embed-page" data-key="${product}"`), 'Missing Payhip product page integration')
        assert.ok(!html.includes('payhip-buy-button'), 'Product page must not launch direct checkout')
        assert.ok(!html.includes('src="https://payhip.com/payhip.js"'), 'Direct-checkout script is unnecessary')
        assert.ok(!html.includes('Bientôt disponible'), 'Published audio must not show the prelaunch status')
      }
      assert.ok(html.includes('playsinline') && html.includes('preload="none"'), 'Trailer must support mobile playback without preloading')
    }
    if (spanishEnabled) {
      assert.ok(html.includes('hreflang="fr"') && html.includes('hreflang="es"'), `Missing hreflang: ${path}`)
    }
    assert.equal(html.includes('class="language-switch"'), languageSwitchShown, `Unexpected language switch visibility: ${path}`)
    for (const match of html.matchAll(/href="\/(?!\/)([^"?#]+)"/g)) {
      const target = join('docs', match[1])
      assert.ok(existsSync(target) || existsSync(join(target, 'index.html')), `Broken internal link ${match[0]} in ${path}`)
    }
  }
}

assert.ok(existsSync('docs/robots.txt'), 'Missing robots.txt')
const sitemap = readFileSync('docs/sitemap.xml', 'utf8')
assert.equal((sitemap.match(/<url>/g) ?? []).length, (routes.length + 1) * languages.length)
if (!spanishEnabled) assert.ok(!existsSync('docs/es'), 'Spanish draft would be published')
console.log(`Checked ${(routes.length + 1) * languages.length} pages, internal links, sitemap and robots.txt.`)
