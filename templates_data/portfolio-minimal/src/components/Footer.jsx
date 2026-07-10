import React from "react";
import { Mail, MapPin, Palette, Phone } from "lucide-react";
import { socialLinks } from "../data";

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Palette className="h-6 w-6 text-white" />
              </div>

              <div>
                <div className="text-xl font-semibold">Jane Doe</div>
                <div className="text-sm text-zinc-500">Senior Product Designer</div>
              </div>
            </div>

            <p className="mt-8 max-w-md leading-8 text-zinc-400">
              Designing elegant, scalable digital products with a focus on clarity, emotional resonance, and meaningful interaction.
            </p>

            <div className="mt-10 flex gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                >
                  <social.icon className="h-5 w-5 text-zinc-300" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-medium text-white">Navigation</div>

            <div className="mt-8 space-y-4 text-zinc-400">
              {["Home", "Selected Work", "Services", "About", "Testimonials", "Pricing", "Contact"].map((item, index) => (
                <a key={index} href="#" className="block transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-medium text-white">Services</div>

            <div className="mt-8 space-y-4 text-zinc-400">
              {[
                "Product Design",
                "UX Strategy",
                "Design Systems",
                "Creative Direction",
                "Research & Discovery",
                "Prototyping",
                "Consulting",
              ].map((item, index) => (
                <a key={index} href="#" className="block transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-medium text-white">Contact</div>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@janedoedesign.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 482-9912",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "New York, United States",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <item.icon className="h-5 w-5 text-violet-300" />
                  </div>

                  <div>
                    <div className="text-sm text-zinc-500">{item.label}</div>
                    <div className="mt-1 text-zinc-300">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Jane Doe Design. Crafted with precision and intention.</div>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-white">
              Licensing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
