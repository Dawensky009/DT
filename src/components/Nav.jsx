import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'

export default function Nav() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" onClick={close} className="flex items-center gap-2.5" aria-label={profile.name}>
          <img src={profile.logo} alt="" className="h-8 w-8 object-contain" />
          <span className="font-display text-2xl leading-none">{profile.name.split(' ')[0]}</span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="link-underline text-sm text-muted hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-1 text-sm font-medium sm:flex" aria-label={t.nav.langSwitch}>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`cursor-pointer transition-opacity ${lang === 'en' ? 'text-ink' : 'text-muted/50 hover:text-muted'}`}
            >
              EN
            </button>
            <span className="text-muted/40">/</span>
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`cursor-pointer transition-opacity ${lang === 'fr' ? 'text-ink' : 'text-muted/50 hover:text-muted'}`}
            >
              FR
            </button>
          </div>

          <a
            href="#contact"
            data-cursor="link"
            className="hidden items-center gap-1 text-sm font-medium lg:inline-flex"
          >
            <span className="link-underline">{t.nav.cta}</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {t.nav.links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={close}
                  className="block py-3 font-display text-2xl text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-3 border-t border-line pt-4 text-sm font-medium">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`cursor-pointer ${lang === 'en' ? 'text-ink' : 'text-muted'}`}
              >
                EN
              </button>
              <span className="text-muted/40">/</span>
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`cursor-pointer ${lang === 'fr' ? 'text-ink' : 'text-muted'}`}
              >
                FR
              </button>
            </li>
            <a href="#contact" onClick={close} className="btn-dark mt-4 w-full">
              {t.nav.cta}
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}
