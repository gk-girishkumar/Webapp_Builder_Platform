import React from "react";
import { Command } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-300 p-2 text-slate-950">
            <Command className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-black tracking-wide">
              Nexus Analytics
            </div>
            <div className="text-xs text-slate-500">
              Real-time Intelligence Platform
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          <a href="#features" className="transition hover:text-white">Platform</a>
          <a href="#insights" className="transition hover:text-white">Insights</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#testimonials" className="transition hover:text-white">Customers</a>
          <a href="#footer" className="transition hover:text-white">Resources</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 md:block">
            Sign In
          </button>
          <button className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
