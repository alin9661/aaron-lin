
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';
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

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      <DecorativeGrid />

      {/* Show scroll indicator only on home page */}
      {location.pathname === '/' && <ScrollIndicator />}

      {/* FULL SCREEN MENU OVERLAY */}
      <MenuOverlay
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* FIXED HEADER */}
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Routes>
        <Route path="/" element={
          <main className="relative pt-32 pb-20">
            <Hero />
            <About />
            <Work />
            <Blog />
            <Hobbies />
            <Footer />
          </main>
        } />
        <Route path="/work" element={<AllProjects />} />
        <Route path="/work/:id" element={<ProjectDetailWrapper />} />
        <Route path="/journal" element={<AllBlogs />} />
      </Routes>

      {/* Decorative center markers */}
      {/* }<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-0 hidden md:block">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-200"></div>
        <div className="absolute top-0 left-0 h-full w-[1px] bg-zinc-200"></div>
      </div> */}

    </div>
  );
}

// Wrapper component for ProjectDetail to handle params
function ProjectDetailWrapper() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 md:px-24 bg-white flex items-center justify-center">
        <h1 className="text-2xl text-zinc-600">Project not found</h1>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
