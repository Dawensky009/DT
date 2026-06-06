import { ShieldCheck, BarChart3, Database, Wrench } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

const groupIcons = [ShieldCheck, BarChart3, Database, Wrench]

export default function Expertise() {
  const { t } = useLang()

  return (
    <section id="expertise" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{t.expertise.label}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{t.expertise.heading}</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">{t.expertise.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {t.expertise.groups.map((group, i) => {
            const Icon = groupIcons[i % groupIcons.length]
            return (
              <Reveal key={group.name} delay={(i % 2) * 0.08}>
                <div className="h-full bg-paper p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas text-ink">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-medium text-ink">{group.name}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line px-3 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-ink"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* top skills */}
        <Reveal delay={0.1} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="eyebrow shrink-0">{t.expertise.topLabel}</p>
          <ul className="flex flex-wrap gap-2">
            {t.expertise.topSkills.map((s) => (
              <li key={s} className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
