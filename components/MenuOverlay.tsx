import React from 'react';
import { DecorativeGrid } from './DecorativeGrid';
import { MENU_ITEMS, SOCIALS } from '../data';

interface MenuOverlayProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onNavigate: () => void;
}

export const MenuOverlay = ({ menuOpen, setMenuOpen, onNavigate }: MenuOverlayProps) => {
  
  const handleNavigation = () => {
    setMenuOpen(false);
    onNavigate();
  };

  return (
    <div className={`fixed inset-0 bg-[#FDFDFD] z-40 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="h-full flex flex-col justify-center items-center relative">
        <DecorativeGrid />
        <nav className="space-y-8 text-center relative z-10">
           {MENU_ITEMS.map((item, idx) => (
             <div key={idx} className="overflow-hidden">
               <a 
                 href={item.href} 
                 onClick={handleNavigation}
                 className={`block text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 hover:text-zinc-500 transition-colors duration-300 transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                 style={{ transitionDelay: `${150 + idx * 100}ms` }}
               >
                 {item.label}
               </a>
             </div>
           ))}
        </nav>

        <div className={`absolute bottom-24 flex gap-8 transition-opacity duration-700 delay-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
           {SOCIALS.map((s) => (
             <a key={s.id} href={s.link} aria-label={s.name} className="text-zinc-900 hover:scale-110 transition-transform duration-300 p-2">
               <s.icon size={32} strokeWidth={1.5} />
             </a>
           ))}
        </div>
      </div>
    </div>
  );
};