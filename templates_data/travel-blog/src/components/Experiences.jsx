import React from "react";
import { Gem, ChevronRight } from "lucide-react";
import { stories } from "../data";

export default function Experiences() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 text-cyan-300 mb-4">
            <Gem className="w-5 h-5" />
            <span className="uppercase tracking-[0.3em] text-xs">Premium Experiences</span>
          </div>
          <h2 className="text-5xl font-black leading-tight max-w-2xl">
            Crafted for travelers who seek beauty, culture, and unforgettable moments.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stories.map((story, index) => (
          <div key={index} className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-2 hover:bg-white/[0.07] transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 border border-white/10 flex items-center justify-center mb-6">
              <story.icon className="w-8 h-8 text-cyan-200" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
            <p className="text-white/60 leading-relaxed">{story.description}</p>
            <button className="mt-8 flex items-center gap-2 text-cyan-300 group-hover:gap-4 transition-all">
              Learn More
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
