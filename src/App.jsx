import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ScrollObserver from './components/ScrollObserver'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <ScrollObserver>
        <main>
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </ScrollObserver>
    </>
  )
}

export default App
