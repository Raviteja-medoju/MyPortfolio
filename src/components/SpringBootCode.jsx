import { useState, useEffect } from 'react'
import './SpringBootCode.css'

const LINES = [
  { text: '@SpringBootApplication', type: 'annotation' },
  { text: 'public class MyPortfolio {', type: 'keyword' },
  { text: '  public static void main(String[] args) {', type: 'method' },
  { text: '    SpringApplication.run(MyPortfolio.class, args);', type: 'plain' },
  { text: '  }', type: 'plain' },
  { text: '}', type: 'plain' },
  { text: '', type: 'plain' },
  { text: '@RestController', type: 'annotation' },
  { text: '@RequestMapping("/api")', type: 'annotation' },
  { text: 'class HelloController {', type: 'keyword' },
  { text: '  @GetMapping("/hello")', type: 'annotation' },
  { text: '  public ResponseEntity<String> hello() {', type: 'method' },
  { text: '    return ResponseEntity.ok("Hello, I\'m Raviteja");', type: 'plain' },
  { text: '  }', type: 'plain' },
  { text: '}', type: 'plain' },
]

const CHAR_DELAY = 42
const LINE_PAUSE = 100
const RESTART_PAUSE = 3200

function SpringBootCode() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (isDone) {
      const t = setTimeout(() => {
        setLineIndex(0)
        setCharIndex(0)
        setIsDone(false)
      }, RESTART_PAUSE)
      return () => clearTimeout(t)
    }

    const line = LINES[lineIndex]
    if (!line) {
      const t = setTimeout(() => setIsDone(true), 0)
      return () => clearTimeout(t)
    }

    const lineLen = line.text.length
    if (charIndex >= lineLen) {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1)
        setCharIndex(0)
      }, LINE_PAUSE)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_DELAY)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex, isDone])

  return (
    <div className="springboot-code" role="img" aria-label="Spring Boot code demo">
      <div className="springboot-code__header">
        <span className="springboot-code__dot springboot-code__dot--red" />
        <span className="springboot-code__dot springboot-code__dot--yellow" />
        <span className="springboot-code__dot springboot-code__dot--green" />
        <span className="springboot-code__title">MyPortfolio.java</span>
      </div>
      <pre className="springboot-code__pre">
        <code className="springboot-code__code">
          {LINES.map((line, i) => {
            const isActiveLine = i === lineIndex
            const visibleUpTo = i < lineIndex ? line.text.length : i === lineIndex ? charIndex : 0
            const showCursor = isActiveLine && !isDone
            return (
              <div key={i} className="springboot-code__line">
                <span className="springboot-code__line-num">{i + 1}</span>
                <span className="springboot-code__line-content">
                  {line.text.slice(0, visibleUpTo).split('').map((ch, j) => (
                    <span key={j} className={`springboot-code__token springboot-code__token--${line.type}`}>
                      {ch === ' ' ? '\u00A0' : ch}
                    </span>
                  ))}
                  {showCursor && <span className="springboot-code__cursor" />}
                </span>
              </div>
            )
          })}
        </code>
      </pre>
    </div>
  )
}

export default SpringBootCode
