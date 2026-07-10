import React from "react";
import { Check, Crown } from "lucide-react";
import { pricing } from "../data";

export default function Pricing() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-purple-300 mb-5">
            <Crown className="w-4 h-4" />
            Concierge Services
          </div>

          <h3 className="text-4xl md:text-6xl font-black leading-tight">
            Luxury Services Tailored to Your Vision
          </h3>

          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Flexible private-client programs designed for acquisitions,
            relocation, portfolio strategy, and elite lifestyle management.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[2.5rem] border ${
                plan.featured
                  ? "border-cyan-300/40 bg-gradient-to-b from-cyan-400/10 to-purple-500/10"
                  : "border-white/10 bg-white/[0.04]"
              } backdrop-blur-3xl p-8 overflow-hidden`}
            >
              {plan.featured && (
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-cyan-300 text-slate-900 text-sm font-bold">
                  Most Exclusive
                </div>
              )}

              <div className="text-white/60">{plan.subtitle}</div>

              <h4 className="text-3xl font-black mt-4">{plan.title}</h4>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-white/50 mb-2">starting</span>
              </div>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-emerald-300" />
                    </div>

                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full py-4 rounded-2xl font-bold transition ${
                  plan.featured
                    ? "bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-900"
                    : "bg-white/10 hover:bg-white/15 border border-white/10"
                }`}
              >
                Request Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
