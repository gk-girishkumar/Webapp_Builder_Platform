import {
  Flame,
  Crown,
  ShieldCheck,
  TimerReset,
  Truck,
  Wallet,
  Headphones,
  Eye,
  Award,
  TrendingUp,
} from "lucide-react";

export const featuredSneakers = [
  {
    name: "Neon Velocity",
    price: "$320",
    tag: "New Drop",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Phantom Drift",
    price: "$410",
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Retro Pulse",
    price: "$280",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Nova Street",
    price: "$365",
    tag: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
];

export const testimonials = [
  {
    name: "Jordan Hayes",
    role: "Sneaker Collector",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote:
      "HypeKicks consistently drops impossible-to-find pairs. The experience feels luxury from checkout to delivery.",
  },
  {
    name: "Mia Torres",
    role: "Fashion Creator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote:
      "The curation is unreal. Every release feels intentional, premium, and insanely hyped.",
  },
  {
    name: "Darius Cole",
    role: "Streetwear Enthusiast",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    quote:
      "Fast shipping, authentic pairs, and the cleanest sneaker platform I've ever used.",
  },
];

export const pricing = [
  {
    title: "Starter Access",
    price: "$19",
    desc: "Perfect for casual collectors hunting weekly drops.",
    features: [
      "Weekly release alerts",
      "Member-only discounts",
      "Fast checkout",
      "Basic raffle access",
    ],
    featured: false,
  },
  {
    title: "Elite Access",
    price: "$59",
    desc: "Priority access for serious sneakerheads.",
    features: [
      "Early drop access",
      "Exclusive collaborations",
      "Priority shipping",
      "VIP raffle entries",
      "Private Discord access",
    ],
    featured: true,
  },
  {
    title: "Vault Black",
    price: "$149",
    desc: "Concierge-level access to rare sneaker culture.",
    features: [
      "Dedicated sneaker concierge",
      "1-of-1 releases",
      "Signed collabs",
      "Global express shipping",
      "Collectors vault storage",
    ],
    featured: false,
  },
];

export const stats = [
  { label: "Limited Pairs Sold", value: "48K+", icon: Flame },
  { label: "Global Members", value: "210K+", icon: Crown },
  { label: "Verified Drops", value: "1.2K+", icon: ShieldCheck },
  { label: "Average Sellout", value: "2.3 Min", icon: TimerReset },
];

export const featureItems = [
  {
    icon: Truck,
    title: "Global Express",
    desc: "Worldwide priority delivery",
  },
  {
    icon: ShieldCheck,
    title: "Verified Authenticity",
    desc: "Every pair expertly verified",
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    desc: "Secure installment options",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    desc: "Dedicated collector support",
  },
];

export const commerceFeatures = [
  {
    icon: Eye,
    title: "AI rarity insights",
    desc: "Track trend velocity, resale analytics, and collector demand in real time.",
  },
  {
    icon: Award,
    title: "Verified authenticity",
    desc: "Every pair undergoes multi-stage expert authentication before shipping.",
  },
  {
    icon: TrendingUp,
    title: "Real-time market tracking",
    desc: "Monitor pricing movement across global sneaker exchanges instantly.",
  },
];
