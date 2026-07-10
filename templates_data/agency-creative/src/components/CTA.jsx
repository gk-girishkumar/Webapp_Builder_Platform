import React from "react";
import { ShieldCheck, ArrowRight, MousePointer2 } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 p-10 backdrop-blur-2xl lg:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                Limited onboarding availability
              </div>

              <h2 className="text-5xl font-black leading-tight">
                Ready to create something impossible to ignore?
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                Aura Studio helps visionary brands move faster, look better, and connect deeper through premium creative execution.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
                  Book Discovery Call
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>

                <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 font-medium backdrop-blur-xl transition hover:bg-white/20">
                  <MousePointer2 className="h-5 w-5" />
                  View Interactive Deck
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="h-[420px] w-full rounded-[36px] object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-3xl font-black">48h</div>
                    <div className="text-sm text-white/60">Strategy turnaround</div>
                  </div>

                  <div>
                    <div className="text-3xl font-black">24/7</div>
                    <div className="text-sm text-white/60">Collaboration access</div>
                  </div>

                  <div>
                    <div className="text-3xl font-black">A+</div>
                    <div className="text-sm text-white/60">Creative execution</div>
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
