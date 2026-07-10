import React from "react";
import { Layers, ChevronRight } from "lucide-react";
import { services } from "../data";

export default function Services() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Layers className="h-4 w-4" />
            Creative capabilities
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-tight">
            Design systems that feel alive across every platform.
          </h2>
        </div>

        <p className="max-w-xl text-lg leading-8 text-white/60">
          We combine storytelling, visual direction, motion, and advanced digital experiences into one seamless creative workflow.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-fuchsia-500/40"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_20px_60px_rgba(168,85,247,0.4)]">
                  <Icon className="h-7 w-7 text-black" />
                </div>

                <h3 className="text-3xl font-black">{service.title}</h3>

                <p className="mt-5 text-lg leading-8 text-white/65">{service.desc}</p>

                <div className="mt-10 flex items-center gap-2 font-medium text-fuchsia-300">
                  Learn more
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
