import React from "react";
import {
  Sparkles,
  ArrowRight,
  Play,
  Heart,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { stats } from "../data";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              Next-gen sneaker marketplace experience
            </div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
              Own the
              <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 text-transparent bg-clip-text">
                rarest heat.
              </span>
            </h1>

            <p className="mt-8 text-lg text-zinc-400 max-w-xl leading-relaxed">
              HypeKicks is the premium destination for exclusive sneaker
              releases, collectible collaborations, and culture-defining
              streetwear energy.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="group px-7 py-4 rounded-2xl bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition-all">
                Shop New Drops
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <button className="px-7 py-4 rounded-2xl bg-white/5 border border-white/10 font-semibold flex items-center gap-3 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Watch Campaign
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <Icon className="w-6 h-6 text-fuchsia-400 mb-4" />
                    <div className="text-2xl font-black">{stat.value}</div>
                    <div className="text-sm text-zinc-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-fuchsia-500/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                alt="Sneaker"
                className="w-full h-[720px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-sm">
                  Ultra Rare Drop
                </div>
                <button className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl bg-black/40 border border-white/10 backdrop-blur-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-400 text-sm">Featured Sneaker</p>
                      <h3 className="text-3xl font-black mt-1">Air Pulse X</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400 text-sm">Current Price</p>
                      <div className="text-3xl font-black">$680</div>
                    </div>
                  </div>

                  <button className="mt-6 w-full py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition">
                    Buy Now
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -left-12 top-24 hidden xl:block">
              <div className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl p-5 w-64">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=300&q=80"
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <div>
                    <div className="font-bold">Drop Alert</div>
                    <div className="text-sm text-zinc-400">Tokyo Neon Series</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-zinc-400">Live in</div>
                    <div className="font-black text-xl">02:14:33</div>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
