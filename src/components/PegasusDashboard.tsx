'use client'

import { useEffect, useRef } from 'react'

interface PegasusDashboardProps {
  variant?: 'hero' | 'full'
}

export default function PegasusDashboard({ variant = 'hero' }: PegasusDashboardProps) {
  const chartRef = useRef<SVGPathElement>(null)
  const areaRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    // Animate chart line on mount
    if (chartRef.current && areaRef.current) {
      const len = chartRef.current.getTotalLength()
      chartRef.current.style.strokeDasharray = String(len)
      chartRef.current.style.strokeDashoffset = String(len)
      chartRef.current.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.16,1,0.3,1) 1.2s'
      setTimeout(() => {
        if (chartRef.current) chartRef.current.style.strokeDashoffset = '0'
      }, 100)
    }
  }, [])

  return (
    <div
      style={{
        background: '#0f0f16',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow:
          '0 0 0 1px rgba(201,168,76,0.05), 0 40px 80px rgba(0,0,0,0.65), 0 0 120px rgba(201,168,76,0.06)',
        position: 'relative',
        fontFamily: 'var(--font-sora)',
      }}
    >
      {/* Gold top line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          opacity: 0.5,
        }}
      />

      {/* Top bar — window chrome */}
      <div
        style={{
          padding: '12px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
            <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '6px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            fontSize: '11px',
            color: 'var(--gray-400)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          app.pegasusanalytics.com.br — Dashboard / Visão Geral
        </div>
        <div
          style={{
            fontSize: '10px',
            color: '#4ade80',
            background: 'rgba(74,222,128,0.1)',
            padding: '3px 10px',
            borderRadius: '4px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            fontFamily: 'var(--font-mono)',
          }}
        >
          AO VIVO
        </div>
      </div>

      {/* Main layout */}
      <div style={{ display: 'flex', minHeight: '420px' }}>
        {/* Sidebar */}
        <div
          style={{
            width: '190px',
            flexShrink: 0,
            borderRight: '1px solid rgba(255,255,255,0.05)',
            padding: '16px 0',
            background: 'rgba(255,255,255,0.01)',
          }}
        >
          {/* Sidebar brand */}
          <div
            style={{
              padding: '0 16px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              marginBottom: '12px',
            }}
          >
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '-0.01em' }}>
              Pegasus
            </div>
            <div style={{ fontSize: '10px', color: 'var(--gray-500)', marginTop: '1px', fontFamily: 'var(--font-mono)' }}>
              Analytics
            </div>
          </div>

          {[
            { label: 'OPERAÇÃO', items: ['Dashboard', 'Campanhas', 'Agente IA', 'CRM / Kommo', 'Leads'] },
            { label: 'PERFORMANCE', items: ['Insights IA', 'Análise Estratégica', 'Relatórios'] },
            { label: 'AUTOMAÇÃO', items: ['Automações', 'Alertas'] },
          ].map((group) => (
            <div key={group.label} style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: '9px',
                  color: 'var(--gray-500)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '8px 16px 4px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {group.label}
              </div>
              {group.items.map((item, i) => (
                <div
                  key={item}
                  style={{
                    padding: '7px 16px',
                    fontSize: '12px',
                    color: group.label === 'OPERAÇÃO' && i === 0 ? 'var(--gold)' : 'var(--gray-400)',
                    background: group.label === 'OPERAÇÃO' && i === 0 ? 'rgba(201,168,76,0.08)' : 'transparent',
                    borderLeft: group.label === 'OPERAÇÃO' && i === 0 ? '2px solid var(--gold)' : '2px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                  }}
                >
                  {item}
                  {item === 'Agente IA' && (
                    <span
                      style={{
                        fontSize: '8px',
                        background: 'rgba(201,168,76,0.15)',
                        color: 'var(--gold)',
                        padding: '1px 5px',
                        borderRadius: '3px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      NOVO
                    </span>
                  )}
                  {item === 'Alertas' && (
                    <span
                      style={{
                        fontSize: '8px',
                        background: 'rgba(248,113,113,0.15)',
                        color: '#f87171',
                        padding: '1px 6px',
                        borderRadius: '3px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      2
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '20px', overflow: 'hidden' }}>
          {/* Page header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em' }}>
                Dashboard / Visão Geral
              </div>
              <div style={{ fontSize: '11px', color: 'var(--gold)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                Conta: Léo Vendedor Interno
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                  padding: '5px 10px',
                  fontSize: '11px',
                  color: 'var(--gray-300)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Este Mês
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '12px' }}>
            {[
              { label: 'GASTO TOTAL', value: 'R$ 11.789,41', sub: 'CPC: R$ 0,48', change: '+12.5%' },
              { label: 'IMPRESSÕES', value: '1.1M', sub: 'Alcance: 818.8K', change: '+8.7%' },
              { label: 'CLIQUES', value: '24.6K', sub: 'CTR: 2.17%', change: '+15.3%' },
              { label: 'CONVERSAS', value: '2.7K', sub: 'Custo/conv: R$ 4,37', change: '+9.2%' },
            ].map((kpi) => (
              <div
                key={kpi.label}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  padding: '14px',
                }}
              >
                <div style={{ fontSize: '9px', color: 'var(--gray-500)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                  {kpi.label}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {kpi.value}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--gray-500)', marginTop: '2px' }}>{kpi.sub}</div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'rgba(74,222,128,0.1)',
                    color: '#4ade80',
                    fontSize: '10px',
                    fontWeight: 600,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    marginTop: '8px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {kpi.change} vs período anterior
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostico row */}
          <div
            style={{
              fontSize: '9px',
              color: 'var(--gray-500)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: '8px',
            }}
          >
            DIAGNÓSTICO INTELIGENTE
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '12px' }}>
            {[
              { label: 'CTR', value: '2.17%', sub: 'Abaixo da média do nicho', status: 'Atenção', color: '#fbbf24' },
              { label: 'CPA', value: 'R$ 0,00', sub: 'Nenhuma conversão no período', status: 'Saudável', color: '#4ade80' },
              { label: 'CPM', value: 'R$ 10,28', sub: 'Dentro da média do nicho', status: 'Saudável', color: '#4ade80' },
              { label: 'CUSTO/CONVERSA', value: 'R$ 4,37', sub: 'Dentro do esperado', status: 'Saudável', color: '#4ade80' },
            ].map((diag) => (
              <div
                key={diag.label}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '9px', color: 'var(--gray-500)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>{diag.label}</span>
                  <span style={{ fontSize: '9px', color: diag.color, background: `${diag.color}18`, padding: '1px 5px', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{diag.status}</span>
                </div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em' }}>{diag.value}</div>
                <div style={{ fontSize: '10px', color: diag.color, marginTop: '2px' }}>{diag.sub}</div>
              </div>
            ))}
          </div>

          {/* Chart + Distribuição */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '10px' }}>
            {/* Chart */}
            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '10px',
                padding: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gray-300)', letterSpacing: '0.04em' }}>EVOLUÇÃO DE DESEMPENHO</div>
                  <div style={{ fontSize: '10px', color: 'var(--gray-500)', marginTop: '2px' }}>Últimos 14 dias — Gasto, Cliques, Conversas</div>
                </div>
                <div style={{ fontSize: '9px', color: '#4ade80', background: 'rgba(74,222,128,0.1)', padding: '3px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  Ao vivo
                </div>
              </div>
              <svg width="100%" height="100" viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="chartFill2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#4a9eff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Gold line — Gasto */}
                <path
                  d="M0,80 C20,72 40,68 60,52 C80,36 100,60 120,56 C140,52 160,30 180,38 C200,46 220,28 240,32 C260,36 280,50 300,44 C320,38 340,55 360,48 L400,42"
                  fill="url(#chartFill)"
                />
                <path
                  ref={chartRef}
                  d="M0,80 C20,72 40,68 60,52 C80,36 100,60 120,56 C140,52 160,30 180,38 C200,46 220,28 240,32 C260,36 280,50 300,44 C320,38 340,55 360,48 L400,42"
                  fill="none"
                  stroke="#c9a84c"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Blue line — Cliques */}
                <path
                  d="M0,92 C20,88 40,85 60,80 C80,75 100,82 120,78 C140,74 160,70 180,72 C200,74 220,66 240,68 C260,70 280,74 300,70 C320,66 340,72 360,68 L400,65"
                  fill="none"
                  stroke="#4a9eff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />
              </svg>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                {[{ color: '#c9a84c', label: 'Gasto' }, { color: '#4a9eff', label: 'Cliques' }, { color: 'var(--gray-500)', label: 'Conversas' }].map((l) => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: 'var(--gray-400)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: l.color, flexShrink: 0 }} />
                    {l.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Distribuição donut */}
            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '10px',
                padding: '14px',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gray-300)', marginBottom: '10px', letterSpacing: '0.04em' }}>DISTRIBUIÇÃO</div>
              <svg width="100%" height="90" viewBox="0 0 120 90">
                {/* Donut chart */}
                <circle cx="60" cy="45" r="35" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
                {/* Impressões 65% */}
                <circle cx="60" cy="45" r="35" fill="none" stroke="#c9a84c" strokeWidth="14" strokeDasharray="143 77" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 60 45)" />
                {/* Cliques 20% */}
                <circle cx="60" cy="45" r="35" fill="none" stroke="#4a9eff" strokeWidth="14" strokeDasharray="44 176" strokeDashoffset="-143" strokeLinecap="round" transform="rotate(-90 60 45)" />
                {/* Conversas 15% */}
                <circle cx="60" cy="45" r="35" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="14" strokeDasharray="33 187" strokeDashoffset="-187" strokeLinecap="round" transform="rotate(-90 60 45)" />
                <text x="60" y="49" textAnchor="middle" fill="var(--white)" fontSize="11" fontWeight="700" fontFamily="var(--font-sora)">818.8K</text>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                {[
                  { color: '#c9a84c', label: 'Impressões', val: '818.8K', pct: '65%' },
                  { color: '#4a9eff', label: 'Cliques', val: '24.6K', pct: '20%' },
                  { color: 'rgba(255,255,255,0.25)', label: 'Conversas', val: '2.7K', pct: '15%' },
                ].map((d) => (
                  <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: 'var(--gray-400)', fontFamily: 'var(--font-mono)' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                    <span style={{ flex: 1 }}>{d.label}</span>
                    <span style={{ color: 'var(--gray-200)' }}>{d.val}</span>
                    <span style={{ color: 'var(--gray-500)' }}>({d.pct})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar — Insights */}
        <div
          style={{
            width: '220px',
            flexShrink: 0,
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Insights IA */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', marginBottom: '10px', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
              INSIGHTS DA IA
            </div>
            {[
              { icon: '↑', color: '#4ade80', bg: 'rgba(74,222,128,0.08)', title: 'CTR acima da média!', sub: 'Seu CTR está 15.3% acima do período anterior.' },
              { icon: '!', color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', title: 'Atenção no CPA', sub: 'Nenhuma conversão registrada no período.' },
              { icon: '↗', color: '#60a5fa', bg: 'rgba(96,165,250,0.08)', title: 'Oportunidade de escala', sub: 'Campanhas com bom desempenho detectadas.' },
            ].map((ins) => (
              <div
                key={ins.title}
                style={{
                  background: ins.bg,
                  border: `1px solid ${ins.color}22`,
                  borderRadius: '8px',
                  padding: '8px 10px',
                  marginBottom: '6px',
                }}
              >
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                  <span style={{ color: ins.color, fontSize: '12px', fontWeight: 700, lineHeight: 1.4 }}>{ins.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--white)' }}>{ins.title}</div>
                    <div style={{ fontSize: '10px', color: 'var(--gray-400)', marginTop: '2px', lineHeight: 1.4 }}>{ins.sub}</div>
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                width: '100%',
                padding: '7px',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.18)',
                borderRadius: '6px',
                fontSize: '10px',
                color: 'var(--gold)',
                textAlign: 'center',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Ver todas as recomendações
            </div>
          </div>

          {/* Alertas Críticos */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gray-300)', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>ALERTAS CRÍTICOS</span>
              <span style={{ fontSize: '9px', background: 'rgba(248,113,113,0.15)', color: '#f87171', padding: '2px 6px', borderRadius: '4px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>2</span>
            </div>
            {[
              { title: 'Custo por Conversa Alto', sub: 'R$ 4,37 está acima da meta de R$ 4,00', time: '2m atrás' },
              { title: 'Orçamento Baixo', sub: 'Conta Léo Vendedor Inter com 15%', time: '15m atrás' },
            ].map((alerta) => (
              <div
                key={alerta.title}
                style={{
                  background: 'rgba(248,113,113,0.04)',
                  border: '1px solid rgba(248,113,113,0.15)',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  marginBottom: '6px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#f87171' }}>{alerta.title}</span>
                  <span style={{ fontSize: '9px', color: 'var(--gray-500)', fontFamily: 'var(--font-mono)' }}>{alerta.time}</span>
                </div>
                <div style={{ fontSize: '10px', color: 'var(--gray-400)', lineHeight: 1.4 }}>{alerta.sub}</div>
              </div>
            ))}
          </div>

          {/* Status IA */}
          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '8px',
              padding: '10px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gray-300)', marginBottom: '6px', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>STATUS DA IA</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <div className="blink" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: '#4ade80', fontWeight: 600 }}>Ativo e monitorando</span>
            </div>
            <div style={{ fontSize: '10px', color: 'var(--gray-500)' }}>Última análise: há 2 minutos</div>
            <div
              style={{
                width: '100%',
                marginTop: '8px',
                padding: '7px',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.18)',
                borderRadius: '6px',
                fontSize: '10px',
                color: 'var(--gold)',
                textAlign: 'center',
                cursor: 'pointer',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              Abrir Agente IA
              <span style={{ fontSize: '12px' }}>&#8599;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
