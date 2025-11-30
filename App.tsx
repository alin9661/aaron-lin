
import React, { useState, useEffect } from 'react';
import { DecorativeGrid } from './components/DecorativeGrid';
import { ScrollIndicator } from './components/ScrollIndicator';
import { MenuOverlay } from './components/MenuOverlay';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Work } from './sections/Work';
import { Blog } from './sections/Blog';
import { AllBlogs } from './sections/AllBlogs';
import { AllProjects } from './sections/AllProjects';
import { ProjectDetail } from './sections/ProjectDetail';
import { Hobbies } from './sections/Hobbies';
import { Footer } from './sections/Footer';
import { PROJECTS } from './data';

type ViewState = 'home' | 'all-blogs' | 'all-projects' | 'project-detail';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const goToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
  };

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
    setCurrentView('project-detail');
  };

  // Find the selected project object
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      <DecorativeGrid />
      
      {/* Show scroll indicator only on home view */}
      {currentView === 'home' && <ScrollIndicator />}

      {/* FULL SCREEN MENU OVERLAY */}
      <MenuOverlay 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        onNavigate={goToHome}
      />

      {/* FIXED HEADER */}
      <Header 
        scrolled={scrolled} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        goHome={goToHome}
      />

      {currentView === 'home' && (
        <main className="relative pt-32 pb-20">
          <Hero />
          <About />
          <Work 
            onViewAll={() => setCurrentView('all-projects')} 
            onProjectClick={handleProjectClick}
          />
          <Blog onViewAll={() => setCurrentView('all-blogs')} />
          <Hobbies />
          <Footer />
        </main>
      )}

      {currentView === 'all-blogs' && (
        <AllBlogs onBack={goToHome} />
      )}

      {currentView === 'all-projects' && (
        <AllProjects 
          onBack={goToHome} 
          onProjectClick={handleProjectClick}
        />
      )}

      {currentView === 'project-detail' && selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => setCurrentView('all-projects')} 
        />
      )}
      
      {/* Decorative center markers */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-0 hidden md:block">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-200"></div>
        <div className="absolute top-0 left-0 h-full w-[1px] bg-zinc-200"></div>
      </div>

    </div>
  );
}
