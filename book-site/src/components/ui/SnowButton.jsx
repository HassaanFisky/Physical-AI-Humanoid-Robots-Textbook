import React, { useState, useEffect } from 'react';
import '../../styles/snow.css';

const SnowButton = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Sync with localStorage on mount
    const savedState = localStorage.getItem('let_it_snow') === '1';
    setActive(savedState);
    
    // Also listen for external toggles if multiple buttons exist
    const handleToggle = (e) => setActive(e.detail.active);
    window.addEventListener('snow-toggle', handleToggle);
    return () => window.removeEventListener('snow-toggle', handleToggle);
  }, []);

  const toggleSnow = () => {
    const newState = !active;
    setActive(newState);
    localStorage.setItem('let_it_snow', newState ? '1' : '0');
    
    // Dispatch event for SnowOverlay
    window.dispatchEvent(new CustomEvent('snow-toggle', { 
      detail: { active: newState } 
    }));
  };

  return (
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
  );
};

export default SnowButton;
