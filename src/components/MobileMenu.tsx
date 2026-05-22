'use client'

import { useEffect } from 'react'

const navLinks = [
  { href: '#problems', label: 'Problemas' },
  { href: '#services', label: 'Soluções' },
  { href: '#pegasus', label: 'Pegasus' },
  { href: '#cases', label: 'Cases' },
  { href: '#processo', label: 'Processo' },
]

export default function MobileMenu() {
  const close = () => {
    const menu = document.getElementById('mobile-menu')
    if (menu) menu.classList.remove('open')
  }

  useEffect(() => {
    document.querySelectorAll('.mob-link').forEach((l) =>
      l.addEventListener('click', close)
    )
  }, [])

  return (
    <>
      <div id="mobile-menu" aria-hidden="true">
        <button onClick={close} aria-label="Fechar menu" className="close-btn">
          &#10005;
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mob-link"
          >
            {link.label}
          </a>
        ))}
        <a href="#cta-final" className="mob-cta mob-link">
          Diagnóstico Gratuito
        </a>
      </div>

      <style jsx>{`
        #mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(5, 5, 7, 0.98);
          backdrop-filter: blur(20px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        #mobile-menu.open {
          display: flex;
        }
        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 24px;
          color: var(--gray-400);
          cursor: pointer;
          padding: 12px;
        }
        .mob-link {
          font-size: 24px;
          font-weight: 600;
          color: var(--gray-200);
          text-decoration: none;
          transition: color 0.2s;
          font-family: var(--font-sora);
        }
        .mob-link:hover {
          color: var(--gold);
        }
        .mob-cta {
          font-size: 16px !important;
          font-weight: 600;
          color: #050507 !important;
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%);
          padding: 14px 32px;
          border-radius: 10px;
          margin-top: 16px;
        }
      `}</style>
    </>
  )
}
