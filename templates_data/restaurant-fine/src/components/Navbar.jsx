import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center shadow-2xl shadow-amber-500/20">
              <Sparkles className="h-5 w-5 text-black" />
            </div>
            <div>
              <div className="text-2xl font-serif tracking-wide">L'Etoile</div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/50">
                Fine Dining Maison
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-white/70">
            {[
              "Experience",
              "Menu",
              "Gallery",
              "Chef's Table",
              "Reservations",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </nav>

          <button className="group bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-200 transition flex items-center gap-2">
            Reserve Table
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </header>
  );
}
