import { Download } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* portrait */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="bg-grid absolute -inset-4 -z-10 rounded-[2rem] opacity-70" />
            <div className="overflow-hidden rounded-[1.75rem] border border-hairline bg-surface shadow-card">
              <img
                src={profile.photo}
                alt={t.about.photoAlt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <span className="section-label">{t.about.label}</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href={profile.cv}
            download
            className="btn-ghost mt-8 hover:border-accent hover:text-accent"
          >
            <Download size={18} />
            {t.about.cvCta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
