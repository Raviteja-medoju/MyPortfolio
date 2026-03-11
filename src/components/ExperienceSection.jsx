import { useEffect, useRef, useState } from 'react'
import './ExperienceSection.css'

const JOBS = [
  {
    company: 'US Anesthesia Partners',
    role: 'Software Engineer',
    year: 'NOW',
    period: 'July 2025 – Present',
    bullets: [
      'Architected HIPAA-compliant microservices for perioperative patient data, billing, and provider workflows, improving clinical data processing efficiency by 30%.',
      'Developed secure RESTful APIs for scheduling, claims integration, and patient-facing platforms using Java and Spring Boot.',
      'Resolved performance bottlenecks in high-volume patient data pipelines, reducing API response times by 35%.',
      'Implemented CI/CD pipelines and containerized deployments using Docker, Kubernetes, Jenkins, and AWS, reducing deployment errors by 40%.',
    ],
  },
  {
    company: 'M&T Bank',
    role: 'Software Engineer',
    year: '2024',
    period: 'May 2024 – Oct 2024',
    bullets: [
      'Developed secure Java microservices using Spring Boot and REST APIs for loan processing and credit approvals, reducing transaction latency by 35%.',
      'Improved financial data accuracy by 30% optimizing data integration workflows using Kafka, Spring Batch, MongoDB, and SQL Server.',
      'Automated CI/CD pipelines using Jenkins to streamline builds, testing, and deployments for Java applications.',
    ],
  },
  {
    company: 'IBM, Inc.',
    role: 'Software Engineer',
    year: '2021',
    period: 'December 2021 – July 2023',
    bullets: [
      'Engineered Java-based microservices using Spring Boot and J2EE, boosting processing throughput by 30%.',
      'Crafted responsive front-end solutions using React, Next.js, HTML, and CSS, improving portal adoption across banking modules.',
      'Optimized backend performance through caching, multithreading, and database indexing, reducing API response times by 25%.',
    ],
  },
  {
    company: 'Optum Inc.',
    role: 'Associate Software Engineer',
    year: '2019',
    period: 'June 2019 – November 2021',
    bullets: [
      'Architected scalable Java-based solutions for clinical and administrative healthcare platforms, reducing deployment time by 30%.',
      'Designed containerized Spring Boot microservices for syndicated lending and healthcare applications, improving API throughput.',
      'Automated serverless functions using AWS Lambda, reducing manual intervention by 25%.',
    ],
  },
]

export default function ExperienceSection() {
  const lineRef = useRef(null)
  const sectionRef = useRef(null)
  const dotRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(-1)
  const itemRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const line = lineRef.current
    const dot = dotRef.current
    if (!section || !line || !dot) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionH = rect.height
      const winH = window.innerHeight

      // How far the section has scrolled into view (0→1)
      const progress = Math.min(
        1,
        Math.max(0, (winH - sectionTop) / (sectionH + winH * 0.3))
      )

      line.style.transform = `scaleY(${progress})`
      dot.style.top = `${progress * 100}%`

      // Highlight active item
      let found = -1
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        if (r.top < winH * 0.6) found = i
      })
      setActiveIdx(found)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="experience" className="exp" ref={sectionRef}>
      <div className="exp__container">
        <div className="exp__header">
          <h2 className="exp__title">
            My career &amp; <br />
            <span className="exp__title-accent">experience</span>
          </h2>
        </div>

        <div className="exp__body">
          {/* Entries with line running through the middle column */}
          <div className="exp__entries">
            {/* The line and dot span the full height via the middle column */}
            <div className="exp__line-wrap" aria-hidden="true">
              <div className="exp__line" ref={lineRef} />
              <div className="exp__dot" ref={dotRef} />
            </div>

            {JOBS.map((job, i) => (
              <div
                key={job.company}
                className={`exp__entry${activeIdx >= i ? ' exp__entry--visible' : ''}`}
                ref={(el) => (itemRefs.current[i] = el)}
              >
                <div className="exp__left">
                  <h3 className="exp__role">{job.role}</h3>
                  <span className="exp__year">{job.year}</span>
                  <p className="exp__company">{job.company}</p>
                  <p className="exp__period">{job.period}</p>
                </div>

                <div className="exp__mid" aria-hidden="true" />

                <div className="exp__right">
                  <ul className="exp__bullets">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
