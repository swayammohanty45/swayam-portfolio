import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { sendContact } from '../services/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContact(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'var(--bg3)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius)', color: 'var(--text)',
    fontSize: '14px', fontFamily: 'var(--font-body)',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ color: 'var(--text3)', maxWidth: 460, marginBottom: '3rem' }}>
            Open to full-time roles, internships, and interesting collaborations. Graduating May 2026.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem' }} className="contact-grid">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'Swayammohanty26@gmail.com', href: 'mailto:Swayammohanty26@gmail.com' },
                { icon: <Phone size={16} />, label: 'Phone', value: '+91-7077418558', href: 'tel:+917077418558' },
                { icon: <MapPin size={16} />, label: 'Location', value: 'Odisha, India', href: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-glow)', border: '1px solid rgba(110,231,183,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: 1 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: '13px', color: 'var(--text)', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text)'}
                      >{item.value}</a>
                    ) : (
                      <span style={{ fontSize: '13px', color: 'var(--text)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Github size={16} />, url: 'https://github.com/swayammohanty45?tab=repositories', label: 'GitHub' },
                { icon: <Linkedin size={16} />, url: 'http://www.linkedin.com/in/swayam-mohanty-0553a2388', label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '100px', fontSize: '12px', color: 'var(--text3)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text3)' }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input name="name" placeholder="Your Name" value={form.name} onChange={handle} required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handle} required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <input name="subject" placeholder="Subject" value={form.subject} onChange={handle} required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
              <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handle} required rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />

              <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Sending...' : <><Send size={14} /> Send Message</>}
              </button>

              {status === 'success' && <p style={{ fontSize: '13px', color: 'var(--accent)' }}>Message sent! Swayam will get back to you soon.</p>}
              {status === 'error' && <p style={{ fontSize: '13px', color: '#f87171' }}>Something went wrong. Please email directly.</p>}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
