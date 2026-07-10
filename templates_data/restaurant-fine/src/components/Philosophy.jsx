import React from "react";
import { Check, SunMedium, ShieldCheck } from "lucide-react";

const philosophyItems = [
  "Locally sourced organic produce and rare imported delicacies",
  "A curated wine cellar featuring legendary vintages",
  "Daily chef experimentation rooted in modern gastronomy",
  "Private dining suites for exclusive culinary evenings",
];

export default function Philosophy() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.4em] text-amber-300">
              Culinary Philosophy
            </div>

            <h2 className="mt-6 text-5xl font-serif leading-tight">
              Elevated Ingredients.
              <span className="block text-white/50">Timeless Technique.</span>
            </h2>

            <p className="mt-8 text-lg text-white/60 leading-relaxed">
              Guided by French haute cuisine and contemporary innovation, our kitchen sources seasonal ingredients from artisan producers, coastal fisheries, and rare botanical estates across Europe.
            </p>

            <div className="space-y-6 mt-10">
              {philosophyItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <div className="h-10 w-10 rounded-full bg-amber-300 text-black flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>

                  <p className="text-white/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="rounded-[2rem] h-[360px] object-cover w-full"
              />

              <div className="bg-gradient-to-br from-amber-300 to-amber-500 rounded-[2rem] p-8 text-black">
                <SunMedium className="h-10 w-10 mb-6" />
                <div className="text-4xl font-serif">15+</div>
                <div className="mt-2 font-medium">
                  Years of culinary excellence and innovation.
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-16">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
                <ShieldCheck className="h-10 w-10 text-amber-300 mb-6" />
                <div className="text-2xl font-serif">Sustainable Luxury</div>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Conscious sourcing and low-impact culinary craftsmanship are woven into every dish.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="rounded-[2rem] h-[360px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
