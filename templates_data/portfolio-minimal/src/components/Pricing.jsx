import React from "react";
import { Check } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { pricing } from "../data";

function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <SectionTitle
          eyebrow="Engagement Models"
          title="Flexible collaborations for teams at every stage."
          description="Whether you need strategic guidance or full-spectrum product design leadership, engagements are tailored around impact and velocity."
        />

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-400">
          Limited availability for Q4 partnerships.
        </div>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {pricing.map((plan, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-[36px] border p-8 ${
              plan.highlighted
                ? "border-violet-400/40 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                Most Popular
              </div>
            )}

            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              {plan.title}
            </div>

            <div className="mt-6 text-6xl font-semibold text-white">{plan.price}</div>

            <p className="mt-6 leading-7 text-zinc-400">{plan.description}</p>

            <div className="mt-10 space-y-4">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <Check className="h-4 w-4 text-violet-300" />
                  </div>
                  <div className="text-zinc-300">{feature}</div>
                </div>
              ))}
            </div>

            <button
              className={`mt-10 w-full rounded-2xl px-6 py-4 font-medium transition ${
                plan.highlighted
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
