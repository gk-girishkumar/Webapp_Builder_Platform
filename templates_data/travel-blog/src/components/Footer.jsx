import React from "react";
import { Compass, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-14">
        <div className="grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl font-black">Wanderlust</h3>
                <p className="text-white/50">Travel beautifully, live curiously.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-10">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <button key={i} className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Get in Touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-white/60"><Mail className="w-5 h-5 mt-1 text-cyan-300" /><span>hello@wanderlust.travel</span></div>
              <div className="flex items-start gap-4 text-white/60"><Phone className="w-5 h-5 mt-1 text-cyan-300" /><span>+1 (800) 482-9921</span></div>
              <div className="flex items-start gap-4 text-white/60"><MapPin className="w-5 h-5 mt-1 text-cyan-300" /><span>New York • Paris • Tokyo • Bali</span></div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-5 h-5 text-cyan-300" />
                <h5 className="font-bold">Weekly Inspiration</h5>
              </div>
              <button className="mt-5 w-full py-3 rounded-full bg-white text-black font-semibold">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
