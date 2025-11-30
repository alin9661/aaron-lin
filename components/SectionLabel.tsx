import React from 'react';

export const SectionLabel = ({ text, number }: { text: string, number: string }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="font-mono text-xs text-zinc-600">({number})</span>
    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-950">{text}</h2>
    <div className="h-px bg-zinc-200 flex-grow max-w-[100px]"></div>
  </div>
);