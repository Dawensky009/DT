import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* atmospheric data-grid + glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-24">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-sm font-medium text-muted shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </motion.span>

          <motion.p variants={item} className="mt-6 font-display text-xl text-accent">
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.hero.title[0]}{' '}
            <span className="text-accent">{t.hero.title[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted"
          >
            {t.hero.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t.hero.blurb}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary group">
              {t.hero.primaryCta}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#work" className="btn-ghost">
              {t.hero.secondaryCta}
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/15 to-transparent" />
          <div className="overflow-hidden rounded-[1.75rem] border border-hairline bg-surface shadow-card">
            <img
              src={profile.photo}
              alt={t.hero.photoAlt}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
          {/* floating credential chip */}
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-hairline bg-surface px-4 py-3 shadow-card sm:block">
            <p className="font-display text-2xl font-semibold text-primary">B.Sc.</p>
            <p className="text-xs text-muted">Computer Science</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
