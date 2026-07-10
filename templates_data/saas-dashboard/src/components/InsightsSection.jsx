import React from "react";
import { Clock3, Cloud, Layers3, MonitorSmartphone, Wallet } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { gallery } from "../data";

const insightItems = [
  {
    icon: Clock3,
    title: "Sub-second event processing",
    text: "Engineered for high-frequency systems requiring instant visibility.",
  },
  {
    icon: Cloud,
    title: "Cloud-native architecture",
    text: "Built to scale globally with resilient distributed infrastructure.",
  },
  {
    icon: MonitorSmartphone,
    title: "Adaptive dashboards",
    text: "Responsive interfaces optimized for teams across devices and environments.",
  },
  {
    icon: Wallet,
    title: "Revenue intelligence",
    text: "Analyze monetization patterns and retention trends in real-time.",
  },
];

const galleryTitles = [
  "Executive Revenue View",
  "AI Forecast Systems",
  "Global Infrastructure Map",
  "Customer Journey Intelligence",
  "Team Collaboration Hub",
  "Operational Monitoring",
];

export default function InsightsSection() {
  return (
    <section id="insights" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Operational Visibility"
              title="Track every signal across your business."
              description="Monitor revenue, infrastructure, customer journeys, and AI-driven forecasts from one unified workspace."
            />

            <div className="mt-12 space-y-6">
              {insightItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="h-fit rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="columns-2 gap-5 space-y-5">
            {gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                <img
                  src={image}
                  alt="Analytics"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index % 2 === 0 ? "h-[420px]" : "h-[280px]"}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-cyan-300 backdrop-blur-xl">
                    <Layers3 className="h-3 w-3" />
                    Insight Module
                  </div>

                  <div className="mt-4 text-xl font-bold text-white">
                    {galleryTitles[index]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
