import React from "react";
import {
  HeartHandshake,
  Globe2,
  ShieldCheck,
  ArrowRight,
  Play,
  Sparkles,
  HandCoins,
  Heart,
  Users,
  Star,
  Quote,
  Check,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
  BadgeCheck,
  Building2,
  Clock3,
  Leaf,
  GraduationCap,
  Baby,
  Stethoscope,
  BookOpen,
  HelpingHand,
  Target,
  Trophy,
  BarChart3,
  Smile,
  Send,
  Wallet,
  Gift,
  HandHeart,
} from "lucide-react";

const stats = [
  { label: "Lives Impacted", value: "2.8M+", icon: Heart },
  { label: "Countries Reached", value: "48", icon: Globe2 },
  { label: "Volunteers", value: "34K+", icon: Users },
  { label: "Funds Distributed", value: "$182M", icon: HandCoins },
];

const programs = [
  {
    icon: Baby,
    title: "Child Nutrition",
    text: "Delivering sustainable food support and nutritional care to vulnerable children in underserved communities.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: GraduationCap,
    title: "Education Access",
    text: "Creating opportunities through scholarships, school infrastructure, and digital learning initiatives.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Stethoscope,
    title: "Medical Outreach",
    text: "Bringing healthcare, medicine, and emergency response support to regions in urgent need.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Leaf,
    title: "Climate & Water",
    text: "Building resilient communities with clean water systems and sustainable environmental projects.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
  },
];

