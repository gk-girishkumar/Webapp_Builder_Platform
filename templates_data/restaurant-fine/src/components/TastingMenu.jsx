import React from "react";
import { ArrowRight, Flame } from "lucide-react";
import { tastingMenu } from "../data";

export default function TastingMenu() {
  return (
    <section className="py-28 bg-white/[0.02] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <div className="text-sm uppercase tracking-[0.4em] text-amber-300">
              Signature Tasting Menu
            </div>
            <h2 className="mt-5 text-5xl font-serif">
              Curated For The Extraordinary
            </h2>
          </div>

          <button className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-7 py-4 rounded-full flex items-center gap-3">
            Full Seasonal Menu
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {tastingMenu.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="grid md:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-3xl font-serif">{item.title}</h3>
                      <div className="text-amber-300 text-xl font-serif">
                        {item.price}
                      </div>
                    </div>

                    <p className="mt-5 text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-sm text-white/50">
                    <Flame className="h-4 w-4 text-amber-300" />
                    Chef Recommended Selection
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
