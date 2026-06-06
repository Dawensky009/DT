import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{t.services.label}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{t.services.heading}</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">{t.services.intro}</p>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {t.services.items.map((service, i) => (
            <Reveal key={service.no} delay={i * 0.08}>
              <a
                href="#contact"
                className="group grid grid-cols-1 gap-3 border-b border-line py-9 transition-colors duration-300 hover:bg-paper sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8 sm:px-4"
              >
                <span className="font-display text-2xl text-muted">{service.no}</span>
                <div className="max-w-2xl">
                  <h3 className="font-display text-3xl text-ink sm:text-4xl">{service.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.desc}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
