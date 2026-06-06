import { Mail, MessageCircle, ArrowUp } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'
import Reveal from './Reveal.jsx'

export default function Footer() {
  const { t, lang, toggle } = useLang()
  const year = new Date().getFullYear()

  const mailto = `mailto:${profile.email}`
  const socials = [
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Facebook', href: profile.facebook },
    { label: 'Email', href: mailto },
  ]

  return (
    <footer id="contact" className="scroll-mt-24 bg-dark text-paper">
      {/* big CTA */}
      <div className="container-page py-24 sm:py-32">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-label text-white/50">
            {t.footerCta.kicker}
          </p>
          <h2 className="mt-6 font-display text-[15vw] leading-[0.95] text-paper sm:text-7xl lg:text-8xl">
            {t.footerCta.heading[0]}
            <br />
            <span className="italic text-white/60">{t.footerCta.heading[1]}</span>
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a href={mailto} className="btn-light">
              <Mail size={18} />
              {t.footerCta.emailCta}
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/20 text-paper hover:bg-white/10"
            >
              <MessageCircle size={18} />
              {t.footerCta.whatsappCta}
            </a>
            <span className="ml-1 text-sm text-white/50">{t.footerCta.reply}</span>
          </div>

          <a href={mailto} className="mt-10 inline-block font-display text-2xl text-paper sm:text-3xl">
            <span className="link-underline">{profile.email}</span>
          </a>
        </Reveal>
      </div>

      {/* footer bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper font-display text-sm text-dark">
              {profile.initials}
            </span>
            <p className="text-sm text-white/60">
              © {year} {profile.name}. {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-paper"
              >
                {s.label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggle}
              className="cursor-pointer text-white/60 transition-colors hover:text-paper"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a href="#top" className="flex items-center gap-1.5 text-white/60 transition-colors hover:text-paper">
              {t.footer.backToTop}
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
