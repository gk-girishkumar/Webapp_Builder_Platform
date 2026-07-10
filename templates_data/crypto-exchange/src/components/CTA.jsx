import React from "react";
import { BadgeCheck, Coins, ShieldCheck, Globe, Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/20 p-14">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-cyan-100 mb-6">
                <BadgeCheck className="w-4 h-4" />
                Enterprise Infrastructure
              </div>

              <h2 className="text-5xl font-black">Ready to experience the next generation of crypto trading?</h2>

              <p className="text-white/70 text-lg mt-8 max-w-xl">
                Join millions of investors using BlockTrade to securely access global digital asset markets.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold">Create Free Account</button>
                <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10">Contact Enterprise Team</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[{icon:Coins,label:'350+',text:'Digital assets listed'},{icon:ShieldCheck,label:'99.99%',text:'Platform uptime'},{icon:Globe,label:'190+',text:'Supported countries'},{icon:Rocket,label:'24/7',text:'Global support'}].map((item,index)=>{
                const Icon = item.icon;
                return (
                  <div key={index} className="rounded-3xl border border-white/10 bg-white/10 p-7">
                    <Icon className="w-10 h-10 text-cyan-300" />
                    <h3 className="text-4xl font-black mt-8">{item.label}</h3>
                    <p className="text-white/60 mt-2">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
