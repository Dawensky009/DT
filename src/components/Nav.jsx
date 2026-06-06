import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`container-page flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled || open
            ? 'border-hairline bg-surface/90 shadow-card backdrop-blur-md'
            : 'border-transparent bg-surface/40 backdrop-blur-sm'
        }`}
      >
        <a href="#top" onClick={close} className="flex items-center gap-2" aria-label={profile.name}>
          <img src={profile.logo} alt="" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-semibold text-primary">Dawensky</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.langSwitch}
            className="flex cursor-pointer items-center rounded-full border border-hairline bg-surface p-0.5 text-xs font-semibold"
          >
            <span
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === 'en' ? 'bg-primary text-white' : 'text-muted'
              }`}
            >
              EN
            </span>
            <span
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === 'fr' ? 'bg-primary text-white' : 'text-muted'
              }`}
            >
              FR
            </span>
          </button>

          <a href="#contact" className="btn-primary hidden h-10 px-5 py-0 sm:inline-flex">
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-hairline bg-surface text-primary lg:hidden"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="container-page mt-2 rounded-2xl border border-hairline bg-surface p-4 shadow-card lg:hidden">
          <ul className="flex flex-col">
            {t.nav.links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-primary transition-colors hover:bg-canvas"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={close} className="btn-primary mt-2 w-full">
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}
