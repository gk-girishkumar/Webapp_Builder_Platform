import React from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07070c] text-white">
      <BackgroundEffects />
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Work />
        <About />
        <Workflow />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
