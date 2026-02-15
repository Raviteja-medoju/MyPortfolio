import { useState, useEffect } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 1000)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <div className="loading-screen__logo">
          <span className="loading-screen__logo-bracket">&lt;</span>
          <span className="loading-screen__logo-name">Raviteja</span>
          <span className="loading-screen__logo-bracket">/&gt;</span>
        </div>
        
        <div className="loading-screen__bar">
          <div 
            className="loading-screen__progress" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        <p className="loading-screen__text">
          {Math.min(Math.round(progress), 100)}%
        </p>

        <div className="loading-screen__dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
