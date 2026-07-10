import React from "react";
import SectionTitle from "./SectionTitle";
import PricingCard from "./PricingCard";
import { pricing } from "../data";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Transparent Pricing"
          title="Flexible plans designed for ambitious teams."
          description="Scale from startup analytics to enterprise-grade observability with predictable pricing and premium infrastructure."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
