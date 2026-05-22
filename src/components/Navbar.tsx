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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
          Hawks
          <span style={{ color: 'var(--gold)' }}>.</span>
        </span>
      </a>

      {/* Desktop Links */}
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          listStyle: 'none',
        }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: 'var(--gray-300)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-300)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div className="hidden md:flex" style={{ gap: '12px', alignItems: 'center' }}>
        <a href="#pegasus" className="btn-ghost-nav">Conhecer Pegasus</a>
        <a href="#cta-final" className="btn-gold-nav">Diagnóstico Gratuito</a>
      </div>

      {/* Mobile hamburger trigger */}
      <button
        id="ham-btn"
        className="md:hidden"
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
          if (menu) menu.classList.add('open')
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

      <style jsx>{`
        .btn-ghost-nav {
          font-size: 13px;
          font-weight: 500;
          color: var(--gray-300);
          background: transparent;
          padding: 9px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-decoration: none;
          transition: all 0.25s;
          font-family: var(--font-sora);
        }
        .btn-ghost-nav:hover {
          color: var(--white);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }
        .btn-gold-nav {
          font-size: 13px;
          font-weight: 600;
          color: #050507;
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%);
          padding: 10px 22px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 0 30px rgba(201, 168, 76, 0.25);
          font-family: var(--font-sora);
        }
        .btn-gold-nav:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 50px rgba(201, 168, 76, 0.4);
        }
      `}</style>
    </motion.nav>
  )
}
