import React from 'react'
import { Plus } from 'lucide-react'

export default function MasonryGrid({ images }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images?.map((image, index) => (
        <div
          key={index}
          className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/20 active:scale-[0.98]"
        >
          <img
            src={`${image}?auto=format&fit=crop&w=900&q=80`}
            alt="Creative inspiration"
            className={`w-full object-cover transition-all duration-500 group-hover:scale-105 ${
              index % 3 === 0 ? 'h-[420px]' : index % 2 === 0 ? 'h-[300px]' : 'h-[520px]'
            }`}
          />
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium text-white">Curated Visual</p>
              <p className="text-sm text-slate-400">Saved to Creative Canvas</p>
            </div>
            <button className="rounded-xl bg-white/10 p-3 text-white transition-all duration-200 hover:bg-[#6D5EF7] hover:shadow-lg active:scale-[0.98]">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
