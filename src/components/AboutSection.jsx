import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './AboutSection.css'

export default function AboutSection() {
  const base = import.meta.env.BASE_URL
  const certPlaceholder = `${base}certificates/cert-placeholder.svg`

  const certificates = [
    {
      id: 'ibm',
      label: 'IBM Java Developer Professional Certificate',
      image: `${base}certificates/ibm-java-developer-certificate.png`,
      missing: 'Add IBM certificate image as public/certificates/ibm-java-developer-certificate.png',
    },
    {
      id: 'meta',
      label: 'Meta Front-End Development Certification',
      image: `${base}certificates/meta-front-end-developer-certificate.png`,
      missing: 'Add Meta certificate image as public/certificates/meta-front-end-developer-certificate.png',
    },
    {
      id: 'hackerrank',
      label: 'HackerRank Software Engineer Certificate',
      image: `${base}certificates/hackerrank-software-engineer-certificate.png`,
      missing: 'Add HackerRank certificate image as public/certificates/hackerrank-software-engineer-certificate.png',
    },
    {
      id: 'genai-llm',
      label: 'GenAI: Large Language Models',
      image: `${base}certificates/genai-large-language-models-certificate.png`,
      missing: 'Add GenAI LLM certificate image as public/certificates/genai-large-language-models-certificate.png',
    },
  ]

  const [activeCert, setActiveCert] = useState(null)

  const closeCert = () => setActiveCert(null)
  const toggleCert = (cert) => {
    setActiveCert((current) => (current && current.id === cert.id ? null : cert))
  }

  useEffect(() => {
    if (!activeCert) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') closeCert()
    }
    document.addEventListener('keydown', handleKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [activeCert])

  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__summary">
         Software Engineer with 4+ years of experience, architecting HIPAA-compliant, production-grade microservices at the intersection of healthcare, fintech, and enterprise technology. Expert in developing distributed backend systems using Core Java, Spring Boot, and AWS, coupled with seamless frontend integrations in React. Proven ability to bridge traditional enterprise backend architecture with cutting-edge Generative AI, successfully embedding LLM and RAG workflows into Java ecosystems to automate clinical processes. Adept at optimizing database performance, implementing rigorous TDD methodologies, and orchestrating containerized deployments via Docker and Kubernetes to reduce latency and drive measurable business impact.
        </p>
        <div className="about__blocks">
          <div className="about__block">
            <h3 className="about__block-title">Education</h3>
            <p className="about__block-main">
              Master of Science in Information Technology
            </p>
            <p className="about__block-sub">
              <b>Wilmington University</b>, Wilmington, Delaware · Aug 2023 – May 2025
            </p>
            <p className="about__coursework">
              Coursework: Java, Programming, SDLC, DBMS, OS, Software Development, Full Stack Development
            </p>

            <div className="about__edu-divider" />

            <p className="about__block-main">
              Bachelors of Technology in Information Technology
            </p>
            <p className="about__block-sub">
              <b>Jawaharlal Nehru Technological University (JNTUH)</b>, India · July 2016 – May 2020
            </p>
            <p className="about__coursework">
              Coursework: Data Structures and Algorithms, OOP (Java/Python), Operating Systems, DBMS, Software Engineering, Compiler Design, Computer Networks
            </p>
          </div>
          <div className="about__block">
            <h3 className="about__block-title">Certifications</h3>
            <div className="about__certs">
              {certificates.map((cert) => {
                const isActive = activeCert && activeCert.id === cert.id
                return (
                  <button
                    key={cert.id}
                    type="button"
                    className={`about__cert-item${isActive ? ' about__cert-item--active' : ''}`}
                    onClick={() => toggleCert(cert)}
                    aria-expanded={isActive ? 'true' : 'false'}
                    aria-label={`View ${cert.label}`}
                  >
                    <span className="about__cert-img-wrap">
                      <img
                        src={cert.image}
                        alt={cert.label}
                        className="about__cert-img"
                        onError={(e) => {
                          e.target.src = certPlaceholder
                          e.target.alt = cert.missing
                        }}
                      />
                    </span>
                    <span className="about__cert-label">{cert.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {activeCert &&
        createPortal(
          <div
            className="about__cert-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeCert.label}
            onClick={closeCert}
          >
            <div
              className="about__cert-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="about__cert-modal-close"
                onClick={closeCert}
                aria-label="Close certificate preview"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <img
                src={activeCert.image}
                alt={activeCert.label}
                className="about__cert-modal-img"
                onError={(e) => {
                  e.target.src = certPlaceholder
                  e.target.alt = activeCert.missing
                }}
              />
              <p className="about__cert-modal-label">{activeCert.label}</p>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
