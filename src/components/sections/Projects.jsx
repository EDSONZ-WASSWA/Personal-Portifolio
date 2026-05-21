import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects.js';
import { Badge } from '../ui/Badge.jsx';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono text-accent/40 tracking-[0.5em]">02</span>
              <div className="w-12 h-px bg-accent/20" />
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent">Selected Works</h2>
            </div>
            <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              Crafting digital <br /> excellence<span className="text-accent">.</span>
            </h3>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`text-xs font-mono uppercase tracking-widest px-6 py-3 border transition-all duration-[0.45s] ${
                  filter === tag 
                    ? 'bg-accent border-accent text-background' 
                    : 'border-foreground/10 text-foreground/50 hover:border-accent/50 hover:text-accent'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-48">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 67 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.82, delay: index * 0.12 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center overflow-visible group relative`}
              >
                {/* Project Image Container */}
                <div className="w-full lg:w-[65%] relative overflow-hidden bg-foreground/5 min-h-[400px] lg:min-h-[500px]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.12, ease: [0.6, 0.01, -0.05, 0.95] }}
                    className="h-full"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[0.88s]"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Project Details - Glassmorphism Card */}
                <div className={`w-full lg:w-[48%] z-10 p-10 md:p-14 
                  bg-[#0a0a0a]/80 backdrop-blur-[24px] border border-white/[0.1] 
                  shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                  group-hover:border-accent/40 
                  transition-all duration-[0.88s] flex flex-col justify-center
                  relative
                  ${index % 2 === 0 ? 'lg:-ml-[10%]' : 'lg:-mr-[10%]'}
                  mt-[-30px] lg:mt-0`}
                >
                  {/* Subtle Corner Detail */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/20 group-hover:border-accent/50 transition-colors duration-[0.88s]" />
                  
                  <p className="text-[10px] font-mono text-accent/60 mb-6 uppercase tracking-[0.4em] flex items-center gap-3">
                    <span className="w-8 h-px bg-accent/20" />
                    Project {String(project.id).padStart(2, '0')}
                  </p>
                  <h4 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-none">
                    {project.title.split(' ').map((word, i) => (
                      <span key={i} className={i === 0 ? 'font-black' : 'font-light'}>{word} </span>
                    ))}
                  </h4>
                  <p className="text-foreground/70 text-lg mb-10 leading-relaxed italic font-body">
                    "{project.description}"
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-white/[0.03] border-white/10 text-[10px] uppercase tracking-wider">{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-12 mt-auto pt-8 border-t border-white/5">
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40 hover:text-accent transition-colors"
                    >
                      <Github size={16} className="group-hover/link:-rotate-12 transition-transform" />
                      <span>Source</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
