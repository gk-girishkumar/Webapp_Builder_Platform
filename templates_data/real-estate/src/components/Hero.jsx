import React from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Heart,
  MapPin,
  Play,
  Sparkles,
  Waves,
} from "lucide-react";
import { stats } from "../data";

export default function Hero() {
  return (
    <section className="relative pt-14 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Award-Winning Luxury Real Estate Platform
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">
                Modern Luxury
              </span>
              Beyond Imagination
            </h2>

            <p className="mt-8 text-lg text-white/65 max-w-2xl leading-relaxed">
              Luxe Living presents architecturally significant residences,
              oceanfront retreats, skyline penthouses, and globally admired
              estates tailored for extraordinary lifestyles.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <button className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-900 font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition">
                Explore Properties
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <button className="px-7 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center gap-3 hover:bg-white/10 transition">
                <Play className="w-5 h-5" />
                Watch Showcase
              </button>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                >
                  <item.icon className="w-6 h-6 text-cyan-300 mb-4" />
                  <div className="text-2xl font-black">{item.value}</div>
                  <div className="text-sm text-white/50 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=80"
                alt="Luxury estate"
                className="w-full h-[700px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

              <div className="absolute top-6 left-6 right-6 flex justify-between">
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">
                  <span className="text-sm">Beverly Hills Collection</span>
                </div>

                <button className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold">The Horizon Residence</h3>
                      <div className="flex items-center gap-2 text-white/70 mt-2">
                        <MapPin className="w-4 h-4" />
                        Beverly Hills, Los Angeles
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-black">$18.5M</div>
                      <div className="text-sm text-emerald-300">Available Now</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="rounded-2xl bg-black/20 p-4">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <BedDouble className="w-4 h-4" />
                        Bedrooms
                      </div>
                      <div className="text-xl font-bold mt-2">7</div>
                    </div>

                    <div className="rounded-2xl bg-black/20 p-4">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Bath className="w-4 h-4" />
                        Bathrooms
                      </div>
                      <div className="text-xl font-bold mt-2">9</div>
                    </div>

                    <div className="rounded-2xl bg-black/20 p-4">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Building2 className="w-4 h-4" />
                        Estate Size
                      </div>
                      <div className="text-xl font-bold mt-2">14k sq ft</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 hidden md:block rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-5 w-72">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-cyan-300 flex items-center justify-center">
                  <Waves className="w-7 h-7 text-slate-900" />
                </div>

                <div>
                  <div className="text-sm text-white/60">Waterfront Collection</div>
                  <div className="text-2xl font-black">48 Estates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
