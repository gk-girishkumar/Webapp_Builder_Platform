import React, { useState } from "react";
import {
  Heart,
  CalendarDays,
  MapPin,
  Clock3,
  Sparkles,
  Camera,
  Flower2,
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Music4,
  Wine,
  Cake,
  Gift,
  Check,
  Star,
  Send,
  Plane,
  Hotel,
  Diamond,
  Church,
  Quote,
  Crown,
  Sun,
  MoonStar,
  Trees,
  PartyPopper,
  Gem,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "Yes, joyfully attending",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const timeline = [
    {
      time: "2:00 PM",
      title: "Guests Arrival",
      icon: <MapPin className="w-5 h-5" />,
      description:
        "Welcome drinks and garden music begin as guests arrive at the estate.",
    },
    {
      time: "3:00 PM",
      title: "Wedding Ceremony",
      icon: <Church className="w-5 h-5" />,
      description:
        "Join us beneath the olive trees for an intimate ceremony filled with love.",
    },
    {
      time: "5:00 PM",
      title: "Cocktail Hour",
      icon: <Wine className="w-5 h-5" />,
      description:
        "Craft cocktails, acoustic jazz, and sunset conversations in the courtyard.",
    },
    {
      time: "7:00 PM",
      title: "Reception Dinner",
      icon: <Cake className="w-5 h-5" />,
      description:
        "A candlelit dinner featuring seasonal cuisine, speeches, and celebration.",
    },
    {
      time: "9:00 PM",
      title: "Dancing & Celebration",
      icon: <Music4 className="w-5 h-5" />,
      description:
        "The dance floor opens beneath the stars with live music and midnight desserts.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=900&q=80",
  ];

  const testimonials = [
    {
      name: "Emily Carter",
      role: "Bride's Sister",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      text:
        "Sarah and John have a rare kind of love that fills every room with warmth. Their wedding will be unforgettable.",
    },
    {
      name: "Daniel Reeves",
      role: "Best Friend",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      text:
        "Watching their story unfold has been inspiring. They complement each other perfectly in every possible way.",
    },
    {
      name: "Sophia Lane",
      role: "Wedding Planner",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      text:
        "Every detail of this celebration reflects elegance, romance, and authenticity. It's going to feel magical.",
    },
  ];

  const travelCards = [
    {
      icon: <Hotel className="w-7 h-7" />,
      title: "Recommended Hotels",
      desc:
        "Exclusive rates have been arranged at nearby luxury hotels for all wedding guests.",
    },
    {
      icon: <Plane className="w-7 h-7" />,
      title: "Travel Assistance",
      desc:
        "Airport transfers and transportation schedules will be shared after RSVP confirmation.",
    },
    {
      icon: <Gift className="w-7 h-7" />,
      title: "Registry & Gifts",
      desc:
        "Your presence means the world to us. A small registry is available for those who wish to contribute.",
    },
  ];

  const stats = [
    { label: "Years Together", value: "8+" },
    { label: "Guests Invited", value: "220" },
    { label: "Songs Prepared", value: "64" },
    { label: "Champagne Bottles", value: "120" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f1eb] text-zinc-800 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-amber-100/50 blur-3xl rounded-full" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/50 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <span className="font-serif text-2xl tracking-wide">
                Sarah & John
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#story" className="hover:text-rose-600 transition">
                Our Story
              </a>
              <a href="#schedule" className="hover:text-rose-600 transition">
                Schedule
              </a>
              <a href="#gallery" className="hover:text-rose-600 transition">
                Gallery
              </a>
              <a href="#travel" className="hover:text-rose-600 transition">
                Travel
              </a>
              <a href="#rsvp" className="hover:text-rose-600 transition">
                RSVP
              </a>
            </nav>

            <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition">
              <CalendarDays className="w-4 h-4" />
              June 18, 2027
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center pt-32">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#f7f1eb]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white mb-8">
              <Sparkles className="w-4 h-4" />
              Celebrating love, family, and forever
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-white leading-none mb-8">
              Sarah
              <span className="block text-rose-200">&</span>
              John
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Together with our families, we invite you to celebrate our
              wedding in the romantic hills of Tuscany for a weekend filled with
              laughter, candlelight, music, and unforgettable memories.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-zinc-900 font-medium hover:scale-105 transition duration-300 shadow-2xl">
                View Schedule
              </button>

              <button className="px-8 py-4 rounded-full border border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition">
                RSVP Now
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6"
                >
                  <div className="text-3xl md:text-4xl font-serif text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-white/70 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="relative py-28 px-6 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-rose-200/40 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80"
              className="rounded-[40px] shadow-2xl relative z-10"
              alt=""
            />

            <div className="absolute -bottom-10 -right-10 bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <Diamond className="w-5 h-5 text-rose-500" />
                <span className="font-medium">Engaged in Paris</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Under the lights of the Eiffel Tower, John asked Sarah to spend
                forever together.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 text-sm mb-6">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              Our Story
            </div>

            <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
              A love story written in perfect timing.
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Sarah and John met on a rainy autumn evening at a tiny bookstore
              café in New York City. What began as a conversation about travel
              and music turned into years of adventures, quiet mornings, and
              unforgettable memories.
            </p>

            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              From mountain hikes in Switzerland to late-night pasta in Rome,
              their journey has always been about finding joy in the simplest
              moments together. Now they cannot wait to celebrate the beginning
              of their next chapter surrounded by the people they love most.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40">
                <Sun className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-serif text-2xl mb-3">First Date</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Coffee in Brooklyn turned into a twelve-hour adventure through
                  the city.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40">
                <MoonStar className="w-8 h-8 text-indigo-500 mb-4" />
                <h3 className="font-serif text-2xl mb-3">The Proposal</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  A surprise midnight proposal overlooking Paris beneath the
                  stars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="schedule"
        className="py-28 bg-gradient-to-b from-white/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/50 backdrop-blur-xl mb-6">
              <Clock3 className="w-4 h-4 text-rose-500" />
              Wedding Schedule
            </div>

            <h2 className="text-5xl md:text-6xl font-serif mb-6">
              A Weekend to Remember
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed">
              Every moment of the celebration has been thoughtfully designed to
              create an atmosphere of romance, joy, and timeless elegance.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-rose-300 via-zinc-300 to-transparent hidden md:block" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative md:pl-20 group transition duration-300"
                >
                  <div className="hidden md:flex absolute left-0 top-5 w-12 h-12 rounded-full bg-white border border-rose-200 shadow-lg items-center justify-center text-rose-500 group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 shadow-xl hover:-translate-y-1 transition duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-serif">{item.title}</h3>
                      <div className="px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium">
                        {item.time}
                      </div>
                    </div>

                    <p className="text-zinc-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="py-28 px-6 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/40 backdrop-blur-xl mb-6">
              <Camera className="w-4 h-4 text-rose-500" />
              Memories & Moments
            </div>

            <h2 className="text-5xl md:text-6xl font-serif mb-6">
              Capturing the romance.
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed">
              A glimpse into the moments, travels, celebrations, and quiet
              experiences that shaped our story together.
            </p>
          </div>

          <button className="flex items-center gap-2 px-6 py-4 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition">
            Explore More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[30px] group"
            >
              <img
                src={image}
                alt=""
                className="w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="text-sm">Forever moments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
                <Trees className="w-4 h-4 text-rose-300" />
                The Venue
              </div>

              <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
                Villa Bellissima,
                <span className="block text-rose-200">Tuscany, Italy</span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Nestled among rolling vineyards and olive groves, Villa
                Bellissima offers breathtaking views, timeless architecture, and
                intimate gardens designed for unforgettable celebrations.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-rose-300 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">
                      Ceremony Location
                    </h4>
                    <p className="text-white/70">
                      Via Toscana 12, Florence, Italy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CalendarDays className="w-6 h-6 text-rose-300 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">
                      Wedding Weekend
                    </h4>
                    <p className="text-white/70">
                      Friday, June 18 — Sunday, June 20, 2027
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Flower2 className="w-6 h-6 text-rose-300 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Dress Code</h4>
                    <p className="text-white/70">
                      Formal elegance with romantic summer tones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                className="rounded-[40px] shadow-2xl"
                alt=""
              />

              <div className="absolute -bottom-10 -left-10 bg-white text-zinc-900 rounded-[30px] p-8 max-w-sm shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <PartyPopper className="w-6 h-6 text-rose-500" />
                  <h4 className="font-serif text-2xl">
                    Sunset Garden Reception
                  </h4>
                </div>

                <p className="text-zinc-600 leading-relaxed text-sm">
                  Guests will dine beneath candlelit arches with live music,
                  floral installations, and panoramic Tuscan sunsets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/40 backdrop-blur-xl mb-6">
            <Quote className="w-4 h-4 text-rose-500" />
            Kind Words
          </div>

          <h2 className="text-5xl md:text-6xl font-serif mb-6">
            Celebrating with us.
          </h2>

          <p className="text-lg text-zinc-600 leading-relaxed">
            The people closest to us have shared in every chapter of our story,
            and their words mean the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <Quote className="w-10 h-10 text-rose-300 mb-6" />

              <p className="text-zinc-600 leading-relaxed text-lg mb-8">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-medium text-lg">{item.name}</h4>
                  <p className="text-zinc-500 text-sm">{item.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="travel"
        className="py-28 bg-gradient-to-b from-white/60 to-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {travelCards.map((card, index) => (
              <div
                key={index}
                className="p-10 rounded-[36px] bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition duration-700" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>

                  <h3 className="text-3xl font-serif mb-4">{card.title}</h3>

                  <p className="text-zinc-600 leading-relaxed mb-8">
                    {card.desc}
                  </p>

                  <button className="flex items-center gap-2 text-rose-600 font-medium">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="rsvp"
        className="py-28 px-6 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/50 backdrop-blur-xl mb-6">
              <Send className="w-4 h-4 text-rose-500" />
              RSVP
            </div>

            <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
              We can't wait to celebrate with you.
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              Kindly respond before March 1, 2027. Please let us know if you
              will be joining us for the full wedding weekend celebration.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-rose-500" />
                </div>

                <div>
                  <h4 className="font-medium text-lg">Email Us</h4>
                  <p className="text-zinc-600">hello@sarahandjohn.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-rose-500" />
                </div>

                <div>
                  <h4 className="font-medium text-lg">Contact Number</h4>
                  <p className="text-zinc-600">+1 (212) 555-2027</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-200/50 to-amber-100/50 blur-3xl rounded-full" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 backdrop-blur-2xl border border-white/50 rounded-[40px] p-10 shadow-2xl"
            >
              {!submitted ? (
                <>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name
                      </label>

                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email Address
                      </label>

                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-300"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Number of Guests
                      </label>

                      <select
                        value={form.guests}
                        onChange={(e) =>
                          setForm({ ...form, guests: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-300"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Attendance
                      </label>

                      <select
                        value={form.attending}
                        onChange={(e) =>
                          setForm({ ...form, attending: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-300"
                      >
                        <option>Yes, joyfully attending</option>
                        <option>Sadly unable to attend</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">
                      Message for the Couple
                    </label>

                    <textarea
                      rows="5"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl border border-zinc-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-300"
                      placeholder="Share your wishes or notes..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition"
                  >
                    Submit RSVP
                    <Send className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-rose-500" />
                  </div>

                  <h3 className="text-4xl font-serif mb-4">
                    Thank You!
                  </h3>

                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Your RSVP has been received. We are so excited to celebrate
                    this beautiful moment with you in Tuscany.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
          <div className="grid lg:grid-cols-4 gap-14 pb-20 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-7 h-7 text-rose-300" />
                <span className="font-serif text-3xl">
                  Sarah & John
                </span>
              </div>

              <p className="text-white/60 leading-relaxed mb-8">
                Thank you for being part of our journey and celebrating this
                unforgettable chapter in our lives.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-6">Wedding Details</h4>

              <ul className="space-y-4 text-white/60">
                <li className="flex items-center gap-3">
                  <CalendarDays className="w-4 h-4 text-rose-300" />
                  June 18, 2027
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-rose-300" />
                  Tuscany, Italy
                </li>

                <li className="flex items-center gap-3">
                  <Music4 className="w-4 h-4 text-rose-300" />
                  Live Orchestra & Reception
                </li>

                <li className="flex items-center gap-3">
                  <Flower2 className="w-4 h-4 text-rose-300" />
                  Garden Ceremony
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-6">Quick Links</h4>

              <ul className="space-y-4 text-white/60">
                <li>
                  <a href="#story" className="hover:text-white transition">
                    Our Story
                  </a>
                </li>

                <li>
                  <a href="#schedule" className="hover:text-white transition">
                    Schedule
                  </a>
                </li>

                <li>
                  <a href="#gallery" className="hover:text-white transition">
                    Gallery
                  </a>
                </li>

                <li>
                  <a href="#travel" className="hover:text-white transition">
                    Travel & Stay
                  </a>
                </li>

                <li>
                  <a href="#rsvp" className="hover:text-white transition">
                    RSVP
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-6">A Note From Us</h4>

              <p className="text-white/60 leading-relaxed mb-6">
                We feel incredibly fortunate to share this celebration with the
                people who have supported and loved us throughout our lives.
              </p>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Gem className="w-5 h-5 text-rose-300" />
                  <span className="font-medium">Forever Begins Here</span>
                </div>

                <p className="text-sm text-white/60 leading-relaxed">
                  Your presence will make our wedding weekend even more
                  meaningful and memorable.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <p className="text-white/40 text-sm">
              © 2027 Sarah & John Wedding Celebration. Crafted with love.
            </p>

            <div className="flex items-center gap-3 text-white/40 text-sm">
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
              Made for timeless memories and beautiful beginnings.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}