'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroSectionChoppy() {
  const textRef      = useRef(null)
  const imgLeftRef   = useRef(null)
  const imgRightRef  = useRef(null)
  const skipRef      = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    // block scroll
    document.body.style.overflow = 'hidden'

    // start everything hidden
    containerRef.current.style.visibility = 'hidden'
    gsap.set([textRef.current, imgLeftRef.current, imgRightRef.current], {
      autoAlpha: 0
    })

    const tl = gsap.timeline({
      delay: 0.25,
      onStart: () => {
        containerRef.current.style.visibility = 'visible'
      },
      onComplete: finishIntro
    })

    // snap-in text in two steps, duration:0 (choppy)
    tl.to(textRef.current, {
      duration: 0,    // instant
      autoAlpha: 1,
      scale: 1,
      rotation: 10,
      x: 20
    }, 0.5)
    .to(textRef.current, {
      duration: 0,    // instant
      scale: 1.5,
      rotation: 0,
      x: 0
    }, 1)

    // images also snap in instantly
    tl.to([imgLeftRef.current, imgRightRef.current], {
      duration: 0,    // instant
      autoAlpha: 1,
      scale: 1
    }, 1)

    // skip logic
    skipRef.current.addEventListener('click', finishIntro)
    const onMouseDown = e => e.button === 0 && finishIntro()
    document.addEventListener('mousedown', onMouseDown)

    function finishIntro() {
      tl.kill()
      document.body.style.overflow = 'auto'
      skipRef.current.style.display = 'none'
      document.removeEventListener('mousedown', onMouseDown)
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('mousedown', onMouseDown)
      tl.kill()
    }
  }, [])

  return (
    <section className="hero">
      <div id="skip-text" ref={skipRef}>Press LMB to skip</div>
      <div
        className="container"
        ref={containerRef}
        style={{ visibility: 'hidden' }}
      >
        <div className="hero-content">
          <img
            ref={imgLeftRef}
            src="/images/teto-tetoris.gif"
            alt="Left GIF"
            className="hero-img"
          />
          <div className="hero-text" ref={textRef}>
            <div className="title">RICO</div>
            <div className="subtitle">Front-End Designer</div>
          </div>
          <img
            ref={imgRightRef}
            src="/images/teto-tetoris.gif"
            alt="Right GIF"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  )
}
