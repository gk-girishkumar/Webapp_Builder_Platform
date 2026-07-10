import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import InsightsSection from "./components/InsightsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <FeaturesSection />
        <InsightsSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
