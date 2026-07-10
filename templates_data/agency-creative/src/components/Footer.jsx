import React from "react";
import {
  Gem,
  Instagram,
  Twitter,
  Linkedin,
  Dribbble,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock3,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_20px_50px_rgba(168,85,247,0.3)]">
                <Gem className="h-6 w-6 text-black" />
              </div>

              <div>
                <div className="text-2xl font-black">Aura Studio</div>
                <div className="text-sm text-white/50">Creative agency for visionary brands</div>
              </div>
            </div>

            <p className="mt-8 max-w-lg text-lg leading-8 text-white/65">
              We design premium experiences that blend storytelling, technology, and visual culture into unforgettable digital products and campaigns.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, idx) => (
                <button
                  key={idx}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:scale-105 hover:bg-white hover:text-black"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>

            <div className="mt-12 grid gap-5">
              <div className="flex items-center gap-4 text-white/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                  <Mail className="h-5 w-5 text-cyan-300" />
                </div>
                hello@aurastudio.com
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                  <Phone className="h-5 w-5 text-fuchsia-300" />
                </div>
                +1 (415) 882-2048
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                  <MapPin className="h-5 w-5 text-violet-300" />
                </div>
                San Francisco · London · Tokyo
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Services</h4>

            <div className="mt-8 space-y-4 text-white/60">
              {[
                "Brand Identity",
                "Creative Strategy",
                "Motion Design",
                "Interactive Websites",
                "Content Systems",
                "Campaign Launches",
                "Product Experiences",
              ].map((item, idx) => (
                <a key={idx} href="#" className="block transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Company</h4>

            <div className="mt-8 space-y-4 text-white/60">
              {[
                "About",
                "Careers",
                "Culture",
                "Case Studies",
                "Press",
                "Awards",
                "Contact",
              ].map((item, idx) => (
                <a key={idx} href="#" className="block transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Newsletter</h4>

            <p className="mt-8 leading-7 text-white/60">
              Monthly insights on design, branding, storytelling, and digital innovation from the Aura team.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-4 outline-none placeholder:text-white/30"
              />

              <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-4 font-semibold text-black transition hover:scale-[1.02]">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60 backdrop-blur-xl">
              <Clock3 className="h-5 w-5 text-cyan-300" />
              Responding to inquiries within 24 hours worldwide.
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-10 text-sm text-white/40 lg:flex-row lg:items-center lg:justify-between">
          <div>© 2026 Aura Studio. Crafted for visionary brands worldwide.</div>

          <div className="flex flex-wrap items-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
