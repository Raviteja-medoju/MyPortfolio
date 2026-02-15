import { useEffect, useRef } from 'react'

export default function ParallaxEffect({ children, speed = 0.5 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return
      
      const scrolled = window.scrollY
      const rate = scrolled * speed
      
      elementRef.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
