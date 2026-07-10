import React from "react";
import { stats } from "../data";

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 border border-white/10 flex items-center justify-center mb-6">
              <stat.icon className="w-7 h-7 text-cyan-300" />
            </div>
            <h3 className="text-5xl font-black">{stat.number}</h3>
            <p className="text-white/60 mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
