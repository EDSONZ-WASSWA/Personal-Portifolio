import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button.jsx';
import { Github, Linkedin, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent mb-4">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-8">
              Let's build <br /> something great<span className="text-accent">.</span>
            </h3>
            <p className="text-foreground/50 text-lg mb-12 max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-foreground/[0.03] border border-foreground/5 rounded-none group-hover:border-accent group-hover:text-accent transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-foreground/30 mb-1">Email</p>
                  <a href="mailto:edsonwasswa54@gmail.com" className="text-lg hover:text-accent transition-colors">edsonwasswa54@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-foreground/[0.03] border border-foreground/5 rounded-none group-hover:border-accent group-hover:text-accent transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-foreground/30 mb-1">Phone</p>
                  <a href="tel:+256778774441" className="text-lg hover:text-accent transition-colors">+256 778 774 441</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-foreground/[0.03] border border-foreground/5 rounded-none group-hover:border-accent group-hover:text-accent transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-foreground/30 mb-1">Location</p>
                  <p className="text-lg">Kampala, Uganda</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 flex items-center justify-center border border-foreground/10 hover:border-accent hover:text-accent transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="w-14 h-14 flex items-center justify-center border border-foreground/10 hover:border-accent hover:text-accent transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-14 h-14 flex items-center justify-center border border-foreground/10 hover:border-accent hover:text-accent transition-all duration-300">
                <MessageSquare size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 border border-foreground/5 bg-foreground/[0.02]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-foreground/40">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-foreground/40">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-accent focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-foreground/40">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-foreground/40">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
