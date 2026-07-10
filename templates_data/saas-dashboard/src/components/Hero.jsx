import React from "react";
import { ArrowRight, Play, Zap } from "lucide-react";
import { stats } from "../data";
import MetricCard from "./MetricCard";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Zap className="h-4 w-4" />
            AI-powered operational analytics
          </div>

          <h1 className="mt-8 text-5xl font-black leading-none tracking-tight text-white md:text-7xl">
            Real-time metrics for teams moving at internet speed.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">
            Nexus Analytics combines observability, AI forecasting, and growth intelligence into one beautifully engineered command center for modern organizations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition-all hover:scale-[1.02] hover:bg-white">
              Launch Dashboard
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              <Play className="h-5 w-5" />
              Watch Product Tour
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <MetricCard key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
            <div className="text-center text-slate-300 py-32">Analytics Dashboard Preview</div>
          </div>
        </div>
      </div>
    </section>
  );
}
