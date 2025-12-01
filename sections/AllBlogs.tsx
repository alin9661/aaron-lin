import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { BLOG_POSTS } from '../data';

export const AllBlogs = () => {
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
          The Journal.
        </h1>
        <p className="text-xl text-zinc-600 font-light max-w-2xl mb-24">
          Thoughts on design systems, frontend architecture, and the digital landscape.
        </p>
      </FadeIn>

      <div className="space-y-0 border-t border-zinc-200">
        {BLOG_POSTS.map((post, idx) => (
          <FadeIn key={post.id} delay={idx * 50}>
            <a href={post.link} className="group block py-12 border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
              <div className="grid md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 font-mono text-xs text-zinc-500">
                  {post.date}
                </div>
                
                <div className="md:col-span-6">
                  <h2 className="text-3xl font-light text-zinc-900 mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 font-light max-w-lg">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="md:col-span-2">
                   <span className="inline-block px-2 py-1 bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                     {post.tag}
                   </span>
                </div>
                
                <div className="md:col-span-2 flex justify-end items-center gap-4 text-zinc-400 group-hover:text-zinc-950 transition-colors">
                  <span className="font-mono text-xs">{post.readTime}</span>
                  <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};