import ContactForm from './ContactForm'
import './ContactSection.css'

const ITEMS = [
  { label: 'Email', href: 'mailto:ravitejachary.work@gmail.com', value: 'ravitejachary.work@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ravi-teja-medoju-7a8a0b19a/', value: 'linkedin.com/in/Raviteja_Medoju', icon: 'linkedin' },
  { label: 'Mobile', href: 'tel:+15162448913', value: '+1 516-244-8913', icon: 'phone' },
  { label: 'Location', value: 'Dallas, TX', icon: 'location' },
]

function ContactIcon({ type }) {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2v.2l8 5.2 8-5.2V8l-8 5-8-5z" />
      </svg>
    )
  }
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5A1.56 1.56 0 1 1 6.95 5.4a1.56 1.56 0 0 1-.01 3.1zM5.5 9.75h2.9V19H5.5V9.75zM10.2 9.75H13v1.26h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.49V19h-2.9v-4.44c0-1.06-.02-2.42-1.47-2.42-1.47 0-1.7 1.15-1.7 2.34V19h-2.9V9.75z" />
      </svg>
    )
  }
  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.1 11.1 0 0 0 3.48.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.1 11.1 0 0 0 .56 3.48 1 1 0 0 1-.24 1l-2.2 2.31z" />
      </svg>
    )
  }
  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
      </svg>
    )
  }
  return null
}

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__intro">
          Open to new opportunities and collaborations. Feel free to reach out.
        </p>
        
        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>
            <div className="contact__list">
              {ITEMS.map((item) => (
                <div key={item.label} className="contact__row">
                  <span className="contact__icon" aria-hidden="true">
                    <ContactIcon type={item.icon} />
                  </span>
                  <span className="contact__label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact__value" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact__value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <a
              href="/Raviteja_Medoju_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__resume"
            >
              <span className="contact__resume-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 1.5L18.5 8H14zM12 12l4 4h-2.5v3h-3v-3H8z" />
                </svg>
              </span>
              Download Resume (PDF)
            </a>
          </div>
          
          <div className="contact__form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
