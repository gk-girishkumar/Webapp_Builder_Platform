import React from "react";
import {
  Camera,
  Heart,
  Star,
  ArrowRight,
  Play,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Aperture,
  Sparkles,
  Check,
  Quote,
  Calendar,
  Clock3,
  Image as ImageIcon,
  Users,
  ChevronRight,
  Award,
  Globe,
  Compass,
  Send,
  ArrowUpRight,
  Film,
  Eye,
  MoonStar,
} from "lucide-react";

export default function App() {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      height: "h-[520px]",
      title: "Golden Hour Ceremony",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      height: "h-[360px]",
      title: "Intimate Vows",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      height: "h-[620px]",
      title: "City Romance",
    },
    {
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
      height: "h-[420px]",
      title: "Champagne Moments",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
      height: "h-[500px]",
      title: "Oceanfront Love",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=80",
      height: "h-[340px]",
      title: "Elegant Reception",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80",
      height: "h-[540px]",
      title: "Forever Begins",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      height: "h-[430px]",
      title: "Candles & Roses",
    },
  ];

  const features = [
    {
      icon: Camera,
      title: "Editorial Storytelling",
      description:
        "Every frame is composed with emotion, cinematic light, and intentional detail inspired by timeless editorial photography.",
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description:
        "From inquiry to final gallery delivery, each interaction is refined, thoughtful, and deeply personalized.",
    },
    {
      icon: Heart,
      title: "Authentic Connection",
      description:
        "Capturing the subtle glances, quiet laughter, and unforgettable emotions that define your celebration.",
    },
    {
      icon: Film,
      title: "Hybrid Coverage",
      description:
        "A seamless blend of digital imagery and nostalgic film photography crafted with artistic precision.",
    },
  ];

  const stats = [
    { value: "240+", label: "Weddings Captured" },
    { value: "18", label: "Countries Documented" },
    { value: "12M", label: "Moments Preserved" },
    { value: "9 Years", label: "Luxury Experience" },
  ];

  const testimonials = [
    {
      name: "Sophia & Daniel",
      role: "Lake Como Wedding",
      text: "The photographs feel like scenes from a dream. Every image carries emotion, movement, and elegance beyond anything we imagined.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Amelia & Lucas",
      role: "New York Celebration",
      text: "An extraordinary artistic eye combined with a calming presence. Our gallery feels timeless, intimate, and deeply personal.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Olivia & Matteo",
      role: "Tuscany Estate",
      text: "Every detail was documented beautifully. The tones, composition, and emotion exceeded every expectation we had.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const pricing = [
    {
      name: "Signature",
      price: "$4,800",
      description: "Perfect for intimate celebrations and refined city weddings.",
      features: [
        "8 hours of coverage",
        "Two photographers",
        "Curated online gallery",
        "Fine-art editing",
        "Sneak peeks within 48 hours",
      ],
    },
    {
      name: "Heirloom",
      price: "$8,900",
      featured: true,
      description: "Comprehensive storytelling crafted for destination experiences.",
      features: [
        "Full-day coverage",
        "35mm film photography",
        "Luxury wedding album",
        "Rehearsal dinner coverage",
        "Priority delivery",
        "Drone photography",
      ],
    },
    {
      name: "Weekend Collection",
      price: "$12,500",
      description: "An immersive multi-day experience preserving every celebration.",
      features: [
        "Multi-day coverage",
        "Creative direction",
        "Editorial portrait session",
        "Private cloud archive",
        "Worldwide travel included",
        "Custom print collection",
      ],
    },
  ];

  const process = [
    {
      title: "Discovery",
      text: "A thoughtful consultation focused on your story, aesthetic, venue, and vision for the celebration.",
    },
    {
      title: "Planning",
      text: "Timeline collaboration, lighting analysis, and artistic preparation tailored to every detail.",
    },
    {
      title: "Wedding Day",
      text: "Calm guidance, documentary intuition, and elevated imagery captured with intention and grace.",
    },
    {
      title: "Delivery",
      text: "A beautifully curated online gallery and heirloom-quality keepsakes designed to last generations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f4ef] text-neutral-900 overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-lg">
                <Aperture className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-serif text-2xl tracking-wide">Lens & Light</h1>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Fine Art Wedding Photography
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-neutral-700">
              <a href="#" className="hover:text-black transition">
                Portfolio
              </a>
              <a href="#" className="hover:text-black transition">
                Experience
              </a>
              <a href="#" className="hover:text-black transition">
                Collections
              </a>
              <a href="#" className="hover:text-black transition">
                Journal
              </a>
              <a href="#" className="hover:text-black transition">
                Contact
              </a>
            </nav>

            <button className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition shadow-xl shadow-black/10">
              Reserve Your Date
            </button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/50 backdrop-blur-md px-5 py-2 text-sm shadow-xl mb-8">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Capturing timeless celebrations worldwide
              </div>

              <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif leading-[0.95] tracking-tight text-neutral-900">
                Cinematic love stories crafted with light.
              </h1>

              <p className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-xl">
                A refined wedding photography experience blending documentary
                honesty with editorial elegance. Designed for couples who value
                emotion, atmosphere, and timeless imagery.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <button className="group rounded-full bg-neutral-900 text-white px-8 py-4 font-medium flex items-center gap-3 shadow-2xl shadow-black/20 hover:bg-black transition">
                  Explore Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>

                <button className="flex items-center gap-4 text-neutral-800">
                  <div className="h-14 w-14 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-xl">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Watch the Story Reel</p>
                    <p className="text-sm text-neutral-500">
                      3 minute cinematic showcase
                    </p>
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white/50 border border-white/40 backdrop-blur-xl p-5 shadow-xl"
                  >
                    <h3 className="text-3xl font-serif">{stat.value}</h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full border border-white/50 bg-white/20 backdrop-blur-xl" />
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-5 pt-16">
                  <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                      src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80"
                      className="h-[440px] w-full object-cover"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/50 p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                        <Award className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          Internationally Featured
                        </h4>
                        <p className="text-sm text-neutral-500">
                          Vogue Weddings • Magnolia Rouge • WedVibes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[2rem] bg-neutral-900 text-white p-8 shadow-2xl">
                    <MoonStar className="w-10 h-10 text-amber-300 mb-6" />
                    <h3 className="text-3xl font-serif leading-tight">
                      Poetry hidden inside every fleeting moment.
                    </h3>
                    <p className="mt-5 text-neutral-300 text-sm leading-relaxed">
                      Quiet gestures, luminous textures, emotional movement, and
                      genuine connection transformed into lasting art.
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                      src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80"
                      className="h-[500px] w-full object-cover"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] opacity-80">
                            Destination Weddings
                          </p>
                          <h4 className="font-serif text-2xl mt-2">
                            Europe • Asia • Americas
                          </h4>
                        </div>
                        <Globe className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-16">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
                The Experience
              </p>
              <h2 className="text-5xl md:text-6xl font-serif max-w-3xl leading-tight">
                Thoughtful artistry rooted in emotion and elegance.
              </h2>
            </div>

            <p className="max-w-xl text-neutral-600 leading-relaxed text-lg">
              Every wedding unfolds differently. The approach remains deeply
              intentional — balancing documentary observation with refined
              direction to create photographs that feel effortless and enduring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-[2rem] border border-white/40 bg-white/50 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="h-16 w-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xl">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="mt-8 text-2xl font-serif">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-amber-300 mb-5">
                Signature Approach
              </p>

              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                Preserving atmosphere, intimacy, and honest connection.
              </h2>

              <p className="mt-8 text-neutral-300 text-lg leading-relaxed">
                The focus extends beyond posed portraits. It lives in movement,
                quiet anticipation, layered details, and the emotional rhythm of
                the day itself.
              </p>

              <div className="mt-12 space-y-6">
                {process.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300 font-semibold">
                      0{index + 1}
                    </div>

                    <div>
                      <h4 className="text-xl font-serif">{item.title}</h4>
                      <p className="text-neutral-300 mt-2 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-amber-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80"
                  className="h-[760px] w-full object-cover"
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Eye className="w-10 h-10 text-amber-300" />
                      <div>
                        <h4 className="text-2xl font-serif">
                          Artistic Direction
                        </h4>
                        <p className="text-neutral-300 text-sm">
                          Elegant posing with natural movement
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-200 leading-relaxed">
                      Gentle guidance creates photographs that feel cinematic
                      while remaining authentic to each couple’s personality and
                      energy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
                Portfolio Highlights
              </p>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                A collection of unforgettable moments.
              </h2>
            </div>

            <button className="group rounded-full border border-neutral-300 px-6 py-3 flex items-center gap-3 hover:bg-neutral-900 hover:text-white transition">
              View Full Portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </button>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <img
                  src={item.image}
                  alt=""
                  className={`w-full ${item.height} object-cover transition duration-700 group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-white text-2xl font-serif">
                      {item.title}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      Editorial Wedding Collection
                    </p>
                  </div>

                  <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white/50 backdrop-blur-xl border-y border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
              Kind Words
            </p>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Trusted by couples around the world.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-[2.5rem] bg-white border border-neutral-200 p-8 shadow-2xl shadow-black/5"
              >
                <Quote className="w-12 h-12 text-amber-500 mb-8" />

                <p className="text-lg leading-relaxed text-neutral-700">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4 mt-10">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="h-16 w-16 rounded-2xl object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
                Investment
              </p>

              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                Tailored collections for unforgettable celebrations.
              </h2>
            </div>

            <div className="rounded-[2rem] bg-neutral-900 text-white p-10">
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Compass className="w-7 h-7 text-amber-300" />
                </div>

                <div>
                  <h3 className="text-3xl font-serif">
                    Destination Ready
                  </h3>
                  <p className="mt-4 text-neutral-300 leading-relaxed">
                    Available worldwide for luxury weddings, intimate elopements,
                    and multi-day destination experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-[2.5rem] p-10 border transition-all duration-500 hover:-translate-y-2 ${
                  plan.featured
                    ? "bg-neutral-900 text-white border-neutral-800 shadow-2xl shadow-black/20"
                    : "bg-white border-neutral-200 shadow-xl shadow-black/5"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-6 right-6 rounded-full bg-amber-400 text-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                    Most Popular
                  </div>
                )}

                <h3 className="text-3xl font-serif">{plan.name}</h3>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-serif">{plan.price}</span>
                  <span
                    className={`pb-2 ${
                      plan.featured ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    starting investment
                  </span>
                </div>

                <p
                  className={`mt-6 leading-relaxed ${
                    plan.featured ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-10 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          plan.featured
                            ? "bg-white/10"
                            : "bg-neutral-100"
                        }`}
                      >
                        <Check className="w-4 h-4 text-amber-500" />
                      </div>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-12 w-full rounded-full py-4 font-medium transition ${
                    plan.featured
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-neutral-900 text-white hover:bg-black"
                  }`}
                >
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center text-white">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-300 mb-6">
            Reserve Your Celebration
          </p>

          <h2 className="text-6xl md:text-7xl font-serif leading-tight">
            Begin your next chapter beautifully documented.
          </h2>

          <p className="mt-8 text-xl text-neutral-200 leading-relaxed max-w-3xl mx-auto">
            Availability is intentionally limited to ensure a deeply personalized
            experience for every couple. Reach out to begin crafting your story.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <button className="rounded-full bg-white text-black px-8 py-4 font-medium hover:bg-neutral-200 transition">
              Start Your Inquiry
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-4 font-medium hover:bg-white/20 transition">
              Download Pricing Guide
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">
              <Calendar className="w-8 h-8 text-amber-300 mx-auto mb-5" />
              <h4 className="text-2xl font-serif">2026 Bookings</h4>
              <p className="text-neutral-300 mt-3">
                Select dates currently available worldwide.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">
              <Clock3 className="w-8 h-8 text-amber-300 mx-auto mb-5" />
              <h4 className="text-2xl font-serif">48 Hour Reply</h4>
              <p className="text-neutral-300 mt-3">
                Personalized responses crafted with care.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">
              <Users className="w-8 h-8 text-amber-300 mx-auto mb-5" />
              <h4 className="text-2xl font-serif">Tailored Experience</h4>
              <p className="text-neutral-300 mt-3">
                Every wedding uniquely approached and curated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 text-white pt-24 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-rose-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid xl:grid-cols-5 gap-16 pb-20 border-b border-white/10">
            <div className="xl:col-span-2">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center">
                  <Aperture className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-serif text-3xl">Lens & Light</h3>
                  <p className="text-sm text-neutral-400 uppercase tracking-[0.3em]">
                    Fine Art Wedding Photography
                  </p>
                </div>
              </div>

              <p className="mt-8 text-neutral-400 leading-relaxed max-w-lg">
                A minimalist yet cinematic approach to documenting modern love
                stories with timeless elegance, emotional depth, and artistic
                intention.
              </p>

              <div className="flex items-center gap-4 mt-10">
                <a
                  href="#"
                  className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-12 rounded-[2rem] bg-white/5 border border-white/10 p-8">
                <h4 className="text-2xl font-serif">
                  Join the Journal
                </h4>

                <p className="text-neutral-400 mt-4 leading-relaxed">
                  Monthly inspiration, destination highlights, wedding stories,
                  and photography insights delivered beautifully.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-amber-400"
                  />

                  <button className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-amber-300 transition">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-8">Navigation</h4>

              <div className="space-y-5 text-neutral-400">
                <a href="#" className="block hover:text-white transition">
                  Home
                </a>
                <a href="#" className="block hover:text-white transition">
                  Portfolio
                </a>
                <a href="#" className="block hover:text-white transition">
                  Experience
                </a>
                <a href="#" className="block hover:text-white transition">
                  Destination Weddings
                </a>
                <a href="#" className="block hover:text-white transition">
                  Journal
                </a>
                <a href="#" className="block hover:text-white transition">
                  Inquire
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-8">Collections</h4>

              <div className="space-y-5 text-neutral-400">
                <a href="#" className="block hover:text-white transition">
                  Signature Weddings
                </a>
                <a href="#" className="block hover:text-white transition">
                  Elopements
                </a>
                <a href="#" className="block hover:text-white transition">
                  Weekend Celebrations
                </a>
                <a href="#" className="block hover:text-white transition">
                  Engagement Sessions
                </a>
                <a href="#" className="block hover:text-white transition">
                  Film Photography
                </a>
                <a href="#" className="block hover:text-white transition">
                  Fine-Art Albums
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-8">Contact</h4>

              <div className="space-y-6 text-neutral-400">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 mt-1 text-amber-300" />
                  <div>
                    <p className="text-white">hello@lensandlight.com</p>
                    <p className="text-sm">General inquiries & bookings</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 mt-1 text-amber-300" />
                  <div>
                    <p className="text-white">+1 (310) 555-4821</p>
                    <p className="text-sm">Mon — Fri, 9am — 6pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-amber-300" />
                  <div>
                    <p className="text-white">Los Angeles, California</p>
                    <p className="text-sm">Available worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                  Current Availability
                </p>

                <h5 className="font-serif text-3xl mt-4">
                  Limited 2026 Dates
                </h5>

                <p className="text-neutral-400 mt-4 leading-relaxed">
                  Intentionally booking a select number of weddings each year to
                  maintain an elevated and highly personal experience.
                </p>

                <button className="mt-6 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-amber-300 transition">
                  Check Availability
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-500 text-sm">
            <p>
              © 2026 Lens & Light. Crafted for timeless celebrations worldwide.
            </p>

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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}