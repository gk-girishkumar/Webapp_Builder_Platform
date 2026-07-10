import React from "react";
import {
  Play,
  Headphones,
  Radio,
  Mic2,
  Star,
  TrendingUp,
  Users,
  ArrowRight,
  Check,
  Quote,
  Music4,
  Sparkles,
  ShieldCheck,
  Globe2,
  Waves,
  Heart,
  Disc3,
  Volume2,
  Clock3,
  Podcast,
  AudioWaveform,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  BadgeCheck,
  Layers3,
  Cpu,
  Smartphone,
  MonitorPlay,
  Library,
  TimerReset,
  CirclePlay,
  PlayCircle,
} from "lucide-react";

const featuredShows = [
  {
    title: "Midnight Frequency",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80",
    host: "Ava Collins",
    episodes: "128 Episodes",
  },
  {
    title: "Startup Echo",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    host: "Marcus Vale",
    episodes: "86 Episodes",
  },
  {
    title: "Mindful Noise",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
    host: "Sophia Rey",
    episodes: "210 Episodes",
  },
  {
    title: "Neon Stories",
    category: "True Crime",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80",
    host: "Jordan Hayes",
    episodes: "64 Episodes",
  },
];

const stats = [
  { label: "Monthly Listeners", value: "12M+", icon: Headphones },
  { label: "Podcasts Hosted", value: "340K+", icon: Podcast },
  { label: "Countries Reached", value: "92", icon: Globe2 },
  { label: "Average Rating", value: "4.9/5", icon: Star },
];

const pricing = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for casual listeners discovering new audio worlds.",
    features: [
      "Unlimited listening",
      "Basic recommendations",
      "Community playlists",
      "Ad-supported streaming",
    ],
    highlighted: false,
  },
  {
    name: "Wave+",
    price: "$12",
    desc: "Premium podcast experience for daily listeners and creators.",
    features: [
      "Ad-free playback",
      "Offline downloads",
      "Exclusive podcasts",
      "Spatial audio support",
      "AI smart recommendations",
    ],
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$29",
    desc: "Everything creators need to build and scale their audience.",
    features: [
      "Podcast hosting",
      "Advanced analytics",
      "Monetization tools",
      "Custom branding",
      "Audience insights",
    ],
    highlighted: false,
  },
];

