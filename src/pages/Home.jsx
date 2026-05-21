import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero.jsx';
import { About } from '../components/sections/About.jsx';
import { Projects } from '../components/sections/Projects.jsx';
import { Skills } from '../components/sections/Skills.jsx';
import { Contact } from '../components/sections/Contact.jsx';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Decorative Divider */}
      <div className="container-custom py-24 flex items-center justify-center gap-8 opacity-20">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-foreground" />
        <div className="w-3 h-3 rotate-45 border border-foreground" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-foreground" />
      </div>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Home;
