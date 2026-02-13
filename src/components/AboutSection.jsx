import './AboutSection.css'

export default function AboutSection() {
  const base = import.meta.env.BASE_URL
  const graduationImage = `${base}images/graduation.jpg`
  const ibmCertImage = `${base}certificates/ibm-java-developer-certificate.png`
  const metaCertImage = `${base}certificates/meta-front-end-developer-certificate.png`
  const awsCertImage = `${base}certificates/aws-certificate.png`
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
            <div className="about__education-wrap">
              <div className="about__education-text">
                <p className="about__block-main">
                  Master of Science in Information Systems Technology
                </p>
                <p className="about__block-sub">
                  Wilmington University · Aug 2023 – Mar 2025 · CGPA 3.85/4
                </p>
                <p className="about__coursework">
                  Coursework: Java, Programming, SDLC, DBMS, OS, Software Development, Full Stack Development
                </p>
                <div className="about__masters-content">
                  <p className="about__masters-heading">What I learned</p>
                  <p className="about__masters-note">
                    System design and architecture, database design (DBMS), software development lifecycle (SDLC),
                    and full-stack development. I strengthened my Java and programming fundamentals and learned to
                    apply OS and systems thinking to real-world software problems.
                  </p>
                  <p className="about__masters-heading">Work I did</p>
                  <p className="about__masters-note">
                    Built full-stack applications and designed databases in course projects; followed SDLC and
                    Agile practices from requirements through deployment. Delivered projects that combined
                    backend logic, data modeling, and user interfaces.
                  </p>
                  <p className="about__masters-heading">How I use it in real-world projects</p>
                  <p className="about__masters-note">
                    I use this foundation every day: designing scalable systems and microservices at US Anesthesia
                    Partners and M&T Bank, optimizing databases and REST APIs, and delivering end-to-end solutions
                    in healthcare and finance. The SDLC and full-stack skills from my Master&apos;s directly support
                    the Agile, full-stack, and cloud work I do now.
                  </p>
                </div>
              </div>
              <div className="about__education-photo">
                <img
                  src={graduationImage}
                  alt="Graduation at Wilmington University"
                  className="about__graduation-img"
                  onError={(e) => {
                    e.target.src = certPlaceholder
                    e.target.alt = 'Add graduation photo as public/images/graduation.jpg'
                  }}
                />
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
              <a
                href={awsCertImage}
                target="_blank"
                rel="noopener noreferrer"
                className="about__cert-item"
              >
                <span className="about__cert-img-wrap">
                  <img
                    src={awsCertImage}
                    alt="AWS Certified Solutions Architect – Associate"
                    className="about__cert-img"
                    onError={(e) => {
                      e.target.src = certPlaceholder
                      e.target.alt = 'Add AWS certificate image as public/certificates/aws-certificate.png'
                    }}
                  />
                </span>
                <span className="about__cert-label">AWS Certified Solutions Architect – Associate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
