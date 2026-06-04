import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cur = useRef(), fol = useRef()

  useEffect(() => {
    // Custom cursor
    const move = e => {
      if (cur.current) cur.current.style.transform = `translate(${e.clientX - 6}px,${e.clientY - 6}px)`
      if (fol.current) fol.current.style.transform = `translate(${e.clientX - 19}px,${e.clientY - 19}px)`
    }
    window.addEventListener('mousemove', move)

    // Show all reveal elements immediately as fallback
    const showAll = () => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('show'))
    }

    // Try IntersectionObserver first
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }),
      { threshold: 0.05 }
    )

    // Wait for DOM to be ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal')
      if (elements.length === 0) {
        showAll()
      } else {
        elements.forEach(el => obs.observe(el))
      }
    }, 100)

    // Fallback — show everything after 1 second no matter what
    setTimeout(showAll, 1000)

    return () => {
      window.removeEventListener('mousemove', move)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cur} className="cursor" />
      <div ref={fol} className="cfollow" />
      <div className="bg-grid" />
      <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" /><div className="orb orb4" />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}