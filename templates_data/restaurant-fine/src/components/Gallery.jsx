import React from "react";
import { Instagram } from "lucide-react";
import { gallery } from "../data";

export default function Gallery() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm uppercase tracking-[0.4em] text-amber-300">
            Atmosphere & Artistry
          </div>
          <h2 className="mt-5 text-5xl font-serif">
            Spaces Designed To Captivate
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[2rem] group break-inside-avoid border border-white/10"
            >
              <img
                src={image}
                alt=""
                className="w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-serif">L'Etoile Moments</div>
                    <div className="text-sm text-white/60 mt-1">
                      Paris Collection
                    </div>
                  </div>

                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                    <Instagram className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
