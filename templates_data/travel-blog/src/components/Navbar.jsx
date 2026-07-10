import React from "react";
import { Compass, MoonStar } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-black text-2xl tracking-tight">Wanderlust</h1>
            <p className="text-xs text-white/50">Travel beyond ordinary</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-sm text-white/70">
          {['Destinations','Stories','Journal','Experiences','Membership'].map((item)=>(
            <a key={item} href="#" className="hover:text-white transition">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <MoonStar className="w-4 h-4" />
            <span className="text-sm">Dark Mode</span>
          </button>

          <button className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all">
            Explore Now
          </button>
        </div>
      </div>
    </nav>
  );
}
