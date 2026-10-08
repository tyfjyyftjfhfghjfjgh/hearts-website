import { readFile, writeFile } from 'node:fs/promises'

const routes = JSON.parse(await readFile(new URL('../src/routes.json', import.meta.url), 'utf8'))
const output = new URL('../docs/', import.meta.url)
const destination = new URL('../src/es-translations.json', import.meta.url)
let translations = {}
try { translations = JSON.parse(await readFile(destination, 'utf8')) } catch { /* First translation run. */ }

const decode = text => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&nbsp;', ' ')
const normalize = text => decode(text).replace(/\s+/g, ' ').trim()
const texts = new Set()
for (const route of ['home', ...routes]) {
  const page = route === 'home' ? new URL('index.html', output) : new URL(`${route}/index.html`, output)
  const html = await readFile(page, 'utf8')
  const body = html.slice(html.indexOf('<div id="app">'))
  for (const match of body.matchAll(/>([^<>]+)</g)) {
    const value = normalize(match[1])
    if (value && /[A-Za-zÀ-ÿ]/.test(value) && !/^(?:https?:|mailto:|\S+@\S+)/.test(value)) texts.add(value)
  }
  for (const match of body.matchAll(/\b(?:alt|aria-label|title)="([^"]+)"/g)) texts.add(normalize(match[1]))
}

const pending = [...texts].filter(text => !translations[text])
console.log(`Translation segments: ${texts.size}; pending: ${pending.length}`)

async function translate(text) {
  const url = new URL('https://translate.googleapis.com/translate_a/single')
  url.search = new URLSearchParams({ client: 'gtx', sl: 'fr', tl: 'es', dt: 't', q: text }).toString()
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000) })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const payload = await response.json()
      const translated = payload[0].map(part => part[0]).join('')
      if (translated) return translated
    } catch (error) {
      if (attempt === 3) throw new Error(`Translation failed for ${text.slice(0, 80)}: ${error}`)
      await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)))
    }
  }
}

for (let offset = 0; offset < pending.length; offset += 5) {
  const chunk = pending.slice(offset, offset + 5)
  const results = await Promise.all(chunk.map(translate))
  chunk.forEach((text, index) => { translations[text] = results[index] })
  if (offset % 50 === 0 || offset + 5 >= pending.length) {
    await writeFile(destination, JSON.stringify(translations, null, 2) + '\n')
    console.log(`Translated ${Math.min(offset + 5, pending.length)}/${pending.length}`)
  }
}
