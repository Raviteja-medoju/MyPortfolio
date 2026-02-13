import { useEffect, useRef } from 'react'

export default function ScrollObserver({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    )

    const current = ref.current
    if (current) {
      const sections = current.querySelectorAll('section')
      sections.forEach((section) => observer.observe(section))
    }

    return () => {
      if (current) {
        const sections = current.querySelectorAll('section')
        sections.forEach((section) => observer.unobserve(section))
      }
    }
  }, [])

  return <div ref={ref}>{children}</div>
}
