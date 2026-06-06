import { Award, ArrowUpRight, BadgeCheck } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Certifications() {
  const { t } = useLang()

  return (
    <section id="certifications" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{t.certifications.label}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{t.certifications.heading}</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">{t.certifications.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {t.certifications.items.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 3) * 0.06}>
              <div className="group relative flex h-full flex-col bg-paper p-7 transition-colors duration-300 hover:bg-canvas">
                {/* stretched click target for the certificate PDF (no nested anchors) */}
                {cert.file && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    aria-label={`${t.certifications.viewLabel} — ${cert.name}`}
                    className="absolute inset-0 z-0"
                  />
                )}

                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas text-ink">
                    <Award size={20} />
                  </span>
                  {cert.file && (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-medium leading-snug text-ink">{cert.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <BadgeCheck size={14} />
                  {cert.issuer}
                  {cert.date && <span>· {cert.date}</span>}
                </p>

                <ul className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
                  {cert.skills.map((s) => (
                    <li key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-5 flex items-center gap-4 text-sm font-medium">
                  {cert.file && <span className="link-underline text-ink">{t.certifications.viewLabel}</span>}
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="link"
                      className="text-muted underline-offset-2 hover:text-ink hover:underline"
                    >
                      {t.certifications.verifyLabel}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
