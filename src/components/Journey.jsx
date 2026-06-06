import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Journey() {
  const { t } = useLang()

  return (
    <section id="journey" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{t.journey.label}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">{t.journey.heading}</h2>
        </Reveal>

        <ol className="mt-14 border-t border-line">
          {t.journey.items.map((entry, i) => (
            <Reveal key={`${entry.year}-${entry.title}`} delay={i * 0.06} as="li">
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-b border-line py-7 transition-colors duration-300 hover:bg-canvas sm:grid-cols-[6rem_1fr_10rem_8rem] sm:gap-x-8 sm:px-4">
                <span className="font-display text-2xl text-ink">{entry.year}</span>
                <h3 className="text-lg font-medium text-ink">{entry.title}</h3>
                <p className="col-start-2 text-sm text-muted sm:col-start-3">{entry.org}</p>
                <span className="col-start-2 justify-self-start text-xs uppercase tracking-label text-muted sm:col-start-4 sm:justify-self-end">
                  {entry.cat}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
