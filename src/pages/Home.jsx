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
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Home;
