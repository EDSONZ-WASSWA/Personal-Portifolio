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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="container-custom py-24"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-foreground/50 hover:text-accent transition-colors mb-12">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="aspect-video bg-foreground/5 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">{project.title}</h1>
          <p className="text-foreground/70 text-lg mb-12 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-foreground/5 text-xs font-mono uppercase tracking-widest">{tag}</span>
            ))}
          </div>

          <div className="flex gap-8">
            <a href={project.githubUrl} className="flex items-center gap-2 font-mono uppercase tracking-widest text-sm hover:text-accent transition-colors">
              <Github size={20} /> Github
            </a>
            <a href={project.liveUrl} className="flex items-center gap-2 font-mono uppercase tracking-widest text-sm hover:text-accent transition-colors">
              <ExternalLink size={20} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
