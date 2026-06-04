import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1rem 0',
        background: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--text)' }}>
          SM<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <nav style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text2)', transition: 'color 0.2s', letterSpacing: '0.02em' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
            >
              {l}
            </a>
          ))}
        </nav>

        <a href="mailto:Swayammohanty26@gmail.com" className="btn btn-primary" style={{ fontSize: '12px', padding: '0.5rem 1.1rem' }}>
          Hire Me
        </a>
      </div>
    </motion.header>
  )
}
