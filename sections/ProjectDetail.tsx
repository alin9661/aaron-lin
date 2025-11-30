
import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { ProjectData } from '../data';

interface ProjectDetailProps {
  project: ProjectData;
  onBack: () => void;
}

export const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-24 bg-white">
      <FadeIn>
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to List
        </button>
      </FadeIn>

      {/* Hero Header */}
      <div className="border-b border-zinc-200 pb-16 mb-16">
        <FadeIn delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-zinc-950 leading-[0.9]">
               {project.title}
             </h1>
             <span className="text-xs font-bold uppercase tracking-widest bg-zinc-950 text-white px-3 py-1 mb-2">
               {project.year}
             </span>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 pt-8 border-t border-zinc-100">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Role</h3>
              <p className="text-lg text-zinc-900">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Category</h3>
              <p className="text-lg text-zinc-900">{project.category}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="text-sm text-zinc-600 bg-zinc-50 px-2 py-1 border border-zinc-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-12 gap-12 mb-24">
         <div className="md:col-span-8">
            <FadeIn delay={300}>
              <div className="prose prose-lg prose-zinc max-w-none">
                 <p className="text-2xl font-light leading-relaxed text-zinc-800 whitespace-pre-line">
                   {project.fullDescription}
                 </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="mt-12">
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-zinc-950 pb-1 hover:text-zinc-700 hover:border-zinc-700 transition-colors">
                  Visit Live Site <ExternalLink size={16} />
                </a>
              </div>
            </FadeIn>
         </div>
      </div>

      {/* Image Gallery */}
      <div className="space-y-8 md:space-y-24">
         {project.images.map((img, idx) => (
           <FadeIn key={idx} delay={500 + (idx * 100)}>
             <div className="relative w-full overflow-hidden bg-zinc-100 border border-zinc-100">
               <img 
                 src={img} 
                 alt={`${project.title} preview ${idx + 1}`}
                 className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-4 left-4 text-xs font-mono text-white/50 bg-black/50 px-2 py-1 backdrop-blur-sm">
                 IMG_0{idx + 1}.JPG
               </div>
             </div>
           </FadeIn>
         ))}
      </div>
      
    </div>
  );
};
