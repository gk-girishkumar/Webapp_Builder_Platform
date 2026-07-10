import React from 'react';
import './index.css';
import { ChevronRight, Layers, Zap, Smartphone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          AssetWise
        </div>
        <nav className="space-x-6 hidden md:block">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg font-semibold transition-opacity">Get Started</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AssetWise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Build an internal dashboard for tracking company equipment and assigning assets to employees. Include data tables, status badges, and chart summaries.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center mx-auto">
            Start Building Now <ChevronRight className="ml-2" />
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors">
            <Layers className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Modern Design</h3>
            <p className="text-gray-400">Beautiful, minimal aesthetic fully built with React and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-secondary transition-colors">
            <Zap className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Lightning Fast</h3>
            <p className="text-gray-400">Optimized component structure ensures maximum performance.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors">
            <Smartphone className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Responsive</h3>
            <p className="text-gray-400">Flawless experience across all devices and screen sizes.</p>
          </div>
        </section>
      </main>

      <footer className="text-center p-8 text-gray-500 border-t border-gray-800 mt-20">
        <p>&copy; 2026 AssetWise. Built with React.</p>
      </footer>
    </div>
  );
}
