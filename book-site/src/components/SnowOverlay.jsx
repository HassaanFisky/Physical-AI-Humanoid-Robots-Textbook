import React, { useEffect, useRef, useState } from 'react';

const SnowOverlay = () => {
  const canvasRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Check initial state from localStorage
    const savedState = localStorage.getItem('let_it_snow') === '1';
    setIsActive(savedState);

    // Check accessibility preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Listen for custom toggle event from SnowButton
    const handleToggle = (e) => {
      if (e.detail.active) {
        setIsActive(true);
        // Fade in
        setTimeout(() => setOpacity(1), 50);
      } else {
        // Fade out first, then deactivate
        setOpacity(0);
        setTimeout(() => setIsActive(false), 600);
      }
    };
    window.addEventListener('snow-toggle', handleToggle);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('snow-toggle', handleToggle);
    };
  }, []);

  useEffect(() => {
    if (!isActive || prefersReducedMotion || !canvasRef.current) {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
        return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuration
    const particleCount = 200;
    const particles = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Match style dimensions
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.3 + Math.random() * 1.2, // Smaller snowflakes
          speedY: 0.3 + Math.random() * 1.0, // Slower fall
          drift: Math.random() * Math.PI * 2,
          opacity: 0.3 + Math.random() * 0.5,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() / 1000;

      ctx.fillStyle = 'white';
      ctx.beginPath();

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Update position
        p.y += p.speedY;
        p.x += Math.sin(time + p.drift) * 0.3; // Gentle drift

        // Wrap around
        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        // Draw
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      ctx.fill();
      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    initParticles();
    render();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, prefersReducedMotion]);

  if (prefersReducedMotion) return null; // Or show nothing

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        width: '100vw',
        height: '100vh',
        opacity: opacity,
        transition: 'opacity 0.6s ease-in-out',
        display: isActive || opacity > 0 ? 'block' : 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default SnowOverlay;
