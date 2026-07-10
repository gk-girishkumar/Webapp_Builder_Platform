import React from "react";
import { Cpu, ArrowUpRight } from "lucide-react";
import { gallery } from "../data";

export default function Gallery() {
  return (
    <section className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-200 text-sm mb-6">
            <Cpu className="w-4 h-4" />
            Immersive Trading Experience
          </div>
          <h2 className="text-5xl font-black">Built with precision, performance, and trust.</h2>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {gallery.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5">
              <img src={image} alt="gallery" className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-7 flex items-center justify-between">
                <div>
                  <p className="text-white/50 text-sm">Trading Infrastructure</p>
                  <h3 className="text-2xl font-bold mt-2">Quantum Exchange Layer</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
