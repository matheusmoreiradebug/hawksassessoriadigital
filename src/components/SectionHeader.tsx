interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
  centered?: boolean
  titleMaxWidth?: string
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = false,
  titleMaxWidth = '680px',
}: SectionHeaderProps) {
  const align = centered ? 'center' : 'left'
  return (
    <div style={{ textAlign: align }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--gold)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '20px',
            height: '1px',
            background: 'var(--gold)',
          }}
        />
        {tag}
      </span>
      <h2
        style={{
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          color: 'var(--white)',
          maxWidth: centered ? '100%' : titleMaxWidth,
          margin: centered ? '0 auto' : undefined,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '17px',
            color: 'var(--gray-300)',
            lineHeight: 1.7,
            maxWidth: '560px',
            marginTop: '16px',
            fontWeight: 300,
            margin: centered ? '16px auto 0' : '16px 0 0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
