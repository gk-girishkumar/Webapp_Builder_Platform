import React from "react";

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="mt-6 text-4xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-zinc-400">{label}</div>
    </div>
  );
}

export default StatCard;
