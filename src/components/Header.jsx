import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import './Header.css'

const navLinks = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Contact', hash: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const atPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atPageBottom) {
        setActive('#contact')
        return
      }

      const sections = navLinks.map((l) => l.hash.slice(1))
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActive(`#${current}`)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (hash) => {
    setOpen(false)
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
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#home" className="site-header__brand" onClick={(e) => { e.preventDefault(); handleClick('#home') }}>
          <span className="site-header__brand-bracket">&lt;</span>
          <span className="site-header__brand-name">Raviteja</span>
          <span className="site-header__brand-bracket">/&gt;</span>
        </a>
        <nav className={`site-header__nav ${open ? 'site-header__nav--open' : ''}`}>
          <ul className="site-header__list">
            {navLinks.map(({ label, hash }) => (
              <li key={hash}>
                <a
                  href={hash}
                  className={`site-header__link ${active === hash ? 'site-header__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleClick(hash) }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__theme-wrapper">
          <ThemeToggle />
        </div>
        <button
          type="button"
          className="site-header__menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
