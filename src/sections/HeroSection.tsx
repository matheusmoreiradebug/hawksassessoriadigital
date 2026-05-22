'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import PegasusDashboard from '@/components/PegasusDashboard'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 5% 80px',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Ambient orbs */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}
      >
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)',
            filter: 'blur(130px)',
            opacity: 0.14,
            top: '-220px',
            left: '50%',
            animation: 'pulseOrb 8s ease-in-out infinite alternate',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #4a9eff 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.07,
            bottom: '-100px',
            left: '8%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: 0.06,
            bottom: '-50px',
            right: '8%',
          }}
        />
      </div>

      {/* Badge */}
      <motion.div {...fadeUp(0.2)} style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.22)',
            padding: '7px 16px',
            borderRadius: '100px',
            marginBottom: '32px',
            fontSize: '11px',
            fontWeight: 500,
            color: 'var(--gold-light)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span
            className="blink"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--gold)',
              flexShrink: 0,
              display: 'inline-block',
            }}
          />
          Tecnologia + IA + Performance
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.35)}
        style={{
          fontSize: 'clamp(38px, 6vw, 76px)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: 'var(--white)',
          maxWidth: '920px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Tecnologia, IA e performance
        <br />
        para empresas que querem
        <br />
        <span className="shimmer-text">crescer de verdade.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        {...fadeUp(0.5)}
        style={{
          fontSize: 'clamp(15px, 2vw, 19px)',
          color: 'var(--gray-300)',
          maxWidth: '620px',
          lineHeight: 1.7,
          margin: '24px 0 48px',
          fontWeight: 300,
          position: 'relative',
          zIndex: 1,
        }}
      >
        A Hawks une tráfego pago, sistemas inteligentes, IA operacional, branding
        e automação em uma única operação de crescimento.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.65)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Button href="#cta-final" variant="gold" size="lg">
          Agendar Diagnóstico
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Button>
        <Button href="#pegasus" variant="ghost" size="lg">
          Conhecer o Pegasus
        </Button>
      </motion.div>

      {/* Dashboard mockup */}
      <motion.div
        {...fadeUp(0.9)}
        style={{
          width: '100%',
          maxWidth: '1000px',
          marginTop: '72px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <PegasusDashboard variant="hero" />
      </motion.div>
    </section>
  )
}
