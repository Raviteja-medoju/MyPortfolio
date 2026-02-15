import { useEffect, useRef } from 'react'
import './CursorTrail.css'

export default function CursorTrail() {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })
  const animationFrame = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.life = 1
        this.decay = Math.random() * 0.02 + 0.01
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life -= this.decay
        if (this.size > 0.1) this.size -= 0.05
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.life})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      // Create particles
      for (let i = 0; i < 2; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.current = particles.current.filter(p => p.life > 0)

      particles.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrame.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />
}
