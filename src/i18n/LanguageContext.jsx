import { createContext, useContext, useEffect, useMemo } from 'react'
import { content } from './content.js'
import { LOCALES, DEFAULT_LOCALE, localePath } from '../seo/site.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'dt-lang'

// Chaque langue a désormais sa propre URL (/en/ et /fr/), donc la langue se
// déduit du chemin — pas d'un état interne. C'est ce qui rend les deux
// versions indexables séparément et permet le hreflang.
export function langFromPath(pathname = '/') {
  const seg = pathname.split('/').filter(Boolean)[0]
  return LOCALES.includes(seg) ? seg : null
}

// Utilisé uniquement à la racine et en dev, quand l'URL ne porte pas la langue.
function preferredLang() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (LOCALES.includes(saved)) return saved
  } catch {
    // localStorage indisponible (navigation privée, cookies bloqués)
  }
  const browser = window.navigator.language?.toLowerCase() ?? DEFAULT_LOCALE
  return browser.startsWith('fr') ? 'fr' : DEFAULT_LOCALE
}

// `lang` est passé explicitement au prérendu (côté serveur). Côté navigateur,
// il est absent : on le relit du chemin pour que l'hydratation retombe sur la
// même valeur que le HTML pré-rendu.
export function LanguageProvider({ children, lang: forcedLang }) {
  const lang =
    forcedLang ??
    (typeof window === 'undefined'
      ? DEFAULT_LOCALE
      : (langFromPath(window.location.pathname) ?? preferredLang()))

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // idem : on n'empêche pas le site de fonctionner pour autant
    }
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    // Changer de langue = changer de page, en conservant l'ancre courante.
    const setLang = (next) => {
      if (!LOCALES.includes(next) || next === lang) return
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // sans localStorage la navigation fonctionne quand même
      }
      window.location.assign(localePath(next) + window.location.hash)
    }

    return {
      lang,
      setLang,
      toggle: () => setLang(lang === 'en' ? 'fr' : 'en'),
      // href à mettre sur les liens de langue (crawlables, contrairement à un onClick)
      hrefFor: (target) => localePath(target),
      other: LOCALES.filter((l) => l !== lang),
      t: content[lang],
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
