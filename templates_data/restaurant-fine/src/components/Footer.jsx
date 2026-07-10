import React from "react";
import {
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  GlassWater,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-28 pb-14 border-t border-white/10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 text-black flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <div className="text-3xl font-serif">L'Etoile</div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/40 mt-1">
                  Michelin Fine Dining
                </div>
              </div>
            </div>

            <p className="mt-8 text-white/60 leading-relaxed max-w-md">
              L'Etoile is a sanctuary of refined gastronomy, where modern French cuisine, rare wines, and immersive hospitality create evenings of timeless elegance in the heart of Paris.
            </p>

            <div className="flex items-center gap-4 mt-10">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <button
                  key={index}
                  className="h-12 w-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-serif mb-6">Navigation</div>

            <div className="space-y-4 text-white/60">
              {[
                "Home",
                "The Experience",
                "Seasonal Menu",
                "Chef's Table",
                "Wine Collection",
                "Reservations",
                "Private Events",
              ].map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="block hover:text-white transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-serif mb-6">Contact</div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-amber-300 mt-1" />
                <div className="text-white/60">
                  18 Rue de la Lumière
                  <br />
                  Paris, France 75008
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-amber-300" />
                <div className="text-white/60">+33 1 84 52 18 90</div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-amber-300" />
                <div className="text-white/60">reservations@letoile.fr</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-lg font-serif mb-6">Opening Hours</div>

            <div className="space-y-5 text-white/60">
              <div className="flex items-center justify-between gap-5">
                <span>Monday - Thursday</span>
                <span>6PM - 11PM</span>
              </div>

              <div className="flex items-center justify-between gap-5">
                <span>Friday</span>
                <span>5PM - 12AM</span>
              </div>

              <div className="flex items-center justify-between gap-5">
                <span>Saturday</span>
                <span>5PM - 1AM</span>
              </div>

              <div className="flex items-center justify-between gap-5">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <GlassWater className="h-5 w-5 text-amber-300" />
                <span className="font-medium">Dress Code</span>
              </div>

              <p className="text-sm text-white/60 leading-relaxed">
                Elegant evening attire is encouraged to preserve the refined atmosphere of the dining experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/40 text-sm">
            © 2026 L'Etoile Maison. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm text-white/40">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Accessibility",
              "Careers",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
