'use client'
import HeroSection     from '../components/HeroSection'
import AboutSection    from '../components/AboutSection'
import SkillsSection   from '../components/SkillsSection'
import ArtspaceSection from '../components/ArtspaceSection'
import ContactSection  from '../components/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ArtspaceSection />
        <ContactSection />
    </>
  )
}