const testimonials = [
  {
    name: "Emily Carter",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    text:
      "SoundWaves completely changed how I discover podcasts. The interface feels luxurious, the recommendations are spot on, and the audio quality is incredible.",
  },
  {
    name: "Daniel Brooks",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    text:
      "The creator tools are genuinely next-level. Publishing episodes, tracking engagement, and growing our audience has never felt this seamless.",
  },
  {
    name: "Sophie Kim",
    role: "Lifestyle Creator",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80",
    text:
      "Every detail feels intentional. SoundWaves combines premium aesthetics with serious functionality better than any podcast platform I've used.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
];

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_30%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-fuchsia-500/30">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                SoundWaves
              </h1>
              <p className="text-xs text-white/50 -mt-1">
                Discover immersive audio experiences
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-white/70">
            <a href="#" className="hover:text-white transition">
              Discover
            </a>
            <a href="#" className="hover:text-white transition">
              Originals
            </a>
            <a href="#" className="hover:text-white transition">
              Categories
            </a>
            <a href="#" className="hover:text-white transition">
              Creators
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
              Sign In
            </button>
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold hover:scale-105 transition">
              Start Listening
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80">
                #1 immersive podcast platform of 2026
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Audio that
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                moves{" "}
              </span>
              with you.
            </h1>

            <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-xl">
              Dive into a premium podcast ecosystem built for modern listeners.
              Discover trending conversations, immersive storytelling, creator
              exclusives, and personalized recommendations powered by intelligent
              audio discovery.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-bold flex items-center gap-3 hover:scale-105 transition">
                <Play className="w-5 h-5 fill-black" />
                Start Exploring
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-3 hover:bg-white/10 transition">
                <CirclePlay className="w-5 h-5 text-cyan-400" />
                Watch Demo
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <item.icon className="w-6 h-6 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-black">{item.value}</h3>
                  <p className="text-sm text-white/50 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-fuchsia-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative p-6 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="w-full h-[580px] object-cover rounded-[2rem]"
              />

              <div className="absolute left-10 bottom-10 right-10 p-6 rounded-3xl bg-black/50 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-sm">Now Playing</p>
                    <h3 className="text-2xl font-bold mt-1">
                      Future Frequencies
                    </h3>
                    <p className="text-white/60 mt-1">
                      Hosted by Nova Lin
                    </p>
                  </div>

                  <button className="w-16 h-16 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-xl">
                    <Play className="w-7 h-7 text-black fill-black ml-1" />
                  </button>
                </div>

                <div className="mt-6">
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-2/3 h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full" />
                  </div>

                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>24:18</span>
                    <span>42:00</span>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 top-16 p-5 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                    <AudioWaveform className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI Discovery</h4>
                    <p className="text-sm text-white/50">
                      Curated for your mood
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-20 p-5 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-purple-500 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Trending #1</h4>
                    <p className="text-sm text-white/50">
                      Business & Tech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Library className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm text-white/70">
                  Curated audio experiences
                </span>
              </div>

              <h2 className="text-5xl font-black leading-tight max-w-2xl">
                Explore podcasts designed for every obsession.
              </h2>
            </div>

            <button className="group flex items-center gap-2 text-cyan-400 font-semibold">
              Browse All Categories
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {featuredShows.map((show, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={show.image}
                    alt=""
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute top-5 left-5">
                  <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-xs">
                    {show.category}
                  </div>
                </div>

                <div className="absolute bottom-0 p-7 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                      <PlayCircle className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Headphones className="w-4 h-4" />
                      {show.episodes}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold">{show.title}</h3>
                  <p className="text-white/60 mt-1">Hosted by {show.host}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/70">
                Designed for modern listeners
              </span>
            </div>

            <h2 className="text-5xl font-black leading-tight">
              Built with powerful audio-first features.
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              SoundWaves combines intelligent recommendations, premium playback,
              immersive discovery tools, and creator-first analytics into one
              stunning platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center mb-8">
                <AudioWaveform className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Intelligent Discovery
              </h3>

              <p className="text-white/60 leading-relaxed mb-8">
                Personalized recommendations powered by listening habits,
                conversational AI, mood matching, and real-time trends.
              </p>

              <ul className="space-y-4">
                {[
                  "AI-generated playlists",
                  "Mood-based discovery",
                  "Smart listening history",
                  "Trending audio alerts",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span className="text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[2rem] border border-fuchsia-500/30 bg-gradient-to-b from-fuchsia-500/10 to-cyan-500/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/20 blur-3xl rounded-full" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mb-8">
                  <Volume2 className="w-8 h-8 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-xs mb-5">
                  <BadgeCheck className="w-4 h-4 text-fuchsia-300" />
                  Most Popular
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  Premium Audio Engine
                </h3>

                <p className="text-white/60 leading-relaxed mb-8">
                  Experience spatial audio, adaptive streaming quality, offline
                  downloads, and immersive playback built for every device.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: Smartphone,
                      title: "Cross-platform listening",
                    },
                    {
                      icon: Disc3,
                      title: "Lossless playback support",
                    },
                    {
                      icon: TimerReset,
                      title: "Instant resume syncing",
                    },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                      <span className="font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-8">
                <Mic2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Creator Studio Suite
              </h3>

              <p className="text-white/60 leading-relaxed mb-8">
                Powerful publishing workflows, audience insights, monetization,
                and advanced analytics for podcast creators at every level.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Analytics",
                  "Monetization",
                  "Team Access",
                  "Scheduling",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/30 border border-white/10"
                  >
                    <p className="font-semibold">{item}</p>
                    <p className="text-sm text-white/45 mt-1">
                      Included feature
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
            <div>
              <h2 className="text-5xl font-black max-w-2xl leading-tight">
                Inside the culture of modern audio storytelling.
              </h2>
            </div>

            <p className="max-w-xl text-white/60 text-lg leading-relaxed">
              From creator sessions and live recording studios to global podcast
              communities, SoundWaves captures the energy behind immersive
              listening experiences.
            </p>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
            {gallery.map((image, idx) => (
              <div
                key={idx}
                className="break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Heart className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm text-white/70">
                Trusted by millions of listeners
              </span>
            </div>

            <h2 className="text-5xl font-black">
              What people are saying about SoundWaves.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

                <Quote className="w-10 h-10 text-fuchsia-400 mb-8" />

                <p className="text-lg text-white/75 leading-relaxed relative z-10">
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

                <div className="mt-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Layers3 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/70">
                Flexible plans for everyone
              </span>
            </div>

            <h2 className="text-5xl font-black">
              Choose the perfect listening experience.
            </h2>

            <p className="mt-6 text-lg text-white/60">
              Start free or unlock immersive premium features designed for
              creators and passionate listeners.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-10 rounded-[2.5rem] border backdrop-blur-xl overflow-hidden ${
                  plan.highlighted
                    ? "border-fuchsia-500/40 bg-gradient-to-b from-fuchsia-500/15 to-cyan-500/10 scale-105"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black text-xs font-bold">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-3xl font-black">{plan.name}</h3>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-6xl font-black">{plan.price}</span>
                    <span className="text-white/50 mb-2">/month</span>
                  </div>
                  <p className="text-white/60 mt-5 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-400/15 flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-white/75">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-2xl font-bold transition ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black hover:scale-[1.02]"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-[#0b1224] to-cyan-500/20 p-16">
            <div className="absolute top-0 left-0 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white/80">
                    Premium quality. Global access.
                  </span>
                </div>

                <h2 className="text-6xl font-black leading-[1]">
                  Ready to experience the future of podcast listening?
                </h2>

                <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-xl">
                  Join millions of listeners discovering unforgettable stories,
                  insightful conversations, and immersive audio experiences on
                  SoundWaves.
                </p>

                <div className="mt-10 flex flex-wrap gap-5">
                  <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-bold hover:scale-105 transition">
                    Start Free Today
                  </button>

                  <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                    Explore Originals
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="p-8 rounded-[2rem] border border-white/10 bg-black/30 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-white/50 text-sm">Featured Episode</p>
                      <h3 className="text-3xl font-bold mt-2">
                        Voices of Tomorrow
                      </h3>
                    </div>

                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 flex items-center justify-center">
                      <Play className="w-9 h-9 text-black fill-black ml-1" />
                    </div>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
                    alt=""
                    className="w-full h-72 object-cover rounded-[2rem]"
                  />

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      {
                        icon: Users,
                        title: "2.8M",
                        subtitle: "Listeners",
                      },
                      {
                        icon: Clock3,
                        title: "48 Min",
                        subtitle: "Runtime",
                      },
                      {
                        icon: Radio,
                        title: "Live",
                        subtitle: "Streaming",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center"
                      >
                        <item.icon className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                        <h4 className="font-black text-xl">{item.title}</h4>
                        <p className="text-sm text-white/50 mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center">
                  <Music4 className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-3xl font-black">SoundWaves</h3>
                  <p className="text-white/50">
                    Discover immersive conversations.
                  </p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed max-w-md text-lg">
                SoundWaves is redefining modern podcast discovery with premium
                design, intelligent personalization, immersive audio technology,
                and creator-first experiences.
              </p>

              <div className="mt-10 flex gap-4">
                {[
                  Instagram,
                  Twitter,
                  Youtube,
                  Linkedin,
                ].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Icon className="w-5 h-5 text-white/70" />
                  </button>
                ))}
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 text-white/60">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  hello@soundwaves.fm
                </div>

                <div className="flex items-center gap-4 text-white/60">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  +1 (800) 908-2210
                </div>

                <div className="flex items-center gap-4 text-white/60">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  San Francisco, California
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Platform</h4>

              <ul className="space-y-4 text-white/60">
                {[
                  "Discover",
                  "Trending Podcasts",
                  "Exclusive Originals",
                  "Creator Dashboard",
                  "Live Audio",
                  "Recommendations",
                  "Mobile Apps",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Company</h4>

              <ul className="space-y-4 text-white/60">
                {[
                  "About",
                  "Careers",
                  "Press",
                  "Partners",
                  "Brand Assets",
                  "Community",
                  "Contact",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Resources</h4>

              <ul className="space-y-4 text-white/60">
                {[
                  "Help Center",
                  "Support",
                  "Privacy Policy",
                  "Terms of Service",
                  "Accessibility",
                  "Developer API",
                  "Status",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row gap-6 items-center justify-between">
            <p className="text-white/40">
              © 2026 SoundWaves. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Cookies
              </a>
              <a href="#" className="hover:text-white transition">
                Licenses
              </a>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <MonitorPlay className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/60">
                Crafted for immersive listening
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;