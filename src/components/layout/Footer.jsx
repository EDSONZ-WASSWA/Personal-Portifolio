import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-foreground/5 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="text-xl font-display font-bold">
              EDSON<span className="text-accent">.</span>
            </Link>
            <p className="text-foreground/50 text-sm max-w-xs text-center md:text-left">
              Designed & built with obsession. Focused on performance, accessibility, and unique digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/EDSONZ-WASSWA" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:edsonwasswa54@gmail.com" className="hover:text-accent transition-colors">
              <MessageSquare size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-foreground/30">
          <p>&copy; {new Date().getFullYear()} EDSON WASSWA. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
