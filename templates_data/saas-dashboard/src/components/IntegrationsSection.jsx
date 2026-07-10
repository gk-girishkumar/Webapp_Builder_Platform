import React from "react";
import { ArrowRight, Code2 } from "lucide-react";
import { integrations } from "../data";

export default function IntegrationsSection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-[#0b1227] to-blue-500/10 p-10 backdrop-blur-2xl md:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <Code2 className="h-4 w-4" />
                Developer-first platform
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">
                Integrate your stack in minutes.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Connect cloud infrastructure, databases, payment systems, CRMs, and event pipelines using our extensible APIs and SDKs.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {integrations.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-slate-200 backdrop-blur-xl">
                    {item}
                  </div>
                ))}
              </div>

              <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-white">
                Browse API Documentation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-cyan-500/20 blur-3xl" />
              <div className="relative rounded-[36px] border border-white/10 bg-[#09101f]/90 p-8 shadow-2xl shadow-cyan-500/10">
                <div className="text-center text-cyan-300 py-32 font-mono">
                  API Integration Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