const testimonials = [
  {
    name: "Maya Johnson",
    role: "Volunteer Coordinator",
    quote:
      "Hope Foundation transformed how our local community supports displaced families. The transparency and compassion are extraordinary.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "David Kim",
    role: "Monthly Donor",
    quote:
      "Every contribution feels meaningful. Their updates show real stories, real progress, and measurable impact around the world.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sophia Martinez",
    role: "Field Partner",
    quote:
      "Working with Hope Foundation has helped us deliver education and emergency aid faster than ever before.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
];

const pricing = [
  {
    title: "Starter Impact",
    price: "$25",
    desc: "Provides emergency meals and hygiene kits for a family.",
    features: [
      "Monthly impact reports",
      "Emergency response support",
      "Community food access",
      "Digital donor certificate",
    ],
    highlighted: false,
  },
  {
    title: "Hope Partner",
    price: "$75",
    desc: "Supports healthcare and educational access programs.",
    features: [
      "Everything in Starter",
      "Medical outreach support",
      "Education sponsorship",
      "Priority impact updates",
    ],
    highlighted: true,
  },
  {
    title: "Global Guardian",
    price: "$250",
    desc: "Drives sustainable global development initiatives.",
    features: [
      "Everything in Partner",
      "Direct project involvement",
      "Leadership donor events",
      "Exclusive annual report",
    ],
    highlighted: false,
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80",
];

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,179,134,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.15),transparent_35%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight">
                  Hope Foundation
                </h1>
                <p className="text-xs text-white/50">
                  Global Humanitarian Network
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
              <a href="#" className="hover:text-white transition">
                Mission
              </a>
              <a href="#" className="hover:text-white transition">
                Programs
              </a>
              <a href="#" className="hover:text-white transition">
                Stories
              </a>
              <a href="#" className="hover:text-white transition">
                Impact
              </a>
              <a href="#" className="hover:text-white transition">
                Donate
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition">
                <Play className="w-4 h-4" />
                Watch Story
              </button>

              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-semibold hover:scale-105 transition-all shadow-xl shadow-emerald-500/20">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 lg:pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-300 mb-8">
                <Sparkles className="w-4 h-4" />
                Building hope through global action
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
                Changing Lives
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-400">
                  One Heart At
                </span>
                A Time
              </h1>

              <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-xl">
                Hope Foundation connects compassionate donors with impactful
                humanitarian programs focused on healthcare, education, food
                security, and sustainable development across the globe.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-bold flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all">
                  Make A Donation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  Explore Impact
                </button>
              </div>

              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                  >
                    <item.icon className="w-6 h-6 text-emerald-300 mb-4" />
                    <div className="text-2xl font-black">{item.value}</div>
                    <div className="text-sm text-white/50 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl" />

              <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="w-full h-[700px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="w-6 h-6 text-emerald-300" />
                        <span className="font-semibold">
                          Verified Transparency
                        </span>
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Every donation is tracked with detailed reports and
                        measurable outcomes.
                      </p>
                    </div>

                    <div className="rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe2 className="w-6 h-6 text-cyan-300" />
                        <span className="font-semibold">
                          Global Partnerships
                        </span>
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Collaborating with local leaders and organizations in
                        over 48 countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <HandHeart className="w-6 h-6 text-emerald-300" />
                  <span className="font-bold">Urgent Relief Fund</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Support families affected by natural disasters with immediate
                  shelter, food, and medical assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-6">
                <Target className="w-4 h-4" />
                Our Core Programs
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl leading-tight">
                Humanitarian Programs Designed For Long-Term Impact
              </h2>
            </div>

            <p className="max-w-xl text-white/60 leading-relaxed text-lg">
              We believe sustainable change comes from combining emergency
              response with long-term community investment. Every initiative is
              built around dignity, collaboration, and measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={program.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />
                </div>

                <div className="relative p-10 min-h-[420px] flex flex-col justify-end">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8 text-emerald-300" />
                  </div>

                  <h3 className="text-3xl font-black mb-4">
                    {program.title}
                  </h3>

                  <p className="text-white/65 leading-relaxed mb-8">
                    {program.text}
                  </p>

                  <button className="flex items-center gap-2 text-emerald-300 font-semibold">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-300 mb-6">
              <BookOpen className="w-4 h-4" />
              Stories From The Field
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Moments Of Hope Captured Around The World
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Every image represents communities rebuilding stronger futures
              through compassion, collaboration, and resilient support systems.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl group"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-emerald-300">
                      Global Outreach
                    </span>

                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    Empowering communities through local partnerships
                  </h3>

                  <p className="text-white/60 leading-relaxed text-sm">
                    Community-led initiatives that create sustainable support
                    systems and meaningful opportunities.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-6">
                <BarChart3 className="w-4 h-4" />
                Measurable Impact
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Transparency That Builds Lasting Trust
              </h2>

              <p className="mt-8 text-lg text-white/60 leading-relaxed">
                Donors deserve complete visibility into where contributions go.
                Our organization provides real-time reporting, audited financial
                statements, and detailed project updates from local teams.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "98% of donations directly support field operations",
                  "Independent financial audits conducted annually",
                  "Local partnerships in underserved communities",
                  "Emergency response activated within 24 hours",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-emerald-300" />
                    </div>

                    <div className="text-white/80 font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Trophy,
                  title: "Award-Winning",
                  desc: "Recognized globally for humanitarian excellence.",
                },
                {
                  icon: BadgeCheck,
                  title: "Trusted Network",
                  desc: "Supported by thousands of recurring donors.",
                },
                {
                  icon: Building2,
                  title: "Community Centers",
                  desc: "Operating sustainable support hubs worldwide.",
                },
                {
                  icon: Clock3,
                  title: "Rapid Response",
                  desc: "Emergency teams deployed around the clock.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-2 transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-white/10 flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-emerald-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>

                  <p className="text-white/60 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-300 mb-6">
              <Quote className="w-4 h-4" />
              Community Voices
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Stories From Donors & Volunteers
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />

                <Quote className="w-12 h-12 text-emerald-300 mb-8" />

                <p className="text-lg leading-relaxed text-white/75 mb-10">
                  {item.quote}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-2xl object-cover"
                  />

                  <div>
                    <div className="font-bold text-lg">{item.name}</div>
                    <div className="text-white/50">{item.role}</div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-1 text-yellow-400">
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-6">
                <Wallet className="w-4 h-4" />
                Donation Options
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl">
                Support Meaningful Change At Any Level
              </h2>
            </div>

            <p className="max-w-xl text-lg text-white/60 leading-relaxed">
              Every contribution fuels direct action and sustainable support for
              families, schools, clinics, and communities around the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-[36px] p-8 border overflow-hidden ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-emerald-400/20 to-cyan-500/10 border-emerald-400/30 scale-[1.02]"
                    : "bg-white/5 border-white/10"
                } backdrop-blur-2xl`}
              >
                {plan.highlighted && (
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-emerald-400 text-black text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8">
                  <Gift className="w-8 h-8 text-emerald-300" />
                </div>

                <h3 className="text-3xl font-black">{plan.title}</h3>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-white/50 mb-2">/ month</span>
                </div>

                <p className="mt-6 text-white/60 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="mt-10 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-300" />
                      </div>

                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-10 py-4 rounded-2xl font-bold transition ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-500 text-black hover:scale-105"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Start Supporting
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-emerald-400/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-10 md:p-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-emerald-300 mb-6">
                  <Smile className="w-4 h-4" />
                  Join Our Mission
                </div>

                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Become Part Of A Global Movement For Humanity
                </h2>

                <p className="mt-8 text-lg text-white/65 leading-relaxed">
                  Subscribe for updates, volunteer opportunities, emergency
                  campaigns, and inspiring stories from communities worldwide.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none placeholder:text-white/40"
                  />

                  <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-bold flex items-center justify-center gap-2">
                    Subscribe
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: HelpingHand,
                    title: "Volunteer",
                    desc: "Support local and international initiatives.",
                  },
                  {
                    icon: Mail,
                    title: "Newsletter",
                    desc: "Receive inspiring stories and updates.",
                  },
                  {
                    icon: Globe2,
                    title: "Global Reach",
                    desc: "Collaborating across continents.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Community",
                    desc: "Driven by compassion and unity.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] bg-white/10 border border-white/10 p-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-black/20 flex items-center justify-center mb-5">
                      <item.icon className="w-7 h-7 text-emerald-300" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                    <p className="text-white/60 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative pt-28 pb-14 border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_45%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-5 gap-14 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                  <HeartHandshake className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-black">Hope Foundation</h3>
                  <p className="text-white/50 text-sm">
                    Humanitarian Impact Organization
                  </p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed max-w-lg text-lg">
                Dedicated to building a more compassionate world through
                education, healthcare, disaster relief, and sustainable
                community development programs that empower people for
                generations.
              </p>

              <div className="mt-10 flex items-center gap-4">
                {[
                  Facebook,
                  Instagram,
                  Twitter,
                  Linkedin,
                ].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Organization</h4>

              <div className="space-y-5 text-white/60">
                {[
                  "About Us",
                  "Leadership",
                  "Annual Reports",
                  "Impact Stories",
                  "Volunteer Network",
                  "Careers",
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
              <h4 className="text-xl font-bold mb-8">Programs</h4>

              <div className="space-y-5 text-white/60">
                {[
                  "Food Security",
                  "Emergency Relief",
                  "Healthcare Access",
                  "Education Support",
                  "Clean Water",
                  "Climate Action",
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
              <h4 className="text-xl font-bold mb-8">Contact</h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-300" />
                  </div>

                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-white/60">
                      +1 (800) 482-1948
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-cyan-300" />
                  </div>

                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/60">
                      hello@hopefoundation.org
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-300" />
                  </div>

                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-white/60">
                      245 Humanity Avenue,
                      <br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 mb-16">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-black mb-4">
                  Emergency Relief Campaign
                </h3>

                <p className="text-white/60 leading-relaxed">
                  Help provide immediate aid, shelter, clean water, and medical
                  support to communities affected by natural disasters and
                  humanitarian crises.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      number: "14K+",
                      label: "Families Assisted",
                    },
                    {
                      number: "96%",
                      label: "Aid Delivered Directly",
                    },
                    {
                      number: "72H",
                      label: "Average Response Time",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-black/20 border border-white/10 p-6 text-center"
                    >
                      <div className="text-4xl font-black text-emerald-300 mb-2">
                        {item.number}
                      </div>

                      <div className="text-white/60">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between pt-10 border-t border-white/10 text-white/50 text-sm">
            <div>
              © 2026 Hope Foundation. All rights reserved.
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-white transition">
                Accessibility
              </a>

              <a href="#" className="hover:text-white transition">
                Transparency
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;