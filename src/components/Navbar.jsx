import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { content } from '../data/content'

const SECTION_IDS = ['intro','technologies','benefits','challenges','applications','statistics','partners','conclusion']

export default function Navbar() {
  const { isDark, toggleDark, isArabic, toggleLang } = useTheme()
  const activeSection = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const t = isArabic ? content.ar.nav : content.en.nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled ? 'var(--surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,.06)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="section-container">
        {/* Main bar — explicit flex with no-wrap so controls never disappear */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'64px', gap:'12px' }}>

          {/* Brand */}
          <a
            href="#"
            style={{ display:'flex', alignItems:'center', gap:'8px', textDecoration:'none',
                     color:'var(--green-1)', fontWeight:800, fontSize:'1.1rem', flexShrink:0 }}
          >
            <span style={{ fontSize:'1.5rem' }}>🌾</span>
            <span className="hidden sm:inline">{t.brand}</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5" style={{ flex:1, justifyContent:'center' }}>
            {t.links.map(link => {
              const id = link.href.replace('#','')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: isActive ? 'var(--green-1)' : 'var(--text-muted)',
                    background: isActive ? 'var(--bg-alt)' : 'transparent',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Controls — always visible, never wrapped */}
          <div className="navbar-controls">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                border: '1.5px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--green-1)',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                fontFamily: isArabic ? '"Source Sans 3", sans-serif' : 'Cairo, sans-serif',
              }}
            >
              {isArabic ? 'EN' : 'ع'}
            </button>

            {/* Dark mode */}
            <button
              onClick={toggleDark}
              style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                border: '1.5px solid var(--border)',
                background: 'var(--surface)',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(p => !p)}
              className="lg:hidden"
              style={{
                width: '36px', height: '36px',
                borderRadius: '8px',
                border: '1.5px solid var(--border)',
                background: 'var(--surface)',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '4px',
                flexShrink: 0,
              }}
            >
              <span style={{ display:'block', width:'16px', height:'2px', background:'var(--text)',
                             transition:'transform 0.25s',
                             transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
              <span style={{ display:'block', width:'16px', height:'2px', background:'var(--text)',
                             transition:'opacity 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display:'block', width:'16px', height:'2px', background:'var(--text)',
                             transition:'transform 0.25s',
                             transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', paddingBottom: '12px' }}>
            {t.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '10px 16px',
                  fontSize: '0.9rem', fontWeight: 500,
                  color: 'var(--text-muted)', textDecoration: 'none',
                  borderRadius: '8px', margin: '2px 8px',
                  transition: 'background 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.target.style.background='var(--bg-alt)'; e.target.style.color='var(--green-1)' }}
                onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='var(--text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
