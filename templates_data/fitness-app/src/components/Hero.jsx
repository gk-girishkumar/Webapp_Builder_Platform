import React from "react";
import {
  Flame,
  ArrowRight,
  Play,
  Star,
  Apple,
  Smartphone,
  HeartPulse,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl">
            <Flame className="h-4 w-4" />
            #1 Rated Fitness Tracking Experience
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Build your strongest body with
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}intelligent fitness tracking.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            FitCore combines AI coaching, real-time biometric analysis, and immersive workout experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-5 text-lg font-semibold text-white">
              Start Your Journey
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold text-white backdrop-blur-xl">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" className="h-12 w-12 rounded-full border-2 border-[#050816] object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" className="h-12 w-12 rounded-full border-2 border-[#050816] object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" className="h-12 w-12 rounded-full border-2 border-[#050816] object-cover" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-slate-300">
                  Trusted by 2.4M athletes worldwide
                </div>
              </div>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Apple className="h-5 w-5 text-white" /> iOS
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-white" /> Android
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
              className="h-[700px] w-[360px] rounded-[2.5rem] object-cover"
            />

            <div className="absolute -left-12 top-20 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <HeartPulse className="h-6 w-6 text-green-400" />
                <div>
                  <div className="text-sm text-slate-400">Heart Recovery</div>
                  <div className="text-2xl font-bold">98%</div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-10 bottom-10 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Daily Progress</div>
                  <div className="mt-1 text-3xl font-black">84%</div>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 p-4">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
