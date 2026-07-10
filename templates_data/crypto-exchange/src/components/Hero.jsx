import React from "react";
import { Sparkles, ArrowUpRight, Play, Bitcoin, Gem, Rocket, TrendingUp, ShieldCheck } from "lucide-react";
import { stats } from "../data";

export default function Hero() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Trusted by modern investors worldwide
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-[1.05]">
            The Future of
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Trading
            </span>
          </h2>

          <p className="text-xl text-white/65 mt-8 leading-relaxed max-w-xl">
            Trade crypto assets with lightning-fast execution and institutional security.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center gap-3">
              Start Trading
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Platform Tour
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="p-5 rounded-3xl border border-white/10 bg-white/5">
                <h3 className="text-3xl font-black">{stat.value}</h3>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.06] p-6">
          <img src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80" alt="hero" className="rounded-[28px] w-full h-[540px] object-cover" />

          <div className="absolute top-10 left-10 right-10 bg-[#08111f]/90 border border-white/10 rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-sm">Portfolio Balance</p>
                <h3 className="text-4xl font-black mt-2">$482,930</h3>
              </div>
              <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm">+18.2%</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[{icon:Bitcoin,name:'Bitcoin',price:'$92,450'},{icon:Gem,name:'Ethereum',price:'$5,840'},{icon:Rocket,name:'Solana',price:'$340'}].map((coin,index)=>{
                const Icon = coin.icon;
                return (
                  <div key={index} className="p-4 rounded-2xl bg-white/5">
                    <Icon className="w-6 h-6" />
                    <p className="mt-3 text-sm text-white/50">{coin.name}</p>
                    <h4 className="font-bold mt-1">{coin.price}</h4>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="absolute bottom-10 left-10 right-10 grid md:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-[#08111f]/90 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/50 text-sm">Market Performance</p>
                  <h4 className="text-2xl font-bold mt-2">Bullish Trend</h4>
                </div>
                <TrendingUp className="w-10 h-10 text-green-400" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#08111f]/90 p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="font-semibold">100% Asset Protection</p>
                <p className="text-white/50 text-sm mt-1">SOC2 certified infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
