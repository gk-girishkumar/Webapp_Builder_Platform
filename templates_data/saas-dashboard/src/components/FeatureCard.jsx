import React from "react";
import { ChevronRight } from "lucide-react";

export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-cyan-400/10 p-4 text-cyan-300">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
        <p className="mt-4 leading-7 text-slate-400">{feature.description}</p>
        <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white">
          Explore capability
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
