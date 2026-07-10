import React from "react";
import {
  Star,
  ChevronRight,
  Play,
  MoonStar,
  Clock3,
  Wine,
  Award,
} from "lucide-react";
import { stats } from "../data";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-xl">
              <Star className="h-4 w-4 text-amber-300 fill-amber-300" />
              <span className="text-sm text-white/80 tracking-wide">
                Awarded Three Michelin Stars Since 2019
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-serif tracking-tight">
              A Celestial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-500">
                Culinary
              </span>
              Experience
            </h1>

            <p className="mt-8 text-lg text-white/65 max-w-xl leading-relaxed">
              Hidden in the heart of Paris, L'Etoile delivers an immersive fine dining journey where artistry, precision, and atmosphere converge beneath golden candlelight.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="group bg-gradient-to-r from-amber-300 to-amber-500 text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-2xl shadow-amber-500/20">
                Discover The Menu
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </button>

              <button className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-8 py-4 rounded-full font-medium flex items-center gap-3 backdrop-blur-xl">
                <Play className="h-4 w-4 fill-white" />
                Watch Our Story
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
                >
                  <div className="text-3xl font-serif text-amber-300">
                    {item.number}
                  </div>
                  <div className="text-sm text-white/60 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full border border-amber-500/20" />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
                alt=""
                className="w-full h-[760px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.3em] text-white/50">
                        Tonight's Highlight
                      </div>
                      <div className="text-2xl font-serif mt-2">
                        The Lunar Tasting Voyage
                      </div>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-amber-300 text-black flex items-center justify-center">
                      <MoonStar className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/5 rounded-2xl p-4">
                      <Clock3 className="h-5 w-5 text-amber-300 mb-3" />
                      <div className="text-sm text-white/60">Duration</div>
                      <div className="mt-1 font-medium">2.5 Hours</div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <Wine className="h-5 w-5 text-amber-300 mb-3" />
                      <div className="text-sm text-white/60">Pairings</div>
                      <div className="mt-1 font-medium">8 Rare Wines</div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <Award className="h-5 w-5 text-amber-300 mb-3" />
                      <div className="text-sm text-white/60">Chef</div>
                      <div className="mt-1 font-medium">Adrien Moreau</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
