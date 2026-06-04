import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'
import { fetchProjects } from '../services/api'

const FALLBACK = [
  {
    id: 1, title: 'PlantMD — AI Plant Disease Chatbot', category: 'AI / Full-Stack', featured: true, ai_powered: true,
    description: 'Full-stack AI chatbot with 5-step expert diagnostic protocol for plant disease detection achieving 90%+ accuracy.',
    highlights: ['5-step expert diagnostic protocol (90%+ accuracy)', 'Multi-photo upload + symptom questionnaire', 'Confidence-scored diagnosis with recovery timeline', 'Organic & commercial medicine recommendations'],
    tech_stack: ['React', 'Vision AI', 'LLM API', 'Prompt Engineering'],
    github_url: 'https://github.com/swayammohanty45?tab=repositories',
  },
  {
    id: 2, title: 'Learning Management System', category: 'Full-Stack', featured: true, ai_powered: false,
    description: 'Full-stack LMS with Student, Instructor, and Admin roles — course management, progress tracking, and certificates.',
    highlights: ['Role-based: Students, Instructors, Admins', 'Quizzes, grading, certificates', 'Dashboards, email notifications, discussions'],
    tech_stack: ['Django', 'Python', 'MySQL', 'Bootstrap'],
    github_url: 'https://github.com/swayammohanty45?tab=repositories',
  },
  {
    id: 3, title: 'Hospital Management System', category: 'Full-Stack', featured: false, ai_powered: false,
    description: 'Comprehensive hospital platform with patient registration, appointments, doctor scheduling, and billing.',
    highlights: ['Patient registration, appointments, billing', 'Secure roles: Admin, Doctor, Patient'],
    tech_stack: ['Django', 'Python', 'MySQL', 'HTML/CSS'],
    github_url: 'https://github.com/swayammohanty45?tab=repositories',
  },
  {
    id: 4, title: 'Event Management App', category: 'Full-Stack', featured: false, ai_powered: false,
    description: 'Full-stack Spring Boot web app with CRUD event management, authentication, and rich text editing.',
    highlights: ['CRUD: create, edit, publish, delete events', 'User authentication, rich text support'],
    tech_stack: ['Spring Boot', 'Java', 'SQL', 'JavaScript'],
    github_url: 'https://github.com/swayammohanty45?tab=repositories',
  },
]

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetchProjects().then(setProjects).catch(() => setProjects(FALLBACK))
  }, [])

  const categories = ['All', 'AI / Full-Stack', 'Full-Stack']
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p style={{ color: 'var(--text3)', maxWidth: 460, marginBottom: '2.5rem' }}>
            A selection of projects I've designed, built, and shipped.
          </p>
        </motion.div>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              style={{
                padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '12px', fontWeight: 500,
                border: '1px solid', transition: 'all 0.2s', fontFamily: 'var(--font-display)',
                background: filter === c ? 'var(--accent)' : 'transparent',
                borderColor: filter === c ? 'var(--accent)' : 'var(--border)',
                color: filter === c ? '#09090b' : 'var(--text3)',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {visible.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '1rem',
                transition: 'border-color 0.3s, transform 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.15)' }}
            >
              {p.ai_powered && (
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'linear-gradient(135deg, rgba(244,114,182,0.15), rgba(110,231,183,0.1))',
                  padding: '0.35rem 0.9rem', fontSize: '10px', fontWeight: 700,
                  color: 'var(--pink)', letterSpacing: '0.1em',
                  borderBottomLeftRadius: 'var(--radius)', display: 'flex', alignItems: 'center', gap: 4,
                  border: '1px solid rgba(244,114,182,0.2)', borderTop: 'none', borderRight: 'none',
                }}>
                  <Sparkles size={10} /> AI POWERED
                </div>
              )}

              <div>
                <span style={{ fontSize: '11px', color: 'var(--text3)', display: 'block', marginBottom: '0.4rem' }}>{p.category}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{p.title}</h3>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.65, flex: 1 }}>{p.description}</p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {p.highlights.slice(0, 3).map((h, hi) => (
                  <li key={hi} style={{ fontSize: '12px', color: 'var(--text2)', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <span style={{ color: 'var(--accent)', marginTop: 3, flexShrink: 0 }}>▸</span> {h}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech_stack.map(t => (
                  <span key={t} className="badge" style={{ fontSize: '10px' }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                {p.github_url && (
                  <a href={p.github_url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '12px', color: 'var(--text3)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
                  >
                    <Github size={13} /> GitHub
                  </a>
                )}
                {p.live_url && (
                  <a href={p.live_url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '12px', color: 'var(--accent)', transition: 'color 0.2s' }}
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
