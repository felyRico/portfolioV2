'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function ArtspaceSection() {
  useEffect(() => {
    gsap.set('.artspace-card', { scale: 0.5, rotation: -10, x: -20, opacity: 0 })
    const artspaceTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.artspace-list',
        start: 'top 90%',
        toggleActions: 'play pause resume reset'
      }
    })
    artspaceTl.to('.artspace-card', {
      duration: 0.3,
      scale: 1,
      rotation: 10,
      x: 20,
      opacity: 1,
      stagger: 0.2
    }, 0)
    .to('.artspace-card', {
      duration: 0.3,
      scale: 1,
      rotation: 0,
      x: 0,
      stagger: 0.2
    }, '-=0.2')
  }, [])

  const artspaces = [
    { href: 'https://frico-anecdote.vercel.app/', img: '/images/anecdote.png', title: 'Anecdote', desc: 'Compilation of anecdotes themed around school life (they suck)' },
    { href: 'https://rico-movie-collections-with-gsap-but-cooler.vercel.app/', img: '/images/movie-collections.png', title: 'Movie Collections', desc: 'Very bland, I know (might do some decoration)' },
    { href: 'https://dvd-project-pxwj7pdez-felyricos-projects.vercel.app/', img: '/images/dvd.png', title: 'DVD Bounce', desc: 'I know that this is not "DESIGNish". I SWEAR, I WILL ACTUALLY DESIGN SOMETHING"' }
  ]

  return (
    <section className="artspace">
      <h2>My Artspace (With no art)</h2>
      <div className="artspace-list">
        {artspaces.map((a, i) => (
          <Link key={i} href={a.href || '#'} passHref>
            <div className="artspace-card" data-link={a.href}>
              <img src={a.img} alt={a.title} />
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
