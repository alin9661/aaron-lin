import React, { useState, useEffect } from 'react';

export const ScrollIndicator = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out completely by 300px scroll
      const newOpacity = Math.max(0, 1 - window.scrollY / 300);
      setOpacity(newOpacity);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (opacity <= 0.05) return null;

  return (
    <>
      <style>
        {`
          @keyframes float-y {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
      <div 
        className="fixed bottom-12 left-8 md:left-24 z-30 pointer-events-none"
        style={{ 
          opacity, 
          transition: 'opacity 0.1s ease-out',
          animation: 'float-y 3s ease-in-out infinite' 
        }}
      >
        <div 
          className="
            relative px-6 py-4 bg-zinc-950 text-white 
            border border-zinc-800
            shadow-[10px_10px_0px_0px_rgba(212,212,216,1)]
          "
          style={{ 
            transform: 'perspective(600px) rotateX(25deg) rotateY(15deg) rotateZ(-5deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="flex items-center gap-3" style={{ transform: 'translateZ(10px)' }}>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Scroll to Explore</span>
          </div>
          
          {/* Subtle highlight for depth */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-black/20"></div>
        </div>
      </div>
    </>
  );
};
