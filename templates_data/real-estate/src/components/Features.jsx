import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { features } from "../data";

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-300 mb-5">
              <Sparkles className="w-4 h-4" />
              Premium Features
            </div>

            <h3 className="text-4xl md:text-5xl font-black leading-tight max-w-2xl">
              Elevated Experiences Designed Around Extraordinary Living
            </h3>
          </div>

          <p className="max-w-xl text-white/60 leading-relaxed text-lg">
            Every interaction is intentionally crafted to feel private,
            refined, and deeply personalized for discerning buyers and global
            investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-8">
                <feature.icon className="w-8 h-8 text-cyan-300" />
              </div>

              <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>

              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>

              <button className="mt-8 flex items-center gap-2 text-cyan-300 group-hover:gap-4 transition-all">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
