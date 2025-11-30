import React from 'react';
import { Plus } from 'lucide-react';

export const DecorativeGrid = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {/* Top Cross */}
    <div className="absolute top-12 left-1/2 -translate-x-1/2 text-zinc-300">
      <Plus size={16} strokeWidth={1} />
    </div>
    
    {/* Bottom Cross */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-300">
      <Plus size={16} strokeWidth={1} />
    </div>

    {/* Vertical Text Left */}
    <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
      <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] font-bold text-zinc-300 uppercase whitespace-nowrap">
        <span className="w-8 h-px bg-zinc-300"></span>
        Visual System
        <span className="w-8 h-px bg-zinc-300"></span>
      </div>
    </div>

    {/* Vertical Lines */}
    <div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-100 hidden md:block"></div>
    <div className="absolute right-12 top-0 bottom-0 w-px bg-zinc-100 hidden md:block"></div>
  </div>
);
