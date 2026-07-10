import React from "react";
import { SunMedium } from "lucide-react";

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
      <div className="rounded-[3rem] overflow-hidden relative border border-white/10">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80" className="w-full h-[620px] object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 p-10 lg:p-20 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-8">
              <SunMedium className="w-4 h-4 text-cyan-300" />
              <span className="text-sm">Begin your next chapter</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black leading-[0.95]">The world is waiting for your story.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
