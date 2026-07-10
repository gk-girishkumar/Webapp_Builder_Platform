import {
  ChefHat,
  Wine,
  Flower2,
  Music4,
} from "lucide-react";

export const stats = [
  { number: "3", label: "Michelin Stars" },
  { number: "18k+", label: "Global Guests" },
  { number: "240", label: "Rare Wine Labels" },
  { number: "14", label: "Signature Courses" },
];

export const experiences = [
  {
    icon: ChefHat,
    title: "Chef's Counter",
    desc: "An intimate twelve-seat culinary theatre with direct access to our executive chefs.",
  },
  {
    icon: Wine,
    title: "Sommelier Pairing",
    desc: "Rare vintages and curated pairings from the world's most prestigious cellars.",
  },
  {
    icon: Flower2,
    title: "Seasonal Tasting",
    desc: "A constantly evolving menu inspired by rare regional ingredients and artistry.",
  },
  {
    icon: Music4,
    title: "Evening Ambience",
    desc: "Live piano compositions and candlelit elegance crafted for unforgettable nights.",
  },
];

export const tastingMenu = [
  {
    title: "Oscietra Caviar",
    desc: "Warm brioche, cultured butter, smoked crème fraîche",
    price: "$48",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Blue Lobster",
    desc: "Saffron consommé, fennel pollen, citrus pearls",
    price: "$62",
    image:
      "https://images.unsplash.com/photo-1559847844-d721426d6edc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "A5 Wagyu",
    desc: "Black garlic glaze, truffle jus, charred leek",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Valrhona Symphony",
    desc: "Gold leaf mousse, espresso ash, vanilla cloud",
    price: "$36",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
];

export const testimonials = [
  {
    name: "Sophia Laurent",
    role: "Condé Nast Traveller",
    text: "L'Etoile transforms dining into pure performance art. Every course unfolds with precision, emotion, and unforgettable sophistication.",
  },
  {
    name: "James Whitmore",
    role: "Michelin Guide",
    text: "An impeccable orchestration of texture, flavor, and atmosphere. A destination restaurant worthy of international acclaim.",
  },
  {
    name: "Amélie Rousseau",
    role: "Private Member",
    text: "From the warm hospitality to the celestial desserts, every visit feels cinematic and deeply personal.",
  },
];

export const reservationOptions = [
  {
    title: "Salon Lumière",
    price: "$220",
    subtitle: "Per guest",
    features: [
      "Seven-course tasting",
      "Sommelier wine pairing",
      "Private candlelit seating",
      "Seasonal amuse-bouche",
    ],
  },
  {
    title: "Grand Étoile",
    price: "$420",
    subtitle: "Per guest",
    features: [
      "Fourteen-course journey",
      "Prestige reserve wines",
      "Chef's counter experience",
      "Luxury gift presentation",
    ],
    featured: true,
  },
  {
    title: "Midnight Noir",
    price: "$680",
    subtitle: "Per couple",
    features: [
      "Exclusive after-hours dining",
      "Live piano accompaniment",
      "Rare vintage selection",
      "Private chauffeur service",
    ],
  },
];
