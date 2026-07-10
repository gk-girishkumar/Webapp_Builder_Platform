import React from "react";
import {
  Scale,
  ShieldCheck,
  Landmark,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Building2,
  Globe2,
  Gavel,
  BadgeCheck,
  Users,
  Clock3,
  TrendingUp,
  FileText,
  Award,
  Quote,
  Sparkles,
  PlayCircle,
  BarChart3,
  Lock,
  FolderKanban,
  Menu,
} from "lucide-react";

const practiceAreas = [
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Corporate Transactions",
    description:
      "Strategic counsel for mergers, acquisitions, restructurings, and enterprise growth initiatives across international markets.",
  },
  {
    icon: <Scale className="h-7 w-7" />,
    title: "Litigation & Dispute Resolution",
    description:
      "Elite representation in complex commercial disputes, arbitration proceedings, and high-stakes litigation matters.",
  },
  {
    icon: <Landmark className="h-7 w-7" />,
    title: "Banking & Finance",
    description:
      "Advising lenders, institutions, and multinational corporations on sophisticated financing structures and compliance.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Regulatory Compliance",
    description:
      "Comprehensive governance frameworks and risk mitigation strategies tailored to evolving legal standards.",
  },
  {
    icon: <Globe2 className="h-7 w-7" />,
    title: "International Law",
    description:
      "Cross-border legal intelligence for multinational operations, trade agreements, and foreign market expansion.",
  },
  {
    icon: <Briefcase className="h-7 w-7" />,
    title: "Executive Advisory",
    description:
      "Trusted legal partnership for executive leadership, private equity firms, and institutional stakeholders.",
  },
];

const stats = [
  { value: "28+", label: "Years of Excellence" },
  { value: "$14B", label: "Transactions Facilitated" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "42", label: "Senior Legal Partners" },
];

const testimonials = [
  {
    name: "Olivia Bennett",
    role: "Chief Executive Officer",
    company: "NorthBridge Holdings",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    quote:
      "Justice Partners delivered exceptional legal precision during our international acquisition. Their strategic clarity and responsiveness were unmatched.",
  },
  {
    name: "Marcus Hale",
    role: "Managing Director",
    company: "Veridian Capital",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    quote:
      "The firm's commercial litigation team handled a highly sensitive dispute with remarkable professionalism and confidence.",
  },
  {
    name: "Sophia Nguyen",
    role: "General Counsel",
    company: "Aurelia Technologies",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
    quote:
      "Their ability to navigate regulatory complexities across multiple jurisdictions gave our leadership complete confidence.",
  },
];

const insights = [
  {
    title: "Navigating Cross-Border M&A in Emerging Markets",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "Corporate Strategy",
  },
  {
    title: "The Future of Financial Compliance Frameworks",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    category: "Banking & Finance",
  },
  {
    title: "Modern Litigation Strategies for Enterprise Leaders",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    category: "Dispute Resolution",
  },
  {
    title: "Executive Risk Management in 2026",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    category: "Leadership",
  },
];

const attorneys = [
  {
    name: "Alexander Reid",
    role: "Senior Managing Partner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Charlotte Hayes",
    role: "Head of Litigation",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Daniel Foster",
    role: "Corporate Finance Partner",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emma Whitmore",
    role: "Global Compliance Director",
    image:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=800&q=80",
  },
];

