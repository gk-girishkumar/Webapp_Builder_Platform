import React from 'react';
import { features } from '../data';
import FeatureCard from './FeatureCard';

export default function FeaturesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </section>
  );
}
