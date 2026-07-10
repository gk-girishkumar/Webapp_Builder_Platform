import React from 'react';
import { featureItems } from '../data';

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div
      className={`bg-gray-900 p-8 rounded-2xl border border-gray-800 transition-colors ${feature.borderHover}`}
    >
      <Icon className={`w-12 h-12 mb-6 ${feature.iconColor}`} />

      <h3 className="text-xl font-bold mb-3 text-white">
        {feature.title}
      </h3>

      <p className="text-gray-400">{feature.description}</p>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featureItems.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </section>
  );
}
