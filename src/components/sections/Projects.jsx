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
    <section id="projects" className="py-24 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent mb-4">Selected Works</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              Crafting digital <br /> excellence<span className="text-accent">.</span>
            </h3>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`text-xs font-mono uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                  filter === tag 
                    ? 'bg-accent border-accent text-background' 
                    : 'border-foreground/10 text-foreground/50 hover:border-accent hover:text-accent'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-3/5 group relative overflow-hidden bg-foreground/5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
                    className="aspect-[16/9]"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-2/5">
                  <p className="text-xs font-mono text-accent mb-4 uppercase tracking-[0.2em]">Project {String(project.id).padStart(2, '0')}</p>
                  <h4 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">{project.title}</h4>
                  <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-8">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live
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
