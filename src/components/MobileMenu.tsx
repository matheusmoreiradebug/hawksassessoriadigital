'use client'

import { useEffect } from 'react'

const navLinks = [
  { href: '#problems', label: 'Problemas' },
  { href: '#services', label: 'Soluções' },
  { href: '#pegasus', label: 'Pegasus' },
  { href: '#cases', label: 'Cases' },
  { href: '#processo', label: 'Processo' },
]

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 999,
  background: 'rgba(5,5,7,0.98)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  display: 'none',
}

const linkStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 600,
  color: 'var(--gray-200)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  fontFamily: 'var(--font-sora)',
}

const closeBtnStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  color: 'var(--gray-400)',
  cursor: 'pointer',
  padding: '12px',
  lineHeight: 1,
}

const ctaStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: 600,
  color: '#050507',
  background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)',
  padding: '14px 32px',
  borderRadius: '10px',
  textDecoration: 'none',
  fontFamily: 'var(--font-sora)',
  marginTop: '16px',
}

export default function MobileMenu() {
  const close = () => {
    const menu = document.getElementById('mobile-menu')
    if (menu) menu.style.display = 'none'
  }

  useEffect(() => {
    document.querySelectorAll('.mob-nav-link').forEach((l) =>
      l.addEventListener('click', close)
    )
    return () => {
      document.querySelectorAll('.mob-nav-link').forEach((l) =>
        l.removeEventListener('click', close)
      )
    }
  }, [])

  return (
    <div id="mobile-menu" style={overlayStyle}>
      <button onClick={close} aria-label="Fechar menu" style={closeBtnStyle}>
        &#10005;
      </button>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="mob-nav-link"
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-200)')}
        >
          {link.label}
        </a>
      ))}
      <a href="#cta-final" className="mob-nav-link" style={ctaStyle}>
        Diagnóstico Gratuito
      </a>
    </div>
  )
}
