import { Download, Award, GraduationCap, Sparkles } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'
import Reveal from './Reveal.jsx'

const highlightIcon = {
  valedictorian: Award,
  dess: GraduationCap,
  ai: Sparkles,
}

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">{t.about.label}</span>
        </Reveal>

        <div className="mt-8 grid gap-x-20 gap-y-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="text-4xl leading-[1.1] sm:text-5xl">{t.about.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* highlights */}
        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {t.about.highlights.map((h) => {
              const Icon = highlightIcon[h.k] ?? Award
              return (
                <div key={h.k} className="bg-paper p-6">
                  <Icon size={22} className="text-ink" />
                  <p className="mt-4 text-lg font-medium text-ink">{h.label}</p>
                  <p className="mt-1 text-sm text-muted">{h.detail}</p>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* languages + CV */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">{t.about.languagesLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                {t.about.languages.map((l) => (
                  <li key={l.name} className="text-ink">
                    {l.name} <span className="text-muted">· {l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href={profile.cv} download className="btn-dark shrink-0">
              <Download size={18} />
              {t.about.cvCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
