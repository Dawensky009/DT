import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Custom cursor: an instant dot + a lagging ring that grows over
// interactive elements. Only on fine-pointer devices, and disabled when
// the user prefers reduced motion.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 320, damping: 28, mass: 0.6 })
  const ringY = useSpring(dotY, { stiffness: 320, damping: 28, mass: 0.6 })
  const ringScale = useSpring(1, { stiffness: 260, damping: 18 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    document.body.classList.add('has-cursor')

    const interactiveSel = 'a, button, [role="button"], input, textarea, select, label, [data-cursor="link"]'

    const onMove = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      // hide the cursor visuals over photos so the color-reveal spotlight reads cleanly
      const overHide = e.target instanceof Element && e.target.closest('[data-cursor="hide"]')
      setHidden(Boolean(overHide))
      const overInteractive = e.target instanceof Element && e.target.closest(interactiveSel)
      setHovering(Boolean(overInteractive))
    }
    const onLeave = () => setHidden(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.body.classList.remove('has-cursor')
    }
  }, [dotX, dotY])

  useEffect(() => {
    ringScale.set(hovering ? 1.7 : 1)
  }, [hovering, ringScale])

  if (!enabled) return null

  return (
    <div aria-hidden="true" style={{ opacity: hidden ? 0 : 1 }}>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY, scale: ringScale }} />
    </div>
  )
}
