import React, { useEffect, useRef } from 'react';

/**
 * WaterCursor component that leaves a fluid trail of droplets.
 * Inspired by antigravity/fluid effects.
 */
const WaterCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, speed: 0 });
  const requestRef = useRef();

  useEffect(() => {
    // Hide on touch/mobile devices entirely
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const dx = mouse.current.x - mouse.current.lastX;
      const dy = mouse.current.y - mouse.current.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      mouse.current.speed = speed;

      // Spawn particles on movement
      if (speed > 1) {
        const spawnCount = Math.min(Math.floor(speed / 5) + 1, 6);
        for (let i = 0; i < spawnCount; i++) {
          particles.current.push({
            x: mouse.current.x,
            y: mouse.current.y,
            vx: (Math.random() - 0.5) * 1.5,
            vy: 0.5 + Math.random() * 1.5, // starts downward
            radius: 3 + Math.random() * Math.min(speed / 2, 10),
            opacity: 0.6 + Math.random() * 0.2,
            life: 1.0,
            decay: 0.015 + Math.random() * 0.015,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: 0.05 + Math.random() * 0.1
          });
        }
      }

      mouse.current.lastX = mouse.current.x;
      mouse.current.lastY = mouse.current.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];

        // Physics & Animation
        p.x += Math.sin(p.wobble) * 0.4;
        p.wobble += p.wobbleSpeed;
        p.y += p.vy;
        p.vy += 0.05; // gravity acceleration
        p.opacity -= p.decay;
        p.radius *= 0.99;
        p.life -= p.decay;

        if (p.life <= 0 || p.opacity <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        // Using amber/coral-ish color: rgba(245, 166, 35, ...)
        grad.addColorStop(0, `rgba(245, 166, 35, ${p.opacity})`);
        grad.addColorStop(1, `rgba(245, 166, 35, 0)`);
        
        ctx.fillStyle = grad;
        ctx.fill();
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default WaterCursor;
