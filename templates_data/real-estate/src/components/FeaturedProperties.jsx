import React from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Heart,
  Home,
  MapPin,
} from "lucide-react";
import { featuredHomes } from "../data";

export default function FeaturedProperties() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between gap-8 mb-14 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 text-purple-300 mb-5">
              <Home className="w-4 h-4" />
              Featured Estates
            </div>

            <h3 className="text-4xl md:text-5xl font-black">
              Signature Residences
            </h3>
          </div>

          <button className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-3">
            View Entire Collection
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {featuredHomes.map((home, index) => (
            <div
              key={index}
              className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={home.image}
                  alt={home.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />

                <div className="absolute top-5 right-5">
                  <button className="w-11 h-11 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/20 text-sm">
                      Prime Listing
                    </span>

                    <span className="text-3xl font-black">{home.price}</span>
                  </div>

                  <h4 className="text-2xl font-bold">{home.title}</h4>

                  <div className="flex items-center gap-2 text-white/70 mt-2">
                    <MapPin className="w-4 h-4" />
                    {home.location}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <BedDouble className="w-4 h-4" />
                      Beds
                    </div>
                    <div className="font-bold text-lg mt-2">{home.beds}</div>
                  </div>

                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Bath className="w-4 h-4" />
                      Baths
                    </div>
                    <div className="font-bold text-lg mt-2">{home.baths}</div>
                  </div>

                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Building2 className="w-4 h-4" />
                      Size
                    </div>
                    <div className="font-bold text-lg mt-2">{home.size}</div>
                  </div>
                </div>

                <button className="mt-6 w-full py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition flex items-center justify-center gap-3">
                  Schedule Private Viewing
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
