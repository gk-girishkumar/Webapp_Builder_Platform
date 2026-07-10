import React from "react";
import { ArrowRight, ArrowUpRight, Figma, Play, Star, Trophy } from "lucide-react";

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-40 lg:pt-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            Designing products that feel timeless.
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            Minimal interfaces with
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
              {" "}meaningful impact.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            I’m Jane Doe — a senior product designer crafting elegant digital experiences for ambitious startups, premium brands, and forward-thinking product teams across fintech, AI, wellness, and commerce.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:scale-[1.02]">
              View Portfolio
              <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>

            <button className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/10">
              <Play className="h-5 w-5" />
              Watch Reel
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 hidden rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl lg:block">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-violet-500/20 p-3">
                <Figma className="h-6 w-6 text-violet-300" />
              </div>
              <div>
                <div className="text-sm text-zinc-400">Design Systems</div>
                <div className="text-lg font-semibold text-white">Enterprise Ready</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl shadow-violet-500/10">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="Hero"
              className="h-[700px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-400">Currently Designing</div>
                  <div className="mt-2 text-2xl font-semibold">
                    AI-native productivity experiences.
                  </div>
                </div>

                <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-6 hidden rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl lg:block">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-fuchsia-500/20 p-3">
                <Trophy className="h-6 w-6 text-fuchsia-300" />
              </div>
              <div>
                <div className="text-sm text-zinc-400">Recognition</div>
                <div className="text-lg font-semibold text-white">
                  Awwwards Honorable Mention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
