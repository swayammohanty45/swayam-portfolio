export default function About() {
  const stats = [
    { val: '7.88', label: 'MCA CGPA', color: 'var(--green)' },
    { val: '8.41', label: 'BCA CGPA', color: 'var(--violet)' },
    { val: '4+', label: 'Projects', color: 'var(--cyan)' },
    { val: '1', label: 'AI Internship', color: '#ff7043' },
  ]
  const traits = [
    { icon: '⌨', title: 'Full-Stack Builder', desc: 'FastAPI backends + React frontends. End-to-end product thinking.' },
    { icon: '🧠', title: 'AI Explorer', desc: 'Keras, PyTorch, LLM fine-tuning, prompt engineering.' },
    { icon: '🚀', title: 'Fast Learner', desc: 'Picks up new stacks quickly. Built 4 complete projects.' },
    { icon: '🤝', title: 'Team Player', desc: 'Strong communicator. Thrives in collaborative teams.' },
  ]
  return (
    <section id="about" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal">
          <span className="sec-label">About Me</span>
          <h2 className="sec-title">Who Am I<span className="grad-text">?</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem', alignItems: 'start' }} className="grid-2">
          <div className="reveal">
            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1.25rem', fontSize: '15px' }}>
              I'm a final-year <span style={{ color: 'var(--green)', fontWeight: 700 }}>MCA student</span> at Silicon University, Bhubaneswar with a deep passion for building real-world software. I specialize in Python backend systems and modern React frontends.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '15px' }}>
              My recent <span style={{ color: 'var(--violet)', fontWeight: 700 }}>Generative AI internship</span> pushed me into LLMs, deep learning with Keras/PyTorch, and production model deployment.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {stats.map(s => (
                <div className="stat" key={s.label}>
                  <div className="stat-val" style={{ color: s.color }}>{s.val}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {traits.map(t => (
              <div className="trait" key={t.title}>
                <div className="trait-icon">{t.icon}</div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: 6 }}>{t.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text3)', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}