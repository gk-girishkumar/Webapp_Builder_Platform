import React from "react";
import { Landmark, Menu, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-300 to-emerald-400 flex items-center justify-center shadow-2xl shadow-cyan-500/20">
              <Landmark className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">Luxe Living</h1>
              <p className="text-xs text-white/50 tracking-[0.3em] uppercase">
                Curated Luxury Estates
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-white/70">
            {['Estates', 'Collections', 'Architecture', 'Concierge', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Schedule Tour</span>
            </button>

            <button className="lg:hidden w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
