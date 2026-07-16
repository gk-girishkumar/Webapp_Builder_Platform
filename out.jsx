/*
UNDERSTANDING:
Building a premium single-page landing page for "LumenFrame AI Studio", an AI-powered cinematic production platform. The experience should feel immersive, futuristic, and visually dreamy with layered gradients, glassmorphism, cinematic cards, glowing accents, and responsive layouts. The page includes:
- Transparent cinematic navbar with smooth-scroll navigation and mobile menu.
- Dreamy hero section with large headline, atmospheric gradients, floating AI prompt cards, and dual CTAs.
- Feature grid highlighting AI production capabilities.
- Workflow timeline showing concept-to-final-frame process.
- Showcase gallery with cinematic scene cards.
- Metrics/stats section emphasizing efficiency.
- Testimonial cards from filmmakers and studios.
- Pricing preview with multiple production plans.
- Final CTA section with atmospheric gradient panel and email capture.
- Elegant footer with newsletter, links, and social-style icons using safe Lucide icons only.

PRESERVATION CHECKLIST:
- Use React + Tailwind single-file implementation.
- Implement every section from the plan with exact IDs:
  main_navigation
  dreamy_hero
  studio_capabilities
  creative_workflow
  film_showcase
  industry_stats
  creator_testimonials
  pricing_preview
  final_cta
  site_footer
- Use dreamy cinematic dark theme:
  primary #6D5EF5
  secondary #141B34
  accent #FFB86C
  background #0B1020
  text #F5F7FB
- Use smooth scrolling for all navigation and CTA interactions.
- Use Lucide icons only for non-brand icons.
- Include premium hover states, transitions, gradients, glows, blur backdrops.
- Responsive mobile navigation with working menu close behavior.
- Use compelling real marketing copy throughout.
- Keep implementation concise but production quality.

CHANGE PLAN:
1. Import React hooks and Lucide icons.
2. Create navigation data and helper smooth-scroll function.
3. Build Navbar with desktop/mobile variants.
4. Build Hero with layered gradients and floating cinematic cards.
5. Build modular sections for features, workflow, gallery, stats, testimonials, pricing, CTA, footer.
6. Use reusable card styles and premium transitions.
7. Assemble all sections in App export with consistent spacing and cinematic background effects.

LUCIDE CONSTRAINT:
Lucide Icons does NOT contain brand/social icons like Instagram, YouTube, Facebook, LinkedIn, GitHub. Use generic icons such as Globe, Play, Mail, Sparkles, Film, Camera, Share2, ArrowRight, etc. Do NOT import unavailable brand icons from lucide-react.

THIRD-PARTY PACKAGES:
Only lucide-react and React hooks are needed. No additional packages required.

NAME COLLISION WARNING:
Avoid naming custom components the same as Lucide imports. No collisions introduced.
*/

import React, { useState } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Film,
  Clapperboard,
  Wand2,
  Layers3,
  Globe,
  Play,
  Check,
  Star,
  Camera,
  Zap,
  Users,
  Mail,
} from 'lucide-react'

const navItems = [
  { label: 'Features', id: 'studio_capabilities' },
  { label: 'Workflow', id: 'creative_workflow' },
  { label: 'Showcase', id: 'film_showcase' },
  { label: 'Pricing', id: 'pricing_preview' },
  { label: 'Contact', id: 'final_cta' },
]

