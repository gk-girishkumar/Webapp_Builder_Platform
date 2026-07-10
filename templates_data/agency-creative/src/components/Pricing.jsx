import React from "react";
import { BarChart3, Figma, Check, ArrowRight } from "lucide-react";
import { pricing } from "../data";

export default function Pricing() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            <BarChart3 className="h-4 w-4" />
            Flexible engagement
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-tight">
            Premium creative partnerships built around ambitious growth.
          </h2>
        </div>

        <p className="max-w-xl text-lg leading-8 text-white/65">
          Whether launching a startup or evolving an established company, our tailored plans scale to fit your goals and creative ambitions.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {pricing.map((plan, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-[40px] border p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${
              plan.highlighted
                ? "border-fuchsia-500/50 bg-gradient-to-b from-fuchsia-500/20 to-cyan-500/10 shadow-[0_20px_100px_rgba(168,85,247,0.25)]"
                : "border-white/10 bg-white/5"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
                Most Popular
              </div>
            )}

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-400">
              <Figma className="h-7 w-7 text-black" />
            </div>

            <h3 className="text-3xl font-black">{plan.title}</h3>

            <div className="mt-6 text-6xl font-black tracking-tight">{plan.price}</div>

            <p className="mt-5 text-lg leading-8 text-white/65">{plan.desc}</p>

            <div className="mt-10 space-y-4">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                    <Check className="h-4 w-4 text-cyan-300" />
                  </div>

                  <div className="text-white/80">{feature}</div>
                </div>
              ))}
            </div>

            <button
              className={`mt-10 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-black hover:scale-105"
                  : "border border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
