import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkspaceShowcase from './components/WorkspaceShowcase'
import GallerySection from './components/GallerySection'
import CollaborationSection from './components/CollaborationSection'
import UseCasesSection from './components/UseCasesSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <Navbar />
      <HeroSection />
      <WorkspaceShowcase />
      <GallerySection />
      <CollaborationSection />
      <UseCasesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
