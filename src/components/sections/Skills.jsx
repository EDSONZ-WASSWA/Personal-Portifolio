import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills.js';
import { Badge } from '../ui/Badge.jsx';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent mb-4">Expertise</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-8">
            Skills & <br /> Technologies<span className="text-accent">.</span>
          </h3>
          <p className="text-foreground/50 text-lg leading-relaxed">
            I've spent the last few years honing my craft and learning new technologies. 
            Here's a breakdown of my current stack and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="p-8 border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors"
            >
              <h4 className="text-sm font-mono uppercase tracking-widest text-accent mb-8">{category.title}</h4>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-accent opacity-0 group-hover:opacity-10 transition-opacity blur rounded-full" />
                    <Badge 
                      variant={skill.status === 'Learning' ? 'live' : 'default'}
                      className="text-sm py-2 px-4"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              
              {category.title === "Professional Skills" && (
                <div className="mt-8 space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <p className="text-sm font-bold mb-1">{skill.name}</p>
                      <p className="text-xs text-foreground/50 leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
