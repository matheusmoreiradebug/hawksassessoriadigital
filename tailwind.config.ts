import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        black: {
          DEFAULT: '#050507',
          2: '#0a0a0f',
          3: '#0f0f16',
        },
        gray: {
          900: '#12121a',
          800: '#1a1a26',
          700: '#22222f',
          600: '#2e2e3e',
          500: '#454558',
          400: '#6b6b80',
          300: '#9898ad',
          200: '#c4c4d0',
          100: '#e8e8ee',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          dim: 'rgba(201,168,76,0.15)',
          glow: 'rgba(201,168,76,0.08)',
        },
        blue: {
          accent: '#4a9eff',
        },
        white: {
          DEFAULT: '#f8f8fc',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-orb': 'pulseOrb 8s ease-in-out infinite alternate',
        'blink': 'blink 2s ease-in-out infinite',
        'count': 'count 2s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          to: { backgroundPosition: '200% center' },
        },
        pulseOrb: {
          from: { transform: 'translateX(-50%) scale(1)', opacity: '0.15' },
          to: { transform: 'translateX(-50%) scale(1.1)', opacity: '0.22' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)',
      },
    },
  },
  plugins: [],
}

export default config
