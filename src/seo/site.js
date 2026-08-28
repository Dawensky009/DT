// ---------------------------------------------------------------------------
// Réglages techniques du site (URLs, locales). Aucune copie visible ici :
// tout le texte reste dans src/i18n/content.js.
// ---------------------------------------------------------------------------

// ⚠️  UNIQUE LIGNE À CHANGER LE JOUR DU DÉPLOIEMENT.
// Adresse publique du site, sans slash final. Elle sert au canonical, aux
// balises Open Graph, au hreflang, au sitemap.xml et au robots.txt.
export const SITE_URL = 'https://dawenskythermildort.com'

export const LOCALES = ['en', 'fr']
export const DEFAULT_LOCALE = 'en'

// Correspondance locale → code Open Graph
export const OG_LOCALE = { en: 'en_US', fr: 'fr_FR' }

// Chemins des pages (une page réelle par langue)
export const localePath = (lang) => `/${lang}/`
export const localeUrl = (lang) => `${SITE_URL}/${lang}/`

// Assets partagés
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const OG_IMAGE_W = 1200
export const OG_IMAGE_H = 630

// Couleur de barre d'adresse — alignée sur le token `dark` de tailwind.config.js
export const THEME_COLOR = '#1A1A1A'
