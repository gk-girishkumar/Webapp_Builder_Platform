import React from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <SectionTitle
          eyebrow="Selected Work"
          title="A curated collection of thoughtful digital experiences."
          description="Each project represents a collaboration rooted in clarity, ambition, and meticulous execution."
        />

        <button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white transition hover:bg-white/10">
          Explore All Projects
          <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </button>
      </div>

      <div className="mt-20 columns-1 gap-8 md:columns-2 xl:columns-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group mb-8 break-inside-avoid overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />

              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-sm text-zinc-300">{project.category}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{project.title}</div>
              </div>
            </div>

            <div className="p-6">
              <p className="leading-7 text-zinc-400">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
