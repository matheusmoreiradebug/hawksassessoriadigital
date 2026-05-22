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

export default function Home() {
  return (
    <>
      <GridOverlay />
      <Navbar />
      <MobileMenu />
      <ScrollRevealProvider>
        <main>
          <HeroSection />
          <div className="divider" />
          <ProblemsSection />
          <div className="divider" />
          <ServicesSection />
          <div className="divider" />
          <PegasusSection />
          <div className="divider" />
          <DiferencialSection />
          <div className="divider" />
          <CasesSection />
          <div className="divider" />
          <ProcessoSection />
          <div className="divider" />
          <CtaFinalSection />
        </main>
        <Footer />
      </ScrollRevealProvider>

      <style jsx global>{`
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent);
        }
      `}</style>
    </>
  )
}
