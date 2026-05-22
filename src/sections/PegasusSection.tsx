'use client'

import SectionHeader from '@/components/SectionHeader'
import PegasusDashboard from '@/components/PegasusDashboard'

const features = [
  {
    title: 'Dashboard unificado',
    desc: 'Todas as métricas das suas campanhas em um único lugar, atualizado em tempo real.',
  },
  {
    title: 'IA de Insights',
    desc: 'O sistema identifica padrões e sugere ações automaticamente antes que você perceba o problema.',
  },
  {
    title: 'Automação inteligente',
    desc: 'Regras de otimização que ajustam campanhas com base em dados, não em suposições.',
  },
  {
    title: 'Agente IA integrado',
    desc: 'Um agente de inteligência artificial disponível 24/7 para análises, decisões e ações em tempo real.',
  },
]

export default function PegasusSection() {
  return (
    <section
      id="pegasus"
      style={{
        padding: '120px 5%',
        background: 'var(--black-3)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #4a9eff 0%, transparent 70%)',
          filter: 'blur(140px)',
          opacity: 0.04,
          top: '50%',
          right: '-100px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginBottom: '72px',
          }}
        >
          <div className="reveal">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(74,158,255,0.08)',
                border: '1px solid rgba(74,158,255,0.22)',
                padding: '6px 14px',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#4a9eff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
                marginBottom: '20px',
              }}
            >
              <span
                className="blink"
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#4a9eff',
                  display: 'inline-block',
                }}
              />
              Produto exclusivo Hawks
            </div>

            <SectionHeader
              tag="Pegasus Analytics"
              title="Inteligência operacional em tempo real."
              subtitle="Nossa plataforma proprietária de dados, IA e automação. Dados em tempo real, insights automáticos e ações que acontecem enquanto você dorme."
            />

            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    transition: 'all 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(74,158,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(74,158,255,0.16)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#4a9eff',
                      marginTop: '5px',
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ fontSize: '14px', color: 'var(--gray-200)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--white)', fontWeight: 600 }}>{f.title}</strong>
                    {' — '}
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mini dashboard preview */}
          <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(ellipse at center, rgba(74,158,255,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                background: 'var(--gray-900)',
                border: '1px solid rgba(74,158,255,0.15)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,158,255,0.05)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, #4a9eff, transparent)',
                  opacity: 0.5,
                }}
              />

              {/* Mini KPI grid */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gray-300)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                    PEGASUS — Visão Geral
                  </span>
                  <div
                    className="blink"
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#4ade80',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                  {[
                    { label: 'Gasto Total', value: 'R$ 11.789', change: '+12.5%', up: true },
                    { label: 'Conversas', value: '2.7K', change: '+9.2%', up: true },
                    { label: 'ROAS', value: '7.2x', change: '+0.8x', up: true },
                    { label: 'CPL', value: 'R$ 12,40', change: '-31%', up: false },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '10px',
                        padding: '12px',
                      }}
                    >
                      <div style={{ fontSize: '9px', color: 'var(--gray-500)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '5px' }}>
                        {kpi.label}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em' }}>
                        {kpi.value}
                      </div>
                      <div style={{ fontSize: '10px', color: kpi.up ? '#4ade80' : '#f87171', marginTop: '3px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                        {kpi.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    padding: '12px',
                    marginBottom: '10px',
                  }}
                >
                  <div style={{ fontSize: '9px', color: 'var(--gray-500)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                    EVOLUÇÃO — ÚLTIMOS 14 DIAS
                  </div>
                  <svg width="100%" height="50" viewBox="0 0 300 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="miniGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,45 C30,38 60,40 90,28 C120,16 150,30 180,22 C210,14 240,20 270,12 L300,8 L300,50 L0,50 Z"
                      fill="url(#miniGrad)"
                    />
                    <path
                      d="M0,45 C30,38 60,40 90,28 C120,16 150,30 180,22 C210,14 240,20 270,12 L300,8"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* AI insight */}
                <div
                  style={{
                    background: 'rgba(74,222,128,0.05)',
                    border: '1px solid rgba(74,222,128,0.15)',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    className="blink"
                    style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', marginTop: '4px', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#4ade80', marginBottom: '2px' }}>IA — Insight em tempo real</div>
                    <div style={{ fontSize: '11px', color: 'var(--gray-300)', lineHeight: 1.5 }}>
                      Campanha &quot;Conversão — Móveis&quot; com CPL 34% abaixo da meta. Recomendação: escalar budget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full dashboard */}
        <div className="reveal">
          <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.05)' }} />
            <span
              style={{
                fontSize: '11px',
                color: 'var(--gray-500)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Interface completa do Pegasus
            </span>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.05)' }} />
          </div>
          <PegasusDashboard variant="full" />
        </div>
      </div>
    </section>
  )
}
