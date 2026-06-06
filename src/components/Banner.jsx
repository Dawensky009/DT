import { ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Banner() {
  const { t } = useLang()

  return (
    <section className="container-page">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-dark px-7 py-16 sm:px-14 sm:py-20">
          {/* subtle radial glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-label text-white/50">
                {t.banner.kicker}
              </p>
              <h2 className="mt-5 text-4xl leading-[1.1] text-paper sm:text-5xl">{t.banner.heading}</h2>
            </div>
            <a href="#contact" className="btn-light group shrink-0">
              {t.banner.cta}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
