export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem' }}>
          SM<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <p style={{ fontSize: '12px', color: 'var(--text3)' }}>
          Built with React + FastAPI · © {new Date().getFullYear()} Swayam Mohanty
        </p>
        <a href="mailto:Swayammohanty26@gmail.com" style={{ fontSize: '12px', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
          Swayammohanty26@gmail.com
        </a>
      </div>
    </footer>
  )
}
