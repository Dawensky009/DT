// ---------------------------------------------------------------------------
// Prérendu : transforme la SPA en pages HTML complètes, une par langue.
//
//   dist/index.html  → page racine, redirige vers la langue du visiteur
//   dist/en/index.html → version anglaise, contenu déjà dans le HTML
//   dist/fr/index.html → version française, idem
//   dist/sitemap.xml, dist/robots.txt
//
// Lancé par `npm run build`, après le build client et le build SSR.
// ---------------------------------------------------------------------------
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

import { buildHead, buildRootHtml } from '../src/seo/head.js'
import { SITE_URL, LOCALES, DEFAULT_LOCALE, localeUrl } from '../src/seo/site.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

const SEO_BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/

function sitemap() {
  const lastmod = new Date().toISOString().slice(0, 10)
  const alternates = LOCALES.map(
    (l) => `      <xhtml:link rel="alternate" hreflang="${l}" href="${localeUrl(l)}" />`,
  )
    .concat(
      `      <xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl(DEFAULT_LOCALE)}" />`,
    )
    .join('\n')

  const urls = LOCALES.map(
    (l) => `  <url>
    <loc>${localeUrl(l)}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`,
  ).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

async function main() {
  const template = await readFile(path.join(dist, 'index.html'), 'utf8')
  const { render } = await import(pathToFileURL(path.join(dist + '-ssr', 'entry-server.js')).href)

  if (!SEO_BLOCK.test(template)) {
    throw new Error('Marqueurs <!-- seo:start --> / <!-- seo:end --> introuvables dans index.html')
  }

  for (const lang of LOCALES) {
    const appHtml = render(lang)
    const html = template
      .replace('<html lang="en"', `<html lang="${lang}"`)
      .replace(SEO_BLOCK, buildHead(lang))
      .replace('<!--app-html-->', appHtml)

    await mkdir(path.join(dist, lang), { recursive: true })
    await writeFile(path.join(dist, lang, 'index.html'), html)
    console.log(`  ✓ dist/${lang}/index.html  (${(html.length / 1024).toFixed(0)} KB)`)
  }

  await writeFile(path.join(dist, 'index.html'), buildRootHtml())
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap())
  await writeFile(path.join(dist, 'robots.txt'), robots)
  console.log('  ✓ dist/index.html (redirection), sitemap.xml, robots.txt')
  console.log(`\n  Domaine utilisé : ${SITE_URL}  →  src/seo/site.js`)
}

main().catch((err) => {
  console.error('\nÉchec du prérendu :', err)
  process.exit(1)
})