const scrollToSection = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      id="main_navigation"
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D5EF5] to-[#FFB86C] shadow-lg shadow-[#6D5EF5]/30">
            <Film className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#F5F7FB]">LumenFrame</p>
            <p className="text-xs text-white/50">AI Studio</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-sm text-white/70 transition-all duration-200 hover:scale-[1.02] hover:text-white active:scale-[0.98]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={(e) => scrollToSection(e, 'final_cta')}
            className="group flex items-center gap-2 rounded-full bg-[#6D5EF5] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#6D5EF5]/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#7b6df7] active:scale-[0.98]"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-white transition-all duration-200 hover:bg-white/10 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#141B34]/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  scrollToSection(e, item.id)
                  setOpen(false)
                }}
                className="text-white/80 transition-all duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={(e) => {
                scrollToSection(e, 'final_cta')
                setOpen(false)
              }}
              className="mt-2 rounded-full bg-[#6D5EF5] px-5 py-3 text-white transition-all duration-200 hover:bg-[#7b6df7]"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const prompts = [
    'AI-generated concept art',
    'Virtual cinematography planning',
    'Scene-to-scene production workflows',
    'Collaborative creative direction',
  ]

  return (
    <section
      id="dreamy_hero"
      className="relative overflow-hidden px-6 pb-24 pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5EF533,transparent_40%)]" />
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-[#6D5EF5]/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#FFB86C]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#FFB86C]" />
            AI-powered cinematic production from concept to final cut
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-[#F5F7FB] md:text-7xl">
            Create Cinematic Worlds With AI
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Generate storyboards, virtual scenes, camera directions, and
            production-ready visuals in minutes using a collaborative AI
            filmmaking platform.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={(e) => scrollToSection(e, 'pricing_preview')}
              className="group flex items-center justify-center gap-2 rounded-full bg-[#6D5EF5] px-7 py-4 font-medium text-white shadow-2xl shadow-[#6D5EF5]/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#7d6ef7] active:scale-[0.98]"
            >
              Start Your First Production
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={(e) => scrollToSection(e, 'film_showcase')}
              className="group flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98]"
            >
              <Play className="h-4 w-4" />
              View Showcase
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-[#6D5EF5]/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">Scene Generation</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  Dream Sequence 07
                </h3>
              </div>
              <div className="rounded-2xl bg-[#FFB86C]/20 p-3">
                <Camera className="h-6 w-6 text-[#FFB86C]" />
              </div>
            </div>

            <div className="grid gap-4">
              {prompts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#141B34]/70 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-[#6D5EF5]/40 hover:bg-[#1b2447]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6D5EF5]/20">
                    <Wand2 className="h-5 w-5 text-[#6D5EF5]" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item}</p>
                    <p className="text-sm text-white/50">
                      Optimized for cinematic consistency
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#6D5EF5] to-[#FFB86C] p-[1px]">
              <div className="rounded-3xl bg-[#0B1020] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">
                      Production acceleration
                    </p>
                    <h4 className="mt-2 text-4xl font-semibold text-white">
                      80%
                    </h4>
                  </div>
                  <Zap className="h-12 w-12 text-[#FFB86C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: Clapperboard,
      title: 'AI script-to-storyboard generation',
      text: 'Transform screenplay pages into visual shot sequences with cinematic framing suggestions.',
    },
    {
      icon: Layers3,
      title: 'Virtual set and lighting previews',
      text: 'Prototype production design, mood, and lighting before entering physical production.',
    },
    {
      icon: Camera,
      title: 'Automated shot list creation',
      text: 'Generate camera setups, movement notes, and scene continuity in seconds.',
    },
    {
      icon: Sparkles,
      title: 'Voice and dialogue synthesis',
      text: 'Rapidly test performances, pacing, and emotional delivery using AI voice modeling.',
    },
    {
      icon: Globe,
      title: 'Scene continuity intelligence',
      text: 'Maintain visual consistency across characters, locations, and cinematic style.',
    },
    {
      icon: Users,
      title: 'Cloud-based team collaboration',
      text: 'Enable directors, producers, and artists to iterate together in real time.',
    },
  ]

  return (
    <section id="studio_capabilities" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#FFB86C]">
            AI Production Capabilities
          </p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Everything Needed To Produce AI-Native Films
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            A complete creative pipeline for directors, producers, and studios
            experimenting with AI-enhanced storytelling.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#6D5EF5]/40 hover:bg-[#141B34]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6D5EF5]/15 transition-all duration-300 group-hover:bg-[#6D5EF5]/25">
                  <Icon className="h-7 w-7 text-[#6D5EF5]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {feature.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  const steps = [
    'Write or import your screenplay',
    'Generate cinematic storyboards instantly',
    'Refine visual style with AI direction',
    'Export production-ready assets',
  ]

  return (
    <section id="creative_workflow" className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#141B34] to-[#0f1630] p-10 md:p-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            From Idea To Final Frame
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Streamline pre-production, visualization, and creative iteration
            with intelligent automation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6D5EF5] text-lg font-semibold text-white shadow-lg shadow-[#6D5EF5]/30">
                0{index + 1}
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-16 top-7 hidden h-px w-full bg-gradient-to-r from-[#6D5EF5]/60 to-transparent lg:block" />
              )}

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                <h3 className="text-xl font-medium text-white">{step}</h3>
                <p className="mt-4 text-white/60">
                  Precision AI tools reduce production friction while expanding
                  visual possibilities for every scene.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Showcase() {
  const scenes = [
    'Neo-noir cityscape',
    'Dreamlike fantasy forest',
    'Space opera command bridge',
    'Emotional character portrait',
    'Retro-futuristic diner sequence',
  ]

  return (
    <section id="film_showcase" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Scenes Crafted With AI Precision
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Explore futuristic noir worlds, emotional close-ups, sci-fi
              landscapes, and cinematic compositions generated through the
              platform.
            </p>
          </div>

          <button
            onClick={(e) => scrollToSection(e, 'final_cta')}
            className="group flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98]"
          >
            View Full Showcase
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenes.map((scene, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1d2550] to-[#0f1327] p-8 transition-all duration-300 hover:scale-[1.02] hover:border-[#6D5EF5]/50 ${
                index === 2 ? 'md:row-span-2 min-h-[420px]' : 'min-h-[260px]'
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5EF522,transparent_55%)] opacity-80" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                    Cinematic Scene
                  </div>
                  <Sparkles className="h-5 w-5 text-[#FFB86C]" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {scene}
                  </h3>
                  <p className="mt-4 leading-7 text-white/60">
                    Rich atmosphere, cinematic lighting, and AI-assisted visual
                    continuity designed for immersive storytelling.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    '80% faster storyboard iteration',
    '10x more visual concepts explored',
    'Global remote collaboration support',
    'Production-ready exports in minutes',
  ]

  return (
    <section id="industry_stats" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#6D5EF5]/40"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6D5EF5]/15">
              <Star className="h-8 w-8 text-[#FFB86C]" />
            </div>

            <h3 className="mt-6 text-4xl font-semibold text-white">
              {index === 0
                ? '80%'
                : index === 1
                ? '10x'
                : index === 2
                ? 'Global'
                : 'Minutes'}
            </h3>

            <p className="mt-4 leading-7 text-white/60">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        'LumenFrame helped our team prototype entire visual sequences before we stepped onto a physical set.',
      author: 'Maya Chen',
      role: 'Independent Film Director',
    },
    {
      quote:
        'The AI storyboard system accelerated our production meetings and unlocked creative experimentation.',
      author: 'Jordan Vale',
      role: 'Creative Agency Production Lead',
    },
    {
      quote:
        'Our virtual production workflow became dramatically faster while maintaining cinematic consistency.',
      author: 'Ari Solis',
      role: 'Virtual Production Studio',
    },
  ]

  return (
    <section id="creator_testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Trusted By Visionary Creators
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Production teams use LumenFrame to prototype ambitious stories
            without traditional constraints.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-[#141B34]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#6D5EF5]/40"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#FFB86C] text-[#FFB86C]"
                  />
                ))}
              </div>

              <p className="mt-6 text-lg leading-8 text-white/75">
                “{testimonial.quote}”
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-white">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-white/50">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Creator Plan',
      price: '$29',
      featured: false,
      features: ['Storyboard generation', 'Scene visualization', 'Cloud export'],
    },
    {
      name: 'Studio Plan',
      price: '$149',
      featured: true,
      features: ['Team collaboration', 'Advanced AI direction', 'Production workflows'],
    },
    {
      name: 'Enterprise Production Suite',
      price: 'Custom',
      featured: false,
      features: ['Private infrastructure', 'Studio integrations', 'Dedicated onboarding'],
    },
  ]

  return (
    <section id="pricing_preview" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Flexible Plans For Every Production Scale
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Start experimenting solo or scale cinematic AI workflows across an
            entire studio.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[2rem] border p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.featured
                  ? 'border-[#6D5EF5]/50 bg-gradient-to-b from-[#6D5EF5]/20 to-[#141B34]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white">
                {plan.name}
              </h3>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold text-white">
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="pb-2 text-white/50">/month</span>
                )}
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="rounded-full bg-[#6D5EF5]/20 p-1">
                      <Check className="h-4 w-4 text-[#6D5EF5]" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => scrollToSection(e, 'final_cta')}
                className={`mt-10 w-full rounded-full px-6 py-4 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.featured
                    ? 'bg-[#6D5EF5] text-white hover:bg-[#7b6df7]'
                    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="final_cta" className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#6D5EF5] via-[#3f358f] to-[#141B34] p-10 md:p-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FFB86C]">
              Launch Your Next Film
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Your Next Cinematic Universe Starts Here
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Transform scripts into breathtaking visuals with an AI production
              environment designed for filmmakers.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Free onboarding session',
                'Early access production tools',
                'Cloud collaboration included',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#FFB86C]" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0B1020]/50 p-8 backdrop-blur-2xl">
            <h3 className="text-2xl font-semibold text-white">
              Start Creating
            </h3>

            <p className="mt-4 text-white/60">
              Request a live walkthrough and see how LumenFrame transforms film
              production workflows.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <Mail className="h-5 w-5 text-[#FFB86C]" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
                />
              </div>

              <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#FFB86C] px-6 py-4 font-medium text-[#141B34] transition-all duration-300 hover:scale-[1.02] hover:bg-[#ffc88c] active:scale-[0.98]">
                Start Creating
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="site_footer" className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D5EF5] to-[#FFB86C]">
              <Film className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">
                LumenFrame AI Studio
              </p>
              <p className="text-sm text-white/50">
                AI-powered filmmaking for the next generation of storytellers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
          {[
            'Privacy Policy',
            'Terms',
            'Instagram',
            'YouTube',
            'Creative Partnerships',
          ].map((item, index) => (
            <a
              key={index}
              href="/"
              onClick={(e) => e.preventDefault()}
              className="transition-all duration-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:scale-[1.05] hover:bg-white/10">
            <Globe className="h-5 w-5" />
          </button>
          <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:scale-[1.05] hover:bg-white/10">
            <Play className="h-5 w-5" />
          </button>
          <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:scale-[1.05] hover:bg-white/10">
            <Sparkles className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B1020] font-sans text-[#F5F7FB]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <Workflow />
        <Showcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}