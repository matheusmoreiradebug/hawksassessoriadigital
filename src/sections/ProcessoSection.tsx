'use client'

import SectionHeader from '@/components/SectionHeader'

const steps = [
  {
    num: '01',
    name: 'Diagnóstico',
    desc: 'Análise completa da operação atual — campanhas, dados, processos, tecnologia e oportunidades ocultas de crescimento.',
    tag: 'Semana 1',
  },
  {
    num: '02',
    name: 'Estruturação',
    desc: 'Planejamento estratégico, definição de sistemas, arquitetura de automações e configuração da tecnologia base.',
    tag: 'Semanas 2–3',
  },
  {
    num: '03',
    name: 'Implementação',
    desc: 'Execução completa — campanhas, automações, IA, dashboards e integrações. Operação funcionando do zero ao topo.',
    tag: 'Semanas 4–6',
  },
  {
    num: '04',
    name: 'Escala',
    desc: 'Otimização contínua com IA, expansão de canais, aumento inteligente de budget e maximização de ROAS.',
    tag: 'Mês 2+',
  },
]

export default function ProcessoSection() {
  return (
    <section
      id="processo"
      style={{
        padding: '120px 5%',
        background: 'var(--black-3)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <SectionHeader
            tag="Como Funciona"
            title="Do diagnóstico à escala."
            subtitle="Um processo estruturado, sem achismos. Cada etapa com entregáveis claros e resultados mensuráveis."
            centered
          />
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
            marginTop: '64px',
          }}
        >
          {steps.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({
  num,
  name,
  desc,
  tag,
}: {
  num: string
  name: string
  desc: string
  tag: string
}) {
  return (
    <div
      style={{
        background: 'var(--black-3)',
        padding: '40px 32px',
        transition: 'background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--gray-900)'
        const numEl = el.querySelector<HTMLElement>('.step-num')
        if (numEl) numEl.style.color = 'rgba(201,168,76,0.1)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--black-3)'
        const numEl = el.querySelector<HTMLElement>('.step-num')
        if (numEl) numEl.style.color = 'rgba(255,255,255,0.04)'
      }}
    >
      <div
        className="step-num"
        style={{
          fontSize: '48px',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.04)',
          letterSpacing: '-0.03em',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1,
          marginBottom: '20px',
          transition: 'color 0.3s',
        }}
      >
        {num}
      </div>
      <h3
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--white)',
          marginBottom: '12px',
          letterSpacing: '-0.01em',
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: '13px',
          color: 'var(--gray-400)',
          lineHeight: 1.7,
          fontWeight: 300,
        }}
      >
        {desc}
      </p>
      <div
        style={{
          display: 'inline-block',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          border: '1px solid rgba(201,168,76,0.2)',
          padding: '4px 10px',
          borderRadius: '4px',
          marginTop: '20px',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {tag}
      </div>
    </div>
  )
}
