import React from "react";

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
          <Icon className="h-6 w-6 text-violet-300" />
        </div>
        <h3 className="mt-6 text-2xl font-medium text-white">{title}</h3>
        <p className="mt-4 leading-7 text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
