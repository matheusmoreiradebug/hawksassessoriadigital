'use client'

import HawksLogo from './HawksLogo'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '48px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <HawksLogo size={28} />
        <span
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--gray-300)',
          }}
        >
          Hawks<span style={{ color: 'var(--gold)' }}>.</span> Assessoria Digital
        </span>
      </div>

      <p
        style={{
          fontSize: '12px',
          color: 'var(--gray-500)',
        }}
      >
        &copy; {new Date().getFullYear()} Hawks Assessoria Digital. Todos os direitos reservados.
      </p>

      <div style={{ display: 'flex', gap: '24px' }}>
        {['Privacidade', 'Termos', 'Contato'].map((item) => (
          <a
            key={item}
            href={item === 'Contato' ? 'https://wa.me/5511999999999' : '#'}
            target={item === 'Contato' ? '_blank' : undefined}
            rel={item === 'Contato' ? 'noopener noreferrer' : undefined}
            style={{
              fontSize: '12px',
              color: 'var(--gray-500)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-300)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-500)')}
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  )
}
