import React from "react";
import { Sparkles } from "lucide-react";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}
