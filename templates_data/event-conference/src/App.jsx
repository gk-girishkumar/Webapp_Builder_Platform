import React from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Users,
  Cpu,
  Globe,
  Zap,
  Play,
  ChevronRight,
  Star,
  Check,
  Clock3,
  Mic2,
  Building2,
  ShieldCheck,
  Rocket,
  Code2,
  Wifi,
  BrainCircuit,
  BadgeCheck,
  Quote,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  Ticket,
  Flame,
  Headphones,
  PanelTop,
  Layers3,
  BarChart3,
  Briefcase,
} from "lucide-react";

export default function App() {
  const speakers = [
    {
      name: "Amelia Chen",
      role: "AI Research Lead · OpenCore",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      icon: BrainCircuit,
    },
    {
      name: "Marcus Reid",
      role: "CTO · NovaCloud",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      icon: Cpu,
    },
    {
      name: "Sofia Laurent",
      role: "Founder · QuantumLoop",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
      icon: Rocket,
    },
    {
      name: "David Kim",
      role: "VP Product · HorizonOS",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      icon: Layers3,
    },
  ];

  const schedule = [
    {
      time: "09:00 AM",
      title: "Opening Keynote: The Next Decade of AI",
      speaker: "Amelia Chen",
      stage: "Main Hall",
      icon: BrainCircuit,
    },
    {
      time: "10:30 AM",
      title: "Building Resilient Cloud Infrastructure",
      speaker: "Marcus Reid",
      stage: "Cloud Arena",
      icon: Globe,
    },
    {
      time: "12:00 PM",
      title: "Networking & Innovation Lunch",
      speaker: "Hosted by Partners",
      stage: "Sky Lounge",
      icon: Users,
    },
    {
      time: "02:00 PM",
      title: "Designing Human-Centered Products",
      speaker: "Sofia Laurent",
      stage: "Experience Lab",
      icon: Sparkles,
    },
    {
      time: "04:00 PM",
      title: "Future Startup Pitch Finals",
      speaker: "Top 10 Founders",
      stage: "Launch Stage",
      icon: Rocket,
    },
  ];

  const features = [
    {
      icon: Wifi,
      title: "Hyper Connected Venue",
      description:
        "5G-powered spaces, immersive digital experiences, and real-time collaboration zones across every floor.",
    },
    {
      icon: Mic2,
      title: "Visionary Speakers",
      description:
        "Hear from world-class founders, engineers, researchers, and operators shaping the future of technology.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security Tracks",
      description:
        "Dedicated sessions focused on cybersecurity, compliance, scalable systems, and digital trust.",
    },
    {
      icon: Code2,
      title: "Hands-On Workshops",
      description:
        "Build, deploy, prototype, and test emerging technologies in live expert-led sessions.",
    },
    {
      icon: Briefcase,
      title: "Startup & Investor Lounge",
      description:
        "Meet investors, founders, and recruiters in curated networking environments designed for opportunities.",
    },
    {
      icon: BarChart3,
      title: "Industry Trend Insights",
      description:
        "Gain access to fresh market intelligence, product strategies, and technology adoption forecasts.",
    },
  ];

  const pricing = [
    {
      title: "Explorer",
      price: "$149",
      subtitle: "Perfect for students & enthusiasts",
      featured: false,
      perks: [
        "1-Day Access",
        "Main Stage Sessions",
        "Expo Hall Access",
        "Networking Lounge",
        "Digital Swag Kit",
      ],
    },
    {
      title: "Professional",
      price: "$399",
      subtitle: "Most popular for teams & builders",
      featured: true,
      perks: [
        "3-Day Full Access",
        "All Workshops Included",
        "VIP Networking Events",
        "Speaker Q&A Sessions",
        "Premium Seating",
        "Conference Recordings",
      ],
    },
    {
      title: "Executive",
      price: "$899",
      subtitle: "Private access & leadership events",
      featured: false,
      perks: [
        "Executive Summit Access",
        "Private Dinner Experience",
        "Investor Matchmaking",
        "Backstage Speaker Lounge",
        "Dedicated Concierge",
        "Luxury Welcome Kit",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "TechSummit completely changed the trajectory of our startup. The conversations and partnerships were incredible.",
      name: "Nina Alvarez",
      role: "Founder · FluxForge",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "One of the most immersive and professionally curated technology events I have attended in years.",
      name: "Jordan Miles",
      role: "Engineering Director · CloudPeak",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "The speaker lineup, workshops, and networking environment were genuinely world-class.",
      name: "Priya Raman",
      role: "Product Lead · Nova Labs",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(76,111,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,255,200,0.12),transparent_30%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight">
                  TechSummit 2024
                </h1>
                <p className="text-xs text-white/50">
                  Future of Innovation Conference
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#schedule" className="hover:text-white transition">
                Schedule
              </a>
              <a href="#speakers" className="hover:text-white transition">
                Speakers
              </a>
              <a href="#pricing" className="hover:text-white transition">
                Tickets
              </a>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <Play className="w-4 h-4" />
                Watch Preview
              </button>

              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/20">
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-400/20 text-cyan-300 text-sm mb-8">
                <Flame className="w-4 h-4" />
                The largest future-tech gathering of the year
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
                Where
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  {" "}
                  innovation{" "}
                </span>
                meets the future.
              </h1>

              <p className="mt-8 text-lg text-white/65 max-w-xl leading-relaxed">
                Join visionary founders, elite engineers, creators, investors,
                and innovators for three immersive days of breakthrough
                conversations, workshops, networking, and product launches in
                the heart of San Francisco.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <button className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold flex items-center gap-2 hover:scale-105 transition">
                  Reserve Your Seat
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>

                <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  View Schedule
                </button>
              </div>

              <div className="grid grid-cols-3 gap-5 mt-14">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
                  <div className="text-3xl font-black">12K+</div>
                  <div className="text-sm text-white/50 mt-2">
                    Attendees Expected
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
                  <div className="text-3xl font-black">80+</div>
                  <div className="text-sm text-white/50 mt-2">
                    Global Speakers
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
                  <div className="text-3xl font-black">3 Days</div>
                  <div className="text-sm text-white/50 mt-2">
                    Innovation Tracks
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-[100px] rounded-full" />

              <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="w-full h-[620px] object-cover rounded-[30px]"
                />

                <div className="absolute top-10 left-10 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 w-64">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 flex items-center justify-center">
                      <Ticket className="w-6 h-6 text-cyan-300" />
                    </div>

                    <div>
                      <div className="font-bold">Early Access</div>
                      <div className="text-sm text-white/50">
                        Tickets selling fast
                      </div>
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                  </div>

                  <div className="mt-3 text-sm text-white/60">
                    74% of premium passes already claimed
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 w-72">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/50">
                        Main Keynote
                      </div>
                      <div className="font-bold text-lg mt-1">
                        AI Beyond 2030
                      </div>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center">
                      <BrainCircuit className="w-7 h-7 text-black" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 text-sm text-white/70">
                    <Clock3 className="w-4 h-4" />
                    09:00 AM · Main Hall
                  </div>

                  <div className="mt-2 flex items-center gap-3 text-sm text-white/70">
                    <MapPin className="w-4 h-4" />
                    San Francisco Convention Center
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Google",
              "Microsoft",
              "Stripe",
              "OpenAI",
              "Notion",
              "Figma",
              "Vercel",
              "AWS",
            ].map((brand, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex items-center justify-center text-white/40 font-semibold text-lg hover:text-white transition"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm mb-6">
                <PanelTop className="w-4 h-4" />
                Why TechSummit 2024
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Built for the people shaping tomorrow.
              </h2>

              <p className="mt-8 text-white/65 text-lg leading-relaxed">
                TechSummit 2024 blends immersive keynote experiences, startup
                showcases, hands-on labs, and curated networking into a premium
                conference environment built for creators, builders, and
                enterprise leaders.
              </p>

              <div className="mt-10 space-y-6">
                {features.slice(0, 3).map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-5 p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>

                      <div>
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <p className="mt-2 text-white/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  className="rounded-[32px] h-[320px] object-cover w-full"
                  alt=""
                />

                <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 backdrop-blur-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-cyan-300" />
                    <div className="font-bold text-xl">
                      Global Networking
                    </div>
                  </div>

                  <p className="text-white/60 leading-relaxed">
                    Connect with founders, operators, researchers, and product
                    teams from over 40 countries.
                  </p>
                </div>
              </div>

              <div className="space-y-5 mt-16">
                <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                  <div className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    150+
                  </div>
                  <div className="mt-3 text-white/60">
                    Interactive sessions, workshops, and expert-led panels
                    across emerging technology sectors.
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                  className="rounded-[32px] h-[320px] object-cover w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
                <Clock3 className="w-4 h-4" />
                Conference Schedule
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Three days packed with breakthroughs.
              </h2>
            </div>

            <p className="max-w-xl text-white/60 text-lg leading-relaxed">
              Explore keynote sessions, founder panels, technical deep-dives,
              startup demos, investor meetups, and immersive product
              experiences.
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="group rounded-[34px] border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition duration-500 p-8 backdrop-blur-2xl"
                >
                  <div className="grid lg:grid-cols-[180px_1fr_220px] gap-8 items-center">
                    <div>
                      <div className="text-3xl font-black">{item.time}</div>
                      <div className="text-white/40 mt-2">{item.stage}</div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-cyan-300" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-white/60">
                          Featuring {item.speaker}
                        </p>
                      </div>
                    </div>

                    <div className="flex lg:justify-end">
                      <button className="group/btn px-6 py-4 rounded-2xl border border-white/10 bg-black/20 hover:bg-white hover:text-black transition flex items-center gap-2">
                        Session Details
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="speakers" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm mb-6">
              <Mic2 className="w-4 h-4" />
              Featured Speakers
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Meet the innovators defining the next era.
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Hear directly from industry pioneers building the products,
              systems, and technologies reshaping how the world works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {speakers.map((speaker, idx) => {
              const Icon = speaker.icon;

              return (
                <div
                  key={idx}
                  className="group rounded-[34px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-2 transition duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                    <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-300" />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold">{speaker.name}</h3>
                    <p className="text-white/50 mt-2">{speaker.role}</p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400"
                          />
                        ))}
                      </div>

                      <button className="text-sm text-cyan-300 flex items-center gap-1 hover:gap-2 transition-all">
                        View Profile
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
                <Camera className="hidden" />
                <Sparkles className="w-4 h-4" />
                Event Experience
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Moments from previous summits.
              </h2>
            </div>

            <p className="max-w-xl text-white/60 text-lg leading-relaxed">
              Explore immersive environments, high-energy stages, startup
              showcases, collaborative labs, and unforgettable networking
              experiences.
            </p>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
            {gallery.map((image, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl group"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <div className="text-xl font-bold">TechSummit Experience</div>
                  <div className="text-white/70 mt-1">
                    Innovation, collaboration & immersive technology
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={idx}
                  className="rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-1 transition duration-500"
                >
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-cyan-300" />
                  </div>

                  <h3 className="text-2xl font-bold mt-8">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-white/60 leading-relaxed">
                    {feature.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 text-cyan-300 hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-[42px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-10 lg:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full" />

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm mb-6">
                  <Headphones className="w-4 h-4" />
                  Live immersive sessions
                </div>

                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Experience innovation at full scale.
                </h2>

                <p className="mt-8 text-lg text-white/65 leading-relaxed">
                  Discover cutting-edge demos, collaborative experiences,
                  startup launches, and world-class production designed to make
                  every session unforgettable.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {[
                    "AI & Machine Learning",
                    "Cloud Infrastructure",
                    "Developer Experience",
                    "Cybersecurity",
                    "Future of Work",
                    "Startup Ecosystem",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-white/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="rounded-[34px] h-[520px] object-cover w-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-[34px]" />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/50 text-sm">
                        Startup Competition
                      </div>
                      <div className="text-2xl font-bold mt-2">
                        $500K Innovation Prize
                      </div>
                    </div>

                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm mb-6">
              <Quote className="w-4 h-4" />
              Attendee Stories
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              What attendees are saying.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
              >
                <Quote className="w-12 h-12 text-cyan-300 mb-8" />

                <p className="text-lg leading-relaxed text-white/75">
                  "{item.quote}"
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />

                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-white/50 text-sm">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
              <Ticket className="w-4 h-4" />
              Ticket Options
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Choose your conference experience.
            </h2>

            <p className="mt-6 text-lg text-white/60">
              Flexible passes for students, builders, founders, and enterprise
              teams.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-[38px] p-8 border backdrop-blur-2xl ${
                  plan.featured
                    ? "bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border-cyan-400/30 scale-[1.03]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-cyan-400 text-black text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-3xl font-black">{plan.title}</h3>
                <p className="mt-3 text-white/55">{plan.subtitle}</p>

                <div className="mt-8 flex items-end gap-2">
                  <div className="text-6xl font-black">{plan.price}</div>
                  <div className="text-white/50 mb-2">/ pass</div>
                </div>

                <div className="mt-10 space-y-4">
                  {plan.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-300" />
                      </div>

                      <span className="text-white/75">{perk}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-10 w-full py-4 rounded-2xl font-bold transition ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:scale-105"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  Reserve Pass
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 lg:p-16">
            <div className="grid lg:grid-cols-4 gap-10">
              {[
                {
                  number: "40+",
                  label: "Countries Represented",
                  icon: Globe,
                },
                {
                  number: "250+",
                  label: "Partner Companies",
                  icon: Building2,
                },
                {
                  number: "98%",
                  label: "Attendee Satisfaction",
                  icon: BadgeCheck,
                },
                {
                  number: "24/7",
                  label: "Networking Opportunities",
                  icon: Users,
                },
              ].map((stat, idx) => {
                const Icon = stat.icon;

                return (
                  <div key={idx}>
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-cyan-300" />
                    </div>

                    <div className="text-5xl font-black">{stat.number}</div>
                    <div className="mt-3 text-white/55">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative pt-28 pb-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-[42px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-10 lg:p-16 mb-20">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm mb-6">
                  <Mail className="w-4 h-4" />
                  Stay Updated
                </div>

                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  Join the future of technology in San Francisco.
                </h2>

                <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-xl">
                  Get conference updates, speaker announcements, early ticket
                  access, and exclusive event experiences delivered directly to
                  your inbox.
                </p>
              </div>

              <div className="rounded-[34px] border border-white/10 bg-black/20 backdrop-blur-2xl p-8">
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 transition"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/40 transition"
                  />

                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold hover:scale-[1.02] transition">
                    Subscribe & Get Updates
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-2xl font-black">TechSummit 2024</div>
                  <div className="text-white/50 text-sm">
                    Innovation Conference Experience
                  </div>
                </div>
              </div>

              <p className="mt-8 text-white/60 leading-relaxed max-w-md">
                TechSummit 2024 brings together global leaders, startups,
                engineers, and creators for a premium conference experience
                focused on innovation, collaboration, and emerging technologies.
              </p>

              <div className="flex items-center gap-4 mt-8">
                {[
                  Instagram,
                  Twitter,
                  Linkedin,
                  Youtube,
                ].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Conference</h3>

              <div className="space-y-4 text-white/55">
                <a className="block hover:text-white transition" href="#">
                  About Event
                </a>
                <a className="block hover:text-white transition" href="#">
                  Speaker Lineup
                </a>
                <a className="block hover:text-white transition" href="#">
                  Schedule
                </a>
                <a className="block hover:text-white transition" href="#">
                  Workshops
                </a>
                <a className="block hover:text-white transition" href="#">
                  Expo Hall
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Resources</h3>

              <div className="space-y-4 text-white/55">
                <a className="block hover:text-white transition" href="#">
                  Media Kit
                </a>
                <a className="block hover:text-white transition" href="#">
                  Press Releases
                </a>
                <a className="block hover:text-white transition" href="#">
                  Sponsorships
                </a>
                <a className="block hover:text-white transition" href="#">
                  Community
                </a>
                <a className="block hover:text-white transition" href="#">
                  FAQs
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 mt-1 text-cyan-300" />
                  <span>
                    San Francisco Convention Center
                    <br />
                    California, United States
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  hello@techsummit2024.com
                </div>

                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-cyan-300" />
                  +1 (800) 240-2024
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-white/40 text-sm">
            <div>
              © 2024 TechSummit. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}