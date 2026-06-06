import { Code2, GraduationCap, ShieldCheck, Check } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const icons = {
  shield: ShieldCheck,
  graduation: GraduationCap,
  code: Code2,
}

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader label={t.services.label} heading={t.services.heading} intro={t.services.intro} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.icon] ?? ShieldCheck
            return (
              <Reveal key={service.name} delay={i * 0.1}>
                <article className="group flex h-full flex-col rounded-2xl border border-hairline bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition-colors duration-300 group-hover:bg-accent">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{service.name}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{service.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-hairline pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-primary">
                        <Check size={16} className="shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
