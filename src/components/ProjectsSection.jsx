'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  useEffect(() => {
    gsap.set('.project-card', { scale: 0.5, rotation: -10, x: -20, opacity: 0 })
    const projectTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.project-list',
        start: 'top 90%',
        toggleActions: 'play pause resume reset'
      }
    })
    projectTl.to('.project-card', {
      duration: 0.3,
      scale: 1,
      rotation: 10,
      x: 20,
      opacity: 1,
      stagger: 0.2
    }, 0)
    .to('.project-card', {
      duration: 0.3,
      scale: 1,
      rotation: 0,
      x: 0,
      stagger: 0.2
    }, '-=0.2')
  }, [])

  const projects = [
    { href: 'https://frico-anecdote.vercel.app/', img: '/images/anecdote.png', title: 'Anecdote', desc: 'Compilation of anecdotes themed around school life (they suck)' },
    { href: 'https://rico-movie-collections-with-gsap-but-cooler.vercel.app/', img: '/images/movie-collections.png', title: 'Movie Collections', desc: 'Very bland, I know (might do some decoration)' },
    // dummy entries...
  ]

  return (
    <section className="projects">
      <h2>PROJECTS</h2>
      <div className="project-list">
        {projects.map((p,i) => (
          <Link key={i} href={p.href || '#'} passHref>
            <div className="project-card" data-link={p.href}>
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
