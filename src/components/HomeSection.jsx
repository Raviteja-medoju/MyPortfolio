import SpringBootCode from './SpringBootCode'
import './HomeSection.css'

const PILLS = [
  'Java',
  'Spring Boot',
  'React',
  'AWS',
  'JavaScript',
  'Python',
  'Microservices',
  'Docker',
  'Kubernetes',
  'REST APIs',
  'SQL',
  'Node.js',
  'Jenkins',
  'Git',
  'MongoDB',
  'GraphQL',
]

export default function HomeSection() {
  const scrollTo = (hash) => {
    const el = document.querySelector(hash)
    if (el) {
      const headerHeight = 72
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="hero__wrap">
        <div className="hero__container">
          <p className="hero__badge">
            <span className="hero__badge-dot" />
            Software Engineer · 5+ years
          </p>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__title-highlight">Raviteja Medoju</span>
          </h1>
          <p className="hero__tagline">
            <span className="hero__tagline-lead">
              Building scalable systems with Java & JVM ecosystem
            </span>{' '}
            Engineer focused on building highly scalable, distributed full-stack systems using Spring Boot microservices, performant frontend frameworks, and cloud-native infrastructure, with an emphasis on reliability, observability, and developer productivity at scale.
            {/* With a strong focus on Spring Boot microservices, resilient API design, and modern frontend development. I build scalable full-stack applications, data workflows, and cloud-native CI/CD solutions. */}
          </p>
          <div className="hero__actions">
            <button onClick={() => scrollTo('#experience')} className="hero__btn hero__btn--primary">
              View Experience
            </button>
            <button onClick={() => scrollTo('#contact')} className="hero__btn hero__btn--secondary">
              Get in Touch
            </button>
          </div>
          <div className="hero__pills">
            {PILLS.map((t) => (
              <span key={t} className="hero__pill">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="hero__code-col">
          <SpringBootCode />
        </div>
      </div>
      <div className="hero__below">
        <div className="hero__below-content">
          <p className="hero__below-title">What I do</p>
          <ul className="hero__below-list">
            <li>Design and build secure, scalable backend services with Java & Spring Boot</li>
            <li>Develop responsive front-ends and APIs for healthcare and financial applications</li>
            <li>Automate deployments and improve reliability with Docker, Kubernetes & CI/CD</li>
            <li>Design REST APIs and data models for high-volume systems with SQL SERVER and MongoDB</li>
            <li>Build cloud-native solutions on AWS using EC2, S3, RDS, and serverless workflows</li>
          </ul>
        </div>
        <div className="hero__logos">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
            className="hero__logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
            alt="Spring Boot"
            className="hero__logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="hero__logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
            className="hero__logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            className="hero__logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
            className="hero__logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            alt="Docker"
            className="hero__logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            alt="SQL"
            className="hero__logo"
          />
        </div>
      </div>
    </section>
  )
}
