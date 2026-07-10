import React from "react";
import {
  Mail,
  Footprints,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-28 pb-14 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-fuchsia-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-zinc-300 mb-6">
                <Mail className="w-4 h-4 text-cyan-400" />
                Stay in the loop
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Never miss another drop.
              </h2>
            </div>

            <div className="rounded-[32px] bg-black/40 border border-white/10 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none placeholder:text-zinc-500"
                />

                <button className="px-7 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition">
                  Join Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mt-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 flex items-center justify-center">
                  <Footprints className="w-7 h-7 text-white" />
                </div>

                <div>
                  <div className="text-3xl font-black">HypeKicks</div>
                  <div className="text-zinc-400 text-sm tracking-[0.3em] uppercase">
                    Built for collectors
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-fuchsia-400" />
                  +1 (800) 555-HYPE
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  support@hypekicks.io
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  Los Angeles · Tokyo · Paris
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm">
            <div>
              © 2026 HypeKicks. All rights reserved. Crafted for sneaker culture.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
