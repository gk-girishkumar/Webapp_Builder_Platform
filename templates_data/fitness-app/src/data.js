import {
  Users,
  Flame,
  Dumbbell,
  TrendingUp,
  HeartPulse,
  Target,
  Watch,
  Zap,
  Calendar,
  ShieldCheck,
} from "lucide-react";

export const integrations = [
  "Apple Health",
  "Fitbit",
  "Garmin",
  "WHOOP",
  "Nike Run Club",
  "Strava",
  "Google Fit",
  "MyFitnessPal",
];

export const stats = [
  { label: "Active Members", value: "2.4M+", icon: Users },
  { label: "Calories Tracked", value: "984M", icon: Flame },
  { label: "Workout Sessions", value: "187M+", icon: Dumbbell },
  { label: "Avg. User Retention", value: "92%", icon: TrendingUp },
];

export const features = [
  {
    icon: HeartPulse,
    title: "Real-Time Health Metrics",
    description:
      "Track heart rate, oxygen levels, sleep quality, hydration, and recovery from one unified dashboard.",
  },
  {
    icon: Target,
    title: "Adaptive Goal Engine",
    description:
      "AI-powered recommendations evolve with your progress and create dynamic weekly fitness targets.",
  },
  {
    icon: Watch,
    title: "Wearable Sync",
    description:
      "Connect seamlessly with Apple Watch, Garmin, Fitbit, WHOOP, and dozens of smart wearables.",
  },
  {
    icon: Zap,
    title: "Performance Insights",
    description:
      "Receive advanced analytics for strength, cardio, mobility, and body composition trends.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Generate optimal workout calendars that adapt to your energy levels and availability.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description:
      "Enterprise-grade encryption and secure cloud backups keep every health metric protected.",
  },
];

export const testimonials = [
  {
    name: "Alyssa Morgan",
    role: "Marathon Runner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote:
      "FitCore transformed how I train. The recovery analytics alone helped me improve my marathon pace dramatically within 3 months.",
  },
  {
    name: "Jason Cole",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "I've tested every fitness app on the market. Nothing comes close to FitCore’s precision tracking and coaching experience.",
  },
  {
    name: "Sophia Kim",
    role: "Lifestyle Creator",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80",
    quote:
      "The clean design, streaks, and AI recommendations made consistency effortless. My audience constantly asks what app I use.",
  },
];

export const pricing = [
  {
    title: "Starter",
    price: "$0",
    subtitle: "Perfect for beginners",
    features: [
      "Basic workout tracking",
      "Daily activity goals",
      "Apple Health sync",
      "Community challenges",
    ],
    featured: false,
  },
  {
    title: "FitCore Pro",
    price: "$14",
    subtitle: "For serious performance",
    features: [
      "Advanced analytics",
      "AI coaching engine",
      "Recovery tracking",
      "Unlimited programs",
      "Nutrition planning",
      "Wearable integrations",
    ],
    featured: true,
  },
  {
    title: "Elite Teams",
    price: "$49",
    subtitle: "For coaches & groups",
    features: [
      "Team dashboards",
      "Client performance insights",
      "Priority support",
      "Custom training plans",
      "Admin permissions",
      "Brand customization",
    ],
    featured: false,
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80",
];
