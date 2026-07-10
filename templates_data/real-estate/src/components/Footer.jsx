import React from "react";
import { Landmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 flex items-center justify-center">
                <Landmark className="w-6 h-6 text-slate-900" />
              </div>

              <div>
                <div className="text-2xl font-black">Luxe Living</div>
                <div className="text-xs text-white/40 tracking-[0.3em] uppercase">
                  Luxury Real Estate
                </div>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed max-w-sm">
              Delivering world-class luxury real estate experiences through
              curated architecture, elite service, and global expertise.
            </p>
          </div>

          {[
            {
              title: 'Collections',
              items: ['Oceanfront Villas', 'Skyline Penthouses', 'Mountain Retreats', 'Architectural Estates', 'Smart Luxury Homes']
            },
            {
              title: 'Services',
              items: ['Buyer Representation', 'Global Relocation', 'Investment Strategy', 'Private Showings', 'Concierge Lifestyle']
            },
            {
              title: 'Locations',
              items: ['Los Angeles', 'Miami', 'New York', 'Dubai', 'London']
            }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-6">{section.title}</h4>
              <div className="space-y-4 text-white/55">
                {section.items.map((item) => (
                  <a key={item} href="#" className="block hover:text-white transition">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>

            <div className="space-y-5">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-white/40 text-sm">Private Office</div>
                <div className="font-semibold mt-2">925 Sunset Boulevard</div>
                <div className="text-white/60 text-sm mt-1">
                  Beverly Hills, California
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-white/40 text-sm">Email</div>
                <div className="font-semibold mt-2">
                  concierge@luxeliving.com
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-white/40 text-sm">Direct Line</div>
                <div className="font-semibold mt-2">+1 (888) 440-2400</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-white/40 text-sm">
          <div>© 2026 Luxe Living. Crafted for extraordinary lifestyles.</div>

          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
