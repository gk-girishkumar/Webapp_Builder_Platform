import React from "react";
import { ArrowRight } from "lucide-react";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sm uppercase tracking-[0.4em] text-amber-300">
            Signature Experiences
          </div>
          <h2 className="mt-5 text-5xl font-serif">
            Refined Luxury In Every Detail
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed text-lg">
            Every element inside L'Etoile has been meticulously curated to evoke timeless Parisian sophistication and sensory immersion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition duration-500 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-500 text-black flex items-center justify-center shadow-xl shadow-amber-500/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-8 text-2xl font-serif">{item.title}</h3>

                  <p className="mt-4 text-white/60 leading-relaxed">
                    {item.desc}
                  </p>

                  <button className="mt-8 flex items-center gap-2 text-amber-300 group-hover:gap-4 transition-all">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
