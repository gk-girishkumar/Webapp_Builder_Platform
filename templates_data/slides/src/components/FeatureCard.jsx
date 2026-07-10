import React from 'react';

export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div
      className={`bg-gray-900 p-8 rounded-2xl border border-gray-800 ${feature.hoverBorder} transition-colors`}
    >
      <Icon className={`w-12 h-12 ${feature.iconColor} mb-6`} />

      <h3 className="text-xl font-bold mb-3 text-white">
        {feature.title}
      </h3>

      <p className="text-gray-400">
        {feature.description}
      </p>
    </div>
  );
}
