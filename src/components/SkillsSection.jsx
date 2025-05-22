'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SkillsSection() {
  const skillsRef = useRef(null)
  const gsapBtn   = useRef(null)
  const htmlBtn   = useRef(null)

  useEffect(() => {
    // scroll trigger
    gsap.set(skillsRef.current, { scale: 0.5, rotation: 0, x: 0 })
    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 100%',
        toggleActions: 'play pause resume reset'
      }
    })
    skillsTl
      .to(skillsRef.current, { duration: 0.5, scale: 0.8 }, 0.5)
      .to(skillsRef.current, { duration: 0.5, scale: 1.2 }, 1)

    // click handlers
    function spin() {
      gsap.fromTo(this, { rotation: 0 }, { rotation: 720, duration: 0.4, ease: 'power2.out' })
    }
    function rainbow() {
      htmlBtn.current.classList.add('rainbow-active')
      htmlBtn.current.blur()
      setTimeout(() => htmlBtn.current.classList.remove('rainbow-active'), 2000)
    }

    const gsapEl = gsapBtn.current
    const htmlEl = htmlBtn.current
    gsapEl.addEventListener('click', spin)
    htmlEl.addEventListener('click', rainbow)

    return () => {
      skillsTl.kill()
      gsapEl.removeEventListener('click', spin)
      htmlEl.removeEventListener('click', rainbow)
      ScrollTrigger.kill()
    }
  }, [])

  return (
    <section className="skills" ref={skillsRef}>
      <h2>Skills</h2>
      <button ref={htmlBtn} className="html-css-skill">HTML + CSS</button>
      <button ref={gsapBtn} className="gsap-skill">GSAP</button>
    </section>
  )
}
