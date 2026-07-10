import React from "react";
import { ArrowRight, Bitcoin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-white/5 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <Bitcoin className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black">BlockTrade</h1>
            <p className="text-xs text-white/50">Institutional Crypto Exchange</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-sm text-white/70">
          {['Markets','Earn','Analytics','Developers','Enterprise'].map(item => (
            <a key={item} href="#" className="hover:text-white transition">{item}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm">Sign In</button>
          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center gap-2 text-sm font-semibold">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
