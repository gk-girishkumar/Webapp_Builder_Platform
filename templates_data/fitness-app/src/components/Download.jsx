import React from "react";
import { Globe, Apple, Smartphone, Medal, Waves } from "lucide-react";

export default function Download() {
  return (
    <section className="relative py-28" id="download">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-500/20 p-10 backdrop-blur-2xl md:p-20">
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-cyan-200">
                <Globe className="h-4 w-4" />
                Available Worldwide
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight">
                Download FitCore and unlock your next level.
              </h2>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 font-semibold text-slate-900">
                  <Apple className="h-5 w-5" />
                  Download for iOS
                </button>

                <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-8 py-5 font-semibold text-white">
                  <Smartphone className="h-5 w-5" />
                  Download for Android
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <Medal className="h-5 w-5 text-yellow-400" />
                  App Store Editors Choice
                </div>

                <div className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-cyan-300" />
                  4.9 Average Rating
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-4 backdrop-blur-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
                  className="h-[600px] w-[320px] rounded-[2.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
