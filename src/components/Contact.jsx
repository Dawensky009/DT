import { Mail, MessageCircle, Linkedin, Facebook, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const { t } = useLang()

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    t.contact.emailSubject,
  )}&body=${encodeURIComponent(t.contact.emailBody)}`

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Facebook, label: 'Facebook', href: profile.facebook },
    { icon: Mail, label: profile.email, href: mailto },
  ]

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-hairline bg-primary px-7 py-14 text-center sm:px-12 sm:py-20">
          {/* atmosphere */}
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="section-label justify-center text-accent">{t.contact.label}</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.contact.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              {t.contact.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={mailto} className="btn-primary group">
                <Mail size={18} />
                {t.contact.emailCta}
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <MessageCircle size={18} />
                {t.contact.whatsappCta}
              </a>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                {t.contact.directLabel}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    <Icon size={16} className="text-accent" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
