import { Linkedin, Facebook, Mail, ArrowUp } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'

export default function Footer() {
  const { t, lang, toggle } = useLang()
  const year = new Date().getFullYear()

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Facebook, label: 'Facebook', href: profile.facebook },
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  ]

  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-2">
              <img src={profile.logo} alt="" className="h-9 w-9 object-contain" />
              <span className="font-display text-lg font-semibold text-primary">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>

          {/* nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t.footer.nav}</p>
            <ul className="mt-4 space-y-2.5">
              {t.nav.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-primary transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t.footer.social}</p>
            <ul className="mt-4 space-y-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary transition-colors duration-200 hover:text-accent"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggle}
              className="cursor-pointer text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {lang === 'en' ? 'Français' : 'English'}
            </button>
            <a
              href="#top"
              className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {t.footer.backToTop}
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
