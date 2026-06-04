 import { useState, useEffect } from 'react'

const roles = ['Full-Stack Developer', 'FastAPI Engineer', 'React Developer', 'AI & LLM Explorer', 'Django Developer']

export default function Hero() {
  const [txt, setTxt] = useState('')
  const [idx, setIdx] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = roles[idx]
    let t
    if (!del && txt.length < cur.length) t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 80)
    else if (!del && txt.length === cur.length) t = setTimeout(() => setDel(true), 2000)
    else if (del && txt.length > 0) t = setTimeout(() => setTxt(txt.slice(0, -1)), 40)
    else { setDel(false); setIdx(i => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [txt, del, idx])

  return (
    <section id="hero">
      <div className="ring1" /><div className="ring2" />
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">
          <div>
            <div className="fade" style={{ animationDelay: '.1s', marginBottom: '2rem' }}>
              <span className="badge green"><span className="dot" />Available for hire · May 2026</span>
            </div>
            <h1 className="hero-name fade" style={{ animationDelay: '.25s' }}>
              Hi, I'm<br /><span className="grad-text">Swayam Mohanty</span>
            </h1>
            <div className="fade" style={{ animationDelay: '.4s', marginBottom: '1.5rem', height: '2.5rem', display: 'flex', alignItems: 'center' }}>
              <span className="typewriter">{txt}<span className="cursor-blink">&nbsp;</span></span>
            </div>
            <p className="hero-bio fade" style={{ animationDelay: '.55s' }}>
              MCA student at Silicon University, graduating May 2026. I build scalable web systems with{' '}
              <span style={{ color: 'var(--green)', fontWeight: 600 }}>FastAPI</span> &amp;{' '}
              <span style={{ color: 'var(--violet)', fontWeight: 600 }}>React</span>, and explore{' '}
              <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Generative AI</span> &amp; LLMs.
            </p>
            <div className="fade" style={{ animationDelay: '.7s', display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="#projects" className="btn btn-primary">View My Work →</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
            <div className="fade" style={{ animationDelay: '.85s', display: 'flex', gap: '.75rem' }}>
              <a href="https://github.com/swayammohanty45?tab=repositories" target="_blank" rel="noreferrer" className="social">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="http://www.linkedin.com/in/swayam-mohanty-0553a2388" target="_blank" rel="noreferrer" className="social">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19h-3v-11h3v11zM6.5 6.7c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-3.37-4-3.12-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.77 7 2.48v6.76z"/></svg>
              </a>
              <a href="mailto:Swayammohanty26@gmail.com" className="social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
              </a>
            </div>
          </div>
          <div className="avatar-wrap fade" style={{ animationDelay: '.5s' }}>
            <div className="avatar-ring"><div className="avatar-ring-inner" /></div>
            <div className="avatar-center">
              <div style={{ textAlign: 'center' }}>
                <div className="avatar-initials">SM</div>
                <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: 4, letterSpacing: '.1em' }}>DEVELOPER</div>
              </div>
            </div>
            <div className="float-badge" style={{ left: -60, top: 20, color: 'var(--green)', border: '1px solid rgba(0,230,118,.25)', boxShadow: '0 0 16px rgba(0,230,118,.2)' }}>FastAPI</div>
            <div className="float-badge" style={{ left: 220, top: 40, color: 'var(--cyan)', border: '1px solid rgba(0,229,255,.25)', boxShadow: '0 0 16px rgba(0,229,255,.2)', animationDelay: '.5s' }}>React</div>
            <div className="float-badge" style={{ left: -40, top: 200, color: 'var(--violet)', border: '1px solid rgba(124,77,255,.25)', boxShadow: '0 0 16px rgba(124,77,255,.2)', animationDelay: '1s' }}>AI/ML</div>
            <div className="float-badge" style={{ left: 200, top: 190, color: '#ff7043', border: '1px solid rgba(255,112,67,.25)', boxShadow: '0 0 16px rgba(255,112,67,.2)', animationDelay: '1.5s' }}>Django</div>
          </div>
        </div>
      </div>
    </section>
  )
}