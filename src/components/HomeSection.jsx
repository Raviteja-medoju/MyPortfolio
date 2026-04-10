import { useTypingEffect } from '../hooks/useTypingEffect'
import './HomeSection.css'

const TYPED_ROLES = [
  'Full-Stack Developer',
  'Java Engineer',
  'Spring Boot Expert',
  'Microservices Developer',
  'Gen AI Engineer',
]

const TICKER_ITEMS = [
  { value: '4+', label: 'Years of Experience' },
  { value: '4+', label: 'Enterprise Projects' },
  { value: '10K+', label: 'Users Served' },
  { value: '99.9%', label: 'Uptime Delivered' },
  { value: '<600ms', label: 'API Response' },
  { value: '100K+', label: 'Daily HL7 Messages' },
  { value: '85%', label: 'Code Coverage' },
  { value: '30%', label: 'Latency Reduced' },
]

const BRANDS = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', label: 'Java' },
  { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', label: 'Spring' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', label: 'React' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', label: 'AWS' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', label: 'Docker' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg', label: 'K8s' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', label: 'Python' },
]

export default function HomeSection() {
  const typedRole = useTypingEffect(TYPED_ROLES, 100, 50, 2000)

  const scrollTo = (hash) => {
    const el = document.querySelector(hash)
    if (el) {
      const headerHeight = 72
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__main">
          <div className="hero__left">
            <p className="hero__intro">I&apos;m</p>
            <h1 className="hero__name">
              Raviteja
              <br />
              <span className="hero__name-highlight">Medoju</span>
            </h1>
            <p className="hero__desc">
              A software engineer with <strong>4+ years</strong> of experience
              designing scalable, HIPAA-compliant microservices for healthcare
              and technology, bridging enterprise backend architecture with
              cutting-edge <strong>Generative AI</strong>.
            </p>
            <p className="hero__typed-role">
              <span className="hero__typed-text">{typedRole}</span>
              <span className="hero__cursor">|</span>
            </p>
            <div className="hero__actions">
              <button
                onClick={() => scrollTo('#experience')}
                className="hero__btn hero__btn--primary"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="hero__btn hero__btn--secondary"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__photo-wrap">
              <img
                src={`${import.meta.env.BASE_URL}images/profile-raw.png`}
                alt="Raviteja Medoju"
                className="hero__photo"
              />
            </div>
          </div>
        </div>

        <div className="hero__brands">
          {BRANDS.map((b) => (
            <div key={b.name} className="hero__brand">
              <img src={b.logo} alt={b.label} className="hero__brand-logo" />
              <span className="hero__brand-name">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <div className="hero__ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <div key={i} className="hero__ticker-item">
                <span className="hero__ticker-value">{item.value}</span>
                <span className="hero__ticker-sep">—</span>
                <span className="hero__ticker-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
