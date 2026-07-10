import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Features from "./components/Features";
import Analytics from "./components/Analytics";
import Stats from "./components/Stats";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,153,255,0.15),transparent_30%)]" />
      <Navbar />
      <Hero />
      <Integrations />
      <Features />
      <Analytics />
      <Stats />
      <Community />
      <Testimonials />
      <Pricing />
      <Download />
      <Footer />
    </div>
  );
}
