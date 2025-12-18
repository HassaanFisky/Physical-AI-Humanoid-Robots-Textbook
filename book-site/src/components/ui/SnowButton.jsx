
import React, { useState, useEffect } from 'react';
import '../../styles/snow.css';

const SnowButton = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Load the external high-performance script
    const scriptId = 'snow-canvas-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '/js/snow-canvas.js';
      script.async = true;
      script.onload = () => {
        console.log("Snow script loaded");
      };
      document.body.appendChild(script);
    }
  }, []);

  const playSound = (turningOn) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      // Soft chime parameters
      osc.type = 'sine';
      
      if (turningOn) {
        // Ascending major third (C5 -> E5 approx)
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.linearRampToValueAtTime(659.25, now + 0.1); // E5
        
        gain.gain.setValueAtTime(0.0, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.05); // Soft attack
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2); // Long tail
        
        osc.start(now);
        osc.stop(now + 1.2);
      } else {
         // Descending
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.linearRampToValueAtTime(523.25, now + 0.15);
        
        gain.gain.setValueAtTime(0.0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        
        osc.start(now);
        osc.stop(now + 0.8);
      }
    } catch (e) {
      console.warn("Audio play failed", e);
    }
  };

  const toggleSnow = () => {
    const newState = !active;
    setActive(newState);
    playSound(newState);

    // Communicate with the global controller
    if (window.SnowSystem && window.SnowSystem.toggle) {
      window.SnowSystem.toggle(newState);
    }
    
    // Toggle UI visibility classes
    const canvas = document.getElementById('snow-canvas');
    const backdrop = document.getElementById('snow-backdrop');
    if (canvas) {
        if (newState) canvas.classList.add('active');
        else canvas.classList.remove('active');
    }
    if (backdrop) { // Optional backdrop if implemented in HTML
         if (newState) backdrop.classList.add('active');
         else backdrop.classList.remove('active');
    }
  };

  return (
    <>
      <canvas id="snow-canvas" aria-hidden="true"></canvas>
      {/* Optional backdrop for readability if needed */}
      <div id="snow-backdrop"></div>
      
      <button 
        className={`snow-fab ${active ? 'active' : ''}`}
        onClick={toggleSnow}
        aria-label={active ? "Stop Snow" : "Let it Snow"}
        title={active ? "Stop Animation" : "Let it Snow!"}
      >
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07l14.14-14.14" />
            <path d="M12 2v0 M12 22v0 M2 12h0 M22 12h0" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
};

export default SnowButton;
