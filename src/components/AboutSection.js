'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const containerRef = useRef(null)
  const aboutRef    = useRef(null)

  useEffect(() => {
    gsap.set(containerRef.current, { autoAlpha: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 100%',
        toggleActions: 'play pause resume reset',
      }
    })

    // first make container visible and then animate .about
    tl.to(containerRef.current, { autoAlpha: 1, duration: 0.3 }, 0)
      .to(aboutRef.current, { duration: 0, scale: 0.8, rotation: 10, x: 20 }, 0.5)
      .to(aboutRef.current, { duration: 0, scale: 1.2, rotation: 0, x: 0 }, 1)

    return () => {
      tl.kill()
      ScrollTrigger.kill()
    }
  }, [])

  return (
    <div className="container" ref={containerRef}>
      <section className="about" ref={aboutRef}>
        <h2>About Me</h2>
        <p>
          Hello! I'm Frederico Sarren, a software engineering student at Tri Ratna
          School. I have a strong foundation in HTML, CSS, and GSAP, and I love
          using animations to create engaging interactions. (´｡• ᵕ •｡`) ♡
        </p>
      </section>
      <section className="placeholder">
        <img src="/images/cool-photo.jpg" alt="Cool Photo" />
        <p>(Picture taken by Jolyn Horencia)</p>
      </section>
    </div>
  )
}
