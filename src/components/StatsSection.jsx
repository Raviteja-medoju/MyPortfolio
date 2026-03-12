import { useState, useEffect, useRef } from 'react'
import './StatsSection.css'

const STATS = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Projects Delivered', value: 5, suffix: '+' },
  { label: 'Technologies', value: 12, suffix: '+' },
  { label: 'Success Rate', value: 100, suffix: '%' },
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
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * end)
      setCount(current)
      if (progress === 1) clearInterval(timer)
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
        <div className="stats__header">
          <h2 className="stats__title">What I Can Do For You</h2>
          <p className="stats__desc">
            Delivering enterprise-grade solutions with a focus on scalability,
            security, and modern architecture.
          </p>
        </div>
        <div className="stats__grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stats__card">
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
