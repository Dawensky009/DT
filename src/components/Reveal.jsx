import { motion } from 'framer-motion'

// Reusable scroll-reveal wrapper. Fades + slides (and optionally blurs)
// children in once, as they enter the viewport. Framer Motion respects
// reduced-motion preferences automatically.
export default function Reveal({
  children,
  delay = 0,
  y = 34,
  blur = true,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
