import React from "react";
import {
  Activity,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const socials = [Instagram, Twitter, Youtube, MessageCircle];

  return (
    <footer className="relative border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                <Activity className="h-7 w-7 text-white" />
              </div>

              <div>
                <div className="text-3xl font-black">FitCore</div>
                <div className="text-sm text-slate-400">
                  Intelligent Fitness Platform
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">
              FitCore empowers people to train smarter through elegant technology.
            </p>

            <div className="mt-10 flex items-center gap-4">
              {socials.map((Icon, index) => (
                <button
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10 text-sm text-slate-400">
          © 2026 FitCore Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
