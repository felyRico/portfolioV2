'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef(null)
  const textRef      = useRef(null)
  const imgRef       = useRef(null)
  const skipRef      = useRef(null)
  const tlRef        = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    containerRef.current.style.visibility = 'hidden'

    // initial set
    gsap.set(textRef.current, { scale: 0.5, rotation: -10, x: -20 })

    // build timeline
    const tl = gsap.timeline({ delay: 0.25 })
    tl.to(textRef.current, { duration: 0, scale: 1,  rotation: 10,  x: 20 }, 0.5)
      .to(textRef.current, { duration: 0, scale: 1.5, rotation: 0,   x: 0  }, 1)
    tlRef.current = tl

    // show the rest once timeline completes
    tl.eventCallback('onComplete', () => {
      document.body.style.overflow = 'auto'
      containerRef.current.style.visibility = 'visible'
      skipRef.current.style.display = 'none'
      document.removeEventListener('mousedown', onMouseDownSkip)
    })

    // hero image fade/scale
    gsap.from(imgRef.current, {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      ease: 'back.out(1.7)'
    })

    // skip logic
    function skipAnimation() {
      tl.progress(1)
    }
    function onMouseDownSkip(e) {
      if (e.button === 0) skipAnimation()
    }
    skipRef.current.addEventListener('click', skipAnimation)
    document.addEventListener('mousedown', onMouseDownSkip)

    // cleanup
    return () => {
      document.body.style.overflow = 'auto'
      skipRef.current.removeEventListener('click', skipAnimation)
      document.removeEventListener('mousedown', onMouseDownSkip)
      tl.kill()
    }
  }, [])

  return (
    <section className="hero">
      <div id="skip-text" ref={skipRef} className="skip-text">
        Press LMB to skip
      </div>
      <div className="container" ref={containerRef}>
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <div className="title">RICO</div>
            <div className="subtitle">Front-End Designer</div>
          </div>
          <img
            ref={imgRef}
            className="hero-img"
            src="https://media.tenor.com/HvJ48-NOlfIAAAAi/teto-tetoris.gif"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  )
}
