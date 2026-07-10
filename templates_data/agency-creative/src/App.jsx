import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[550px] w-[550px] rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
