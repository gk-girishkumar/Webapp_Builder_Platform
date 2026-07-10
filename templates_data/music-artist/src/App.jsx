import React from "react";
import {
  Play,
  ArrowRight,
  Music4,
  Disc3,
  Headphones,
  Star,
  Instagram,
  Twitter,
  Youtube,
  Spotify,
  Calendar,
  Radio,
  Waves,
  AudioLines,
  Clock3,
  Ticket,
  ChevronRight,
  Sparkles,
  Mic2,
  Quote,
  ShieldCheck,
  Flame,
  Heart,
  Mail,
  MapPin,
  Phone,
  Vinyl,
  Gem,
  Zap,
} from "lucide-react";

const App = () => {
  const tracks = [
    {
      title: "Neon Afterlight",
      duration: "4:52",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Static Romance",
      duration: "3:41",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Midnight Echo",
      duration: "5:18",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tokyo Rain",
      duration: "4:06",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1200&q=80",
  ];

  const testimonials = [
    {
      quote:
        "An unforgettable synthwave experience that feels cinematic, intimate, and euphoric all at once.",
      name: "Nova Magazine",
      role: "Electronic Music Journal",
    },
    {
      quote:
        "The Midnight turns neon nostalgia into pure emotional electricity. Every track glows.",
      name: "Pulse FM",
      role: "Late Night Radio",
    },
    {
      quote:
        "This album sounds like driving through a rain-soaked city at 2AM with your heart on fire.",
      name: "Stereo Future",
      role: "Independent Review",
    },
  ];

  const tours = [
    {
      city: "Los Angeles",
      venue: "Neon Hall",
      date: "Aug 16",
    },
    {
      city: "Tokyo",
      venue: "Mirage Dome",
      date: "Sep 03",
    },
    {
      city: "Berlin",
      venue: "Afterglow Arena",
      date: "Sep 28",
    },
    {
      city: "Toronto",
      venue: "Velvet District",
      date: "Oct 14",
    },
  ];

  const pricing = [
    {
      title: "Digital Deluxe",
      price: "$19",
      icon: Music4,
      features: [
        "Lossless Album Download",
        "Exclusive Bonus Track",
        "Animated Artwork Pack",
        "Behind-the-Scenes Access",
      ],
    },
    {
      title: "Collector Vinyl",
      price: "$89",
      icon: Vinyl,
      features: [
        "Limited Edition Neon Vinyl",
        "Signed Sleeve Artwork",
        "Premium Poster Bundle",
        "Worldwide Shipping Included",
      ],
      featured: true,
    },
    {
      title: "Midnight Pass",
      price: "$149",
      icon: Gem,
      features: [
        "VIP Concert Access",
        "Artist Meet & Greet",
        "Exclusive Merch Package",
        "Early Listening Sessions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#07010f] text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-fuchsia-500/30">
                <Waves className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-[0.25em] uppercase">
                  The Midnight
                </div>
                <div className="text-xs text-white/50 tracking-[0.35em] uppercase">
                  Neon Dreams Era
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10 text-sm text-white/70">
              <a href="#album" className="hover:text-white transition">
                Album
              </a>
              <a href="#experience" className="hover:text-white transition">
                Experience
              </a>
              <a href="#tour" className="hover:text-white transition">
                Tour
              </a>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
              <a href="#store" className="hover:text-white transition">
                Store
              </a>
            </nav>

            <button className="group px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-fuchsia-400 transition-all duration-300 flex items-center gap-2">
              Stream Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-32 pb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm tracking-[0.3em] uppercase text-white/70">
                  New Album Out Worldwide
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                THE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300">
                  MIDNIGHT
                </span>
              </h1>

              <p className="mt-8 text-xl text-white/65 leading-relaxed max-w-xl">
                A cinematic synthwave journey through neon skylines, fading
                memories, midnight highways, and electric romance. Experience
                the newest era from the iconic retro-futuristic soundscape.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-10">
                <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-bold flex items-center gap-3 shadow-2xl shadow-fuchsia-500/30 hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5 fill-black" />
                  Listen to the Album
                </button>

                <button className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition">
                  Watch Visualizer
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-16">
                <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="text-4xl font-black">42M+</div>
                  <div className="text-white/50 mt-2 text-sm uppercase tracking-[0.2em]">
                    Streams
                  </div>
                </div>

                <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="text-4xl font-black">18</div>
                  <div className="text-white/50 mt-2 text-sm uppercase tracking-[0.2em]">
                    Countries
                  </div>
                </div>

                <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="text-4xl font-black">4.9</div>
                  <div className="text-white/50 mt-2 text-sm uppercase tracking-[0.2em]">
                    Fan Rating
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="w-full h-[700px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07010f] via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/60 uppercase tracking-[0.3em] text-sm">
                        Featured Release
                      </div>
                      <div className="text-4xl font-black mt-3">
                        Neon Dreams
                      </div>
                    </div>

                    <button className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition shadow-2xl">
                      <Play className="w-8 h-8 fill-black ml-1" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="rounded-2xl bg-black/40 backdrop-blur-xl p-4 border border-white/10">
                      <Clock3 className="w-5 h-5 text-cyan-300 mb-3" />
                      <div className="font-bold">54 Minutes</div>
                      <div className="text-white/50 text-sm mt-1">
                        Runtime
                      </div>
                    </div>

                    <div className="rounded-2xl bg-black/40 backdrop-blur-xl p-4 border border-white/10">
                      <Disc3 className="w-5 h-5 text-fuchsia-300 mb-3" />
                      <div className="font-bold">12 Tracks</div>
                      <div className="text-white/50 text-sm mt-1">
                        Synthwave
                      </div>
                    </div>

                    <div className="rounded-2xl bg-black/40 backdrop-blur-xl p-4 border border-white/10">
                      <Star className="w-5 h-5 text-yellow-300 mb-3" />
                      <div className="font-bold">Editor's Pick</div>
                      <div className="text-white/50 text-sm mt-1">
                        2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 p-6 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center">
                    <AudioLines className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <div className="font-bold">Now Trending</div>
                    <div className="text-white/50 text-sm">
                      #1 Electronic Album
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28 grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Headphones,
                title: "Immersive Audio",
                text: "Mixed for cinematic headphones and analog warmth.",
              },
              {
                icon: Radio,
                title: "Retro Frequencies",
                text: "Classic synth textures blended with modern emotion.",
              },
              {
                icon: Flame,
                title: "Live Energy",
                text: "Electric performances with atmospheric visuals.",
              },
              {
                icon: ShieldCheck,
                title: "Collector Editions",
                text: "Premium vinyl and exclusive fan experiences.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-2xl font-bold mb-3">{item.title}</div>
                <div className="text-white/60 leading-relaxed">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="album"
        className="relative z-10 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-16">
            <div>
              <div className="text-sm uppercase tracking-[0.4em] text-fuchsia-300 mb-5">
                Track Collection
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight max-w-2xl">
                A soundtrack for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                  {" "}
                  sleepless cities.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-white/60 text-lg leading-relaxed">
              Every composition layers nostalgic synth textures with emotional
              storytelling, creating an atmosphere that feels timeless and
              deeply cinematic.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="relative overflow-hidden">
                    <img
                      src={track.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-fuchsia-300 text-sm uppercase tracking-[0.3em]">
                        <Disc3 className="w-4 h-4" />
                        Track {index + 1}
                      </div>

                      <h3 className="text-4xl font-black mt-5">
                        {track.title}
                      </h3>

                      <p className="text-white/60 leading-relaxed mt-5">
                        Atmospheric synths, pulsing basslines, and glowing
                        melodies designed for late-night drives beneath endless
                        neon reflections.
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-10">
                      <div className="flex items-center gap-3 text-white/50">
                        <Clock3 className="w-5 h-5" />
                        {track.duration}
                      </div>

                      <button className="w-16 h-16 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 flex items-center justify-center text-black hover:scale-110 transition">
                        <Play className="w-6 h-6 fill-black ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative z-10 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-6">
              Audio Visual Experience
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Neon textures.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-300">
                Midnight emotion.
              </span>
            </h2>

            <p className="text-white/60 text-xl leading-relaxed mt-8">
              Crafted with analog synth layers, cinematic visuals, and immersive
              production that transforms every listening session into a nocturnal
              dreamscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div className="p-8 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
                <Mic2 className="w-10 h-10 text-fuchsia-300 mb-6" />
                <div className="text-3xl font-black mb-4">
                  Vocals with Atmosphere
                </div>
                <p className="text-white/60 leading-relaxed">
                  Emotional performances wrapped in ambient textures and dreamy
                  production.
                </p>
              </div>

              <div className="p-8 rounded-[36px] border border-white/10 bg-black/30 backdrop-blur-xl">
                <Zap className="w-10 h-10 text-cyan-300 mb-6" />
                <div className="text-3xl font-black mb-4">
                  Analog Energy
                </div>
                <p className="text-white/60 leading-relaxed">
                  Vintage synthesizers and modern mastering collide for a
                  glowing retro-future sound.
                </p>
              </div>
            </div>

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 min-h-[700px]">
              <img
                src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07010f] via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-10">
                <div className="text-sm uppercase tracking-[0.4em] text-white/60">
                  Visual Identity
                </div>

                <div className="text-5xl font-black mt-4 leading-tight">
                  Rain-soaked cities,
                  <span className="block text-fuchsia-300">
                    endless reflections.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-[36px] border border-white/10 bg-black/30 backdrop-blur-xl">
                <Heart className="w-10 h-10 text-rose-300 mb-6" />
                <div className="text-3xl font-black mb-4">
                  Emotional Storytelling
                </div>
                <p className="text-white/60 leading-relaxed">
                  Themes of longing, memory, distance, and connection woven into
                  every chorus.
                </p>
              </div>

              <div className="p-8 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
                <Music4 className="w-10 h-10 text-cyan-300 mb-6" />
                <div className="text-3xl font-black mb-4">
                  Endless Replay Value
                </div>
                <p className="text-white/60 leading-relaxed">
                  Layered arrangements reveal new emotional details with every
                  listen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="relative z-10 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
            <div>
              <div className="text-sm uppercase tracking-[0.4em] text-fuchsia-300 mb-5">
                Visual Archive
              </div>

              <h2 className="text-5xl md:text-6xl font-black max-w-3xl">
                Aesthetic moments from the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                  {" "}
                  Neon Dreams universe.
                </span>
              </h2>
            </div>

            <div className="max-w-xl text-white/60 text-lg leading-relaxed">
              Inspired by retro nightlife, cyberpunk architecture, faded arcade
              lights, and cinematic solitude. Every frame extends the emotional
              tone of the album.
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 break-inside-avoid"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black">
                        Neon Session {index + 1}
                      </div>
                      <div className="text-white/60 mt-1">
                        Midnight Visual Story
                      </div>
                    </div>

                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tour"
        className="relative z-10 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-6">
                World Tour
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Experience the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                  live midnight.
                </span>
              </h2>

              <p className="text-white/60 text-xl leading-relaxed mt-8">
                Massive immersive visuals, analog synth performances, and
                euphoric crowd energy combine into a fully cinematic live
                experience.
              </p>

              <div className="mt-12 space-y-5">
                {tours.map((tour, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between hover:bg-white/10 transition"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center border border-white/10">
                        <Calendar className="w-7 h-7 text-white" />
                      </div>

                      <div>
                        <div className="text-2xl font-black">
                          {tour.city}
                        </div>
                        <div className="text-white/50">{tour.venue}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="text-right">
                        <div className="text-lg font-bold">{tour.date}</div>
                        <div className="text-white/50 text-sm">2026</div>
                      </div>

                      <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition">
                        <Ticket className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative rounded-[40px] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="w-full h-[760px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07010f] via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                      <div className="text-4xl font-black">250K+</div>
                      <div className="text-white/50 mt-2">Tickets Sold</div>
                    </div>

                    <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                      <div className="text-4xl font-black">32</div>
                      <div className="text-white/50 mt-2">Live Shows</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="text-sm uppercase tracking-[0.4em] text-fuchsia-300 mb-6">
              Critical Reception
            </div>

            <h2 className="text-5xl md:text-6xl font-black">
              Critics and fans are
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                {" "}
                obsessed.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="p-10 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/10 blur-3xl rounded-full" />

                <Quote className="w-12 h-12 text-fuchsia-300 mb-8" />

                <p className="text-2xl leading-relaxed font-light relative z-10">
                  “{item.quote}”
                </p>

                <div className="mt-10">
                  <div className="font-black text-xl">{item.name}</div>
                  <div className="text-white/50 mt-1">{item.role}</div>
                </div>

                <div className="flex items-center gap-1 mt-8 text-yellow-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-300" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="store"
        className="relative z-10 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
            <div>
              <div className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-6">
                Exclusive Editions
              </div>

              <h2 className="text-5xl md:text-6xl font-black max-w-3xl">
                Own a piece of the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                  {" "}
                  midnight legacy.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-white/60 text-lg leading-relaxed">
              From collector vinyl releases to immersive fan experiences, every
              edition is crafted with premium detail and cinematic presentation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[40px] border ${
                  item.featured
                    ? "border-fuchsia-400/40 bg-gradient-to-b from-fuchsia-500/10 to-cyan-500/10"
                    : "border-white/10 bg-white/5"
                } backdrop-blur-xl p-10`}
              >
                {item.featured && (
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-fuchsia-400 text-black text-xs font-black uppercase tracking-[0.2em]">
                    Most Popular
                  </div>
                )}

                <div className="w-18 h-18 mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="text-4xl font-black">{item.title}</div>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-6xl font-black">{item.price}</div>
                  <div className="text-white/50 mb-2">USD</div>
                </div>

                <div className="mt-10 space-y-5">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-cyan-300" />
                      </div>

                      <span className="text-white/75">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-12 w-full py-4 rounded-2xl font-bold transition ${
                    item.featured
                      ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black hover:scale-[1.02]"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-white/5 to-cyan-500/10 backdrop-blur-2xl p-12 lg:p-20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/20 blur-[140px] rounded-full" />

            <div className="relative z-10 text-center">
              <div className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-6">
                Stay Connected
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Join the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300">
                  midnight frequency.
                </span>
              </h2>

              <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mt-8">
                Get early access to unreleased tracks, exclusive merchandise,
                cinematic visuals, and future live experiences.
              </p>

              <div className="max-w-2xl mx-auto mt-12 flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-8 py-5 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-xl outline-none focus:border-fuchsia-400 text-white"
                />

                <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-black hover:scale-105 transition">
                  Subscribe
                </button>
              </div>

              <div className="flex items-center justify-center gap-5 mt-12">
                {[
                  { icon: Instagram },
                  { icon: Twitter },
                  { icon: Youtube },
                  { icon: Spotify },
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-7 h-7" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 pt-24 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center">
                  <Waves className="w-9 h-9 text-black" />
                </div>

                <div>
                  <div className="text-4xl font-black uppercase tracking-[0.2em]">
                    The Midnight
                  </div>

                  <div className="text-white/50 uppercase tracking-[0.35em] text-sm mt-2">
                    Synthwave Experience
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-lg leading-relaxed mt-10 max-w-xl">
                The Midnight creates emotionally charged synthwave music inspired
                by nostalgia, cinematic storytelling, and the glowing loneliness
                of city nights.
              </p>

              <div className="flex items-center gap-4 mt-10">
                {[
                  { icon: Instagram },
                  { icon: Twitter },
                  { icon: Youtube },
                  { icon: Spotify },
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xl font-black mb-8">Navigation</div>

              <div className="space-y-5 text-white/60">
                {[
                  "Home",
                  "Album",
                  "Tour",
                  "Visuals",
                  "Store",
                  "Community",
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block hover:text-white transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xl font-black mb-8">Resources</div>

              <div className="space-y-5 text-white/60">
                {[
                  "Press Kit",
                  "Licensing",
                  "Partnerships",
                  "VIP Access",
                  "Merchandise",
                  "Support",
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block hover:text-white transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xl font-black mb-8">Contact</div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 text-white/60">
                  <Mail className="w-5 h-5 mt-1 text-cyan-300" />
                  <div>hello@themidnightmusic.com</div>
                </div>

                <div className="flex items-start gap-4 text-white/60">
                  <Phone className="w-5 h-5 mt-1 text-fuchsia-300" />
                  <div>+1 (323) 555-0199</div>
                </div>

                <div className="flex items-start gap-4 text-white/60">
                  <MapPin className="w-5 h-5 mt-1 text-cyan-300" />
                  <div>Los Angeles, California</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between gap-6">
            <div className="text-white/40">
              © 2026 The Midnight. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/40">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>

              <a href="#" className="hover:text-white transition">
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;