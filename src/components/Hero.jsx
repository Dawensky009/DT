import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'
import { useCountUp } from '../hooks/useCountUp.js'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function StatCounter({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)
  return (
    <div ref={ref}>
      <p className="flex items-start font-display text-4xl font-medium leading-none sm:text-5xl">
        <span className="mt-1 text-xl sm:text-2xl">+</span>
        {current}
        {suffix}
      </p>
      <p className="mt-2 max-w-[8rem] text-xs text-muted sm:text-sm">{label}</p>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const heroRef = useRef(null)
  const year = new Date().getFullYear()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="top" ref={heroRef} className="relative flex min-h-screen flex-col overflow-hidden bg-canvas">
      {/* Desktop portrait — full color, parallax on scroll */}
      <motion.div
        style={{ y: portraitY }}
        className="absolute inset-y-0 right-0 z-0 hidden lg:block lg:w-[48%]"
      >
        <picture className="contents">
          <source srcSet={profile.photoWebp} type="image/webp" />
          <motion.img
            src={profile.photo}
            alt={t.hero.photoAlt}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover object-top"
            loading="eager"
          />
        </picture>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-2/5 bg-gradient-to-r from-canvas via-canvas/60 to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      {/* Vertical role label — far left (desktop) */}
      <motion.div
        variants={rise}
        initial="hidden"
        animate="show"
        custom={4}
        className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex"
      >
        <span className="h-28 w-px bg-ink/25" />
        <span className="text-vertical rotate-180 text-xs uppercase tracking-label text-muted">
          {t.hero.role}
        </span>
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ y: contentY }}
        className="container-page relative z-20 flex flex-1 flex-col pt-24 sm:pt-28 lg:justify-center lg:pb-28"
      >
        <motion.div variants={rise} initial="hidden" animate="show" custom={0} className="flex gap-10 sm:gap-14">
          {t.hero.stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>

        <div className="mt-10 sm:mt-14">
          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-[27vw] font-medium leading-[0.85] tracking-tight sm:text-[20vw] lg:text-[15rem] xl:text-[17rem]"
          >
            {t.hero.hello}
          </motion.h1>
          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 text-base text-muted sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>

        {/* Mobile portrait — full color, in flow */}
        <motion.div variants={rise} initial="hidden" animate="show" custom={3} className="mt-10 overflow-hidden rounded-2xl lg:hidden">
          <picture className="contents">
            <source srcSet={profile.photoWebp} type="image/webp" />
            <img
              src={profile.photo}
              alt={t.hero.photoAlt}
              className="aspect-[5/4] w-full object-cover object-top"
              loading="eager"
            />
          </picture>
        </motion.div>

        {/* Mobile scroll-down */}
        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-ink lg:hidden"
        >
          {t.hero.scroll}
          <ArrowDown size={16} className="animate-scroll-bounce" />
        </a>
      </motion.div>

      {/* Bottom-left: year + scroll (desktop) */}
      <motion.div style={{ opacity: fade }} className="absolute bottom-7 left-0 z-20 hidden w-full lg:block">
        <div className="container-page flex items-end gap-8">
          <span className="text-vertical text-xs tracking-label text-muted">{year}</span>
          <a
            href="#about"
            className="group flex items-center gap-2 text-sm font-medium text-ink"
            data-cursor="link"
          >
            {t.hero.scroll}
            <ArrowDown size={16} className="animate-scroll-bounce" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
