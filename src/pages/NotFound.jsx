import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-9xl font-display font-bold text-accent mb-8"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold mb-8"
      >
        Page Not Found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-foreground/50 text-lg mb-12 max-w-md"
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link 
          to="/" 
          className="text-accent hover:underline font-mono uppercase tracking-widest"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
