import React from "react";
import {
  ArrowRight,
  Play,
  Star,
  Check,
  Code2,
  Terminal,
  Brain,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Github,
  MonitorSmartphone,
  Clock3,
  Trophy,
  ChevronRight,
  Quote,
  Zap,
  Database,
  Cpu,
  Globe,
  Users,
  BarChart3,
  Menu,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function App() {
  const features = [
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Production-Grade Curriculum",
      desc: "Learn scalable architecture, clean code, testing, CI/CD, and advanced engineering workflows used by elite teams.",
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI-Powered Learning",
      desc: "Personalized coding paths, instant code reviews, adaptive quizzes, and guided debugging systems.",
    },
    {
      icon: <Terminal className="w-7 h-7" />,
      title: "Real-World Projects",
      desc: "Build enterprise dashboards, APIs, AI apps, and cloud-native products for a portfolio that stands out.",
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Career Acceleration",
      desc: "Interview preparation, resume optimization, mock interviews, and portfolio reviews by senior engineers.",
    },
    {
      icon: <Layers3 className="w-7 h-7" />,
      title: "Modern Stack",
      desc: "Master React, TypeScript, Node.js, AI integrations, databases, DevOps, and performance optimization.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Lifetime Access",
      desc: "Continuous updates, exclusive workshops, private community access, and future course expansions included.",
    },
  ];

  const stats = [
    { number: "120K+", label: "Students Worldwide" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "2,400+", label: "Hiring Partners" },
    { number: "94%", label: "Completion Success" },
  ];

  const testimonials = [
    {
      name: "Sophia Martinez",
      role: "Frontend Engineer at Stripe",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      text: "CodeMastery completely transformed how I approach engineering. The depth, structure, and production-level workflows gave me the confidence to land my dream role.",
    },
    {
      name: "David Kim",
      role: "Full Stack Developer at Notion",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      text: "The projects felt like real startup products. I learned architecture, performance optimization, and collaboration practices I use every day at work.",
    },
    {
      name: "Emily Johnson",
      role: "Software Engineer at Airbnb",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
      text: "This wasn't another shallow tutorial platform. The mentorship and advanced concepts accelerated my growth faster than years of self-study.",
    },
  ];

  const pricing = [
    {
      title: "Starter",
      price: "$49",
      desc: "Perfect for beginners entering modern development.",
      features: [
        "Core curriculum access",
        "20+ guided projects",
        "Community access",
        "Coding exercises",
        "Certificate of completion",
      ],
      popular: false,
    },
    {
      title: "Pro",
      price: "$149",
      desc: "Advanced career-focused learning path.",
      features: [
        "Everything in Starter",
        "AI coding assistant",
        "Mentor feedback",
        "Interview preparation",
        "Advanced architecture modules",
        "Private workshops",
      ],
      popular: true,
    },
    {
      title: "Elite",
      price: "$299",
      desc: "Complete mastery and career acceleration.",
      features: [
        "Everything in Pro",
        "1-on-1 mentorship",
        "Portfolio reviews",
        "Job referral network",
        "Exclusive masterminds",
        "Lifetime updates",
      ],
      popular: false,
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
  ];

  const roadmap = [
    {
      title: "Foundations",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Master JavaScript, TypeScript, algorithms, and clean coding principles.",
    },
    {
      title: "Frontend Engineering",
      icon: <MonitorSmartphone className="w-6 h-6" />,
      desc: "Build modern interfaces with React, Next.js, animations, and performance optimization.",
    },
    {
      title: "Backend Systems",
      icon: <Database className="w-6 h-6" />,
      desc: "Design scalable APIs, authentication systems, databases, and distributed architectures.",
    },
    {
      title: "AI & Cloud",
      icon: <Cpu className="w-6 h-6" />,
      desc: "Integrate AI workflows, cloud deployment pipelines, and DevOps automation.",
    },
  ];

  const companies = [
    "Google",
    "Netflix",
    "Stripe",
    "Airbnb",
    "Spotify",
    "Notion",
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_30%)]"></div>

      <header className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tight">
                CodeMastery
              </h1>
              <p className="text-xs text-white/50">
                Advanced Engineering Academy
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
            <a href="#" className="hover:text-white transition">
              Curriculum
            </a>
            <a href="#" className="hover:text-white transition">
              Projects
            </a>
            <a href="#" className="hover:text-white transition">
              Mentorship
            </a>
            <a href="#" className="hover:text-white transition">
              Reviews
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition">
              Sign In
            </button>
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:scale-105 transition-all duration-300 shadow-2xl shadow-indigo-500/30 flex items-center gap-2">
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button className="md:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <section className="relative z-10 pt-12 pb-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Trusted by 120,000+ developers worldwide
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Become an Elite
              <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h2>

            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl">
              A premium online learning platform designed for ambitious
              developers who want to master full-stack engineering, AI-powered
              workflows, scalable systems, and modern software architecture.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <button className="px-8 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 font-semibold hover:scale-105 transition-all duration-300 shadow-[0_20px_80px_rgba(99,102,241,0.35)] flex items-center justify-center gap-3">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                Watch Preview
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-[#050816] object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/60 text-sm mt-1">
                  Rated 4.9/5 by thousands of developers
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="w-full h-[650px] object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <p className="font-semibold">Live Coding Labs</p>
                    </div>
                    <p className="text-sm text-white/70">
                      Interactive browser-based environments with real-time
                      feedback.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Github className="w-5 h-5 text-indigo-300" />
                      <p className="font-semibold">Portfolio Projects</p>
                    </div>
                    <p className="text-sm text-white/70">
                      Build polished applications worthy of top-tier hiring
                      managers.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-fuchsia-300" />
                      <p className="font-semibold">Mentorship</p>
                    </div>
                    <p className="text-sm text-white/70">
                      Learn directly from senior engineers and startup founders.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-5 h-5 text-cyan-300" />
                      <p className="font-semibold">Global Community</p>
                    </div>
                    <p className="text-sm text-white/70">
                      Collaborate with ambitious developers across the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 p-6 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-black">94%</h3>
                  <p className="text-white/60 text-sm">
                    Students land interviews within 90 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-14 border-y border-white/5 bg-white/[0.02] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/40 uppercase tracking-[0.35em] text-sm mb-10">
            Developers from companies trust CodeMastery
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, i) => (
              <div
                key={i}
                className="h-20 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-white/70 font-semibold text-lg hover:bg-white/10 transition"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm mb-6">
              <Rocket className="w-4 h-4" />
              Why developers choose us
            </div>

            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              Learn beyond tutorials.
              <span className="block text-white/50">
                Build real engineering mastery.
              </span>
            </h3>
          </div>

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 transition"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center text-indigo-300 mb-8">
                    {feature.icon}
                  </div>

                  <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>

                  <p className="text-white/65 leading-relaxed">
                    {feature.desc}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 text-indigo-300 hover:text-white transition">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
              <Clock3 className="w-4 h-4" />
              Structured Learning Roadmap
            </div>

            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              A complete path from beginner to elite engineer.
            </h3>

            <p className="mt-6 text-lg text-white/65 leading-relaxed">
              Every module is intentionally crafted to simulate real-world
              engineering environments. Learn by building systems that mirror
              startup and enterprise workflows.
            </p>

            <div className="mt-12 space-y-6">
              {roadmap.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center text-indigo-300 shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-[28px] border border-white/10 bg-white/5 ${
                  i % 3 === 0 ? "mt-10" : ""
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-10 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl text-center"
              >
                <h3 className="text-5xl font-black bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="mt-4 text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-300 text-sm mb-6">
              <Trophy className="w-4 h-4" />
              Student Success Stories
            </div>

            <h3 className="text-4xl md:text-6xl font-black">
              Thousands of developers changed their careers.
            </h3>
          </div>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="relative p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-[100px]"></div>

                <Quote className="w-12 h-12 text-indigo-300 mb-8" />

                <p className="text-white/75 leading-relaxed text-lg relative z-10">
                  {item.text}
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-2xl object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-white/50">{item.role}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, x) => (
                    <Star key={x} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Flexible Pricing
            </div>

            <h3 className="text-4xl md:text-6xl font-black">
              Invest in your engineering future.
            </h3>

            <p className="mt-6 text-white/65 text-lg">
              Unlock premium content, mentorship, AI-assisted learning, and
              real-world projects with flexible plans built for every stage.
            </p>
          </div>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-[32px] border p-10 backdrop-blur-xl overflow-hidden ${
                  plan.popular
                    ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-fuchsia-500/10 scale-105"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h4 className="text-3xl font-black">{plan.title}</h4>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-white/50 mb-2">/ one-time</span>
                </div>

                <p className="mt-6 text-white/65">{plan.desc}</p>

                <button
                  className={`mt-8 w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:scale-105"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Get Started
                </button>

                <div className="mt-10 space-y-5">
                  {plan.features.map((feature, x) => (
                    <div key={x} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>

                      <p className="text-white/75">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 p-14 md:p-20">
            <div className="absolute inset-0 backdrop-blur-3xl"></div>

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/10 text-white/80 text-sm mb-8">
                <Rocket className="w-4 h-4" />
                Start Your Journey Today
              </div>

              <h3 className="text-5xl md:text-7xl font-black leading-[0.95]">
                Build skills that create opportunities for years.
              </h3>

              <p className="mt-8 text-lg text-white/75 max-w-2xl leading-relaxed">
                Join a thriving ecosystem of developers mastering modern
                software engineering, AI systems, and scalable architecture.
                Learn from experts, ship real products, and accelerate your
                career trajectory.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <button className="px-8 py-5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  Enroll in CodeMastery
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="px-8 py-5 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition">
                  Explore Curriculum
                </button>
              </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-[120px]"></div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 pt-28 pb-16 border-t border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-6 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-black text-2xl">CodeMastery</h4>
                  <p className="text-white/50 text-sm">
                    Advanced Engineering Academy
                  </p>
                </div>
              </div>

              <p className="mt-8 text-white/60 leading-relaxed max-w-md">
                Empowering developers worldwide with premium engineering
                education, mentorship, AI-powered learning systems, and
                production-grade projects designed for modern software careers.
              </p>

              <div className="mt-8 flex items-center gap-4">
                {[
                  <Twitter className="w-5 h-5" />,
                  <Linkedin className="w-5 h-5" />,
                  <Instagram className="w-5 h-5" />,
                  <Youtube className="w-5 h-5" />,
                ].map((icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-white/70 hover:text-white"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Platform</h5>

              <div className="space-y-4 text-white/60">
                <a href="#" className="block hover:text-white transition">
                  Courses
                </a>
                <a href="#" className="block hover:text-white transition">
                  Mentorship
                </a>
                <a href="#" className="block hover:text-white transition">
                  Projects
                </a>
                <a href="#" className="block hover:text-white transition">
                  Community
                </a>
                <a href="#" className="block hover:text-white transition">
                  Certifications
                </a>
                <a href="#" className="block hover:text-white transition">
                  AI Tools
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Resources</h5>

              <div className="space-y-4 text-white/60">
                <a href="#" className="block hover:text-white transition">
                  Blog
                </a>
                <a href="#" className="block hover:text-white transition">
                  Documentation
                </a>
                <a href="#" className="block hover:text-white transition">
                  Webinars
                </a>
                <a href="#" className="block hover:text-white transition">
                  Tutorials
                </a>
                <a href="#" className="block hover:text-white transition">
                  Careers
                </a>
                <a href="#" className="block hover:text-white transition">
                  Partnerships
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Company</h5>

              <div className="space-y-4 text-white/60">
                <a href="#" className="block hover:text-white transition">
                  About
                </a>
                <a href="#" className="block hover:text-white transition">
                  Success Stories
                </a>
                <a href="#" className="block hover:text-white transition">
                  Press
                </a>
                <a href="#" className="block hover:text-white transition">
                  Investors
                </a>
                <a href="#" className="block hover:text-white transition">
                  Terms
                </a>
                <a href="#" className="block hover:text-white transition">
                  Privacy
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Contact</h5>

              <div className="space-y-5 text-white/60">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-indigo-300" />
                  <span>support@codemastery.dev</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-indigo-300" />
                  <span>+1 (800) 555-0199</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-indigo-300" />
                  <span>San Francisco, California</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm">
              © 2026 CodeMastery. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Cookies
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