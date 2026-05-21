import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode.js';
import { Badge } from '../ui/Badge.jsx';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Skills', path: '#skills' },
  { name: 'Contact', path: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const location = useLocation();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-[0.67s] ${
      isScrolled 
        ? 'bg-[#0a0a0a]/40 backdrop-blur-[20px] saturate-[180%] border-b border-accent/10 py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-display font-bold tracking-tighter">
          EDSON<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="relative group text-sm font-mono uppercase tracking-widest overflow-hidden"
              >
                <span className={`block transition-transform duration-300 ${
                  location.hash === link.path ? '-translate-y-full' : 'group-hover:-translate-y-full'
                }`}>
                  {link.name}
                </span>
                <span className={`absolute top-full left-0 block text-accent transition-transform duration-300 ${
                  location.hash === link.path ? '-translate-y-full' : 'group-hover:-translate-y-full'
                }`}>
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-8 border-l border-foreground/10">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:text-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <Badge variant="live" className="hidden lg:flex">Available for work</Badge>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:text-accent transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.43, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#0a0a0a]/85 backdrop-blur-[24px] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`text-4xl font-display font-bold ${
                    location.hash === link.path ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
