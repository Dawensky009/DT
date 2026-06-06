import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../i18n/content.js'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-page pb-12 sm:pb-16"
      >
        {/* top line: tagline + availability */}
        <motion.div
          variants={item}
          className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="eyebrow">{t.hero.tagline}</p>
          <span className="inline-flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spark opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-spark" />
            </span>
            {t.hero.available}
          </span>
        </motion.div>

        {/* main row: giant Hello + portrait */}
        <div className="grid items-end gap-8 pt-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12 lg:pt-12">
          <div>
            <motion.h1
              variants={item}
              className="font-display text-[24vw] leading-[0.82] tracking-tight sm:text-[18vw] lg:text-[13rem]"
            >
              {t.hero.hello}
              <span className="text-muted">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-dark">{t.hero.primaryCta}</a>
              <a href="#work" className="btn-outline">{t.hero.secondaryCta}</a>
            </motion.div>
          </div>

          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto w-full max-w-xs lg:max-w-none"
          >
            <div className="overflow-hidden rounded-2xl bg-canvas">
              <img
                src={profile.photo}
                alt={t.hero.photoAlt}
                className="portrait aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
            <span className="mt-3 flex items-center justify-between text-xs text-muted">
              <span>{profile.name}</span>
              <ArrowDownRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
