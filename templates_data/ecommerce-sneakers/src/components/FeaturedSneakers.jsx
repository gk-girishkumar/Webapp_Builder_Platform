import React from "react";
import { Flame, ChevronRight, Heart, Star, ArrowRight } from "lucide-react";
import { featuredSneakers } from "../data";

export default function FeaturedSneakers() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-5">
              <Flame className="w-4 h-4 text-orange-400" />
              Trending This Week
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Featured heat.
            </h2>
          </div>

          <button className="group flex items-center gap-2 text-zinc-300 hover:text-white transition">
            Explore Collection
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {featuredSneakers.map((shoe, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 hover:border-fuchsia-500/40 transition-all"
            >
              <div className="absolute top-5 left-5 z-10">
                <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-xs uppercase tracking-widest">
                  {shoe.tag}
                </div>
              </div>

              <button className="absolute top-5 right-5 z-10 w-11 h-11 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Heart className="w-5 h-5" />
              </button>

              <div className="overflow-hidden">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="h-[380px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>

                <h3 className="text-2xl font-black">{shoe.name}</h3>

                <div className="flex items-center justify-between mt-5">
                  <div>
                    <div className="text-sm text-zinc-400">Starting at</div>
                    <div className="text-3xl font-black">{shoe.price}</div>
                  </div>

                  <button className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center hover:rotate-[-8deg] transition">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
