import { Download, Award, GraduationCap, Sparkles } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'
import Reveal from './Reveal.jsx'
import SpotlightImage from './SpotlightImage.jsx'

const highlightIcon = {
  valedictorian: Award,
  dess: GraduationCap,
  ai: Sparkles,
}

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        {/* copy */}
        <Reveal>
          <span className="eyebrow">{t.about.label}</span>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.1] sm:text-5xl">{t.about.heading}</h2>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* highlights */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {t.about.highlights.map((h) => {
              const Icon = highlightIcon[h.k] ?? Award
              return (
                <div key={h.k} className="bg-paper p-5">
                  <Icon size={20} className="text-ink" />
                  <p className="mt-3 font-medium text-ink">{h.label}</p>
                  <p className="mt-1 text-sm text-muted">{h.detail}</p>
                </div>
              )
            })}
          </div>

          {/* languages + CV */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
            <a href={profile.cv} download className="btn-outline shrink-0">
              <Download size={18} />
              {t.about.cvCta}
            </a>
          </div>
        </Reveal>

        {/* portrait */}
        <Reveal delay={0.1} className="order-first lg:order-last">
          <SpotlightImage
            src={profile.photo}
            alt={t.about.photoAlt}
            radius={120}
            className="rounded-[1.75rem] border border-line"
            imgClassName="aspect-[4/5] w-full object-cover object-top"
          />
        </Reveal>
      </div>
    </section>
  )
}
