'use client'

import { useEffect, useRef } from 'react'
import SectionHeader from '@/components/SectionHeader'

function useCounter(target: number, decimal = false) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const start = performance.now()
          const update = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            const val = target * ease
            el.textContent = decimal ? val.toFixed(1) : Math.floor(val).toString()
            if (progress < 1) requestAnimationFrame(update)
            else el.textContent = decimal ? target.toFixed(1) : String(target)
          }
          requestAnimationFrame(update)
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, decimal])

  return ref
}

function MetricCard({
  prefix,
  target,
  suffix,
  label,
  decimal,
  delay,
}: {
  prefix?: string
  target: number
  suffix?: string
  label: string
  decimal?: boolean
  delay: number
}) {
  const countRef = useCounter(target, decimal)

  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{
        padding: '24px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '12px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--white)',
        }}
      >
        {prefix && (
          <span style={{ fontSize: '0.55em', color: 'var(--gold)', verticalAlign: 'super' }}>
            {prefix}
          </span>
        )}
        <span ref={countRef}>0</span>
        {suffix && (
          <span style={{ fontSize: '0.55em', color: 'var(--gold)', verticalAlign: 'super' }}>
            {suffix}
          </span>
        )}
      </div>
      <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginTop: '6px', fontWeight: 300 }}>
        {label}
      </div>
    </div>
  )
}

export default function CasesSection() {
  return (
    <section
      id="cases"
      style={{
        padding: '120px 5%',
        background: 'var(--black-2)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal">
          <SectionHeader
            tag="Cases Reais"
            title="Resultados que falam por si."
            subtitle="Não vendemos promessas. Vendemos a estrutura que gera resultados documentados e mensuráveis."
          />
        </div>

        <div
          className="reveal"
          style={{
            background: 'var(--gray-900)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: 'clamp(32px, 5vw, 64px)',
            marginTop: '64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gold left border */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(180deg, var(--gold), var(--gold-light))',
            }}
          />

          {/* Gold top-right glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '24px',
            }}
          >
            Case #01 — Infinite Móveis
          </div>

          <h3
            style={{
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '-0.02em',
              maxWidth: '640px',
              lineHeight: 1.3,
              marginBottom: '48px',
            }}
          >
            De operação manual a sistema de crescimento escalável com IA e performance.
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '40px',
            }}
          >
            <MetricCard prefix="+" target={340} suffix="%" label="Crescimento em Receita" delay={1} />
            <MetricCard target={8} decimal suffix="x" label="ROAS Médio Alcançado" delay={2} />
            <MetricCard prefix="-" target={47} suffix="%" label="Redução no CPL" delay={3} />
            <MetricCard target={4} label="Meses para Escala" delay={4} />
          </div>

          <p
            style={{
              fontSize: '16px',
              color: 'var(--gray-300)',
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: '620px',
            }}
          >
            A Infinite Móveis chegou à Hawks com campanhas desorganizadas, sem dados confiáveis e um ROAS
            inconsistente abaixo de 3x. Estruturamos toda a operação de tráfego com{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>IA de otimização</strong>,
            implantamos o{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>Pegasus Analytics</strong> para
            visibilidade total e construímos automações que reduziram o trabalho manual em 80%. Em 4 meses,
            o faturamento triplicou.
          </p>
        </div>
      </div>
    </section>
  )
}
