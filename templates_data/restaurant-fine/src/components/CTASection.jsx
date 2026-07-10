import React from "react";
import { HeartHandshake, Calendar, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-xl">
          <HeartHandshake className="h-4 w-4 text-amber-300" />
          <span className="text-sm text-white/70">
            Crafted For Celebrations & Private Events
          </span>
        </div>

        <h2 className="mt-10 text-6xl font-serif leading-tight">
          Reserve An Evening
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            Beyond Expectations
          </span>
        </h2>

        <p className="mt-8 text-xl text-white/65 leading-relaxed max-w-3xl mx-auto">
          Whether celebrating milestones, hosting executive dinners, or seeking an unforgettable romantic experience, our concierge team curates every detail with precision and elegance.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">
          <button className="bg-gradient-to-r from-amber-300 to-amber-500 text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3">
            <Calendar className="h-5 w-5" />
            Book A Reservation
          </button>

          <button className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-8 py-4 rounded-full font-medium flex items-center gap-3">
            <Users className="h-5 w-5" />
            Private Dining
          </button>
        </div>
      </div>
    </section>
  );
}
