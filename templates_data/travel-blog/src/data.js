import {
  Mountain,
  Camera,
  Compass,
  Globe2,
  Users,
  Award,
} from "lucide-react";

export const destinations = [
  {
    title: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
    height: "h-[520px]",
    category: "Island Escape",
  },
  {
    title: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
    height: "h-[340px]",
    category: "Cultural Journey",
  },
  {
    title: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    height: "h-[450px]",
    category: "Mountain Retreat",
  },
  {
    title: "Marrakech, Morocco",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    height: "h-[390px]",
    category: "City Discovery",
  },
  {
    title: "Iceland Highlands",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    height: "h-[500px]",
    category: "Adventure",
  },
  {
    title: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    height: "h-[360px]",
    category: "Tropical Paradise",
  },
];

export const stories = [
  {
    icon: Mountain,
    title: "Curated Expeditions",
    description:
      "Handpicked journeys designed around culture, breathtaking landscapes, and immersive storytelling.",
  },
  {
    icon: Camera,
    title: "Photo-First Experiences",
    description:
      "Every itinerary is crafted for golden hour moments, cinematic scenery, and unforgettable memories.",
  },
  {
    icon: Compass,
    title: "Hidden Local Gems",
    description:
      "Beyond tourist maps, discover secret cafés, coastal villages, and authentic experiences.",
  },
  {
    icon: Globe2,
    title: "Worldwide Inspiration",
    description:
      "From arctic wilderness to tropical islands, Wanderlust captures the beauty of every continent.",
  },
];

export const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Travel Photographer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote:
      "Wanderlust transformed how I explore the world. Every destination feels cinematic and deeply personal.",
  },
  {
    name: "Daniel Kim",
    role: "Adventure Blogger",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "The visual storytelling and curated guides are unmatched. It feels like traveling with a world-class creative team.",
  },
  {
    name: "Emma Rivera",
    role: "Luxury Traveler",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    quote:
      "Beautifully designed, inspiring, and packed with unforgettable recommendations. Every trip becomes extraordinary.",
  },
];

export const pricing = [
  {
    title: "Explorer",
    price: "$19",
    description: "For casual dreamers and weekend adventurers.",
    features: [
      "Monthly destination guides",
      "Photography presets",
      "Interactive maps",
      "Travel newsletter",
    ],
  },
  {
    title: "Voyager",
    price: "$49",
    highlighted: true,
    description: "Designed for passionate travelers seeking immersive journeys.",
    features: [
      "Everything in Explorer",
      "Premium city itineraries",
      "Exclusive travel videos",
      "Members-only experiences",
    ],
  },
  {
    title: "Nomad Elite",
    price: "$99",
    description: "Luxury travel planning and private concierge support.",
    features: [
      "Everything in Voyager",
      "1-on-1 trip consultations",
      "Luxury accommodation guides",
      "Priority destination access",
    ],
  },
];

export const stats = [
  { number: "120+", label: "Countries Explored", icon: Globe2 },
  { number: "4.8M", label: "Captured Moments", icon: Camera },
  { number: "320K", label: "Global Travelers", icon: Users },
  { number: "98%", label: "Positive Reviews", icon: Award },
];

export const journal = [
  {
    title: "Chasing Sunrises Through Cappadocia",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    tag: "Adventure",
  },
  {
    title: "A Slow Journey Along Italy’s Amalfi Coast",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    tag: "Coastal",
  },
  {
    title: "Hidden Cafés and Rainy Streets of Paris",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
    tag: "Lifestyle",
  },
];
