import { useState } from 'react'

const PROJECTS = [
  { id:1, title:'PlantMD — AI Plant Disease Chatbot', category:'AI / Full-Stack', ai_powered:true,
    description:'Full-stack AI chatbot with 5-step expert diagnostic protocol achieving 90%+ accuracy.',
    highlights:['5-step diagnostic protocol (90%+ accuracy)','Multi-photo upload + 11-condition ruling','Medicine recommendations with dosage'],
    tech_stack:['React','Vision AI','LLM API','Prompt Eng.'] },
  { id:2, title:'Learning Management System', category:'Full-Stack', ai_powered:false,
    description:'Full-stack LMS with Student, Instructor, Admin roles — courses, progress tracking, certificates.',
    highlights:['Three role types with permissions','Course, quiz, grading management','Dashboards, notifications, discussions'],
    tech_stack:['Django','Python','MySQL','Bootstrap'] },
  { id:3, title:'Hospital Management System', category:'Full-Stack', ai_powered:false,
    description:'Comprehensive hospital platform with patient registration, appointments, and billing.',
    highlights:['Registration, appointments, billing','Secure roles: Admin, Doctor, Patient'],
    tech_stack:['Django','Python','MySQL','HTML/CSS'] },
  { id:4, title:'Event Management App', category:'Full-Stack', ai_powered:false,
    description:'Full-stack Spring Boot web app with CRUD event management and authentication.',
    highlights:['CRUD: create, edit, publish, delete','Auth, rich text support'],
    tech_stack:['Spring Boot','Java','SQL','JavaScript'] },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const cats = ['All', 'AI / Full-Stack', 'Full-Stack']
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal">
          <span className="sec-label">Work</span>
          <h2 className="sec-title">Featured <span className="grad-text">Projects</span></h2>
          <p style={{ color: 'var(--text3)', maxWidth: 460, marginBottom: '2.5rem' }}>
            A selection of projects I've designed, built, and shipped from scratch.
          </p>
        </div>
        <div className="reveal" style={{ display: 'flex', gap: '.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {cats.map(c => (
            <button key={c} className={`chip ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))', gap: '1.25rem' }}>
          {visible.map(p => (
            <div className="proj" key={p.id}>
              {p.ai_powered && <div className="ai-badge">✦ AI POWERED</div>}
              <div>
                <span style={{ fontSize: '11px', color: 'var(--text3)', display: 'block', marginBottom: 4 }}>{p.category}</span>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.3 }}>{p.title}</h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.7, flex: 1 }}>{p.description}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                {p.highlights.map((h, i) => (
                  <li key={i} style={{ fontSize: '12px', color: 'var(--text2)', display: 'flex', gap: 6 }}>
                    <span style={{ color: 'var(--green)', marginTop: 3, fontSize: 10 }}>◆</span>{h}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                {p.tech_stack.map(t => <span className="tech" key={t}>{t}</span>)}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <a href="https://github.com/swayammohanty45?tab=repositories" target="_blank" rel="noreferrer"
                  style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text3)' }}>⎇ View Code ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}