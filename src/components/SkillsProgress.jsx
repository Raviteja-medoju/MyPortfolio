import { useState, useEffect, useRef } from 'react'
import './SkillsProgress.css'

const SKILLS = [
  { name: 'Core Java & Spring Boot', level: 95, color: 'var(--accent)' },
  { name: 'React & Frontend', level: 88, color: 'var(--accent-2)' },
  { name: 'AWS & Cloud Platforms', level: 85, color: 'var(--accent)' },
  { name: 'Microservices Architecture', level: 90, color: 'var(--accent-2)' },
  { name: 'Docker & Kubernetes', level: 82, color: 'var(--accent)' },
  { name: 'SQL & Databases', level: 90, color: 'var(--accent-2)' },
  { name: 'Generative AI & ML', level: 80, color: 'var(--accent)' },
  { name: 'CI/CD & DevOps', level: 85, color: 'var(--accent-2)' },
]

function SkillBar({ skill, index, isVisible }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setWidth(skill.level)
      }, index * 100)
      return () => clearTimeout(timeout)
    }
  }, [isVisible, skill.level, index])

  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{skill.name}</span>
        <span className="skill-bar__percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color})`,
          }}
        >
          <div className="skill-bar__shine" />
        </div>
      </div>
    </div>
  )
}

export default function SkillsProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="skills-progress">
      <div className="skills-progress__container">
        <h3 className="skills-progress__title">Core Competencies</h3>
        <p className="skills-progress__subtitle">
          Expertise levels based on years of hands-on experience
        </p>
        <div className="skills-progress__grid">
          {SKILLS.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
