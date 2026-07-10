import React from "react";
import Navbar from "./components/Navbar";
import TickerBar from "./components/TickerBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Ecosystem from "./components/Ecosystem";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden min-h-screen relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      </div>

      <Navbar />
      <TickerBar />
      <Hero />
      <Features />
      <Gallery />
      <Ecosystem />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
