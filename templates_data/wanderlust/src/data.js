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

export const featureItems = [
  {
    title: 'Modern Design',
    description:
      'Beautiful, minimal aesthetic fully built with React and Tailwind CSS.',
    icon: Layers,
    accent: 'primary',
  },
  {
    title: 'Lightning Fast',
    description:
      'Optimized component structure ensures maximum performance.',
    icon: Zap,
    accent: 'secondary',
  },
  {
    title: 'Responsive',
    description:
      'Flawless experience across all devices and screen sizes.',
    icon: Smartphone,
    accent: 'primary',
  },
];
