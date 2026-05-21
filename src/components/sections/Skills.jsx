import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills.js';
import { Badge } from '../ui/Badge.jsx';

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-background relative">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-mono text-accent/40 tracking-[0.5em]">04</span>
            <div className="w-12 h-px bg-accent/20" />
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent">Expertise</h2>
          </div>
          <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-10">
            Skills & <br /> Technologies<span className="text-accent">.</span>
          </h3>
          <p className="text-foreground/50 text-lg leading-relaxed italic max-w-2xl">
            I've spent the last few years honing my craft and breaking things just to learn how to fix them. 
            Here's a snapshot of the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.88, delay: catIndex * 0.12 }}
              className={`p-10 md:p-14 bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-accent/30 transition-all duration-[0.88s] group ${
                catIndex % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-12">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/60">{category.title}</h4>
                <div className="h-px flex-1 bg-white/5 group-hover:bg-accent/20 transition-colors duration-[0.88s]" />
              </div>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative"
                  >
                    <Badge 
                      variant={skill.status === 'Learning' ? 'live' : 'default'}
                      className="text-[10px] py-3 px-6 bg-white/[0.02] border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all uppercase tracking-widest gap-3"
                    >
                      {skill.icon && <i className={`${skill.icon} text-sm opacity-70 group-hover:opacity-100 transition-opacity`} />}
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              
              {category.title === "Professional Skills" && (
                <div className="mt-16 space-y-12 border-t border-white/5 pt-12">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/skill relative pl-10">
                      <div className="absolute left-0 top-1 w-2 h-2 bg-accent/20 group-hover/skill:bg-accent transition-all duration-500 group-hover/skill:scale-150" />
                      <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-foreground/80 group-hover/skill:text-accent transition-colors">{skill.name}</p>
                      <p className="text-xs text-foreground/40 leading-relaxed font-body italic group-hover/skill:text-foreground/60 transition-colors max-w-sm">
                        "{skill.description}"
                      </p>
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
