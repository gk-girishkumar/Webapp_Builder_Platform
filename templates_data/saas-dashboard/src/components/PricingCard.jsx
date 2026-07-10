import React from "react";
import { Check } from "lucide-react";

export default function PricingCard({ plan }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl ${plan.highlighted ? "border-cyan-400/40 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20" : "border-white/10 bg-white/5"}`}>
      {plan.highlighted && (
        <div className="absolute right-6 top-6 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-950">
          Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-3xl font-black text-white">{plan.name}</h3>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-5xl font-black text-white">{plan.price}</span>
          {plan.price !== "Custom" && <span className="pb-2 text-slate-400">/ month</span>}
        </div>
        <p className="mt-4 leading-7 text-slate-400">{plan.description}</p>
      </div>

      <div className="space-y-4">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <div className="rounded-full bg-cyan-400/10 p-1 text-cyan-300">
              <Check className="h-4 w-4" />
            </div>
            <span className="text-slate-300">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`mt-10 w-full rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${plan.highlighted ? "bg-cyan-300 text-slate-950 hover:bg-white" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`}>
        Get Started
      </button>
    </div>
  );
}
