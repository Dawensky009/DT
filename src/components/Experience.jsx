import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  const { t } = useLang()
  const timelineRef = useRef(null)

  // draw the spine as the timeline scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 65%'],
  })
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{t.experience.label}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">{t.experience.heading}</h2>
        </Reveal>

        {/* vertical timeline */}
        <div ref={timelineRef} className="relative mt-16">
          {/* static track + animated draw */}
          <span className="absolute bottom-2 left-[9px] top-2 w-px bg-line" aria-hidden="true" />
          <motion.span
            style={{ scaleY: spineScale }}
            className="absolute bottom-2 left-[9px] top-2 w-px origin-top bg-ink"
            aria-hidden="true"
          />

          <ol className="space-y-12 sm:space-y-16">
            {t.experience.items.map((job, i) => (
              <Reveal key={`${job.org}-${job.role}`} as="li" delay={i * 0.08} className="relative pl-10 sm:pl-14">
                {/* node */}
                <span className="absolute left-[3px] top-1.5 h-3 w-3 rounded-full bg-ink ring-4 ring-paper" aria-hidden="true" />

                <div className="grid gap-x-12 gap-y-4 md:grid-cols-[1fr_1.3fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                      <span className="font-medium text-ink">{job.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">{job.role}</h3>
                    <p className="mt-1 text-base font-medium text-ink">{job.org}</p>
                  </div>

                  <ul className="space-y-2.5 md:pt-1">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
