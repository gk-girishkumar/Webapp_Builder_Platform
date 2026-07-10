import React from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import { stats, logos } from "../data";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-16 lg:pb-36 lg:pt-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-white/5 px-4 py-2 text-sm text-fuchsia-200 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Award-winning creative systems for modern brands
          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            We build
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              {" "}magnetic{" "}
            </span>
            digital experiences.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Aura Studio partners with ambitious founders and global brands to create immersive websites, identity systems, motion experiences, and campaigns that command attention.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-7 py-4 font-semibold text-black shadow-[0_20px_80px_rgba(168,85,247,0.4)] transition hover:scale-105">
              Explore Our Work
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>

            <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-medium backdrop-blur-xl transition hover:bg-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Play className="h-4 w-4 fill-white" />
              </div>
              Watch Reel
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((item, idx) => (
              <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="text-3xl font-black">{item.value}</div>
                <div className="mt-2 text-sm text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-[680px] w-full rounded-[32px] object-cover"
            />

            <div className="absolute left-10 top-10 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 p-3">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-black">+340%</div>
                  <div className="text-sm text-white/60">Brand engagement</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 max-w-xs rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-fuchsia-300">
                <BadgeCheck className="h-5 w-5" />
                Creative excellence
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Every interaction is crafted to feel cinematic, intuitive, and emotionally resonant across every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/40">
              Trusted by bold brands
            </div>
            <h3 className="mt-4 text-3xl font-black">
              Building culture-shifting experiences worldwide.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8 text-2xl font-black text-white/40 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo, idx) => (
              <div key={idx} className="transition hover:text-white hover:scale-105">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
