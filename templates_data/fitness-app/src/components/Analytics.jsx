import React from "react";
import {
  BarChart3,
  Clock3,
  BatteryCharging,
  LineChart,
  Moon,
  Bell,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Analytics() {
  const items = [
    {
      icon: LineChart,
      title: "Dynamic Performance Trends",
      desc: "Identify plateaus and optimize training intensity.",
    },
    {
      icon: Moon,
      title: "Sleep & Recovery Intelligence",
      desc: "Understand how rest affects performance.",
    },
    {
      icon: Bell,
      title: "Personalized Smart Alerts",
      desc: "Get contextual reminders and insights.",
    },
  ];

  return (
    <section className="relative py-28" id="analytics">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400">Weekly Performance</div>
              <div className="mt-2 text-4xl font-black">+27%</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 p-4">
              <BarChart3 className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-cyan-300" />
                <span className="text-sm text-slate-300">Training Time</span>
              </div>
              <div className="mt-3 text-3xl font-bold">12.8h</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <BatteryCharging className="h-5 w-5 text-green-300" />
                <span className="text-sm text-slate-300">Recovery Score</span>
              </div>
              <div className="mt-3 text-3xl font-bold">89%</div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            badge="Deep analytics"
            title="See your body evolve with precision insights."
            description="Track every rep, sprint, calorie, and milestone with elegant visual reporting."
          />

          <div className="mt-12 space-y-6">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
