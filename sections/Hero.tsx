
import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const Hero = () => (
  <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-24">
     {/* Custom Animation Styles */}
     <style>
       {`
         @keyframes reveal {
           from { transform: translateY(100%); }
           to { transform: translateY(0); }
         }
         .animate-reveal {
           animation: reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
         }
       `}
     </style>

     {/* Huge Abstract Text Background */}
     <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/6 pointer-events-none select-none overflow-hidden opacity-[0.03]">
       <h1 className="text-[40vw] font-bold leading-none tracking-tighter text-zinc-950 rotate-90 md:rotate-0">
         AARON
       </h1>
     </div>

     <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="space-y-6">
            <div className="w-12 h-[1px] bg-zinc-950 mb-8 animate-fade-in"></div>
            
            {/* Staggered Header Reveal */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-zinc-950">
              <div className="overflow-hidden">
                <div className="transform translate-y-full animate-reveal" style={{ animationDelay: '0ms' }}>
                  Aaron
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="transform translate-y-full animate-reveal" style={{ animationDelay: '150ms' }}>
                  <span className="font-light italic text-zinc-600">Lin.</span>
                </div>
              </div>
            </h1>

            {/* Staggered Bio Reveal */}
            <div className="overflow-hidden pt-2">
              <p 
                className="max-w-md text-zinc-800 text-lg md:text-xl font-light leading-relaxed pl-1 transform translate-y-full animate-reveal"
                style={{ animationDelay: '300ms' }}
              >
                <span className="font-medium">Visual System Architect</span> based in San Francisco. Crafting digital experiences where precision meets emotion.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center md:justify-end">
          {/* Abstract Geometric Element */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in delay-300">
            <div className="absolute inset-0 border border-zinc-200 rounded-full"></div>
            <div className="absolute inset-4 border border-zinc-200 rounded-full opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-56 bg-zinc-950 rotate-12 shadow-2xl"></div>
              <div className="w-40 h-56 bg-zinc-700 -rotate-6 absolute shadow-xl opacity-90 mix-blend-multiply"></div>
              <div className="w-40 h-56 bg-zinc-800 rotate-3 absolute shadow-lg opacity-80 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
               <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
               <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
               <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
            </div>
          </div>
        </div>
     </div>
  </section>
);
