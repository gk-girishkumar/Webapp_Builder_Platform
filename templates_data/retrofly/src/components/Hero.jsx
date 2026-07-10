import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center mb-24">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Welcome to{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Retrofly
        </span>
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
        Build a team retrospective tool named Retrofly that collects feedback
        in three simple steps, surfaces AI-detected patterns, and tracks
        action items — no scheduling required.
      </p>

      <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center mx-auto">
        Start Building Now <ChevronRight className="ml-2" />
      </button>
    </section>
  );
}
