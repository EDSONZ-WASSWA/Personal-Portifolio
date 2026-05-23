import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/about.js';
import { experience } from '../../data/experience.js';
import myPic from '../../assets/MY-PIC.jpg';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container-custom">
        {/* Pull Quote / Large Standalone Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.12, ease: "easeOut" }}
          className="mb-40 max-w-5xl"
        >
          <h2 className="text-4xl md:text-6xl font-display font-light italic leading-tight tracking-tight">
            "I build things for the web. <span className="font-bold not-italic">Sometimes they're even good</span>, mostly because I care about the stuff most people ignore."
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Photo & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -67 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.88 }}
            className="lg:sticky lg:top-40"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono text-accent/40 tracking-[0.5em]">05</span>
              <div className="w-12 h-px bg-accent/20" />
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent">About me</h2>
            </div>
            
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Refined Border Offset */}
              <div className="absolute -inset-4 border border-accent/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-[1.12s] ease-[0.16,1,0.3,1]" />
              
              <div className="relative aspect-[4/5] bg-[#0a0a0a] border border-white/10 overflow-hidden">
                <img 
                  src={myPic} 
                  alt={aboutData.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.12s] scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.12s]" />
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-4 font-mono text-[9px] uppercase tracking-[0.3em]">
              <div className="bg-white/[0.03] p-8 border border-white/[0.05] flex flex-col justify-between aspect-square">
                <p className="text-foreground/20">Location</p>
                <p className="text-accent/90 font-bold">{aboutData.location}</p>
              </div>
              <div className="bg-white/[0.03] p-8 border border-white/[0.05] flex flex-col justify-between aspect-square">
                <p className="text-foreground/20">Experience</p>
                <p className="text-accent/90 font-bold">{aboutData.experience}</p>
              </div>
              <div className="bg-white/[0.03] p-8 border border-white/[0.05] flex flex-col justify-between aspect-square">
                <p className="text-foreground/20">Background</p>
                <p className="text-accent/90 font-bold">Software Eng.</p>
              </div>
              <div className="bg-white/[0.03] p-8 border border-white/[0.05] flex flex-col justify-between aspect-square">
                <p className="text-foreground/20">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-green-500/80">Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Bio & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 67 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.88 }}
          >
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-12 leading-none tracking-tighter">A little bit <br /> about who I am<span className="text-accent">.</span></h3>
            
            <div className="space-y-8 text-foreground/60 leading-relaxed text-xl mb-20 italic">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>"{paragraph}"</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="p-8 bg-white/[0.02] border-l-2 border-accent/20">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent mb-6">Fun facts</h4>
                <ul className="space-y-4">
                  {aboutData.funFacts.map((fact, index) => (
                    <li key={index} className="flex gap-4 text-xs text-foreground/50 leading-relaxed">
                      <span className="text-accent/40 font-bold">{index + 1}.</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white/[0.02] border-l-2 border-accent/20">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent mb-6">Current vibe</h4>
                <div className="space-y-5 text-xs text-foreground/50 leading-relaxed">
                  <p><span className="text-foreground/20 mr-2 uppercase">Building:</span> {aboutData.currently.workingOn}</p>
                  <p><span className="text-foreground/20 mr-2 uppercase">Reading:</span> {aboutData.currently.reading}</p>
                  <p><span className="text-foreground/20 mr-2 uppercase">Audio:</span> {aboutData.currently.listeningTo}</p>
                </div>
              </div>
            </div>

            <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent mb-12 flex items-center gap-4">
              <span>The journey so far</span>
              <div className="flex-1 h-px bg-white/5" />
            </h4>
            <div className="space-y-16">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute top-0 left-0 w-px h-full bg-white/5 group-hover:bg-accent/20 transition-colors" />
                  <div className="absolute top-0 left-[-4px] w-2 h-2 bg-white/10 rounded-full group-hover:bg-accent transition-all duration-[0.45s] group-hover:scale-150" />
                  <p className="text-[10px] font-mono text-foreground/30 mb-3 uppercase tracking-widest">{item.year}</p>
                  <h5 className="text-2xl font-display font-bold mb-2 tracking-tight">{item.role}</h5>
                  <p className="text-xs text-accent/60 mb-6 uppercase tracking-widest font-mono">{item.company}</p>
                  <p className="text-sm text-foreground/50 leading-relaxed max-w-lg italic">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
