import React from "react";
import { Layers3 } from "lucide-react";
import { commerceFeatures, gallery } from "../data";

export default function CommerceSection() {
  return (
    <section className="py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-6">
              <Layers3 className="w-4 h-4 text-cyan-400" />
              Built for collectors
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              The future of sneaker commerce.
            </h2>

            <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
              From AI-powered rarity tracking to instant authentication and
              exclusive member drops, HypeKicks redefines the modern sneaker
              experience.
            </p>

            <div className="mt-12 space-y-5">
              {commerceFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h4 className="font-bold text-xl">{item.title}</h4>
                      <p className="text-zinc-400 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src={gallery[0]}
                className="rounded-[32px] h-[420px] w-full object-cover"
              />
              <img
                src={gallery[1]}
                className="rounded-[32px] h-[260px] w-full object-cover"
              />
            </div>

            <div className="space-y-6 pt-16">
              <img
                src={gallery[2]}
                className="rounded-[32px] h-[260px] w-full object-cover"
              />
              <img
                src={gallery[3]}
                className="rounded-[32px] h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
