import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchSkills } from '../services/api'

const CATEGORY_COLORS = {
  Backend:     { bg: 'rgba(110,231,183,0.08)', border: 'rgba(110,231,183,0.25)', text: '#6ee7b7' },
  Frontend:    { bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.25)',  text: '#60a5fa' },
  Programming: { bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.25)', text: '#fbbf24' },
  AI:          { bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)',text: '#f472b6' },
  Database:    { bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)',text: '#a78bfa' },
  Tools:       { bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.25)', text: '#fb923c' },
}

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetchSkills().then(setSkills).catch(() => setSkills(FALLBACK_SKILLS))
  }, [])

  const categories = ['All', ...new Set(skills.map(s => s.category))]
  const visible = filter === 'All' ? skills : skills.filter(s => s.category === filter)

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p style={{ color: 'var(--text3)', maxWidth: 460, marginBottom: '2.5rem' }}>
            Technologies I use to build fast, reliable, and intelligent applications.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              style={{
                padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '12px', fontWeight: 500,
                border: '1px solid', transition: 'all 0.2s', fontFamily: 'var(--font-display)',
                letterSpacing: '0.03em',
                background: filter === cat ? 'var(--accent)' : 'transparent',
                borderColor: filter === cat ? 'var(--accent)' : 'var(--border)',
                color: filter === cat ? '#09090b' : 'var(--text3)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {visible.map((skill, i) => {
            const c = CATEGORY_COLORS[skill.category] || CATEGORY_COLORS.Tools
            return (
              <motion.div key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                style={{
                  padding: '1rem 1.25rem',
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: 'var(--radius)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--text)' }}>{skill.name}</span>
                  <span style={{ fontSize: '11px', color: c.text, fontWeight: 700 }}>{skill.level}%</span>
                </div>
                <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.04, ease: 'easeOut' }}
                    style={{ height: '100%', background: c.text, borderRadius: 2 }}
                  />
                </div>
                <span style={{ fontSize: '10px', color: 'var(--text3)', marginTop: '0.4rem', display: 'block' }}>{skill.category}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const FALLBACK_SKILLS = [
  { name: 'Python', category: 'Programming', level: 92 },
  { name: 'FastAPI', category: 'Backend', level: 88 },
  { name: 'Django', category: 'Backend', level: 85 },
  { name: 'React', category: 'Frontend', level: 78 },
  { name: 'MySQL', category: 'Database', level: 82 },
  { name: 'LLM / GenAI', category: 'AI', level: 75 },
]
