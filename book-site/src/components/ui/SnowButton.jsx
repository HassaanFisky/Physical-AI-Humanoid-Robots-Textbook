
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
      
      // Create multiple oscillators for a richer, natural sound
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Setup filter for softer sound
      filter.type = 'lowpass';
      filter.frequency.value = 800;
      filter.Q.value = 1;

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      
      if (turningOn) {
        // Soft ascending chime - like gentle wind bells
        osc1.type = 'sine';
        osc2.type = 'triangle';
        
        osc1.frequency.setValueAtTime(280, now);
        osc1.frequency.linearRampToValueAtTime(420, now + 0.3);
        osc2.frequency.setValueAtTime(560, now);
        osc2.frequency.linearRampToValueAtTime(700, now + 0.3);
        
        gain.gain.setValueAtTime(0.0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.5);
        osc2.stop(now + 1.5);
      } else {
        // Soft descending - like snow settling
        osc1.type = 'sine';
        osc2.type = 'triangle';
        
        osc1.frequency.setValueAtTime(420, now);
        osc1.frequency.linearRampToValueAtTime(280, now + 0.2);
        osc2.frequency.setValueAtTime(700, now);
        osc2.frequency.linearRampToValueAtTime(420, now + 0.2);
        
        gain.gain.setValueAtTime(0.0, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.0);
        osc2.stop(now + 1.0);
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
