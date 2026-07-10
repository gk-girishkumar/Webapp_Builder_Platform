import React from "react";
import { Zap, Check } from "lucide-react";
import { process } from "../data";

const checklist = [
  "Strategic positioning workshops",
  "High-end visual identity systems",
  "Motion and interaction design",
  "Fast and scalable development",
  "Performance optimization and launch support",
];

export default function Process() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200">
            <Zap className="h-4 w-4" />
            Our workflow
          </div>

          <h2 className="text-5xl font-black leading-tight">
            A refined creative process designed for speed and impact.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
            Every project is guided by strategic clarity, immersive visual direction, and a relentless focus on creating memorable digital experiences.
          </p>

          <div className="mt-10 space-y-5">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400">
                  <Check className="h-5 w-5 text-black" />
                </div>
                <div className="text-white/80">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {process.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-cyan-400/30">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative z-10 flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_20px_50px_rgba(34,211,238,0.3)]">
                    <Icon className="h-7 w-7 text-black" />
                  </div>

                  <div>
                    <div className="mb-2 text-sm uppercase tracking-[0.3em] text-white/40">
                      Step 0{idx + 1}
                    </div>

                    <h3 className="text-3xl font-black">{step.title}</h3>

                    <p className="mt-4 text-lg leading-8 text-white/65">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
