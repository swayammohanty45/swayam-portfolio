import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '5rem' }}>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(110,231,183,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="badge accent" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 7, animation: 'pulse 2s infinite' }} />
            Open to full-time roles · May 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.0,
          letterSpacing: '-0.03em', marginBottom: '1.5rem',
        }}>
          Swayam<br />
          <span style={{ color: 'var(--accent)' }}>Mohanty</span>
        </motion.h1>

        {/* Title */}
        <motion.p {...fadeUp(0.3)} style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          fontWeight: 500, color: 'var(--text2)', marginBottom: '1.5rem', maxWidth: 540,
        }}>
          Full-Stack Developer & AI Engineer
        </motion.p>

        {/* Bio */}
        <motion.p {...fadeUp(0.4)} style={{ fontSize: '1rem', color: 'var(--text3)', maxWidth: 500, lineHeight: 1.75, marginBottom: '2.5rem' }}>
          Building scalable web systems with <span style={{ color: 'var(--text2)' }}>FastAPI</span> &amp; <span style={{ color: 'var(--text2)' }}>React</span>.
          Exploring Generative AI and LLMs. Graduating MCA from Silicon University, May 2026.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={14} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.6)} style={{ display: 'flex', gap: '1rem' }}>
          {[
            { icon: <Github size={16} />, label: 'GitHub', url: 'https://github.com/swayammohanty45?tab=repositories' },
            { icon: <Linkedin size={16} />, label: 'LinkedIn', url: 'http://www.linkedin.com/in/swayam-mohanty-0553a2388' },
          ].map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px',
                color: 'var(--text3)', padding: '0.4rem 0.8rem',
                border: '1px solid var(--border)', borderRadius: '100px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text3)' }}
            >
              {s.icon} {s.label}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: 'absolute', bottom: '-3rem', left: 0, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text3)', fontSize: '12px' }}
        >
          <span style={{ display: 'block', width: 40, height: 1, background: 'var(--border-hover)' }} />
          Scroll to explore
        </motion.div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  )
}
