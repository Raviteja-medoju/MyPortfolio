import { useEffect, useRef, useState } from 'react'
import './ExperienceSection.css'

const JOBS = [
  {
    company: 'US Anesthesia Partners',
    role: 'Software Engineer',
    year: 'NOW',
    period: 'July 2025 – Present',
    skills: 'Java, Spring Boot, Spring MVC, React JS, Spring Security, Tailwind CSS, SQL, AWS, Postman, REST API, Docker, Kubernetes',
    bullets: [
      'Architected a distributed, HIPAA-compliant EMR integration platform using Java 17 and Spring Boot, orchestrating the secure exchange of 100K+ daily HL7 messages across disparate hospital networks.',
      'Engineered secure, HIPAA-compliant RESTful APIs utilizing Java 17 and Spring Boot to manage real-time patient anesthesia records, supporting over 10,000 daily clinical transactions with 99.9% uptime.',
      'Spearheaded the backend integration of a Generative AI module using LangChain4j and Spring Boot, enabling a RAG architecture to securely query unstructured perioperative notes, saving clinicians an average of 1.5 hours per shift.',
      'Developed an intelligent scheduling microservice that consumed Python-trained NLP models via Java-based REST endpoints, automating the extraction of billing codes from operative reports and increasing coding accuracy by 18%.',
      'Implemented robust API security protocols utilizing Spring Security (OAuth2/JWT) and optimized relational database interactions, reducing patient data retrieval latency from 850ms to under 600ms.',
      'Orchestrated the deployment of containerized Java applications onto AWS Elastic Kubernetes Service (EKS), configuring auto-scaling policies that seamlessly handled a 30% surge in web traffic during peak surgical hours.',
      'Collaborated tightly with frontend engineers to build responsive clinical dashboard components using React JS and Tailwind CSS, connecting them to secure Spring MVC controllers for real-time vitals monitoring.',
      'Implemented event-driven solutions using Apache Kafka, enabling high-throughput messaging across banking modules.',
      'Cooperated with product managers, QA, and cross-functional teams in a 12-member Agile.',
    ],
  },
  {
    company: 'IBM Inc',
    role: 'Associate Software Engineer',
    year: '2022',
    period: 'Apr 2022 – July 2023',
    skills: 'Core Java, Java, Spring Boot, React JS, Angular, SQL, MongoDB, AWS, Lambda, Elastic Kubernetes',
    bullets: [
      'Developed and maintained robust RESTful web services using Core Java and Spring MVC to manage patient onboarding workflows, scaling the backend to support a 50% increase in active telehealth users during the Q3 rollout.',
      'Overhauled complex data access layers using Hibernate ORM and PostgreSQL, writing custom criteria queries that resolved the N+1 select problem and decreased API payload retrieval time by 45%.',
      'Migrated legacy cron jobs to AWS Lambda serverless functions triggered by Amazon S3 events, automating the nightly synchronization of member eligibility files and cutting manual processing overhead by 20 hours monthly.',
      'Containerized core application modules using Docker and orchestrated deployments via Kubernetes, ensuring consistent environment parity between staging and production while cutting release downtime to under 5 minutes.',
      'Partnered with front-end teams to consume Java endpoints in React-based dashboards, utilizing Redux for state management to ensure seamless, real-time updates of insurance claim statuses.',
      'Collaborated with QA and product teams across multiple releases, estimating and delivering user stories on schedule with a 98% first pass QA acceptance rate.',
    ],
  },
  {
    company: 'Optum Inc',
    role: 'Associate Software Engineer',
    year: '2020',
    period: 'June 2020 – Mar 2022',
    skills: 'Java, J2EE, SQL, MySQL, JavaScript, CI Pipeline, Maven, TDD, JUnit, Mockito, Scrum, Jira, Spring Frameworks',
    bullets: [
      'Programmed core business logic for a B2B inventory management module using Java 8 and the Spring Framework, successfully delivering 30+ critical user stories ahead of quarterly release schedules.',
      'Authored complex SQL stored procedures and triggers in MySQL to automate inventory reconciliation, eliminating data mismatch errors and improving daily reporting accuracy by 98%.',
      'Wrote comprehensive unit and integration tests utilizing JUnit and Mockito, establishing a rigorous Test-Driven Development (TDD) culture that increased core code coverage from 40% to 85%.',
      'Designed responsive user interface components with HTML, CSS, and vanilla JavaScript, connecting them to secure Java servlets to facilitate internal administrative workflows.',
      'Configured automated build scripts using Maven and integrated them into Jenkins CI pipelines, allowing the development team to push reliable, tested code artifacts continuously.',
      'Actively participated in daily Scrum ceremonies, sprint planning, and code reviews, successfully resolving over 150 legacy software defects tracked in Jira within the first year of employment.',
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
                  {job.skills && (
                    <p className="exp__skills">{job.skills}</p>
                  )}
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
