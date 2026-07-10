import React from "react";
import {
  ArrowRight,
  Calendar,
  Globe,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.05] to-purple-500/10 backdrop-blur-3xl p-10 md:p-16 text-center">
          <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-cyan-200 mb-6">
              <MessageSquare className="w-4 h-4" />
              Private Consultation
            </div>

            <h3 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">
              Begin Your Journey Into Exceptional Luxury Living
            </h3>

            <p className="mt-6 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
              Connect with our global advisors for curated property
              recommendations, private viewings, and tailored investment
              opportunities.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-5 rounded-2xl bg-black/20 border border-white/10 outline-none placeholder:text-white/30"
              />

              <button className="px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-900 font-bold flex items-center justify-center gap-3">
                Book Private Call
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 flex-wrap text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                Fully Confidential
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-300" />
                Flexible Scheduling
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-300" />
                Global Representation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
