import React from 'react';
import FeatureCard from './FeatureCard';
import { featureCards } from '../data';

export default function FeaturesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featureCards.map((feature) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </section>
  );
}
