import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button.jsx';
import { aboutData } from '../../data/about.js';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const name = aboutData.name;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Geometric Elements (CSS Only) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-accent/10 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-accent/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.p 
            variants={itemVariants}
            className="text-accent font-mono uppercase tracking-[0.3em] mb-6"
          >
            {aboutData.role}
          </motion.p>
          
          <motion.h1 
            variants={nameVariants}
            className="text-7xl md:text-9xl font-display font-bold leading-none mb-8 tracking-tighter"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-12 leading-relaxed"
          >
            I build accessible, pixel-perfect digital experiences for the web. 
            Specializing in React, TypeScript, and modern engineering practices.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6"
          >
            <Button variant="primary" size="lg" isMagnetic={true}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" isMagnetic={true}>
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] rotate-90 origin-left translate-x-1/2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};
