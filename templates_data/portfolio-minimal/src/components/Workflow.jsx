import React from "react";
import { FolderKanban } from "lucide-react";
import { workflowSteps } from "../data";

function Workflow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-10 backdrop-blur-2xl lg:p-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-zinc-300">
              <FolderKanban className="h-4 w-4 text-violet-300" />
              Workflow
            </div>

            <h3 className="mt-8 text-5xl font-semibold leading-tight">
              A refined process designed for ambitious teams.
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Every engagement is collaborative, iterative, and rooted in strategic clarity — ensuring the final product feels polished at every layer.
            </p>
          </div>

          <div className="space-y-6">
            {workflowSteps.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-3xl border border-white/10 bg-black/20 p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <item.icon className="h-6 w-6 text-violet-300" />
                </div>

                <div>
                  <div className="text-xl font-medium text-white">{item.title}</div>
                  <div className="mt-2 leading-7 text-zinc-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
