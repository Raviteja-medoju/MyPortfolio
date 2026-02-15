import { useState } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'US Anesthesia Partners',
    image: '👩‍💼',
    text: 'Raviteja is an exceptional engineer who consistently delivers high-quality solutions. His expertise in Spring Boot and microservices architecture helped us scale our platform to handle millions of transactions.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Tech Lead',
    company: 'M&T Bank',
    image: '👨‍💻',
    text: 'Working with Raviteja was a game-changer for our team. His deep knowledge of cloud architecture and DevOps practices significantly improved our deployment efficiency.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Senior Developer',
    company: 'IBM',
    image: '👩‍💻',
    text: 'An outstanding full-stack developer with a keen eye for detail. Raviteja\'s React components are clean, reusable, and performant. A true professional!',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Engineering Manager',
    company: 'Optum Inc.',
    image: '👨‍🏫',
    text: 'Raviteja brought innovative solutions to complex healthcare integration challenges. His ability to work across the full stack made him invaluable to our team.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">What People Say</h2>
        <p className="testimonials__subtitle">
          Feedback from colleagues and managers I've worked with
        </p>

        <div className="testimonials__carousel">
          <button
            onClick={handlePrev}
            className="testimonials__arrow testimonials__arrow--prev"
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="testimonials__track">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonials__card ${
                  index === activeIndex ? 'testimonials__card--active' : ''
                }`}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                }}
              >
                <div className="testimonials__quote">"</div>
                <p className="testimonials__text">{testimonial.text}</p>
                <div className="testimonials__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="testimonials__star">★</span>
                  ))}
                </div>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">{testimonial.image}</div>
                  <div className="testimonials__info">
                    <p className="testimonials__name">{testimonial.name}</p>
                    <p className="testimonials__position">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="testimonials__arrow testimonials__arrow--next"
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="testimonials__dots">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`testimonials__dot ${
                index === activeIndex ? 'testimonials__dot--active' : ''
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
