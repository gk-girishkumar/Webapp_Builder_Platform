import React from "react";
import { ArrowRight, Gem } from "lucide-react";
import { gallery } from "../data";

export default function Gallery() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <div className="sticky top-10">
            <div className="inline-flex items-center gap-2 text-cyan-300 mb-5">
              <Gem className="w-4 h-4" />
              Architectural Gallery
            </div>

            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              A Collection of Timeless Modern Masterpieces
            </h3>

            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Explore residences defined by cinematic interiors, panoramic
              views, resort-inspired amenities, and world-renowned design.
            </p>

            <button className="mt-10 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-400 to-cyan-300 text-slate-900 font-bold flex items-center gap-3">
              Explore Gallery
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <img
                  src={image}
                  alt="Luxury architecture"
                  className="w-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
