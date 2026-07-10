import {
  PenTool,
  LayoutGrid,
  Globe,
  Wand2,
  MessageSquare,
  MousePointer2,
  Layers3,
  Sparkles,
  Briefcase,
  Users,
  Clock3,
  Heart,
  Dribbble,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "Luma Finance",
    category: "Fintech Platform",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    desc: "A premium banking experience focused on financial clarity and elegant interactions.",
  },
  {
    title: "Aether Mobile",
    category: "Healthcare App",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    desc: "Human-centered patient experiences crafted for accessibility and emotional trust.",
  },
  {
    title: "Canvas Studio",
    category: "Creative SaaS",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    desc: "A collaborative design platform helping remote teams ideate in real time.",
  },
  {
    title: "Northstar AI",
    category: "AI Dashboard",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    desc: "Data visualization and AI-driven workflows for enterprise decision making.",
  },
  {
    title: "Maison Atelier",
    category: "Luxury Commerce",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    desc: "Elevated digital commerce inspired by editorial storytelling and tactile design.",
  },
  {
    title: "Halo Wearables",
    category: "Consumer Tech",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    desc: "Design system and onboarding flow for next-generation wellness devices.",
  },
];

export const testimonials = [
  {
    name: "Sophia Lin",
    role: "VP Product, Luma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote:
      "Jane transformed our fragmented product experience into something genuinely elegant. The level of detail and systems thinking was exceptional.",
  },
  {
    name: "Marcus Reed",
    role: "Founder, Northstar",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "She blends strategic product thinking with refined visual craft in a way that's incredibly rare. Every interaction felt intentional.",
  },
  {
    name: "Amina Patel",
    role: "Creative Director, Atelier",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80",
    quote:
      "Working with Jane elevated our brand perception immediately. The final experience felt luxurious, intuitive, and timeless.",
  },
];

export const pricing = [
  {
    title: "Product Audit",
    price: "$4k",
    description:
      "Comprehensive UX and product design audit for early-stage or scaling products.",
    features: [
      "UX Heuristic Review",
      "Journey Mapping",
      "Accessibility Insights",
      "Design Prioritization",
    ],
  },
  {
    title: "Design Partnership",
    price: "$12k",
    highlighted: true,
    description:
      "A dedicated strategic design collaboration for startups and product teams.",
    features: [
      "End-to-End Product Design",
      "Design Systems",
      "Interactive Prototypes",
      "Founder Collaboration",
      "Weekly Workshops",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description:
      "Long-term embedded design leadership and experience strategy engagements.",
    features: [
      "Cross-functional Alignment",
      "Research Leadership",
      "Multi-product Systems",
      "Executive Workshops",
    ],
  },
];

export const services = [
  {
    icon: PenTool,
    title: "Product Design",
    desc: "Crafting refined digital products that balance usability, performance, and brand expression.",
  },
  {
    icon: LayoutGrid,
    title: "Design Systems",
    desc: "Scalable interface systems that create consistency across teams and platforms.",
  },
  {
    icon: Globe,
    title: "UX Strategy",
    desc: "Research-driven experiences focused on engagement, retention, and long-term growth.",
  },
  {
    icon: Wand2,
    title: "Creative Direction",
    desc: "Elevated visual storytelling and premium digital aesthetics for modern brands.",
  },
];

export const workflowSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Alignment",
    desc: "Clarifying product goals, audience needs, and strategic opportunities.",
  },
  {
    icon: MousePointer2,
    title: "Experience Architecture",
    desc: "Building intuitive journeys, interaction patterns, and scalable flows.",
  },
  {
    icon: Layers3,
    title: "Visual Systems",
    desc: "Crafting elegant interfaces and cohesive design languages.",
  },
  {
    icon: Sparkles,
    title: "Iteration & Delivery",
    desc: "Testing, refining, and shipping polished production-ready assets.",
  },
];

export const stats = [
  {
    icon: Briefcase,
    value: "80+",
    label: "Complex digital products shipped.",
  },
  {
    icon: Users,
    value: "35M+",
    label: "Users impacted across platforms.",
  },
  {
    icon: Clock3,
    value: "12",
    label: "Years of experience in product design.",
  },
  {
    icon: Heart,
    value: "99%",
    label: "Client satisfaction and retention.",
  },
];

export const socialLinks = [
  { icon: Dribbble },
  { icon: Instagram },
  { icon: Linkedin },
  { icon: Twitter },
];
