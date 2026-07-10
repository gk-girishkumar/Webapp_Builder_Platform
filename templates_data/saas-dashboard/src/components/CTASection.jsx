import React from "react";
import { MoonStar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-[#0a1120] to-blue-500/10 p-10 md:p-16">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300">
                <MoonStar className="h-4 w-4" />
                Future-ready infrastructure
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">
                Ready to modernize your analytics stack?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Join thousands of teams using Nexus Analytics to transform raw data into intelligent operational decisions.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="grid gap-5">
                <input type="text" placeholder="Full name" className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40" />
                <input type="email" placeholder="Work email" className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40" />
                <input type="text" placeholder="Company" className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40" />
                <button className="rounded-2xl bg-cyan-300 px-6 py-4 font-bold text-slate-950 transition hover:bg-white">
                  Request Enterprise Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
