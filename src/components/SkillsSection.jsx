'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function SkillsSection() {
  useEffect(() => {
    gsap.set('.skills', { scale: 0.5 })
    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 100%',
        toggleActions: 'play pause resume reset'
      }
    })
    skillsTl.to('.skills', { duration: 0.5, scale: 0.8, ease: 'steps(1)' }, 0.5)
            .to('.skills', { duration: 0.5, scale: 1.2, ease: 'steps(1)' }, 1)
  }, [])

  const handleGsapClick = e => {
    gsap.fromTo(e.currentTarget, { rotation: 0 }, { rotation: 720, duration: 0.4, ease: 'power2.out' })
  }
  const handleRainbow = e => {
    e.currentTarget.classList.add('rainbow-active')
    e.currentTarget.blur()
    setTimeout(() => e.currentTarget.classList.remove('rainbow-active'), 2000)
  }

  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skill-buttons">
        <button className="html-css-skill" onClick={handleRainbow}>
          HTML + CSS
        </button>
        <button className="gsap-skill" onClick={handleGsapClick}>
          GSAP
        </button>
      </div>
    </section>
  )
}
