import { Check } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useCountUp } from '../hooks/useCountUp.js'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useLang()
  const [statRef, statValue] = useCountUp(t.about.stat.value)

  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{t.about.label}</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* heading + paragraphs */}
          <Reveal>
            <h2 className="max-w-2xl text-4xl leading-[1.1] sm:text-5xl">{t.about.heading}</h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* stat + credentials */}
          <Reveal delay={0.1} className="lg:pt-2">
            <div ref={statRef} className="border-b border-line pb-6">
              <p className="font-display text-7xl leading-none sm:text-8xl">
                {statValue}
                <span className="text-muted">{t.about.stat.suffix}</span>
              </p>
              <p className="mt-3 text-sm text-muted">{t.about.stat.label}</p>
            </div>
            <ul className="mt-6 space-y-3">
              {t.about.credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink">
                  <Check size={16} className="mt-0.5 shrink-0 text-muted" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
