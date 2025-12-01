import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { SectionLabel } from '../components/SectionLabel';
import { BLOG_POSTS } from '../data';

export const Blog = () => (
  <section id="journal" className="py-24 md:py-40 px-6 md:px-24 bg-white relative z-10 border-b border-zinc-100">
    <FadeIn>
      <SectionLabel number="03" text="Journal" />
    </FadeIn>

    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {BLOG_POSTS.slice(0, 3).map((post, idx) => (
        <FadeIn key={post.id} delay={idx * 150} className="h-full">
          <article className="group h-full flex flex-col justify-between border-t border-zinc-200 p-6 pt-8 hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
                <span>{post.date}</span>
                <span>{post.tag}</span>
              </div>
              
              <h3 className="text-2xl font-light leading-snug text-zinc-900 group-hover:underline decoration-1 underline-offset-4">
                {post.title}
              </h3>
              
              <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-950 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Read Article <ArrowRight size={14} />
            </div>
          </article>
        </FadeIn>
      ))}
    </div>

    <div className="mt-16 flex justify-center">
      <FadeIn delay={400}>
        <Link
          to="/journal"
          className="inline-block px-8 py-3 border border-zinc-200 text-xs font-bold uppercase tracking-widest hover:bg-zinc-950 hover:text-white transition-all duration-300"
        >
          View All Articles
        </Link>
      </FadeIn>
    </div>
  </section>
);