# Hawks Assessoria Digital — Landing Page

Landing page premium para a Hawks Assessoria Digital, construída com Next.js 14, TypeScript, TailwindCSS e Framer Motion. Pronta para deploy na Vercel.

## Stack

- **Next.js 14** — App Router
- **TypeScript** — tipagem completa
- **TailwindCSS** — estilização utilitária
- **Framer Motion** — animações premium

## Estrutura do Projeto

```
hawks/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz com metadata
│   │   └── page.tsx            # Página principal
│   ├── components/
│   │   ├── Button.tsx          # Botão reutilizável com efeito magnético
│   │   ├── Footer.tsx          # Rodapé
│   │   ├── GridOverlay.tsx     # Grid tecnológico de fundo
│   │   ├── HawksLogo.tsx       # Logo SVG da Hawks
│   │   ├── MobileMenu.tsx      # Menu mobile
│   │   ├── Navbar.tsx          # Navbar com blur e scroll detection
│   │   ├── PegasusDashboard.tsx # Dashboard fiel ao Pegasus Analytics
│   │   ├── ScrollRevealProvider.tsx # Provider de animações on-scroll
│   │   └── SectionHeader.tsx   # Header de seção reutilizável
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero cinematográfico
│   │   ├── ProblemsSection.tsx # Problemas do mercado
│   │   ├── ServicesSection.tsx # Pilares da Hawks
│   │   ├── PegasusSection.tsx  # Seção do produto Pegasus
│   │   ├── DiferencialSection.tsx # Comparativo Hawks vs agências
│   │   ├── CasesSection.tsx    # Cases com contadores animados
│   │   ├── ProcessoSection.tsx # Processo de 4 etapas
│   │   └── CtaFinalSection.tsx # CTA final cinematográfico
│   └── styles/
│       └── globals.css         # Design tokens e estilos globais
├── public/                     # Assets estáticos
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

## Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## Deploy na Vercel

### Opção 1 — Via GitHub (recomendado)

1. Faça push deste repositório para o GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**
3. Importe o repositório do GitHub
4. A Vercel detecta automaticamente Next.js — clique em **Deploy**
5. Pronto! O site estará no ar em minutos.

### Opção 2 — Via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Personalização

### Número de WhatsApp
Substitua `5511999999999` pelo número real em:
- `src/components/Footer.tsx`
- `src/sections/CtaFinalSection.tsx`

### Cores
Todas as variáveis de design estão em `src/styles/globals.css`:
```css
--gold: #c9a84c;
--gold-light: #e8c97a;
--black: #050507;
```

### Logo
O componente `src/components/HawksLogo.tsx` renderiza a cabeça do falcão em SVG. Para substituir por um arquivo de imagem, use `next/image`:
```tsx
import Image from 'next/image'
<Image src="/logo.png" alt="Hawks" width={36} height={36} />
```

## Referências Visuais

- **Pegasus Dashboard** — réplica fiel ao design do sistema interno
- **Identidade** — preto profundo + dourado elegante + branco suave
- **Referências de design**: Stripe, Linear, Vercel, OpenAI, Framer

## Licença

© 2025 Hawks Assessoria Digital. Todos os direitos reservados.
