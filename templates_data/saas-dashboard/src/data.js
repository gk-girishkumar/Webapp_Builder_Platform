import {
  Activity,
  Cpu,
  Database,
  Gauge,
  Globe,
  LineChart,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const stats = [
  { label: "Live Events Processed", value: "14.2B", icon: Activity },
  { label: "Avg. Query Response", value: "92ms", icon: Gauge },
  { label: "Enterprise Clients", value: "4,800+", icon: Users },
  { label: "Data Accuracy", value: "99.99%", icon: ShieldCheck },
];

export const features = [
  {
    icon: LineChart,
    title: "Real-Time Intelligence",
    description:
      "Stream operational metrics, user behavior, and conversion events with ultra-low latency pipelines.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description:
      "Deploy analytics nodes across regions with automatic failover and edge-level processing.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC2 compliant architecture with role-based access, audit logs, and encrypted event streams.",
  },
  {
    icon: Sparkles,
    title: "AI Signal Detection",
    description:
      "Surface anomalies, growth patterns, and predictive trends using adaptive AI models.",
  },
  {
    icon: Database,
    title: "Unified Data Lake",
    description:
      "Connect every source into a centralized analytics layer without rebuilding your stack.",
  },
  {
    icon: Cpu,
    title: "Automation Engine",
    description:
      "Trigger workflows and alerts from metrics thresholds, customer actions, or AI insights.",
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
];

export const testimonials = [
  {
    name: "Avery Chen",
    role: "VP of Data, NovaGrid",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote:
      "Nexus Analytics transformed our executive reporting stack. We moved from fragmented dashboards to a unified real-time command center.",
  },
  {
    name: "Marcus Vale",
    role: "Founder, PulseLayer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "The AI insights engine helped us identify retention patterns we were completely missing. It paid for itself in weeks.",
  },
  {
    name: "Isabella Torres",
    role: "Operations Lead, Quantix",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    quote:
      "Fast, elegant, and absurdly scalable. The platform handles billions of events while staying intuitive for our teams.",
  },
];

export const pricing = [
  {
    name: "Core",
    price: "$49",
    description: "Perfect for modern startups tracking growth metrics.",
    features: [
      "Unlimited dashboards",
      "10M events / month",
      "Real-time alerts",
      "Custom integrations",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Scale",
    price: "$199",
    description: "Advanced observability and AI insights for scaling teams.",
    features: [
      "Everything in Core",
      "500M events / month",
      "AI forecasting",
      "Advanced automations",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure and governance for global organizations.",
    features: [
      "Unlimited event volume",
      "Private cloud deployment",
      "Dedicated success manager",
      "Advanced permissions",
      "24/7 white-glove support",
    ],
    highlighted: false,
  },
];

export const integrations = [
  "Stripe",
  "Slack",
  "Notion",
  "Vercel",
  "GitHub",
  "Snowflake",
  "Datadog",
  "AWS",
];
