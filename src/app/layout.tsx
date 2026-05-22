import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Hawks Assessoria Digital — Tecnologia, IA e Performance',
  description:
    'A Hawks une tráfego pago, sistemas inteligentes, IA operacional, branding e automação em uma única operação de crescimento.',
  keywords: [
    'tráfego pago',
    'IA',
    'automação',
    'marketing de performance',
    'Meta Ads',
    'Google Ads',
    'branding',
    'desenvolvimento web',
  ],
  openGraph: {
    title: 'Hawks Assessoria Digital',
    description: 'Tecnologia, IA e performance para empresas que querem crescer de verdade.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
