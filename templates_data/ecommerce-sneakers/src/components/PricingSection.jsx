import React from "react";
import { Crown, Check } from "lucide-react";
import { pricing } from "../data";

export default function PricingSection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-6">
            <Crown className="w-4 h-4 text-yellow-400" />
            Members Club
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Unlock elite access.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[36px] border p-8 ${
                plan.featured
                  ? "bg-gradient-to-b from-fuchsia-500/20 to-cyan-500/10 border-fuchsia-500/40 scale-[1.02]"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="text-zinc-400">{plan.title}</div>

              <div className="mt-4 flex items-end gap-2">
                <div className="text-6xl font-black">{plan.price}</div>
                <div className="text-zinc-400 mb-2">/month</div>
              </div>

              <p className="mt-6 text-zinc-300 leading-relaxed">
                {plan.desc}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full py-4 rounded-2xl font-bold transition ${
                  plan.featured
                    ? "bg-white text-black hover:scale-[1.02]"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
