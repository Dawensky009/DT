import { Award, GraduationCap, Wrench } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

const iconFor = {
  cert: Award,
  edu: GraduationCap,
  tool: Wrench,
}

export default function TrustBar() {
  const { t } = useLang()

  return (
    <section className="border-y border-hairline bg-surface">
      <div className="container-page py-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          <p className="section-label shrink-0">{t.trust.label}</p>
          <ul className="grid flex-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
            {t.trust.items.map((it, i) => {
              const Icon = iconFor[it.kind] ?? Wrench
              return (
                <li key={i} className="flex items-center gap-3 text-sm text-muted">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={18} />
                  </span>
                  <span className="font-medium leading-snug text-primary">{it.text}</span>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
