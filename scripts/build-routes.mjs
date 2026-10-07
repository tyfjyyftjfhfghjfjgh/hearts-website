import { copyFile, mkdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const routes = JSON.parse(await readFile(new URL('../src/routes.json', import.meta.url), 'utf8'))
const output = new URL('../docs/', import.meta.url)

for (const route of routes) {
  const directory = new URL(`${route}/`, output)
  await mkdir(directory, { recursive: true })
  await copyFile(new URL('index.html', output), new URL('index.html', directory))
}
