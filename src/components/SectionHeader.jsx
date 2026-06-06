import Reveal from './Reveal.jsx'

// Consistent label + heading + intro block used at the top of each section.
export default function SectionHeader({ label, heading, intro, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="section-label">{label}</span>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{heading}</h2>
      {intro && <p className="text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  )
}
