import React from "react";
import {
  Footprints,
  Search,
  Bell,
  ShoppingBag,
  Menu,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.6)]">
              <Footprints className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-black tracking-tight text-2xl">HypeKicks</h1>
              <p className="text-xs text-zinc-400 tracking-[0.3em] uppercase">
                Limited Edition Culture
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
            {[
              "Drops",
              "Collections",
              "Marketplace",
              "Community",
              "Vault",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex w-11 h-11 rounded-2xl bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex w-11 h-11 rounded-2xl bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 transition">
              <Bell className="w-5 h-5" />
            </button>
            <button className="hidden md:flex w-11 h-11 rounded-2xl bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 transition">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="lg:hidden w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Menu className="w-5 h-5" />
            </button>
            <button className="hidden md:flex px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              Join Droplist
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
