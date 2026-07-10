import React from "react";

function TrustedBy() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-14 px-6 text-zinc-500 lg:px-10">
        <div className="text-sm uppercase tracking-[0.3em]">Trusted By</div>
        <div className="text-2xl font-semibold">Stripe</div>
        <div className="text-2xl font-semibold">Notion</div>
        <div className="text-2xl font-semibold">Linear</div>
        <div className="text-2xl font-semibold">Spotify</div>
        <div className="text-2xl font-semibold">Framer</div>
        <div className="text-2xl font-semibold">Shopify</div>
      </div>
    </section>
  );
}

export default TrustedBy;
