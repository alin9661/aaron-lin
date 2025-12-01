import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const Header = ({ scrolled, menuOpen, setMenuOpen }: HeaderProps) => (
  <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${scrolled && !menuOpen ? 'bg-[#FDFDFD]/90 backdrop-blur-sm' : ''}`}>
    
    {/* LOGO (Moved Left) */}
    <Link to="/" className="group z-50 relative">
      <span className={`text-xl font-bold tracking-tighter uppercase transition-colors duration-300 ${menuOpen ? 'text-zinc-950' : 'text-zinc-950 hover:text-zinc-500'}`}>
        Aaron Lin
      </span>
    </Link>

    {/* MENU BUTTON (Moved Right) */}
    <button 
      onClick={() => setMenuOpen(!menuOpen)}
      className="group flex items-center gap-3 z-50 cursor-pointer focus:outline-none"
    >
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-950">
        {menuOpen ? 'Close' : 'Menu'}
      </span>
      <div className="flex flex-col gap-[5px] items-end">
        <span className={`h-px bg-zinc-950 transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[3px]' : 'w-6 group-hover:w-8'}`}></span>
        <span className={`h-px bg-zinc-950 transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[3px]' : 'w-4 group-hover:w-8'}`}></span>
      </div>
    </button>
  </header>
);