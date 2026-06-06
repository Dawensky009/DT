import { GraduationCap, Briefcase, Award, Sparkles } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const typeMeta = {
  education: { icon: GraduationCap },
  role: { icon: Briefcase },
  cert: { icon: Award },
  milestone: { icon: Sparkles },
}

export default function Timeline() {
  const { t } = useLang()

  return (
    <section id="journey" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader label={t.timeline.label} heading={t.timeline.heading} intro={t.timeline.intro} />

        <div className="relative mt-14">
          {/* vertical spine */}
          <span
            className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-hairline md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-16">
            {t.timeline.items.map((entry, i) => {
              const meta = typeMeta[entry.type] ?? typeMeta.role
              const Icon = meta.icon
              const isLeft = i % 2 === 0
              return (
                <li
                  key={`${entry.year}-${entry.title}`}
                  className="relative grid grid-cols-[auto_1fr] gap-x-5 md:grid-cols-2 md:gap-x-12"
                >
                  {/* node */}
                  <span className="absolute left-[1.125rem] top-1 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-hairline bg-surface text-accent shadow-sm md:left-1/2">
                    <Icon size={18} />
                  </span>

                  {/* card — alternates sides on desktop */}
                  <Reveal
                    className={`col-start-2 md:col-span-1 ${
                      isLeft ? 'md:col-start-1 md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                    }`}
                    y={20}
                  >
                    <div className="rounded-2xl border border-hairline bg-surface p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                      <span className="font-display text-2xl font-semibold text-accent">{entry.year}</span>
                      <h3 className="mt-1 text-lg font-semibold text-primary">{entry.title}</h3>
                      <p className="text-sm font-medium text-muted">{entry.org}</p>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">{entry.desc}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
