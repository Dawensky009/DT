import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Work() {
  const { t } = useLang()

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{t.work.label}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{t.work.heading}</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">{t.work.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {t.work.items.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-canvas sm:p-10">
                <div className="flex items-center justify-between text-xs uppercase tracking-label text-muted">
                  <span>{project.tag}</span>
                  <span>{project.ready ? project.year : t.work.soon}</span>
                </div>

                <h3 className="mt-8 font-display text-3xl text-ink sm:text-4xl">{project.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{project.desc}</p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  <span className="link-underline">{t.work.label}</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
