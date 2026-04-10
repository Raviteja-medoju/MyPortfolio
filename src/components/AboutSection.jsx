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
          Software Engineer with <strong>4 years</strong> of experience designing scalable, secure,
          and <strong>HIPAA-compliant</strong> microservices for the healthcare and technology sectors.
          Expert in developing distributed backend systems using <strong>Core Java</strong>,{' '}
          <strong>Spring Boot</strong>, and <strong>AWS</strong>, coupled with seamless frontend
          integrations in <strong>React</strong>. Proven ability to bridge traditional enterprise
          backend architecture with cutting-edge <strong>Generative AI</strong>, successfully
          embedding LLM and RAG workflows into Java ecosystems to automate clinical processes.
          Adept at optimizing database performance, implementing rigorous TDD methodologies, and
          orchestrating containerized deployments via Docker and Kubernetes to reduce latency and
          drive measurable business impact.
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
              <a
                href={ibmCertImage}
                target="_blank"
                rel="noopener noreferrer"
                className="about__cert-item"
              >
                <span className="about__cert-img-wrap">
                  <img
                    src={ibmCertImage}
                    alt="IBM Java Developer Professional Certificate"
                    className="about__cert-img"
                    onError={(e) => {
                      e.target.src = certPlaceholder
                      e.target.alt = 'Add IBM certificate image as public/certificates/ibm-java-developer-certificate.png'
                    }}
                  />
                </span>
                <span className="about__cert-label">IBM Java Developer Professional Certificate</span>
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
                      e.target.alt = 'Add Meta certificate image as public/certificates/meta-front-end-developer-certificate.png'
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
