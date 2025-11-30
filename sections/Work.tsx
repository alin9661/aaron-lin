
import React from 'react';
import { MoveRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SectionLabel } from '../components/SectionLabel';
import { ProjectRow } from '../components/ProjectRow';
import { PROJECTS } from '../data';

interface WorkProps {
  onViewAll?: () => void;
  onProjectClick?: (id: number) => void;
}

export const Work = ({ onViewAll, onProjectClick }: WorkProps) => (
  <section id="work" className="py-24 md:py-40 px-6 md:px-24 bg-white relative z-10">
    <FadeIn>
      <SectionLabel number="02" text="Selected Works" />
    </FadeIn>
    
    <div className="flex flex-col">
      {PROJECTS.slice(0, 4).map((project, idx) => (
        <FadeIn key={project.id} delay={idx * 100}>
          <ProjectRow 
            project={project} 
            index={idx} 
            onClick={onProjectClick} 
          />
        </FadeIn>
      ))}
      <div className="border-t border-zinc-200"></div>
    </div>
    
    <div className="mt-16 text-center">
      <FadeIn delay={200}>
        <button 
          onClick={onViewAll}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-zinc-950 pb-1 hover:text-zinc-700 hover:border-zinc-700 transition-colors"
        >
          View All Projects <MoveRight size={16} />
        </button>
      </FadeIn>
    </div>
  </section>
);
