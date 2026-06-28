import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Work() {
  const { t } = useLang()
  const [active, setActive] = useState(null)

  const groups = [
    { key: 'web', title: t.work.groups.web, items: t.work.items.filter((p) => p.category === 'web' && !p.hidden) },
    { key: 'data', title: t.work.groups.data, items: t.work.items.filter((p) => p.category === 'data' && !p.hidden) },
  ].filter((g) => g.items.length > 0)

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

        {groups.map((group) => (
          <div key={group.key} className="mt-14">
            <Reveal>
              <p className="eyebrow text-ink">{group.title}</p>
            </Reveal>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.06}>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    data-cursor="link"
                    className="group flex h-full w-full flex-col rounded-2xl border border-line bg-paper p-7 text-left transition-all duration-300 hover:border-ink/30 hover:bg-canvas sm:p-8"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-label text-muted">
                      <span>{p.tag}</span>
                      <span>{p.ready ? p.year : t.work.soon}</span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-ink sm:text-3xl">{p.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{p.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                      <span className="link-underline">{t.work.viewLabel}</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
