import React from 'react'

interface HawksLogoProps {
  size?: number
  className?: string
}

// SVG hawk head matching the brand silhouette from the logo image
export default function HawksLogo({ size = 36, className = '' }: HawksLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hawks logo"
    >
      {/* Hawk head silhouette — based on brand mark */}
      <g>
        {/* Main head shape */}
        <path
          d="M72 18 C68 12, 60 10, 52 12 C44 14, 36 20, 30 28 C24 36, 22 44, 24 52
             C26 58, 30 62, 28 68 C26 72, 22 74, 20 78 C18 82, 22 86, 28 84
             C34 82, 38 76, 42 72 C46 68, 50 68, 54 70
             C58 72, 60 76, 64 74 C68 72, 68 66, 66 62
             C64 58, 62 54, 64 50 C66 46, 72 44, 76 40
             C80 36, 80 28, 76 22 Z"
          fill="url(#hawkBodyGrad)"
        />
        {/* Beak */}
        <path
          d="M72 18 C76 16, 82 18, 84 24 C86 28, 82 32, 78 30 C74 28, 72 24, 72 18 Z"
          fill="url(#hawkBodyGrad)"
        />
        {/* Eye */}
        <circle cx="64" cy="30" r="5" fill="var(--black)" />
        <circle cx="64" cy="30" r="2.5" fill="url(#eyeGrad)" />
        {/* Feather details */}
        <path
          d="M40 42 C36 38, 34 46, 38 48 C42 50, 44 44, 40 42Z"
          fill="rgba(0,0,0,0.3)"
        />
        <path
          d="M34 56 C30 52, 28 60, 32 62 C36 64, 38 58, 34 56Z"
          fill="rgba(0,0,0,0.3)"
        />
        <path
          d="M30 70 C26 66, 24 74, 28 76 C32 78, 34 72, 30 70Z"
          fill="rgba(0,0,0,0.3)"
        />
        {/* Wing/chest detail */}
        <path
          d="M44 50 C40 46, 36 50, 38 56 C40 60, 46 58, 48 54 C50 50, 46 48, 44 50Z"
          fill="rgba(0,0,0,0.2)"
        />
      </g>
      <defs>
        <linearGradient id="hawkBodyGrad" x1="20" y1="10" x2="86" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8c97a" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#a07830" />
        </linearGradient>
        <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8c97a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </radialGradient>
      </defs>
    </svg>
  )
}
