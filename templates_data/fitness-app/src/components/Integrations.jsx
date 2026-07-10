import React from "react";
import { integrations } from "../data";

export default function Integrations() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 lg:px-8">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold tracking-wide text-slate-300 backdrop-blur-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
