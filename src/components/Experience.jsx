import { MapPin } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{t.experience.label}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">{t.experience.heading}</h2>
        </Reveal>

        <ol className="mt-14 border-t border-line">
          {t.experience.items.map((job, i) => (
            <Reveal key={`${job.org}-${job.role}`} delay={i * 0.06} as="li">
              <div className="grid gap-x-10 gap-y-4 border-b border-line py-9 md:grid-cols-[1fr_1.4fr]">
                {/* left: role / org / meta */}
                <div>
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-base font-medium text-ink">{job.org}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                    <span>{job.period}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>
                </div>
                {/* right: achievements */}
                <ul className="space-y-2.5 md:pt-1">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
