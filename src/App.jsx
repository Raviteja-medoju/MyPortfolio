import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ScrollObserver from './components/ScrollObserver'
import AnimatedBackground from './components/AnimatedBackground'

import SocialSidebar from './components/SocialSidebar'
import ScrollToTop from './components/ScrollToTop'
import HomeSection from './components/HomeSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import SkillsProgress from './components/SkillsProgress'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <>

      <AnimatedBackground />
      <ScrollProgress />
      <Header />
      <SocialSidebar />
      <ScrollObserver>
        <main>
          <HomeSection />
          <StatsSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <SkillsProgress />
          <ContactSection />
        </main>
      </ScrollObserver>
      <ScrollToTop />
    </>
  )
}

export default App
