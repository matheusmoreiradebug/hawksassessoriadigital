'use client'

import SectionHeader from '@/components/SectionHeader'

const problems = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="var(--gray-300)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-10" />
        <path d="M20 7h-4v4" />
      </svg>
    ),
    title: 'Campanhas sem previsibilidade',
    desc: 'Investimento em tráfego pago sem dados reais de retorno. Decisões baseadas em achismos, não em inteligência de dados.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="var(--gray-300)" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Operações 100% manuais',
    desc: 'Processos repetitivos consumindo tempo e gerando erros. Nenhuma automação, nenhum sistema — só esforço humano.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="var(--gray-300)" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="3" width="7" height="7" rx="1" />
        <rect x="15" y="3" width="7" height="7" rx="1" />
        <rect x="2" y="14" width="7" height="7" rx="1" />
        <rect x="15" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Marketing desconectado',
    desc: 'Agências, freelancers e ferramentas sem integração. Estratégia, execução e análise em mundos completamente diferentes.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="var(--gray-300)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Dinheiro escorrendo pelo ralo',
    desc: 'Investimento sem otimização. Campanhas rodando sem IA, sem ajuste em tempo real, sem escala inteligente.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="var(--gray-300)" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: 'Falta de visibilidade real',
    desc: 'Dashboards que não dizem nada. Relatórios que chegam tarde. Nenhum sistema de inteligência operacional em tempo real.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="var(--gray-300)" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Sem estrutura para escalar',
    desc: 'A empresa cresce mas a operação não acompanha. Gargalos em todo lugar. Crescimento que gera caos, não resultados.',
  },
]

export default function ProblemsSection() {
  return (
    <section
      id="problems"
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
            tag="O Diagnóstico do Mercado"
            title="Por que a maioria das empresas não escala?"
            subtitle="Marketing sem inteligência, operações manuais e dados dispersos criam um teto invisível de crescimento."
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginTop: '64px',
          }}
        >
          {problems.map((p, i) => (
            <ProblemCard key={p.title} {...p} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  delay: number
}) {
  return (
    <div
      className={`reveal reveal-delay-${delay + 1}`}
      style={{
        background: 'var(--black-2)',
        padding: '36px 32px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--gray-900)'
        const bar = el.querySelector<HTMLElement>('.problem-bar')
        if (bar) bar.style.transform = 'scaleX(1)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--black-2)'
        const bar = el.querySelector<HTMLElement>('.problem-bar')
        if (bar) bar.style.transform = 'scaleX(0)'
      }}
    >
      <div
        className="problem-bar"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div
        style={{
          width: '44px',
          height: '44px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: '17px',
          fontWeight: 600,
          color: 'var(--white)',
          marginBottom: '10px',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: 'var(--gray-400)', lineHeight: 1.7, fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  )
}
