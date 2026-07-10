import React from "react";
import { ArrowRight, Gem } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_40px_rgba(236,72,153,0.4)]">
            <Gem className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight">Aura Studio</div>
            <div className="text-xs text-white/50">Creative Agency Experience</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
          {['Services', 'Work', 'Process', 'Pricing', 'Contact'].map((item) => (
            <a key={item} href="#" className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur-xl transition hover:bg-white hover:text-black">
          Start a Project
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </div>
    </header>
  );
}
