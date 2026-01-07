import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DecorativeGrid } from './DecorativeGrid';
import { SOCIALS } from '../data';

interface MenuOverlayProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const MenuOverlay = ({ menuOpen, setMenuOpen }: MenuOverlayProps) => {
  const navigate = useNavigate();

  const MENU_ITEMS = [
    { label: "About", href: "/#about", onClick: () => { setMenuOpen(false); navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: "Selected Works", href: "/work", onClick: () => { setMenuOpen(false); navigate('/work'); } },
    { label: "Journal", href: "/journal", onClick: () => { setMenuOpen(false); navigate('/journal'); } },
    { label: "Life & Hobbies", href: "/#hobbies", onClick: () => { setMenuOpen(false); navigate('/'); setTimeout(() => document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: "Get in Touch", href: "/#contact", onClick: () => { setMenuOpen(false); navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
  ];

  return (
    <div className={`fixed inset-0 bg-[#FDFDFD] z-40 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="h-full flex flex-col justify-center items-center relative">
        <DecorativeGrid />
        <nav className="space-y-8 text-center relative z-10">
           {MENU_ITEMS.map((item, idx) => (
             <div key={idx} className="overflow-hidden">
               <button
                 onClick={item.onClick}
                 className={`block text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 hover:text-zinc-500 transition-colors duration-300 transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                 style={{ transitionDelay: `${150 + idx * 100}ms` }}
               >
                 {item.label}
               </button>
             </div>
           ))}
        </nav>

        <div className={`absolute bottom-24 flex gap-8 transition-opacity duration-700 delay-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
           {SOCIALS.map((s) => (
             <a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-zinc-900 hover:scale-110 transition-transform duration-300 p-2">
               <s.icon size={32} strokeWidth={1.5} />
             </a>
           ))}
        </div>
      </div>
    </div>
  );
};