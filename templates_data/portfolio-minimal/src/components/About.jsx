import React from "react";
import { Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";
import StatCard from "./StatCard";
import { stats } from "../data";

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="grid gap-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
            alt="Jane Doe"
            className="relative z-10 h-full rounded-[40px] border border-white/10 object-cover"
          />
        </div>

        <div>
          <SectionTitle
            eyebrow="About Jane"
            title="Designing with precision, empathy, and intentional simplicity."
            description="Over the past decade, I’ve partnered with startups and global teams to shape products that feel seamless, human, and emotionally resonant."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-14 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-start gap-5">
              <Quote className="mt-1 h-10 w-10 text-violet-300" />

              <div>
                <p className="text-2xl leading-relaxed text-white">
                  Great product design isn’t decoration. It’s the invisible structure that makes complexity feel effortless.
                </p>

                <div className="mt-6 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Jane Doe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
