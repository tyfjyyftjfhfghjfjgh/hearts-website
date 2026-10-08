import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

const routes = JSON.parse(await readFile(new URL('../src/routes.json', import.meta.url), 'utf8'))
const seo = JSON.parse(await readFile(new URL('../src/seo.json', import.meta.url), 'utf8'))
const output = new URL('../docs/', import.meta.url)
const shell = await readFile(new URL('index.html', output), 'utf8')
const site = 'https://heart-resonance.com'
const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
const urlFor = route => route === 'home' ? `${site}/` : `${site}/${route}/`

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { getLocalizedPageHtml } = await server.ssrLoadModule('/src/main.ts')
  const spanishEnabled = process.env.VITE_ENABLE_ES === 'true'
  for (const [language, route] of ['fr', ...(spanishEnabled ? ['es'] : [])].flatMap(language => ['home', ...routes].map(route => [language, route]))) {
    const path = language === 'es'
      ? route === 'home' ? new URL('es/', output) : new URL(`es/${route}/`, output)
      : route === 'home' ? output : new URL(`${route}/`, output)
    await mkdir(path, { recursive: true })
    const [title, description] = seo[route][language]
    const canonical = language === 'es' ? `${site}/es/${route === 'home' ? '' : `${route}/`}` : urlFor(route)
    const alternate = spanishEnabled ? `
    <link rel="alternate" hreflang="fr" href="${urlFor(route)}" />
    <link rel="alternate" hreflang="es" href="${site}/es/${route === 'home' ? '' : `${route}/`}" />
    <link rel="alternate" hreflang="x-default" href="${urlFor(route)}" />` : ''
    const structuredData = route === 'home' ? `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebSite', name: 'Heart Resonance Maria', url: site, inLanguage: language === 'es' ? 'es' : 'fr' },
        { '@type': 'ProfessionalService', name: 'Heart Resonance Maria', url: site, description, image: `${site}/HUIZAR-Maria.png`, sameAs: ['https://www.instagram.com/heart.resonance.maria', 'https://www.facebook.com/HeartResonanceMaria/'] },
      ],
    })}</script>` : ''
    const metadata = `
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />${alternate}${structuredData}`
    const html = shell
      .replace('<html lang="fr">', `<html lang="${language}">`)
      .replace('<title>Heart Resonance Maria</title>', `<title>${escapeHtml(title)}</title>${metadata}`)
      .replace('<div id="app"></div>', `<div id="app">${getLocalizedPageHtml(route, language)}</div>`)
    await writeFile(new URL('index.html', path), html.replace(/[ \t]+$/gm, ''))
  }
} finally {
  await server.close()
}

const spanishEnabled = process.env.VITE_ENABLE_ES === 'true'
const urls = ['home', ...routes].flatMap(route => {
  const fr = `  <url><loc>${urlFor(route)}</loc></url>`
  const es = `  <url><loc>${site}/es/${route === 'home' ? '' : `${route}/`}</loc></url>`
  return spanishEnabled ? [fr, es] : [fr]
}).join('\n')
await writeFile(new URL('sitemap.xml', output), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
