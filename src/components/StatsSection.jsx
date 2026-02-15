import { useState, useEffect, useRef } from 'react'
import './StatsSection.css'

const STATS = [
  { label: 'Years Experience', value: 5, suffix: '+', icon: '💼' },
  { label: 'Projects Delivered', value: 10, suffix: '+', icon: '🚀' },
  { label: 'Technologies', value: 12, suffix: '+', icon: '⚡' },
  { label: 'Success Rate', value: 99, suffix: '%', icon: '✨' },
]

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * end)
      
      setCount(current)
      
      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, end, duration])

  return (
    <span ref={ref} className="stats__number">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stats__card">
              <div className="stats__icon">{stat.icon}</div>
              <div className="stats__content">
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="stats__label">{stat.label}</p>
              </div>
              <div className="stats__glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
