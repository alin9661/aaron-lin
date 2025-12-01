
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectData } from '../data';

export const ProjectRow = ({
  project,
  index
}: {
  project: ProjectData,
  index: number
}) => {
  return (
    <Link
      to={`/work/${project.id}`}
      className="group block relative border-t border-zinc-200 py-12 transition-colors hover:bg-zinc-50 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12 relative z-10">
        <div className="md:w-1/12 font-mono text-xs text-zinc-600">0{index + 1}</div>
        
        <div className="md:w-4/12">
          <h3 className="text-3xl font-light tracking-tight text-zinc-700 group-hover:text-zinc-900 group-hover:translate-x-2 transition-all duration-500">
            {project.title}
          </h3>
        </div>
        
        <div className="md:w-3/12">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 bg-zinc-100 px-2 py-1">
            {project.category}
          </span>
        </div>

        <div className="md:w-3/12 flex justify-between items-center">
          <p className="text-sm text-zinc-700 font-light">{project.description}</p>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-4">
             <ArrowUpRight className="w-5 h-5 text-zinc-900" />
          </div>
        </div>
      </div>
    </Link>
  );
};
