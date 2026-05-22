'use client'

import { useRef, ReactNode, MouseEvent } from 'react'

interface ButtonProps {
  href?: string
  variant?: 'gold' | 'ghost'
  size?: 'md' | 'lg'
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}

export default function Button({
  href,
  variant = 'gold',
  size = 'md',
  children,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (variant !== 'gold' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * 0.22
    const y = (e.clientY - r.top - r.height / 2) * 0.22
    ref.current.style.transform = `translate(${x}px, ${y}px) translateY(-1px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = ''
  }

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sora)',
    fontWeight: variant === 'gold' ? 600 : 500,
    fontSize: size === 'lg' ? '15px' : '13px',
    padding: size === 'lg'
      ? (variant === 'gold' ? '14px 32px' : '13px 31px')
      : (variant === 'gold' ? '10px 22px' : '9px 21px'),
    borderRadius: size === 'lg' ? '10px' : '8px',
    textDecoration: 'none',
    transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    letterSpacing: '0.01em',
    cursor: 'pointer',
    willChange: 'transform',
    whiteSpace: 'nowrap',
    ...(variant === 'gold'
      ? {
          color: '#050507',
          background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)',
          border: 'none',
          boxShadow: '0 0 30px rgba(201,168,76,0.25)',
        }
      : {
          color: 'var(--gray-300)',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.08)',
        }),
  }

  return (
    <a
      ref={ref}
      href={href}
      style={baseStyle}
      className={className}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={(e) => {
        if (variant === 'ghost') {
          e.currentTarget.style.color = 'var(--white)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        } else {
          e.currentTarget.style.boxShadow = '0 0 50px rgba(201,168,76,0.42)'
        }
      }}
    >
      {children}
    </a>
  )
}
