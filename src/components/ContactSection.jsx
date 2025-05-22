'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ContactSection() {
  const contactRef = useRef(null)

  useEffect(() => {
    // simple fade‐up on load
    gsap.from(contactRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power1.out',
      delay: 2
    })
  }, [])

  return (
    <section className="contacts" ref={contactRef}>
      <h2>Find Me Online</h2>
      <a
        id="githubLink"
        href="https://github.com/felyRico"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub Logo"
          className="logo"
        />
      </a>
      <div className="hr-contact">
        <p>Phone: +62 838-2597-1859</p>
        <p>Email: fredericosarren01@gmail.com</p>
      </div>
    </section>
  )
}
