import React from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  Calendar,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  Globe,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  MonitorSmartphone,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Twitter,
  Users,
  UserRoundCheck,
  Video,
  Waves,
} from "lucide-react";

export default function App() {
  const features = [
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Primary Care",
      text: "Compassionate routine care with a focus on prevention, wellness, and long-term health outcomes.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neurology",
      text: "Advanced neurological assessments and personalized treatment plans powered by modern diagnostics.",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Diagnostics",
      text: "Fast laboratory results and imaging support with highly accurate reporting and digital access.",
    },
    {
      icon: <Syringe className="w-6 h-6" />,
      title: "Vaccination",
      text: "Family-friendly immunization programs and travel health consultations for every age group.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Telemedicine",
      text: "Secure virtual appointments with doctors and specialists from the comfort of your home.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Preventive Care",
      text: "Personalized screenings and health monitoring designed to reduce long-term risks.",
    },
  ];

  const stats = [
    { value: "42K+", label: "Patients Served" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "120+", label: "Medical Specialists" },
    { value: "24/7", label: "Urgent Support" },
  ];

  const testimonials = [
    {
      name: "Sophia Reynolds",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      text: "Nova Health completely changed how I experience healthcare. Every appointment feels calm, organized, and genuinely caring.",
    },
    {
      name: "Daniel Kim",
      role: "Parent",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      text: "The pediatric care team was exceptional. Scheduling was easy and the digital follow-ups made everything seamless.",
    },
    {
      name: "Emily Carter",
      role: "Telehealth User",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
      text: "I used the telemedicine platform during a busy work week and received fast, thoughtful care from experienced doctors.",
    },
  ];

  const pricing = [
    {
      title: "Essential Care",
      price: "$49",
      subtitle: "Perfect for individuals",
      features: [
        "General consultations",
        "Digital health dashboard",
        "Priority appointment booking",
        "Basic lab reporting",
      ],
      highlighted: false,
    },
    {
      title: "Family Wellness",
      price: "$129",
      subtitle: "Comprehensive family plan",
      features: [
        "Up to 5 family members",
        "24/7 telemedicine support",
        "Annual wellness screenings",
        "Vaccination discounts",
        "Dedicated care coordinator",
      ],
      highlighted: true,
    },
    {
      title: "Executive Health",
      price: "$249",
      subtitle: "Premium proactive care",
      features: [
        "Full body diagnostics",
        "Private specialist access",
        "Personalized health roadmap",
        "Advanced analytics reporting",
        "Same-day appointments",
      ],
      highlighted: false,
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  ];

  const doctors = [
    {
      name: "Dr. Olivia Bennett",
      specialty: "Cardiology",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Dr. Ethan Morales",
      specialty: "Neurology",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Dr. Grace Holloway",
      specialty: "Pediatrics",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.18),transparent_30%)] pointer-events-none"></div>

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Nova Health</h1>
                <p className="text-xs text-slate-400">
                  Modern Clinical Care
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
              <a href="#" className="hover:text-white transition">
                Services
              </a>
              <a href="#" className="hover:text-white transition">
                Specialists
              </a>
              <a href="#" className="hover:text-white transition">
                Technology
              </a>
              <a href="#" className="hover:text-white transition">
                Testimonials
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm">
                <Phone className="w-4 h-4" />
                Emergency
              </button>

              <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-medium hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 mb-8">
                <Sparkles className="w-4 h-4" />
                Trusted by thousands of families nationwide
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
                Accessible healthcare designed for modern life.
              </h1>

              <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-xl">
                Nova Health combines compassionate clinicians, intelligent
                technology, and premium patient experiences to deliver care that
                feels calm, connected, and deeply human.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition">
                  Schedule Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>

                <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  Watch Overview
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="w-full h-[700px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute top-6 left-6 right-6 flex justify-between">
                  <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <div className="font-semibold">Real-Time Monitoring</div>
                        <div className="text-xs text-slate-300">
                          Connected health tracking
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-indigo-400/20 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-indigo-300" />
                      </div>
                      <div>
                        <div className="font-semibold">Same-Day Visits</div>
                        <div className="text-xs text-slate-300">
                          Available daily
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5">
                      <Clock3 className="w-6 h-6 text-cyan-300 mb-3" />
                      <h4 className="font-semibold">24/7 Support</h4>
                      <p className="text-sm text-slate-300 mt-2">
                        Immediate nurse and physician access.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5">
                      <MonitorSmartphone className="w-6 h-6 text-indigo-300 mb-3" />
                      <h4 className="font-semibold">Smart Portal</h4>
                      <p className="text-sm text-slate-300 mt-2">
                        Secure records, prescriptions, and reports.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5">
                      <UserRoundCheck className="w-6 h-6 text-emerald-300 mb-3" />
                      <h4 className="font-semibold">Personalized Care</h4>
                      <p className="text-sm text-slate-300 mt-2">
                        Tailored plans built around your goals.
                      </p>
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 mb-5">
                <Stethoscope className="w-4 h-4" />
                Clinical Excellence
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-2xl">
                Premium healthcare services built around accessibility and trust.
              </h2>
            </div>

            <p className="max-w-xl text-slate-400 text-lg leading-relaxed">
              Every Nova Health experience is designed to feel intuitive,
              transparent, and reassuring — from your first booking to ongoing
              wellness support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 hover:bg-white/[0.08] transition duration-500"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-cyan-300 mb-6">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.text}
                  </p>

                  <button className="mt-8 flex items-center gap-2 text-cyan-300 font-medium">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 mb-5">
              <Waves className="w-4 h-4" />
              Spaces That Heal
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              A calming clinic environment with modern technology.
            </h2>

            <p className="text-slate-400 text-lg mt-6 leading-relaxed">
              Thoughtfully designed interiors, digital systems, and welcoming
              patient experiences that prioritize comfort at every step.
            </p>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 group"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-300 mb-6">
                <Users className="w-4 h-4" />
                Dedicated Specialists
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Meet the clinicians leading a new standard of patient care.
              </h2>

              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                Our multidisciplinary team combines medical expertise,
                empathetic communication, and advanced technology to support
                every patient journey with confidence and clarity.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Board-certified specialists across major disciplines",
                  "Collaborative treatment planning and digital records",
                  "Evidence-based medicine with proactive wellness care",
                  "Continuous follow-ups and long-term health guidance",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-emerald-300" />
                    </div>

                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {doctors.map((doctor, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col md:flex-row gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition"
                >
                  <img
                    src={doctor.image}
                    alt=""
                    className="w-full md:w-48 h-64 md:h-48 object-cover rounded-2xl"
                  />

                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-cyan-300 mb-3">
                      <BadgeCheck className="w-4 h-4" />
                      Verified Specialist
                    </div>

                    <h3 className="text-2xl font-bold">{doctor.name}</h3>

                    <p className="text-slate-400 mt-2">
                      {doctor.specialty}
                    </p>

                    <p className="text-slate-300 mt-5 leading-relaxed">
                      Experienced in advanced patient-centered treatment,
                      diagnostics, and long-term wellness strategies.
                    </p>

                    <button className="mt-6 flex items-center gap-2 text-cyan-300 font-medium">
                      View Profile
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 backdrop-blur-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 mb-6">
                  <Globe className="w-4 h-4" />
                  Smart Healthcare Platform
                </div>

                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  Connected care powered by intuitive digital experiences.
                </h2>

                <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                  Book appointments, access reports, message your care team,
                  monitor treatment progress, and receive reminders from one
                  secure patient platform.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-10">
                  {[
                    "Secure messaging",
                    "Prescription renewals",
                    "Live appointment tracking",
                    "AI-assisted symptom triage",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-cyan-300" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-300 text-sm">
                          Average wait time
                        </p>
                        <h3 className="text-4xl font-black mt-2">8 mins</h3>
                      </div>

                      <div className="w-16 h-16 rounded-2xl bg-emerald-400/20 flex items-center justify-center">
                        <Activity className="w-8 h-8 text-emerald-300" />
                      </div>
                    </div>

                    <div className="mt-6 h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></div>
                    </div>

                    <p className="mt-3 text-sm text-slate-300">
                      Faster than 91% of regional clinics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-300 mb-5">
              <Star className="w-4 h-4" />
              Patient Stories
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Trusted by patients and families across every stage of care.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 hover:bg-white/[0.08] transition"
              >
                <div className="flex items-center gap-1 text-yellow-300 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed text-lg">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-2xl object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.04] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 mb-5">
              <ShieldCheck className="w-4 h-4" />
              Membership Plans
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Flexible healthcare plans designed around your lifestyle.
            </h2>

            <p className="text-slate-400 text-lg mt-6">
              Transparent pricing with premium care experiences and digital
              convenience included.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-[2rem] border p-8 backdrop-blur-xl transition hover:-translate-y-2 ${
                  plan.highlighted
                    ? "border-cyan-400/30 bg-gradient-to-b from-cyan-400/10 to-indigo-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold">{plan.title}</h3>

                <p className="text-slate-400 mt-2">{plan.subtitle}</p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-slate-400 mb-2">/ month</span>
                </div>

                <div className="space-y-4 mt-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-300" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-10 py-4 rounded-2xl font-semibold transition ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 to-indigo-500/15 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),transparent_25%)]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 mb-6">
                <Calendar className="w-4 h-4" />
                Start Your Wellness Journey
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">
                Experience healthcare that feels personal, modern, and deeply
                supportive.
              </h2>

              <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Join Nova Health and gain access to world-class clinicians,
                advanced diagnostics, digital convenience, and a compassionate
                care experience designed around your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold hover:scale-105 transition">
                  Book an Appointment
                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-24 pb-10 border-t border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Nova Health</h3>
                  <p className="text-slate-400 text-sm">
                    Modern Clinical Care
                  </p>
                </div>
              </div>

              <p className="mt-8 text-slate-400 leading-relaxed max-w-md">
                Nova Health delivers connected healthcare experiences that blend
                compassionate clinicians, premium facilities, and advanced
                technology into one seamless patient journey.
              </p>

              <div className="flex gap-4 mt-8">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-slate-300" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>

              <div className="space-y-4 text-slate-400">
                <a href="#" className="block hover:text-white transition">
                  Primary Care
                </a>
                <a href="#" className="block hover:text-white transition">
                  Pediatrics
                </a>
                <a href="#" className="block hover:text-white transition">
                  Neurology
                </a>
                <a href="#" className="block hover:text-white transition">
                  Cardiology
                </a>
                <a href="#" className="block hover:text-white transition">
                  Diagnostics
                </a>
                <a href="#" className="block hover:text-white transition">
                  Telemedicine
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>

              <div className="space-y-4 text-slate-400">
                <a href="#" className="block hover:text-white transition">
                  About Us
                </a>
                <a href="#" className="block hover:text-white transition">
                  Careers
                </a>
                <a href="#" className="block hover:text-white transition">
                  Specialists
                </a>
                <a href="#" className="block hover:text-white transition">
                  Patient Stories
                </a>
                <a href="#" className="block hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-white transition">
                  Terms of Service
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>

              <div className="space-y-5 text-slate-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-cyan-300" />
                  <span>
                    225 Wellness Avenue
                    <br />
                    San Francisco, CA 94105
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-300" />
                  <span>(800) 555-0148</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <span>hello@novahealth.com</span>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h5 className="font-semibold text-lg">
                  Subscribe for updates
                </h5>

                <p className="text-sm text-slate-400 mt-2">
                  Wellness insights and clinic announcements delivered monthly.
                </p>

                <div className="flex mt-5 gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-2xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400"
                  />

                  <button className="px-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 font-semibold">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-sm text-slate-500">
            <p>© 2026 Nova Health. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Accessibility
              </a>
              <a href="#" className="hover:text-white transition">
                Security
              </a>
              <a href="#" className="hover:text-white transition">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}