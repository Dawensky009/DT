import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

// Popup that shows a project's screenshots + a "Visit site" link.
export default function ProjectModal({ project, onClose }) {
  const { t } = useLang()

  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-cursor="hide"
        >
          <motion.div
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-paper shadow-2xl"
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-paper/95 px-6 py-5 backdrop-blur sm:px-8">
              <div>
                <div className="flex items-center gap-2.5 text-xs uppercase tracking-label text-muted">
                  <span>{project.tag}</span>
                  <span>·</span>
                  <span>{project.ready ? project.year : t.work.soon}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.work.closeLabel}
                data-cursor="link"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-canvas"
              >
                <X size={20} />
              </button>
            </div>

            {/* body */}
            <div className="px-6 py-6 sm:px-8">
              <p className="max-w-xl text-[15px] leading-relaxed text-muted">{project.desc}</p>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="btn-dark group mt-6"
                >
                  {t.work.visitLabel}
                  <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.images?.length ? (
                <div className="mt-8 space-y-4">
                  {project.images.map((img, i) => (
                    <picture key={i}>
                      <source srcSet={img.webp} type="image/webp" />
                      <img
                        src={img.src}
                        alt={`${project.title} — ${i + 1}`}
                        loading="lazy"
                        className="w-full rounded-xl border border-line"
                      />
                    </picture>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-xl border border-dashed border-line bg-canvas py-14 text-center text-sm text-muted">
                  {t.work.soonGallery}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
