import { useEffect, useRef, useState } from 'react'

// Grayscale portrait that reveals its TRUE colors in a soft circle that
// follows the cursor. The color copy sits on top of the grayscale base and is
// masked with a radial-gradient anchored to the pointer position (--mx/--my).
// On a coarse pointer or with reduced motion, it simply shows the color image.
export default function SpotlightImage({
  src,
  alt,
  radius = 130,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setInteractive(fine && !reduced)
  }, [])

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  // When not interactive, render the plain color image (no spotlight).
  const maskValue = active
    ? `radial-gradient(circle ${radius}px at var(--mx, 50%) var(--my, 50%), #000 0%, #000 55%, transparent 78%)`
    : 'radial-gradient(circle 0px at -100px -100px, #000 0%, transparent 0%)'

  return (
    <div
      ref={ref}
      data-cursor="hide"
      onMouseMove={interactive ? onMove : undefined}
      onMouseEnter={interactive ? () => setActive(true) : undefined}
      onMouseLeave={interactive ? () => setActive(false) : undefined}
      className={`group relative overflow-hidden ${className}`}
    >
      {/* grayscale base */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${imgClassName} ${interactive ? 'grayscale' : ''}`}
        draggable="false"
      />
      {/* color reveal layer */}
      {interactive && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          draggable="false"
          className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${imgClassName} ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{
            WebkitMaskImage: maskValue,
            maskImage: maskValue,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
      )}
    </div>
  )
}
