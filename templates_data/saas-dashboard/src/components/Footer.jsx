import React from "react";
import { Activity, Command, Globe, Layers3, TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/10 bg-[#04070f]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-300 p-2 text-slate-950">
                <Command className="h-5 w-5" />
              </div>

              <div>
                <div className="text-xl font-black">Nexus Analytics</div>
                <div className="text-sm text-slate-500">Enterprise Intelligence Platform</div>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Nexus Analytics delivers enterprise-grade observability, forecasting, and real-time operational intelligence for modern digital businesses.
            </p>

            <div className="mt-8 flex gap-4">
              {[Activity, Globe, Layers3, TrendingUp].map((Icon, i) => (
                <button key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Nexus Analytics. All rights reserved.</div>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Service</a>
            <a href="#" className="transition hover:text-white">Security</a>
            <a href="#" className="transition hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
