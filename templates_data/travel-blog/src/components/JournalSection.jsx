import React from "react";
import { ArrowRight } from "lucide-react";
import { journal } from "../data";

export default function JournalSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div className="grid lg:grid-cols-3 gap-8">
        {journal.map((item, i) => (
          <div key={i} className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="overflow-hidden h-[320px]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            </div>
            <div className="p-8">
              <div className="inline-flex px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-xs uppercase tracking-[0.2em] mb-5">{item.tag}</div>
              <h3 className="text-3xl font-bold leading-tight">{item.title}</h3>
              <button className="mt-8 flex items-center gap-3 text-cyan-300 font-medium group-hover:gap-5 transition-all">
                Continue Reading
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
