import React from "react";
import { CandlestickChart } from "lucide-react";
import { ticker } from "../data";

export default function TickerBar() {
  return (
    <section className="relative z-10 pt-14">
      <div className="border-y border-white/10 bg-white/[0.03] overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite] py-3">
          {[...ticker, ...ticker].map((item, index) => (
            <div key={index} className="mx-8 text-sm text-cyan-300 flex items-center gap-2">
              <CandlestickChart className="w-4 h-4" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
