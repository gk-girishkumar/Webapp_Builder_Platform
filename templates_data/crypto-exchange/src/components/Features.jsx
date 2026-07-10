import React from "react";
import { ChevronRight, Layers3 } from "lucide-react";
import { features } from "../data";

export default function Features() {
  return (
    <section className="relative z-10 py-24 border-y border-white/10 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-200 mb-6">
            <Layers3 className="w-4 h-4" />
            Platform Capabilities
          </div>
          <h2 className="text-5xl font-black max-w-2xl">Designed for every layer of the crypto economy.</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mt-8">{feature.title}</h3>
                <p className="text-white/60 mt-5 leading-relaxed">{feature.text}</p>
                <button className="mt-8 flex items-center gap-2 text-cyan-300">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
