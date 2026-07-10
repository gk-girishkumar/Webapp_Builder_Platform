import {
  Compass,
  Crown,
  Gem,
  Globe,
  Home,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const featuredHomes = [
  {
    title: "Oceanfront Glass Villa",
    location: "Malibu, California",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    beds: 5,
    baths: 7,
    size: "8,400 sq ft",
    price: "$12.8M",
  },
  {
    title: "Skyline Penthouse",
    location: "New York, Manhattan",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    beds: 4,
    baths: 5,
    size: "5,200 sq ft",
    price: "$9.6M",
  },
  {
    title: "Desert Architectural Estate",
    location: "Scottsdale, Arizona",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    beds: 6,
    baths: 8,
    size: "11,200 sq ft",
    price: "$15.2M",
  },
];

export const stats = [
  { icon: Home, label: "Luxury Properties", value: "1,240+" },
  { icon: Globe, label: "Global Clients", value: "82 Countries" },
  { icon: TrendingUp, label: "Property Appreciation", value: "31%" },
  { icon: Crown, label: "Years Experience", value: "18+" },
];

export const features = [
  {
    icon: Gem,
    title: "Curated Luxury Portfolio",
    description:
      "Hand-selected residences showcasing exceptional architecture, premium finishes, and iconic locations.",
  },
  {
    icon: ShieldCheck,
    title: "Private Transactions",
    description:
      "Discreet white-glove services with confidential negotiations and elite client representation.",
  },
  {
    icon: Compass,
    title: "Global Market Expertise",
    description:
      "Access to international luxury markets with local specialists guiding every investment decision.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Lifestyle Matching",
    description:
      "We align residences with lifestyle aspirations, wellness preferences, and future legacy goals.",
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
];

export const testimonials = [
  {
    name: "Sophia Laurent",
    role: "Private Equity Investor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote:
      "Luxe Living delivered a property experience that felt entirely bespoke. Every detail from touring to negotiations was seamless and elevated.",
  },
  {
    name: "Daniel Mercer",
    role: "Technology Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote:
      "Their access to off-market listings and architectural masterpieces gave us options we could not find anywhere else.",
  },
  {
    name: "Amelia Brooks",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
    quote:
      "The attention to aesthetics and lifestyle alignment was extraordinary. They understood exactly what luxury means to our family.",
  },
];

export const pricing = [
  {
    title: "Signature Buyer",
    price: "$12k",
    subtitle: "Elite acquisition representation",
    features: [
      "Private luxury tours",
      "Off-market property access",
      "Dedicated acquisition advisor",
      "Contract & negotiation support",
      "International relocation guidance",
    ],
    featured: false,
  },
  {
    title: "Black Label Concierge",
    price: "$28k",
    subtitle: "White-glove global real estate concierge",
    features: [
      "Everything in Signature",
      "Private aviation coordination",
      "Architect & designer consultations",
      "Smart home integration planning",
      "24/7 lifestyle concierge",
    ],
    featured: true,
  },
  {
    title: "Legacy Portfolio",
    price: "$54k",
    subtitle: "Ultra-high-net-worth portfolio strategy",
    features: [
      "Global investment sourcing",
      "Tax & legal partner network",
      "Luxury asset diversification",
      "Generational estate planning",
      "Exclusive market intelligence",
    ],
    featured: false,
  },
];
