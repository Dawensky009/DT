import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Work() {
  const { t } = useLang()
  const featured = t.work.items.filter((p) => p.image)
  const rest = t.work.items.filter((p) => !p.image)

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

        {/* featured projects with a live screenshot */}
        <div className="mt-14 space-y-6">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="group grid overflow-hidden rounded-2xl border border-line bg-paper transition-colors duration-300 hover:bg-canvas lg:grid-cols-2"
              >
                <div className="order-first overflow-hidden bg-canvas lg:order-last">
                  <picture>
                    <source srcSet={p.imageWebp} type="image/webp" />
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </picture>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="flex items-center justify-between text-xs uppercase tracking-label text-muted">
                    <span>{p.tag}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-ink sm:text-4xl">{p.title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{p.desc}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    <span className="link-underline">{t.work.visitLabel}</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* other projects as clean text cards */}
        {rest.length > 0 && (
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 0.06}>
                <article className="flex h-full flex-col bg-paper p-7 sm:p-8">
                  <div className="flex items-center justify-between text-xs uppercase tracking-label text-muted">
                    <span>{project.tag}</span>
                    <span>{project.ready ? project.year : t.work.soon}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ink sm:text-3xl">{project.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{project.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
