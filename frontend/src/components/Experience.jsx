import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin } from 'lucide-react'

const timeline = [
  {
    type: 'work',
    title: 'Generative AI Intern',
    org: 'AI Research Lab',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Built and fine-tuned deep learning models using Keras and PyTorch',
      'Developed ChatGPT-based conversational AI solutions for real-world applications',
      'Explored prompt engineering, LLM fine-tuning, and production model deployment',
    ],
  },
  {
    type: 'edu',
    title: 'Master of Computer Applications (MCA)',
    org: 'Silicon University, Bhubaneswar',
    period: 'Graduating May 2026 · CGPA: 7.88',
    points: ['Specializing in Full-Stack Development, AI/ML, and Software Engineering'],
  },
  {
    type: 'edu',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'U.N Autonomous College of SC. & Tech. Adaspur',
    period: 'Apr 2024 · CGPA: 8.41',
    points: ['Graduated with distinction — strong foundation in CS fundamentals'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">Journey</span>
          <h2 className="section-title">Experience &amp; Education</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '2rem', marginTop: '3rem' }} className="timeline-grid">

          {/* Left — about */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ paddingRight: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem' }}>
              <MapPin size={14} style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '13px', color: 'var(--text3)' }}>Odisha, India</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              About Me
            </h3>
            <p style={{ color: 'var(--text3)', fontSize: '14px', lineHeight: 1.8, marginBottom: '1rem' }}>
              I'm a final-year MCA student at Silicon University with a deep passion for building things that actually work in the real world —
              from REST APIs to AI-powered applications.
            </p>
            <p style={{ color: 'var(--text3)', fontSize: '14px', lineHeight: 1.8, marginBottom: '2rem' }}>
              My recent Generative AI internship pushed me into LLMs, prompt engineering, and deep learning with Keras and PyTorch.
              I bring together backend rigor (FastAPI, Django) and modern frontend (React) to ship complete products.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[['7.88', 'MCA CGPA'], ['8.41', 'BCA CGPA'], ['4+', 'Projects Shipped'], ['1', 'AI Internship']].map(([v, l]) => (
                <div key={l} style={{ padding: '1rem', background: 'var(--bg2)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div style={{ background: 'var(--border)', width: 1 }} />

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ paddingLeft: '2rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {timeline.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{ display: 'flex', gap: '1rem' }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: item.type === 'work' ? 'rgba(110,231,183,0.12)' : 'rgba(96,165,250,0.12)',
                    border: `1px solid ${item.type === 'work' ? 'rgba(110,231,183,0.3)' : 'rgba(96,165,250,0.3)'}`,
                    marginTop: 2,
                  }}>
                    {item.type === 'work' ? <Briefcase size={14} style={{ color: 'var(--accent)' }} /> : <GraduationCap size={14} style={{ color: 'var(--blue)' }} />}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>{item.title}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: 2 }}>{item.org}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: '0.5rem' }}>{item.period}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {item.points.map((pt, pi) => (
                        <li key={pi} style={{ fontSize: '12px', color: 'var(--text3)', display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>▸</span> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-grid { grid-template-columns: 1fr !important; }
          .timeline-grid > :nth-child(2) { display: none; }
        }
      `}</style>
    </section>
  )
}
