'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const listRef = useRef(null)

  useEffect(() => {
    gsap.set('.project-card', { scale: 0.5, rotation: -10, x: -20, opacity: 0 })
    const projectTl = gsap.timeline({
      scrollTrigger: {
        trigger: listRef.current,
        start: 'top 90%',
        toggleActions: 'play pause resume reset'
      }
    })
    projectTl
      .to('.project-card', {
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
        stagger: 0.2
      }, '-=0.2')

    // click-to-open
    listRef.current.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const link = card.getAttribute('data-link')
        if (link) window.open(link, '_blank')
      })
    })

    return () => {
      projectTl.kill()
      ScrollTrigger.kill()
    }
  }, [])

  const projects = [
    {
      dataLink: 'https://frico-anecdote.vercel.app/',
      img: '/images/anecdote.png',
      title: 'Anecdote',
      desc: 'Compilation of anecdotes themed around school life'
    },
    {
      dataLink: 'https://rico-movie-collections-with-gsap-but-cooler.vercel.app/',
      img: '/images/movie-collections.png',
      title: 'Movie Collections',
      desc: 'Very bland, I know (might do some decoration)'
    },
    {
      dataLink: '',
      img: '/images/kasane-pearto.jpg',
      title: 'Dummy',
      desc: 'This is a dummy project'
    },
    {
      dataLink: '',
      img: '/images/kasane-pearto.jpg',
      title: 'Dummy',
      desc: 'This is a dummy project'
    }
  ]

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list" ref={listRef}>
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card"
            data-link={p.dataLink}
          >
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
