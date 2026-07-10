import React from "react";
import { Check } from "lucide-react";
import { reservationOptions } from "../data";

export default function Reservations() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-[0.4em] text-amber-300">
            Exclusive Reservations
          </div>

          <h2 className="mt-5 text-5xl font-serif">
            Choose Your Evening Experience
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Reserve intimate moments curated with exceptional detail, elevated service, and unforgettable culinary storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {reservationOptions.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-[2rem] border p-10 backdrop-blur-xl overflow-hidden ${
                item.featured
                  ? "bg-gradient-to-b from-amber-300/20 to-white/5 border-amber-300/40 scale-[1.02]"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {item.featured && (
                <div className="absolute top-6 right-6 bg-amber-300 text-black px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
                  Most Popular
                </div>
              )}

              <div className="text-sm uppercase tracking-[0.3em] text-white/50">
                {item.subtitle}
              </div>

              <h3 className="mt-5 text-4xl font-serif">{item.title}</h3>

              <div className="mt-6 text-6xl font-serif text-amber-300">
                {item.price}
              </div>

              <div className="space-y-5 mt-10">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-amber-300 text-black flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>

                    <span className="text-white/75">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full mt-12 py-4 rounded-full font-medium transition ${
                  item.featured
                    ? "bg-amber-300 text-black hover:bg-amber-200"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                Reserve Experience
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
