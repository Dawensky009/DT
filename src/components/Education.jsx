import { GraduationCap, Star } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{t.education.label}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">{t.education.heading}</h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {t.education.items.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-paper p-7">
                <div className="flex items-center justify-between">
                  <GraduationCap size={22} className="text-ink" />
                  {edu.status && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-[0.7rem] font-medium text-paper">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-spark" />
                      {edu.status}
                    </span>
                  )}
                  {edu.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-ink/20 px-2.5 py-1 text-[0.7rem] font-medium text-ink">
                      <Star size={11} className="fill-ink" />
                      {t.education.honor}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-medium text-ink">{edu.degree}</h3>
                <p className="mt-1 text-sm font-medium text-muted">{edu.school}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{edu.detail}</p>
                <p className="mt-5 text-sm text-muted">{edu.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
