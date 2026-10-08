import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
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
