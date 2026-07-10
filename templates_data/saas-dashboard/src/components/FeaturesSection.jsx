import React from "react";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import { features } from "../data";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Platform Capabilities"
          title="Purpose-built analytics infrastructure for modern SaaS."
          description="From ingestion pipelines to executive reporting, every layer of Nexus Analytics is optimized for performance, clarity, and intelligent decision-making."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
