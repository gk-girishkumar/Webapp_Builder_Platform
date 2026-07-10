import React from 'react';

export default function FeatureCard({ feature }) {
  const { title, description, icon: Icon, accent } = feature;

  const borderHoverClass =
    accent === 'secondary' ? 'hover:border-secondary' : 'hover:border-primary';

  const iconColorClass =
    accent === 'secondary' ? 'text-secondary' : 'text-primary';

  return (
    <div
      className={`bg-gray-900 p-8 rounded-2xl border border-gray-800 transition-colors ${borderHoverClass}`}
    >
      <Icon className={`w-12 h-12 mb-6 ${iconColorClass}`} />

      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>

      <p className="text-gray-400">{description}</p>
    </div>
  );
}
