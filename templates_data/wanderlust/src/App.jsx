import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-20">
        <Hero />
        <FeaturesGrid />
      </main>

      <Footer />
    </div>
  );
}
