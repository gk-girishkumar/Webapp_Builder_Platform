import React, { useState } from 'react'
import { ArrowRight, Bell, Layers, Menu, Search, X } from 'lucide-react'
import { navItems } from '../data'
import { scrollToSection } from '../utils/scrollToSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="main_navigation" className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#12141C]/80 px-5 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-[#6D5EF7] p-2 shadow-lg shadow-[#6D5EF7]/40">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">MosaicFlow</p>
            <p className="text-xs text-slate-400">Visual Canvas</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-sm text-slate-300 transition-all duration-200 hover:scale-[1.02] hover:text-white active:scale-[0.98]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-200 hover:scale-[1.02] hover:bg-white/10 hover:text-white active:scale-[0.98]">
            <Search className="h-4 w-4" />
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-200 hover:scale-[1.02] hover:bg-white/10 hover:text-white active:scale-[0.98]">
            <Bell className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'final_cta')}
            className="group flex items-center gap-2 rounded-xl bg-[#6D5EF7] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#6D5EF7]/30 transition-all duration-200 hover:scale-[1.02] hover:bg-[#7c6fff] active:scale-[0.98]"
          >
            Upload
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-3 text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-[#12141C]/95 p-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  scrollToSection(e, item.id)
                  setOpen(false)
                }}
                className="rounded-xl px-4 py-3 text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
