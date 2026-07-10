import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Philosophy from "./components/Philosophy";
import TastingMenu from "./components/TastingMenu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservations from "./components/Reservations";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <Navbar />
      <Hero />
      <Experiences />
      <Philosophy />
      <TastingMenu />
      <Gallery />
      <Testimonials />
      <Reservations />
      <CTASection />
      <Footer />
    </div>
  );
}
