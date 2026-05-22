import SectionHeader from '@/components/SectionHeader'

const comuns = [
  { icon: '—', text: 'Fazem posts e impulsionam anúncios sem estratégia de dados' },
  { icon: '—', text: 'Enviam relatórios em PDF, uma vez por mês, com dados do passado' },
  { icon: '—', text: 'Dependem de pessoas e processos manuais para absolutamente tudo' },
  { icon: '—', text: 'Entregam serviços isolados sem visão de crescimento integrado' },
  { icon: '—', text: 'Repetem as mesmas táticas sem evolução ou inteligência de dados' },
]

const hawks = [
  { text: 'Cria sistemas de tráfego pago com IA e otimização em tempo real' },
  { text: 'Dashboard vivo com dados em tempo real e insights automáticos de IA' },
  { text: 'Automações inteligentes que operam 24/7 sem intervenção humana' },
  { text: 'Constrói uma operação de crescimento completa e integrada' },
  { text: 'Evolui continuamente com dados, aprendizado de máquina e testes' },
]

export default function DiferencialSection() {
  return (
    <section
      id="diferencial"
      style={{
        padding: '120px 5%',
        background: 'var(--black-2)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <SectionHeader
            tag="O Diferencial"
            title="Agência ou empresa de tecnologia?"
            subtitle="A diferença não está apenas no que fazemos — está em como construímos e no que entregamos."
            centered
          />
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '20px',
            overflow: 'hidden',
            marginTop: '64px',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Comum */}
          <div style={{ background: 'var(--gray-900)', padding: '48px 40px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '32px',
                color: 'var(--gray-500)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Agências Comuns
            </div>
            {comuns.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  marginBottom: '22px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '14px',
                    color: 'var(--gray-500)',
                  }}
                >
                  {item.icon}
                </div>
                <span style={{ fontSize: '15px', color: 'var(--gray-500)', lineHeight: 1.5, fontWeight: 300 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Hawks */}
          <div
            style={{
              background: 'linear-gradient(160deg, var(--gray-800) 0%, var(--gray-900) 100%)',
              padding: '48px 40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.04) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '32px',
                color: 'var(--gold)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Hawks Assessoria Digital
            </div>
            {hawks.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  marginBottom: '22px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="14" height="14" fill="none" stroke="var(--gold)" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <span style={{ fontSize: '15px', color: 'var(--gray-200)', lineHeight: 1.5, fontWeight: 400 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
