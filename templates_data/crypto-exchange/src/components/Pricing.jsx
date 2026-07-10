import React from "react";
import { BriefcaseBusiness, Check } from "lucide-react";
import { pricing } from "../data";

export default function Pricing() {
  return (
    <section className="relative z-10 py-28 border-y border-white/10 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-200 text-sm mb-6">
            <BriefcaseBusiness className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h2 className="text-5xl font-black max-w-2xl">Flexible pricing engineered for every trading strategy.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div key={index} className={`rounded-[36px] border p-10 ${plan.highlighted ? 'bg-cyan-500/10 border-cyan-400/30' : 'bg-white/[0.04] border-white/10'}`}>
              <h3 className="text-3xl font-black">{plan.name}</h3>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-white/50 pb-2">Trading fee</span>
              </div>
              <p className="text-white/60 mt-6">{plan.description}</p>

              <div className="space-y-5 mt-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <Check className="w-4 h-4 text-green-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-12 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
