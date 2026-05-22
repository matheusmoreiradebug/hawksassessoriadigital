'use client'

import { useEffect, useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'

const services = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--gold)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    name: 'Performance',
    items: ['Meta Ads — Escala real', 'Google Ads — Search & Display', 'Otimização com IA', 'ROAS maximizado'],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--gold)" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14v7M14 17.5h7" />
      </svg>
    ),
    name: 'Tecnologia',
    items: ['IA operacional', 'Sistemas personalizados', 'Automações inteligentes', 'Dashboards em tempo real'],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--gold)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    name: 'Branding',
    items: ['Design estratégico', 'Posicionamento premium', 'Identidade visual', 'Criativos de alta conversão'],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--gold)" strokeWidth="1.5" viewBox="0 0 24 24">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    name: 'Produção',
    items: ['Edição de vídeo premium', 'Motion design', 'Conteúdo visual estratégico', 'Desenvolvimento web'],
  },
]

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="services"
      style={{
        padding: '120px 5%',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '48px' : '80px',
          alignItems: 'start',
        }}
      >
        {/* Sticky left */}
        <div
          className="reveal"
          style={{ position: 'sticky', top: '100px' }}
        >
          <SectionHeader
            tag="O Que a Hawks Faz"
            title="Quatro pilares. Uma operação de crescimento."
            subtitle="Não somos uma agência de marketing. Somos uma empresa de tecnologia que constrói sistemas de crescimento."
          />
          <div style={{ marginTop: '36px' }}>
            <Button href="#cta-final" variant="gold" size="lg">
              Começar agora
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--gray-900)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '14px',
                padding: '28px 24px',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,168,76,0.22)'
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
                const glow = el.querySelector<HTMLElement>('.card-glow')
                if (glow) glow.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.06)'
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
                const glow = el.querySelector<HTMLElement>('.card-glow')
                if (glow) glow.style.opacity = '0'
              }}
            >
              <div
                className="card-glow"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.4s',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ marginBottom: '16px' }}>{s.icon}</div>
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              >
                {s.name}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {s.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '12px',
                      color: 'var(--gray-400)',
                      paddingLeft: '14px',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--gold)',
                        fontSize: '10px',
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
