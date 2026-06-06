import { useLang } from '../i18n/LanguageContext.jsx'
import { useCountUp } from '../hooks/useCountUp.js'

function Metric({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {current}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/60">{label}</p>
    </div>
  )
}

export default function Metrics() {
  const { t } = useLang()

  return (
    <section className="bg-primary">
      <div className="container-page py-16 sm:py-20">
        <div className="mb-10 flex justify-center">
          <span className="section-label text-accent/90">{t.metrics.label}</span>
        </div>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {t.metrics.items.map((m) => (
            <Metric key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
