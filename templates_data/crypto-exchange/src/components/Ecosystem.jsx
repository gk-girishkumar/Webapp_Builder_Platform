import React from "react";
import { MonitorSmartphone, Smartphone, CreditCard, Database, Users, Building2, BarChart3, CircleDollarSign, Zap } from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="relative z-10 py-24 border-y border-white/10 bg-gradient-to-b from-transparent to-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-200 text-sm mb-6">
            <MonitorSmartphone className="w-4 h-4" />
            Unified Ecosystem
          </div>

          <h2 className="text-5xl font-black">Everything investors need in one intelligent platform.</h2>

          <div className="space-y-8 mt-12">
            {[{icon:Smartphone,title:'Cross-Device Synchronization'},{icon:CreditCard,title:'Instant Fiat Integration'},{icon:Database,title:'Enterprise Data Streams'}].map((item,index)=>{
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-white/60 mt-3">Powerful infrastructure built for modern traders.</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-white/[0.06] p-7 grid grid-cols-2 gap-6">
          <div className="rounded-3xl p-7 bg-cyan-500/10 border border-cyan-400/20">
            <Users className="w-10 h-10 text-cyan-300" />
            <h3 className="text-4xl font-black mt-8">12M+</h3>
            <p className="text-white/60 mt-2">Global active traders</p>
          </div>

          <div className="rounded-3xl p-7 bg-purple-500/10 border border-purple-400/20">
            <Building2 className="w-10 h-10 text-purple-300" />
            <h3 className="text-4xl font-black mt-8">4,800+</h3>
            <p className="text-white/60 mt-2">Institutional accounts</p>
          </div>

          <div className="col-span-2 rounded-3xl overflow-hidden border border-white/10 relative">
            <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80" alt="analytics" className="w-full h-[320px] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between">
              <div>
                <p className="text-white/50">Real-Time Market Analytics</p>
                <h3 className="text-3xl font-black mt-2">AI Driven Intelligence</h3>
              </div>
              <BarChart3 className="w-8 h-8 text-cyan-300" />
            </div>
          </div>

          <div className="rounded-3xl p-7 bg-white/5 border border-white/10">
            <CircleDollarSign className="w-10 h-10 text-green-300" />
            <h3 className="text-4xl font-black mt-8">$124B</h3>
          </div>

          <div className="rounded-3xl p-7 bg-white/5 border border-white/10">
            <Zap className="w-10 h-10 text-yellow-300" />
            <h3 className="text-4xl font-black mt-8">0.02s</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
