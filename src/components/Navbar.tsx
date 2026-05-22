'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HawksLogo from './HawksLogo'

const navLinks = [
  { href: '#problems', label: 'Problemas' },
  { href: '#services', label: 'Soluções' },
  { href: '#pegasus', label: 'Pegasus' },
  { href: '#cases', label: 'Cases' },
  { href: '#processo', label: 'Processo' },
]

const linkStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 400,
  color: 'var(--gray-300)',
  textDecoration: 'none',
  letterSpacing: '0.02em',
  transition: 'color 0.2s',
}

const ghostBtnStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 500,
  color: 'var(--gray-300)',
  background: 'transparent',
  padding: '9px 16px',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.08)',
  textDecoration: 'none',
  transition: 'all 0.25s',
  fontFamily: 'var(--font-sora)',
  cursor: 'pointer',
}

const goldBtnStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: '#050507',
  background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)',
  padding: '10px 22px',
  borderRadius: '8px',
  textDecoration: 'none',
  transition: 'all 0.25s',
  boxShadow: '0 0 30px rgba(201,168,76,0.25)',
  fontFamily: 'var(--font-sora)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onScroll()
    onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        background: scrolled ? 'rgba(5,5,7,0.94)' : 'rgba(5,5,7,0.6)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled
          ? '1px solid rgba(201,168,76,0.12)'
          : '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
      >
        <HawksLogo size={34} />
        <span
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--white)',
            letterSpacing: '-0.02em',
          }}
        >
          Hawks<span style={{ color: 'var(--gold)' }}>.</span>
        </span>
      </a>

      {/* Desktop Links */}
      {!isMobile && (
        <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-300)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop CTAs */}
      {!isMobile && (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a
            href="#pegasus"
            style={ghostBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--white)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--gray-300)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Conhecer Pegasus
          </a>
          <a
            href="#cta-final"
            style={goldBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 0 50px rgba(201,168,76,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '0 0 30px rgba(201,168,76,0.25)'
            }}
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
          }}
          aria-label="Abrir menu"
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            if (menu) menu.style.display = 'flex'
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: '22px',
                height: '1.5px',
                background: 'var(--gray-300)',
                display: 'block',
              }}
            />
          ))}
        </button>
      )}
    </motion.nav>
  )
}
