import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import DestinationsGallery from "./components/DestinationsGallery";
import WhyWanderlust from "./components/WhyWanderlust";
import JournalSection from "./components/JournalSection";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_25%)] pointer-events-none" />

      <Navbar />
      <Hero />
      <Experiences />
      <DestinationsGallery />
      <WhyWanderlust />
      <JournalSection />
      <StatsSection />
      <Testimonials />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
