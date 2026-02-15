import './AnimatedBackground.css'

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-bg__gradient animated-bg__gradient--1" />
      <div className="animated-bg__gradient animated-bg__gradient--2" />
      <div className="animated-bg__gradient animated-bg__gradient--3" />
      <div className="animated-bg__mesh" />
    </div>
  )
}
