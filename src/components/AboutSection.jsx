import './AboutSection.css'

export default function AboutSection() {
  const base = import.meta.env.BASE_URL
  const ibmCertImage = `${base}certificates/ibm-java-developer-certificate.png`
  const metaCertImage = `${base}certificates/meta-front-end-developer-certificate.png`
  const certPlaceholder = `${base}certificates/cert-placeholder.svg`

  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__summary">
          Software Engineer with <strong>5+ years</strong> of experience specializing in{' '}
          <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>React</strong>, and{' '}
          <strong>AWS</strong> for healthcare and financial applications. I build scalable,
          secure microservices and full-stack solutions, optimize system performance by up to{' '}
          <strong>40%</strong>, and automate CI/CD with Docker, Kubernetes, and Jenkins. I deliver
          in Agile environments and drive data-driven decisions that improve user experience and
          business outcomes.
        </p>
        <div className="about__blocks">
          <div className="about__block">
            <h3 className="about__block-title">Education</h3>
            <p className="about__block-main">
              Master of Science in Information Systems Technology
            </p>
            <p className="about__block-sub">
              Wilmington University · Aug 2023 – Mar 2025 · CGPA 3.85/4
            </p>
            <p className="about__coursework">
              Coursework: Java, Programming, SDLC, DBMS, OS, Software Development, Full Stack Development
            </p>
            <div className="about__highlights">
              <div className="about__highlight-item">
                <h4 className="about__highlight-title">What I learned</h4>
                <p className="about__highlight-text">
                  System design, DBMS, SDLC, full-stack development; stronger Java and OS/systems thinking for real-world software.
                </p>
              </div>
              <div className="about__highlight-item">
                <h4 className="about__highlight-title">Work I did</h4>
                <p className="about__highlight-text">
                  Full-stack apps and database design in course projects; SDLC and Agile from requirements to deployment.
                </p>
              </div>
              <div className="about__highlight-item">
                <h4 className="about__highlight-title">Learning & contribution in group work</h4>
                <p className="about__highlight-text">
                  Owned design and implementation; shared Java and DB knowledge; kept the team on track with clear communication and deadlines.
                </p>
              </div>
              <div className="about__highlight-item">
                <h4 className="about__highlight-title">How I use it in real-world projects</h4>
                <p className="about__highlight-text">
                  Designing scalable systems and microservices (US Anesthesia Partners, M&T Bank); optimizing DBs and REST APIs; end-to-end solutions in healthcare and finance.
                </p>
              </div>
            </div>
          </div>
          <div className="about__block">
            <h3 className="about__block-title">Certifications</h3>
            <div className="about__certs">
              <a
                href={ibmCertImage}
                target="_blank"
                rel="noopener noreferrer"
                className="about__cert-item"
              >
                <span className="about__cert-img-wrap">
                  <img
                    src={ibmCertImage}
                    alt="Java and Design Patterns – IBM"
                    className="about__cert-img"
                    onError={(e) => {
                      e.target.src = certPlaceholder
                      e.target.alt = 'Add IBM certificate image as public/certificates/ibm-java-developer-certificate.png'
                    }}
                  />
                </span>
                <span className="about__cert-label">Java and Design Patterns – IBM</span>
              </a>
              <a
                href={metaCertImage}
                target="_blank"
                rel="noopener noreferrer"
                className="about__cert-item"
              >
                <span className="about__cert-img-wrap">
                  <img
                    src={metaCertImage}
                    alt="Meta Front-End Development Certification"
                    className="about__cert-img"
                    onError={(e) => {
                      e.target.src = certPlaceholder
                      e.target.alt =
                        'Add Meta certificate image as public/certificates/meta-front-end-developer-certificate.png'
                    }}
                  />
                </span>
                <span className="about__cert-label">Meta Front-End Development Certification</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
