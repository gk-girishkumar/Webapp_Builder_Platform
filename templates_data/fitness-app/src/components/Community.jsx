import React from "react";
import { ArrowRight } from "lucide-react";
import { gallery } from "../data";
import SectionHeading from "./SectionHeading";

export default function Community() {
  return (
    <section className="relative py-28" id="community">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Lifestyle moments"
          title="A fitness ecosystem built around real people."
          description="Discover immersive workouts and connected communities."
        />

        <div className="mt-20 columns-1 gap-8 md:columns-2 xl:columns-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="group relative mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <img src={image} className="w-full object-cover" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold">Performance Story</div>
                    <div className="mt-1 text-sm text-slate-300">
                      Athlete spotlight & training insight
                    </div>
                  </div>

                  <button className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
