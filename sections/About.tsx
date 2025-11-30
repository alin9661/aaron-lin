import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { SectionLabel } from '../components/SectionLabel';

export const About = () => (
  <section id="about" className="py-24 md:py-32 px-6 md:px-24 bg-white relative z-10 border-b border-zinc-100">
     <FadeIn>
       <SectionLabel number="01" text="About Me" />
     </FadeIn>
     <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
           <FadeIn delay={200} className="h-full">
              <div className="aspect-square bg-zinc-100 relative overflow-hidden">
                  <img 
                    src="https://picsum.photos/600/600?grayscale" 
                    alt="Portrait" 
                    className="w-full h-full object-cover grayscale mix-blend-multiply hover:mix-blend-normal transition-all duration-700" 
                  />
                  <div className="absolute inset-0 border border-zinc-900/10"></div>
              </div>
           </FadeIn>
        </div>
        <div className="md:col-span-7 order-1 md:order-2 space-y-8">
           <FadeIn delay={400}>
             <h3 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-zinc-900">
               I combine <span className="font-serif italic text-zinc-700">logic</span> and <span className="font-serif italic text-zinc-700">aesthetics</span> to build digital products that feel inevitable.
             </h3>
           </FadeIn>
           <FadeIn delay={600}>
             <div className="grid md:grid-cols-2 gap-8 text-sm text-zinc-800 font-mono leading-relaxed">
               <p>
                 With over 8 years of experience in frontend architecture, I focus on performance, accessibility, and micro-interactions that delight users.
               </p>
               <p>
                 Currently leading design engineering at TechCorp. Obsessed with Swiss design, brutalism, and clean code.
               </p>
             </div>
           </FadeIn>
        </div>
     </div>
  </section>
);