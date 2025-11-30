import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { SectionLabel } from '../components/SectionLabel';
import { HOBBIES } from '../data';

export const Hobbies = () => (
  <section id="hobbies" className="py-24 md:py-40 px-6 md:px-24 bg-zinc-50 relative overflow-hidden">
    {/* Decorative Circle */}
    <div className="absolute right-0 top-0 w-[500px] h-[500px] border border-zinc-200 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

    <FadeIn>
      <SectionLabel number="04" text="Personal Interests" />
    </FadeIn>

    {/* Grid updated for 16 items: 2 columns on tablet, 4 columns on large screens */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
       {HOBBIES.map((hobby, idx) => (
          <FadeIn key={hobby.id} delay={idx * 50} className="h-full">
            <div className="group relative overflow-hidden border border-zinc-200 bg-white h-full">
               {/* Image */}
               <img 
                 src={hobby.image} 
                 alt={hobby.title}
                 className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
               />
               
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-zinc-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                     <div className="w-8 h-[1px] bg-white/50 mb-3"></div>
                     <h4 className="text-white text-lg font-medium tracking-tight mb-1">
                       {hobby.title}
                     </h4>
                     <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider leading-relaxed">
                       {hobby.description}
                     </p>
                  </div>
               </div>
            </div>
          </FadeIn>
       ))}
    </div>
  </section>
);