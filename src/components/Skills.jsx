import { BarChart3, ShieldCheck, Terminal } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const groupIcons = [BarChart3, ShieldCheck, Terminal]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="scroll-mt-24 border-y border-hairline bg-surface py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader label={t.skills.label} heading={t.skills.heading} intro={t.skills.intro} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.skills.groups.map((group, i) => {
            const Icon = groupIcons[i % groupIcons.length]
            return (
              <Reveal key={group.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-hairline bg-canvas p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-semibold">{group.name}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
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
      </div>
    </section>
  )
}
