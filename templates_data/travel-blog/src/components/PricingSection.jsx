import React from "react";
import { ShieldCheck } from "lucide-react";
import { pricing } from "../data";

export default function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div className="grid lg:grid-cols-3 gap-8">
        {pricing.map((plan, i) => (
          <div key={i} className={`rounded-[2rem] p-8 border transition-all duration-500 ${plan.highlighted ? 'border-cyan-300 bg-cyan-300 text-black scale-[1.02]' : 'border-white/10 bg-black/20 backdrop-blur-xl'}`}>
            <h3 className="text-3xl font-black">{plan.title}</h3>
            <div className="mb-10 mt-6">
              <span className="text-6xl font-black">{plan.price}</span>
            </div>
            <div className="space-y-5">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
