import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button.jsx';
import { aboutData } from '../../data/about.js';
import developerWorkspaceVideo from '../../assets/developer-workspace.mp4';
import developerWorkspacePoster from '../../assets/developer-workspace-poster.png';

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
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden py-20">
      {/* Cinematic background: the poster remains visible for reduced-motion users. */}
      <div className="hero-background" aria-hidden="true">
        <img
          src={developerWorkspacePoster}
          alt=""
          className="hero-background-poster"
        />
        <video
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={developerWorkspacePoster}
        >
          <source src={developerWorkspaceVideo} type="video/mp4" />
        </video>
        <div className="hero-background-scrim" />
      </div>

      {/* Background Geometric Elements (CSS Only) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-[-5%] w-96 h-96 border border-accent/10 rounded-full animate-[spin_23.45s_linear_infinite]" />
        <div className="absolute bottom-1/4 left-[-5%] w-[500px] h-[500px] border border-accent/5 rounded-full animate-[spin_34.12s_linear_infinite_reverse]" />
      </div>

      <motion.div
        className="container-custom relative z-10 pt-32 md:pt-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl lg:ml-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-mono text-accent/40 tracking-[0.5em]">01</span>
            <div className="w-12 h-px bg-accent/20" />
            <motion.p 
              variants={itemVariants}
              className="text-accent font-mono uppercase tracking-[0.3em]"
            >
              {aboutData.role}
            </motion.p>
          </div>
          
          <motion.h1 
            variants={nameVariants}
            className="text-7xl md:text-9xl font-display font-bold leading-[0.9] mb-10 tracking-tighter"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`inline-block ${index % 3 === 0 ? 'font-normal' : 'font-bold'}`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-12 leading-relaxed font-body"
          >
            I build things for the web. Some of them are actually useful. 
            I'm obsessed with the details that most people skip, because 
            that's where the magic happens.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-8"
          >
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button variant="primary" size="lg" isMagnetic={true} className="px-10">
                Check my work
              </Button>
            </a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button variant="outline" size="lg" isMagnetic={true} className="px-10">
                Say hello
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Asymmetric */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.12, duration: 1.34 }}
        className="absolute bottom-12 right-12 md:right-24 z-10 flex flex-col items-center gap-6"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] rotate-90 origin-left translate-x-1/2 opacity-30">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
};
