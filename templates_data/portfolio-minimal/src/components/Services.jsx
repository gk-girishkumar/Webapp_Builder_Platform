import React from "react";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import { services } from "../data";

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionTitle
        eyebrow="Capabilities"
        title="Design systems built for clarity, scale, and emotion."
        description="From foundational UX strategy to polished visual systems, every engagement is crafted to align business goals with intuitive human experiences."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <FeatureCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
