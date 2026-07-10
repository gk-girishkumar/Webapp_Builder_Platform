import React from "react";
import { Bitcoin, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Clock3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#040611]">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Bitcoin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl font-black">BlockTrade</h3>
                <p className="text-white/50 text-sm">The Future of Digital Finance</p>
              </div>
            </div>

            <p className="text-white/60 mt-8 max-w-md">
              BlockTrade is a next-generation cryptocurrency exchange platform.
            </p>

            <div className="flex items-center gap-4 mt-8">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <button key={index} className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <div className="space-y-4 text-white/60">
              {['Spot Trading','Futures','Staking','Wallet'].map(item => <a key={item} href="#" className="block">{item}</a>)}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <div className="space-y-4 text-white/60">
              {['About','Careers','Press','Security'].map(item => <a key={item} href="#" className="block">{item}</a>)}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <div className="space-y-4 text-white/60">
              {['Documentation','Academy','Market News','Help Center'].map(item => <a key={item} href="#" className="block">{item}</a>)}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-5 text-white/60">
              <div className="flex items-start gap-3"><Mail className="w-5 h-5 mt-1 text-cyan-300" /><span>support@blocktrade.io</span></div>
              <div className="flex items-start gap-3"><Phone className="w-5 h-5 mt-1 text-cyan-300" /><span>+1 (800) 456-9021</span></div>
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-1 text-cyan-300" /><span>145 Market Street, Singapore</span></div>
              <div className="flex items-start gap-3"><Clock3 className="w-5 h-5 mt-1 text-cyan-300" /><span>24/7 Global Support</span></div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-white/40 text-sm">© 2026 BlockTrade. All rights reserved.</p>
          <div className="flex flex-wrap gap-8 text-sm text-white/40">
            {['Privacy Policy','Terms of Service','Cookie Settings'].map(item => <a key={item} href="#">{item}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
