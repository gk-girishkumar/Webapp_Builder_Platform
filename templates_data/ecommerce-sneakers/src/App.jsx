import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBar from "./components/FeaturesBar";
import FeaturedSneakers from "./components/FeaturedSneakers";
import CommerceSection from "./components/CommerceSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_25%)] pointer-events-none" />

      <Navbar />
      <Hero />
      <FeaturesBar />
      <FeaturedSneakers />
      <CommerceSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
