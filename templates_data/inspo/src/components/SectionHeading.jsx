import React from 'react'
import { Sparkles } from 'lucide-react'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#FFB86B] backdrop-blur-md">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-slate-400">
        {subtitle}
      </p>
    </div>
  )
}
