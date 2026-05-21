import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-display font-bold mb-8">Project not found</h2>
        <Link to="/" className="text-accent hover:underline font-mono uppercase tracking-widest">Back to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-32 bg-background relative"
    >
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40 hover:text-accent transition-all hover:-translate-x-2 mb-20 group">
          <ArrowLeft size={14} className="group-hover:text-accent" />
          Back to works
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.88, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 border border-accent/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-[1.12s] ease-[0.16,1,0.3,1]" />
            <div className="relative aspect-video lg:aspect-square bg-[#0a0a0a] border border-white/10 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.12s]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.88, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono text-accent/40 tracking-[0.5em]">Project Details</span>
              <div className="w-12 h-px bg-accent/20" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-10 tracking-tighter leading-none">
              {project.title}<span className="text-accent">.</span>
            </h1>
            
            <div className="p-10 md:p-14 bg-white/[0.03] backdrop-blur-[24px] border border-white/[0.08] mb-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/20 group-hover:border-accent/50 transition-colors duration-[0.88s]" />
              <p className="text-foreground/70 text-xl italic leading-relaxed font-body">
                "{project.description}"
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-16">
              {project.tags.map(tag => (
                <span key={tag} className="px-6 py-3 bg-white/[0.02] border border-white/10 text-[10px] font-mono uppercase tracking-widest text-foreground/50">{tag}</span>
              ))}
            </div>

            <div className="flex gap-12 pt-12 border-t border-white/5">
              <a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 hover:text-accent transition-colors"
              >
                <Github size={18} className="group-hover/link:-rotate-12 transition-transform" />
                <span>Source Code</span>
              </a>
              <a 
                href={project.liveUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 hover:text-accent transition-colors"
              >
                <ExternalLink size={18} className="group-hover/link:rotate-12 transition-transform" />
                <span>Live Preview</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
