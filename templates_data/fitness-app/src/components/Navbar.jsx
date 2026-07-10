import React from "react";
import { Activity, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-50 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight">FitCore</div>
            <div className="text-xs text-slate-400">
              Precision Fitness Intelligence
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm text-slate-300 lg:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#analytics" className="transition hover:text-white">Analytics</a>
          <a href="#community" className="transition hover:text-white">Community</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#download" className="transition hover:text-white">Download</a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button className="text-sm text-slate-300 transition hover:text-white">
            Sign In
          </button>
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105">
            Start Free
          </button>
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
