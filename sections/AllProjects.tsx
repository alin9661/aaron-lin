
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { ProjectRow } from '../components/ProjectRow';
import { PROJECTS } from '../data';

export const AllProjects = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-24 bg-white">
      <FadeIn>
        <Link
          to="/"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </FadeIn>

      <FadeIn delay={100}>
        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-950 mb-6">
          Work Archive.
        </h1>
        <p className="text-xl text-zinc-600 font-light max-w-2xl mb-24">
          A selection of projects exploring interaction, utility, and form.
        </p>
      </FadeIn>

      <div className="flex flex-col border-b border-zinc-200">
        {PROJECTS.map((project, idx) => (
          <FadeIn key={project.id} delay={idx * 50}>
            <ProjectRow
              project={project}
              index={idx}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
