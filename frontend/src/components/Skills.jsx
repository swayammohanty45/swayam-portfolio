import { useEffect, useState } from 'react'
import { fetchSkills } from '../services/api'

const FALLBACK = [
  { name: 'Python', category: 'Backend', level: 92 },
  { name: 'FastAPI', category: 'Backend', level: 88 },
  { name: 'Django', category: 'Backend', level: 85 },
  { name: 'React', category: 'Frontend', level: 78 },
  { name: 'JavaScript', category: 'Frontend', level: 80 },
  { name: 'MySQL', category: 'Database', level: 82 },
  { name: 'HTML/CSS', category: 'Frontend', level: 88 },
  { name: 'Java', category: 'Programming', level: 72 },
  { name: 'LLM / GenAI', category: 'AI', level: 75 },
  { name: 'PyTorch', category: 'AI', level: 68 },
  { name: 'Git', category: 'Tools', level: 80 },
]

const COL = {
  Backend: '#00e676',
  Frontend: '#00e5ff',
  Programming: '#fbbf24',
  AI: '#ff4d8d',
  Database: '#a78bfa',
  Tools: '#fb923c',
}

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetchSkills().then(setSkills).catch(() => setSkills(FALLBACK))
  }, [])

  const cats = ['All', ...new Set(skills.map(s => s.category))]
  const visible = filter === 'All' ? skills : skills.filter(s => s.category === filter)

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal">
          <span className="sec-label">Expertise</span>
          <h2 className="sec-title">Skills & <span className="grad-text">Technologies</span></h2>
          <p style={{ color: 'var(--text3)', maxWidth: 440, marginBottom: '2.5rem' }}>
            The tools I use to build fast, reliable, and intelligent applications.
          </p>
        </div>
        <div className="reveal" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {cats.map(c => (
            <button key={c} className={`chip ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: '.875rem' }}>
          {visible.map(s => {
            const c = COL[s.category] || '#888'
            return (
              <div className="skill" key={s.name} style={{ border: `1px solid ${c}22` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: '13px' }}>{s.name}</span>
                  <span style={{ fontSize: '12px', color: c, fontWeight: 800 }}>{s.level}%</span>
                </div>
                <div className="bar">
                  <div className="bar-fill" style={{ background: `linear-gradient(90deg,${c},${c}88)`, width: `${s.level}%` }} />
                </div>
                <span style={{ fontSize: '10px', color: 'var(--text3)', marginTop: 5, display: 'block' }}>{s.category}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}