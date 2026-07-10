import React from "react";
import { ArrowRight, Palette } from "lucide-react";
import { navItems } from "../data";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
            <Palette className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-wide">Jane Doe</div>
            <div className="text-xs text-zinc-400">Senior Product Designer</div>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm text-zinc-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} className="transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20">
          Book a Call
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
