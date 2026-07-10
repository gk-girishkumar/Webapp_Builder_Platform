import React from "react";

export default function MetricCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{item.label}</p>
          <h3 className="mt-3 text-4xl font-black text-white">{item.value}</h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-cyan-400/10 p-3 text-cyan-300">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
