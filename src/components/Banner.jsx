import { ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'
import Reveal from './Reveal.jsx'

export default function Banner() {
  const { t } = useLang()
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(t.banner.emailSubject)}`

  return (
    <section className="container-page pb-28 pt-8 sm:pb-36">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl bg-dark px-7 py-16 sm:px-14 sm:py-24"
          style={{
            backgroundImage: 'url(/banner-bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* dark gradient for text contrast (stronger on the left) */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-label text-white/50">
                {t.banner.kicker}
              </p>
              <h2 className="mt-5 max-w-xl text-4xl leading-[1.1] text-paper sm:text-5xl">
                {t.banner.heading}
              </h2>
              <p className="mt-4 max-w-md text-lg text-white/65">{t.banner.text}</p>
            </div>
            <a href={mailto} className="btn-light group shrink-0">
              {t.banner.cta}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
