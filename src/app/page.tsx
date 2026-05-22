import GridOverlay from '@/components/GridOverlay'
import Navbar from '@/components/Navbar'
import MobileMenu from '@/components/MobileMenu'
import HeroSection from '@/sections/HeroSection'
import ProblemsSection from '@/sections/ProblemsSection'
import ServicesSection from '@/sections/ServicesSection'
import PegasusSection from '@/sections/PegasusSection'
import DiferencialSection from '@/sections/DiferencialSection'
import CasesSection from '@/sections/CasesSection'
import ProcessoSection from '@/sections/ProcessoSection'
import CtaFinalSection from '@/sections/CtaFinalSection'
import Footer from '@/components/Footer'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

function Divider() {
  return (
    <div
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
      }}
    />
  )
}

export default function Home() {
  return (
    <>
      <GridOverlay />
      <Navbar />
      <MobileMenu />
      <ScrollRevealProvider>
        <main>
          <HeroSection />
          <Divider />
          <ProblemsSection />
          <Divider />
          <ServicesSection />
          <Divider />
          <PegasusSection />
          <Divider />
          <DiferencialSection />
          <Divider />
          <CasesSection />
          <Divider />
          <ProcessoSection />
          <Divider />
          <CtaFinalSection />
        </main>
        <Footer />
      </ScrollRevealProvider>
    </>
  )
}
