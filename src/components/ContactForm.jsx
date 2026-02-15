import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_3xwdk1l'
const EMAILJS_TEMPLATE_ID = 'template_15a14rs'
const EMAILJS_PUBLIC_KEY = 'SfwhCq4cd5ukTRsu9'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email using EmailJS
      console.log('Attempting to send email...')
      console.log('Service ID:', EMAILJS_SERVICE_ID)
      console.log('Template ID:', EMAILJS_TEMPLATE_ID)
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Raviteja',
        }
      )
      
      console.log('Email sent successfully!', response)
      
      // Success
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS Error Details:', error)
      console.error('Error Text:', error.text)
      console.error('Error Status:', error.status)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-form">
      <h3 className="contact-form__title">Send Me a Message</h3>
      <p className="contact-form__subtitle">
        I'll get back to you within 24 hours
      </p>

      <form onSubmit={handleSubmit} className="contact-form__form" noValidate>
        <div className="contact-form__row">
          <div className="contact-form__group">
            <label htmlFor="name" className="contact-form__label">
              Name <span className="contact-form__required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
              placeholder="Your name"
            />
            {errors.name && (
              <span className="contact-form__error">{errors.name}</span>
            )}
          </div>

          <div className="contact-form__group">
            <label htmlFor="email" className="contact-form__label">
              Email <span className="contact-form__required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <span className="contact-form__error">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="contact-form__group">
          <label htmlFor="subject" className="contact-form__label">
            Subject <span className="contact-form__required">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`contact-form__input ${errors.subject ? 'contact-form__input--error' : ''}`}
            placeholder="What is this about?"
          />
          {errors.subject && (
            <span className="contact-form__error">{errors.subject}</span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            Message <span className="contact-form__required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
            placeholder="Tell me about your project or inquiry..."
            rows="6"
          />
          {errors.message && (
            <span className="contact-form__error">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="contact-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="contact-form__spinner" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="contact-form__message contact-form__message--success">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="contact-form__message contact-form__message--error">
            ✗ Failed to send message. Please try emailing me directly at ravitejachary.work@gmail.com
          </div>
        )}
      </form>
    </div>
  )
}
