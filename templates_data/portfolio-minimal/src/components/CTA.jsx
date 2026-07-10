import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-violet-500/20 via-black to-fuchsia-500/20 p-10 lg:p-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />

        <div className="relative z-10 grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-violet-300" />
              Open for Select Projects
            </div>

            <h2 className="mt-8 text-5xl font-semibold leading-tight md:text-6xl">
              Ready to create a product experience people remember?
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              Partner with a designer focused on clarity, premium execution, and meaningful interaction design that drives long-term value.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-[1.02]">
                Schedule Consultation
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-white/10 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/20">
                Download Portfolio PDF
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["4.9", "Average client rating across engagements."],
              ["92%", "Clients return for ongoing design partnerships."],
              ["3x", "Faster product alignment through design systems."],
              ["24h", "Average response time for new inquiries."],
            ].map(([value, text]) => (
              <div
                key={value}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
              >
                <div className="text-5xl font-semibold text-white">{value}</div>
                <div className="mt-2 text-zinc-300">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
