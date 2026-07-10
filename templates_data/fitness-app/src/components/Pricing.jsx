import React from "react";
import { Check } from "lucide-react";
import { pricing } from "../data";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section className="relative py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Flexible pricing"
          title="Choose a plan that matches your momentum."
          description="FitCore scales beautifully with your goals."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[2.5rem] border p-10 backdrop-blur-2xl ${
                plan.featured
                  ? "border-cyan-400/40 bg-gradient-to-b from-cyan-400/20 to-blue-600/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                {plan.title}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <div className="text-6xl font-black">{plan.price}</div>
                <div className="pb-2 text-slate-400">/ month</div>
              </div>

              <p className="mt-5 text-lg text-slate-300">{plan.subtitle}</p>

              <div className="mt-10 space-y-5">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="rounded-full bg-cyan-400/20 p-2">
                      <Check className="h-4 w-4 text-cyan-300" />
                    </div>
                    <span className="text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
