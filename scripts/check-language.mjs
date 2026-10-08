import assert from 'node:assert/strict'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { preferredBrowserLanguage, selectedLanguage, readLanguagePreference, pathFor } = await server.ssrLoadModule('/src/main.ts')
  assert.equal(preferredBrowserLanguage(['es-ES', 'fr-FR']), 'es')
  assert.equal(preferredBrowserLanguage(['fr-CA', 'es-ES']), 'fr')
  assert.equal(preferredBrowserLanguage(['en-US', 'es-MX']), 'es')
  assert.equal(preferredBrowserLanguage(['en-US']), 'fr')
  assert.equal(selectedLanguage('fr', ['es-ES']), 'fr')
  assert.equal(selectedLanguage('es', ['fr-FR']), 'es')
  assert.equal(pathFor('reserver', 'es'), '/es/reserver/')
  assert.equal(pathFor('voir-clair', 'fr'), '/voir-clair/')
  assert.equal(readLanguagePreference(JSON.stringify({ language: 'es', expires: 200 }), 100), 'es')
  assert.equal(readLanguagePreference(JSON.stringify({ language: 'es', expires: 100 }), 100), null)
  assert.equal(readLanguagePreference(JSON.stringify({ language: 'de', expires: 200 }), 100), null)
  console.log('Language detection, manual choice and matching page URLs checked.')
} finally {
  await server.close()
}