const pricing = [
  {
    title: "Corporate Counsel",
    price: "Custom",
    description:
      "Dedicated legal advisory for established enterprises and executive leadership.",
    features: [
      "Strategic legal planning",
      "Priority attorney access",
      "Compliance monitoring",
      "International advisory",
      "Executive reporting",
    ],
  },
  {
    title: "Litigation Support",
    price: "Tailored",
    description:
      "High-performance dispute resolution and courtroom representation.",
    features: [
      "Case management",
      "Arbitration support",
      "Regulatory defense",
      "Dedicated litigation team",
      "Real-time reporting",
    ],
  },
  {
    title: "Enterprise Retainer",
    price: "Premium",
    description:
      "Comprehensive legal partnership for multinational corporations.",
    features: [
      "24/7 legal response",
      "Global jurisdiction support",
      "Board-level advisory",
      "Advanced analytics",
      "Dedicated partner team",
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#061018] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061018]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10">
              <Scale className="h-6 w-6 text-amber-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-wide">
                Justice Partners
              </h1>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Corporate Law Excellence
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm text-zinc-300 lg:flex">
            <a href="#" className="transition hover:text-white">
              Practice Areas
            </a>
            <a href="#" className="transition hover:text-white">
              Attorneys
            </a>
            <a href="#" className="transition hover:text-white">
              Insights
            </a>
            <a href="#" className="transition hover:text-white">
              Results
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/5">
              Client Portal
            </button>
            <button className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
              Schedule Consultation
            </button>
          </div>

          <button className="rounded-xl border border-white/10 p-3 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-5 py-2 text-sm text-amber-200 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Trusted Counsel for Global Enterprises
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Legal Strategy Built for
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Corporate Leadership
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              Justice Partners delivers elite legal advisory across complex
              corporate transactions, regulatory compliance, commercial
              litigation, and executive governance for ambitious organizations
              worldwide.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-[1.02]">
                Request Strategic Review
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/10">
                <PlayCircle className="h-5 w-5 text-amber-300" />
                Watch Firm Overview
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((item, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-12 top-12 hidden h-48 w-48 rounded-full bg-amber-400/20 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
              <img
                src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="h-[700px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061018] via-[#061018]/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
                      Trusted Worldwide
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">
                      Strategic Legal Intelligence
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <Gavel className="h-8 w-8 text-amber-300" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-amber-300" />
                      <span className="text-sm text-zinc-300">
                        Tier-1 Legal Rankings
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-amber-300" />
                      <span className="text-sm text-zinc-300">
                        Global Client Network
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-amber-300" />
                      <span className="text-sm text-zinc-300">
                        Enterprise Growth Advisory
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-amber-300" />
                      <span className="text-sm text-zinc-300">
                        Confidential Legal Operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl lg:block">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-amber-300/20 p-4">
                  <BadgeCheck className="h-8 w-8 text-amber-300" />
                </div>
                <div>
                  <p className="text-3xl font-bold">4.9/5</p>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-300 text-amber-300"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-300">
              Practice Excellence
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Comprehensive Legal Solutions for Modern Enterprises
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Our multidisciplinary teams combine legal precision with
              commercial intelligence to help organizations move confidently
              through high-impact decisions.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {practiceAreas.map((item, index) => (
              <div
                key={index}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-300/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-200 transition group-hover:gap-3">
                  Explore Service
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="h-80 w-full rounded-[2rem] object-cover"
                />

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <BarChart3 className="h-10 w-10 text-amber-300" />
                  <h3 className="mt-6 text-2xl font-semibold">
                    Data-Driven Counsel
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    Legal analytics and strategic forecasting tailored for
                    executive-level decision making.
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-10">
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-300/10 to-white/5 p-8 backdrop-blur-xl">
                  <FolderKanban className="h-10 w-10 text-amber-300" />
                  <h3 className="mt-6 text-2xl font-semibold">
                    Seamless Operations
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    Efficient workflows and transparent communication for
                    enterprise legal operations.
                  </p>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="h-[28rem] w-full rounded-[2rem] object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-amber-300">
              Why Justice Partners
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Built Around Precision, Discretion, and Results
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              We partner with corporations, institutional investors, and global
              executives to manage risk, accelerate growth, and resolve
              high-stakes legal challenges with confidence.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Elite attorneys with multinational transaction expertise",
                "Tailored strategies aligned with commercial objectives",
                "Rapid-response legal intelligence and compliance oversight",
                "Cross-border capabilities across major global jurisdictions",
                "Confidential counsel for executives and enterprise boards",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="mt-1 rounded-full bg-amber-300/10 p-1">
                    <CheckCircle2 className="h-5 w-5 text-amber-300" />
                  </div>

                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-6">
                <Clock3 className="h-8 w-8 text-amber-300" />
                <h3 className="mt-4 text-3xl font-bold">24/7</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Executive Legal Response
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-6">
                <FileText className="h-8 w-8 text-amber-300" />
                <h3 className="mt-4 text-3xl font-bold">3,200+</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Enterprise Cases Managed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-300">
                Leadership Team
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Distinguished Attorneys with Global Perspective
              </h2>
            </div>

            <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-medium transition hover:bg-white/[0.08]">
              Meet All Partners
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {attorneys.map((person, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold">{person.name}</h3>
                  <p className="mt-2 text-zinc-400">{person.role}</p>

                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-200">
                    View Profile
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {insights.map((item, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] ${
                  index === 0 || index === 3 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                      index === 0 || index === 3 ? "h-[420px]" : "h-[420px]"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061018] via-transparent to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-200 backdrop-blur-xl">
                      {item.category}
                    </div>

                    <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight">
                      {item.title}
                    </h3>

                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                      Read Insight
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-300">
              Client Testimonials
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Trusted by Industry Leaders Worldwide
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                <Quote className="h-12 w-12 text-amber-300" />

                <p className="mt-8 text-lg leading-8 text-zinc-300">
                  "{item.quote}"
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-zinc-400">
                      {item.role} · {item.company}
                    </p>

                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-300 text-amber-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 backdrop-blur-2xl lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-amber-300">
                  Legal Partnership Models
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight">
                  Flexible Engagements for Enterprise Clients
                </h2>

                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  Every organization operates differently. Our legal engagement
                  structures are tailored to align with your operational scale,
                  regulatory environment, and growth strategy.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {pricing.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[2rem] border p-8 ${
                      index === 1
                        ? "border-amber-300/30 bg-amber-300/10"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <div className="mt-6">
                      <span className="text-4xl font-bold">{item.price}</span>
                    </div>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {item.description}
                    </p>

                    <div className="mt-8 space-y-4">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-300" />
                          <span className="text-sm text-zinc-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`mt-10 w-full rounded-full px-6 py-4 text-sm font-semibold transition ${
                        index === 1
                          ? "bg-gradient-to-r from-amber-300 to-yellow-500 text-black"
                          : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      Request Proposal
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-r from-amber-300/10 via-white/[0.03] to-white/[0.04] p-12 backdrop-blur-2xl lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-amber-300">
                  Strategic Consultation
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                  Secure Your Organization with Elite Legal Counsel
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                  Connect with our senior advisory team to discuss legal risk,
                  transaction strategy, regulatory planning, or dispute
                  resolution tailored to your business objectives.
                </p>
              </div>

              <button className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-8 py-5 text-lg font-semibold text-black transition hover:scale-[1.02]">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10">
                  <Scale className="h-7 w-7 text-amber-300" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Justice Partners
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Corporate Law Excellence
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-md leading-8 text-zinc-400">
                Justice Partners is a premier corporate law firm delivering
                strategic legal advisory, enterprise governance, and complex
                dispute resolution for multinational organizations and executive
                leadership teams.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-sm text-zinc-500">Global Offices</p>
                  <h4 className="mt-1 text-xl font-semibold">12 Locations</h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-sm text-zinc-500">Enterprise Clients</p>
                  <h4 className="mt-1 text-xl font-semibold">600+</h4>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Practice Areas</h4>

              <ul className="mt-8 space-y-4 text-zinc-400">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Corporate Transactions
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Commercial Litigation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Regulatory Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Banking & Finance
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    International Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Executive Counsel
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Company</h4>

              <ul className="mt-8 space-y-4 text-zinc-400">
                <li>
                  <a href="#" className="transition hover:text-white">
                    About the Firm
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Leadership Team
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Client Success
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Global Offices
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Resources</h4>

              <ul className="mt-8 space-y-4 text-zinc-400">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Legal Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Annual Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Regulatory Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Contact</h4>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <Phone className="h-5 w-5 text-amber-300" />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">Phone</p>
                    <p className="mt-1 text-zinc-300">
                      +1 (800) 482-9088
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <Mail className="h-5 w-5 text-amber-300" />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="mt-1 text-zinc-300">
                      advisory@justicepartners.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <MapPin className="h-5 w-5 text-amber-300" />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">Headquarters</p>
                    <p className="mt-1 text-zinc-300">
                      420 Madison Avenue
                      <br />
                      New York, NY 10017
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <h5 className="text-lg font-semibold">
                  Subscribe to Legal Briefings
                </h5>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Executive updates and legal intelligence delivered monthly.
                </p>

                <div className="mt-6 flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-full border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-zinc-500"
                  />

                  <button className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-4 text-sm font-semibold text-black">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-zinc-500 lg:flex-row">
            <p>© 2026 Justice Partners. All rights reserved.</p>

            <div className="flex items-center gap-8">
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition hover:text-white">
                Accessibility
              </a>
              <a href="#" className="transition hover:text-white">
                Compliance
              </a>
              <a href="#" className="transition hover:text-white">
                Legal Notice
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;