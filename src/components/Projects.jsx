import { ArrowUpRight, Clock } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

// Each card gets a distinct accent gradient so the grid reads as intentional
// even while real case-study imagery is still being added.
const gradients = [
  'from-blue-500/15 to-indigo-500/5',
  'from-emerald-500/15 to-teal-500/5',
  'from-amber-500/15 to-orange-500/5',
  'from-violet-500/15 to-fuchsia-500/5',
]

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="work" className="scroll-mt-24 border-t border-hairline bg-surface py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader label={t.projects.label} heading={t.projects.heading} intro={t.projects.intro} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <article className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-hairline bg-canvas transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover">
                {/* visual band */}
                <div className={`relative h-40 bg-gradient-to-br ${gradients[i % gradients.length]}`}>
                  <div className="bg-grid absolute inset-0 opacity-60" />
                  <span className="absolute left-5 top-5 rounded-full border border-hairline bg-surface/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {project.tag}
                  </span>
                  {!project.ready && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                      <Clock size={12} />
                      {t.projects.soon}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.summary}</p>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
