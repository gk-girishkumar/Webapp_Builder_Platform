import React from "react";
import { stats } from "../data";

export default function Stats() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div className="mt-8 text-5xl font-black">{stat.value}</div>
                <div className="mt-3 text-lg text-slate-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
