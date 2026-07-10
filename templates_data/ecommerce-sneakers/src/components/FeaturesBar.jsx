import React from "react";
import { featureItems } from "../data";

export default function FeaturesBar() {
  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featureItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 rounded-3xl p-5 bg-white/5 border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">{item.title}</div>
                  <div className="text-sm text-zinc-400">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
