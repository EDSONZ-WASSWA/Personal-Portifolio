import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/about.js';
import { experience } from '../../data/experience.js';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Photo & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <div className="relative group">
              <div className="absolute -inset-4 border border-accent/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              <div className="aspect-[4/5] bg-foreground/5 overflow-hidden">
                <img 
                  src="/old_version/public/MY-PIC.jpg" 
                  alt={aboutData.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-[0.2em]">
              <div>
                <p className="text-foreground/30 mb-2">Location</p>
                <p>{aboutData.location}</p>
              </div>
              <div>
                <p className="text-foreground/30 mb-2">Experience</p>
                <p>{aboutData.experience}</p>
              </div>
              <div>
                <p className="text-foreground/30 mb-2">Education</p>
                <p>{aboutData.education}</p>
              </div>
              <div>
                <p className="text-foreground/30 mb-2">Availability</p>
                <p className="text-green-500">Open to work</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Bio & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-display font-bold mb-8">A bit about me<span className="text-accent">.</span></h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed text-lg mb-16">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">Fun Facts</h3>
                <ul className="space-y-4">
                  {aboutData.funFacts.map((fact, index) => (
                    <li key={index} className="flex gap-4 text-sm text-foreground/70">
                      <span className="text-accent">/</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">Currently</h3>
                <div className="space-y-4 text-sm text-foreground/70">
                  <p><span className="text-foreground/40 mr-2">Working on:</span> {aboutData.currently.workingOn}</p>
                  <p><span className="text-foreground/40 mr-2">Reading:</span> {aboutData.currently.reading}</p>
                  <p><span className="text-foreground/40 mr-2">Listening to:</span> {aboutData.currently.listeningTo}</p>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-8">Journey</h3>
            <div className="space-y-12">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-foreground/10 group">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 bg-foreground/20 rounded-full group-hover:bg-accent transition-colors" />
                  <p className="text-xs font-mono text-foreground/40 mb-2 uppercase tracking-widest">{item.year}</p>
                  <h4 className="text-xl font-display font-bold mb-1">{item.role}</h4>
                  <p className="text-sm text-accent mb-4 uppercase tracking-widest">{item.company}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed max-w-md">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
