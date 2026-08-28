// ---------------------------------------------------------------------------
// Construit le bloc <head> propre à chaque langue. Utilisé par le script de
// prérendu (scripts/prerender.mjs) pour écrire dist/en/index.html et
// dist/fr/index.html. Le texte vient de content.js, les URLs de site.js.
// ---------------------------------------------------------------------------
import { content } from '../i18n/content.js'
import {
  SITE_URL,
  LOCALES,
  DEFAULT_LOCALE,
  OG_LOCALE,
  localePath,
  localeUrl,
  OG_IMAGE,
  OG_IMAGE_W,
  OG_IMAGE_H,
  THEME_COLOR,
} from './site.js'
import { buildJsonLd } from './jsonld.js'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Balises communes à toutes les pages : icônes, manifeste, polices. */
export function sharedHead() {
  return [
    '<link rel="icon" href="/favicon.ico" sizes="32x32" />',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png" />',
    '<link rel="manifest" href="/site.webmanifest" />',
    `<meta name="theme-color" content="${THEME_COLOR}" />`,
    // Fontshare sert le CSS depuis api. et les .woff2 depuis cdn. : les deux
    // hôtes ont besoin d'un preconnect, sinon la police coûte un aller-retour.
    '<link rel="preconnect" href="https://api.fontshare.com" crossorigin />',
    '<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin />',
    '<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />',
    // Le portrait est le LCP sur desktop uniquement (sur mobile il est sous la
    // ligne de flottaison), d'où le media query sur le preload.
    '<link rel="preload" as="image" href="/profile.webp" type="image/webp" media="(min-width: 1024px)" fetchpriority="high" />',
  ].join('\n    ')
}

/** hreflang : la carte des versions linguistiques, identique sur chaque page. */
function alternates() {
  return [
    ...LOCALES.map((l) => `<link rel="alternate" hreflang="${l}" href="${localeUrl(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${localeUrl(DEFAULT_LOCALE)}" />`,
  ].join('\n    ')
}

/** Le <head> complet d'une page de langue. */
export function buildHead(lang) {
  const t = content[lang]
  const url = localeUrl(lang)
  const other = LOCALES.filter((l) => l !== lang)

  return [
    `<title>${esc(t.seo.title)}</title>`,
    `<meta name="description" content="${esc(t.seo.description)}" />`,
    `<meta name="author" content="${esc(t.seo.author)}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large" />',
    `<link rel="canonical" href="${url}" />`,
    alternates(),
    '',
    '<!-- Open Graph -->',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${esc(t.seo.author)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(t.seo.ogTitle)}" />`,
    `<meta property="og:description" content="${esc(t.seo.ogDescription)}" />`,
    // URL absolue obligatoire : LinkedIn, Facebook et WhatsApp ne résolvent
    // pas les chemins relatifs et n'afficheraient aucune image.
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE_W}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE_H}" />`,
    `<meta property="og:image:alt" content="${esc(t.seo.ogImageAlt)}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
    ...other.map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`),
    '',
    '<!-- Twitter / X -->',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(t.seo.ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(t.seo.ogDescription)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:image:alt" content="${esc(t.seo.ogImageAlt)}" />`,
    '',
    sharedHead(),
    '',
    '<!-- Données structurées -->',
    `<script type="application/ld+json">${JSON.stringify(buildJsonLd(lang))}</script>`,
  ].join('\n    ')
}

/** Page racine : redirige vers la langue du visiteur, ne s'indexe pas elle-même. */
export function buildRootHtml() {
  const t = content[DEFAULT_LOCALE]
  const fallback = localeUrl(DEFAULT_LOCALE)
  // La redirection et les liens de secours restent relatifs : la page racine doit
  // fonctionner en preview locale comme sur n'importe quel domaine.
  const fallbackPath = localePath(DEFAULT_LOCALE)
  return `<!doctype html>
<html lang="${DEFAULT_LOCALE}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(t.seo.title)}</title>
    <meta name="description" content="${esc(t.seo.description)}" />
    <link rel="canonical" href="${fallback}" />
    ${alternates()}
    <meta http-equiv="refresh" content="0; url=${fallbackPath}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <script>
      (function () {
        var saved = null
        try { saved = localStorage.getItem('dt-lang') } catch (e) {}
        var lang = saved === 'fr' || saved === 'en' ? saved
          : (navigator.language || 'en').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en'
        location.replace('/' + lang + '/' + location.hash)
      })()
    </script>
  </head>
  <body>
    <p><a href="${fallbackPath}">English</a> · <a href="${localePath('fr')}">Français</a></p>
  </body>
</html>
`
}
