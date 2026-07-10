import React from "react";
import { Globe, Sparkles, ArrowRight } from "lucide-react";
import { gallery } from "../data";

const titles = [
  "Cinematic Product Launch",
  "Interactive Fashion Campaign",
  "AI Platform Experience",
  "Immersive Brand Universe",
  "Motion-Driven Commerce",
  "Editorial Creative Direction",
];

export default function Gallery() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            <Globe className="h-4 w-4" />
            Selected work
          </div>

          <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight">
            Immersive visuals and premium digital storytelling.
          </h2>
        </div>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {gallery.map((image, idx) => (
            <div key={idx} className="group relative mb-6 overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
              <img
                src={image}
                alt=""
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${idx % 2 === 0 ? "h-[520px]" : "h-[420px]"}`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur-xl">
                  <Sparkles className="h-3 w-3" />
                  Featured Project
                </div>

                <h3 className="text-2xl font-black">{titles[idx]}</h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                  View case study
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
