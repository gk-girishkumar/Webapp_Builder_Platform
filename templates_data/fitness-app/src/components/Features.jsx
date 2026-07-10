import React from "react";
import { ChevronRight } from "lucide-react";
import { features } from "../data";
import SectionHeading from "./SectionHeading";

export default function Features() {
  return (
    <section className="relative py-28" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Everything you need"
          title="Advanced fitness intelligence engineered for consistency."
          description="Every feature inside FitCore is designed to increase engagement and optimize recovery."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {feature.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
