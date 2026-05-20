import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout.jsx';
import { useKonamiCode } from './hooks/useKonamiCode.js';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
  const location = useLocation();

  useKonamiCode(() => {
    alert("🚀 Easter Egg Found! You're awesome! Check the console for a surprise.");
    console.log(`
      %c EDSON WASSWA %c
      %c Portfolio Redesign v2.0 %c
      
      You found the secret! 
      Keep exploring.
    `, 
    'background: #f5a623; color: #0a0a0a; font-weight: bold; padding: 4px 8px;', 
    '', 
    'color: #f5a623; font-style: italic;', 
    '');
  });

  return (
    <Layout>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-background text-accent font-mono uppercase tracking-[0.5em] animate-pulse">
          Loading...
        </div>
      }>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Home />} /> {/* For now, same as home sections */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<Home />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

export default App;
