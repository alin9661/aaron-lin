import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { SOCIALS } from '../data';

export const Footer = () => (
  <section id="contact" className="py-32 px-6 md:px-24 bg-[#050505] text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

    <div className="relative z-10 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">What's Next?</span>
        </div>

        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 hover:text-zinc-300 transition-colors cursor-pointer">
          Let's Talk.
        </h2>

        <div className="flex justify-center gap-8 mb-20">
          <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            aaron.lin@nyu.edu
          </button>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12">
          <p className="text-xs text-zinc-500 font-mono mb-4 md:mb-0">
            © {new Date().getFullYear()} Aaron Lin. All rights reserved.
          </p>

          <div className="flex gap-8">
            {SOCIALS.map((s) => (
              <a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-zinc-500 hover:text-white transition-colors duration-300">
                <s.icon size={24} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
