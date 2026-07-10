import { Layers, Zap, Smartphone } from 'lucide-react';

export const navItems = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Features',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
];

export const featureCards = [
  {
    title: 'Modern Design',
    description: 'Beautiful, minimal aesthetic fully built with React and Tailwind CSS.',
    icon: Layers,
    iconColor: 'text-primary',
    hoverBorder: 'hover:border-primary',
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized component structure ensures maximum performance.',
    icon: Zap,
    iconColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary',
  },
  {
    title: 'Responsive',
    description: 'Flawless experience across all devices and screen sizes.',
    icon: Smartphone,
    iconColor: 'text-primary',
    hoverBorder: 'hover:border-primary',
  },
];
