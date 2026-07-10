import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { destinations } from "../data";

export default function DestinationsGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="flex items-center justify-between mb-14">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-cyan-300 mb-4">Destination Gallery</p>
          <h2 className="text-5xl font-black">Wander Through the Extraordinary</h2>
        </div>
      </div>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
        {destinations.map((item, index) => (
          <div key={index} className={`break-inside-avoid rounded-[2rem] overflow-hidden border border-white/10 relative group ${item.height}`}>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute top-5 left-5">
              <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-xs uppercase tracking-[0.2em] text-white/80">
                {item.category}
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="text-3xl font-black">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/70 mt-2">
                  <MapPin className="w-4 h-4" />
                  Featured Destination
                </div>
              </div>
              <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
