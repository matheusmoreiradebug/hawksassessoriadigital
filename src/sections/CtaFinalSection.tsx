'use client'

import Button from '@/components/Button'

export default function CtaFinalSection() {
  return (
    <section
      id="cta-final"
      style={{
        padding: '160px 5%',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        zIndex: 1,
      }}
    >
      {/* Cinematic bottom glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.13) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(74,158,255,0.04) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="reveal"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontFamily: 'var(--font-mono)',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          // próximo_passo
        </span>

        <h2
          style={{
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--white)',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Construa uma operação de{' '}
          <span className="shimmer-text">crescimento real.</span>
        </h2>

        <p
          style={{
            fontSize: '18px',
            color: 'var(--gray-300)',
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: '48px',
          }}
        >
          Tecnologia, IA e performance trabalhando juntos para escalar sua empresa
          de forma previsível e sustentável.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button href="https://wa.me/5511999999999" variant="gold" size="lg" target="_blank" rel="noopener noreferrer">
            Agendar Diagnóstico Estratégico
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href="#pegasus" variant="ghost" size="lg">
            Ver o Pegasus
          </Button>
        </div>

        <p
          style={{
            marginTop: '36px',
            fontSize: '13px',
            color: 'var(--gray-500)',
          }}
        >
          Diagnóstico 100% gratuito · Sem compromisso · Resposta em até 24h
        </p>
      </div>
    </section>
  )
}
