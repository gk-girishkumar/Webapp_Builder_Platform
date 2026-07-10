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

export const features = [
  {
    title: 'Modern Design',
    description:
      'Beautiful, minimal aesthetic fully built with React and Tailwind CSS.',
    icon: Layers,
    borderClass: 'hover:border-primary',
    iconClass: 'text-primary',
  },
  {
    title: 'Lightning Fast',
    description:
      'Optimized component structure ensures maximum performance.',
    icon: Zap,
    borderClass: 'hover:border-secondary',
    iconClass: 'text-secondary',
  },
  {
    title: 'Responsive',
    description:
      'Flawless experience across all devices and screen sizes.',
    icon: Smartphone,
    borderClass: 'hover:border-primary',
    iconClass: 'text-primary',
  },
];
