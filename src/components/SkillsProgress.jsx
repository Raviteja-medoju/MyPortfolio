import { useState, useEffect, useRef } from 'react'
import './SkillsProgress.css'

const SKILLS = [
  { name: 'Java & Spring Boot', level: 95, color: '#3b82f6' },
  { name: 'JavaScript & React', level: 90, color: '#6366f1' },
  { name: 'AWS & Cloud Services', level: 85, color: '#8b5cf6' },
  { name: 'Microservices Architecture', level: 88, color: '#a78bfa' },
  { name: 'Docker & Kubernetes', level: 82, color: '#60a5fa' },
  { name: 'SQL & MongoDB', level: 90, color: '#818cf8' },
  { name: 'REST APIs & GraphQL', level: 92, color: '#3b82f6' },
  { name: 'CI/CD & DevOps', level: 85, color: '#6366f1' },
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
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
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
