import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button.jsx';
import { Github, Linkedin, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Safety check for environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS credentials missing. Please check your .env file and restart the dev server.');
      setStatus('error');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey: publicKey,
        }
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.82 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono text-accent/40 tracking-[0.5em]">03</span>
              <div className="w-12 h-px bg-accent/20" />
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent">Contact</h2>
            </div>
            <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-12">
              Let's talk <br /> about your project<span className="text-accent">.</span>
            </h3>
            <p className="text-foreground/50 text-lg mb-12 max-w-md italic leading-relaxed">
              I’m always up for a chat about new projects, creative ideas, or opportunities to be part of your visions. If you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/[0.03] backdrop-blur-[8px] border border-white/[0.08] group-hover:border-accent/50 group-hover:text-accent transition-all duration-[0.45s]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-1">Email</p>
                  <a href="mailto:edsonwasswa54@gmail.com" className="text-lg hover:text-accent transition-colors font-body">edsonwasswa54@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/[0.03] backdrop-blur-[8px] border border-white/[0.08] group-hover:border-accent/50 group-hover:text-accent transition-all duration-[0.45s]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-1">Phone</p>
                  <a href="tel:+256778774441" className="text-lg hover:text-accent transition-colors font-body">+256 778 774 441</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/[0.03] backdrop-blur-[8px] border border-white/[0.08] group-hover:border-accent/50 group-hover:text-accent transition-all duration-[0.45s]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-1">Location</p>
                  <p className="text-lg font-body">Kampala, Uganda</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/EDSONZ-WASSWA" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] hover:border-accent/50 hover:text-accent hover:-translate-y-1 transition-all duration-[0.34s]">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/wasswa-edson-493a80360/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] hover:border-accent/50 hover:text-accent hover:-translate-y-1 transition-all duration-[0.34s]">
                <Linkedin size={20} />
              </a>
              <a href="mailto:edsonwasswa54@gmail.com" className="w-14 h-14 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] hover:border-accent/50 hover:text-accent hover:-translate-y-1 transition-all duration-[0.34s]">
                <MessageSquare size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.88 }}
            className="p-10 md:p-16 bg-[#0a0a0a]/40 backdrop-blur-[24px] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Subtle Gradient Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 blur-[100px] pointer-events-none" />
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-1 focus:border-accent outline-none transition-all duration-500 font-body text-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="YourName...."
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-1 focus:border-accent outline-none transition-all duration-500 font-body text-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-1 focus:border-accent outline-none transition-all duration-500 font-body text-lg"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-white/[0.03] border-b border-white/10 py-4 px-1 focus:border-accent outline-none transition-all duration-500 font-body text-lg resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full py-6 text-[10px] uppercase tracking-[0.4em] group relative overflow-hidden"
                disabled={status === 'sending'}
              >
                <span className="relative z-10">
                  {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Message Received' : status === 'error' ? 'Transmission Failed' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-accent font-mono uppercase tracking-widest mt-6"
                >
                  Thanks! Edson will get back to you soon.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-red-500 font-mono uppercase tracking-widest mt-6"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
