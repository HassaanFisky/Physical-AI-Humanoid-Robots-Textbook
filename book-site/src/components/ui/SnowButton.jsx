import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from '../ActionDock/ActionDock.module.css';

const SnowButton = ({ inDock }) => {
  const [active, setActive] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const savedState = localStorage.getItem('let_it_snow') === '1';
    setActive(savedState);
    
    const handleToggle = (e) => setActive(e.detail.active);
    window.addEventListener('snow-toggle', handleToggle);
    return () => window.removeEventListener('snow-toggle', handleToggle);
  }, []);

  const toggleSnow = () => {
    const newState = !active;
    setActive(newState);
    localStorage.setItem('let_it_snow', newState ? '1' : '0');
    window.dispatchEvent(new CustomEvent('snow-toggle', { detail: { active: newState } }));
  };

  return (
    <button 
      className={`${inDock ? styles.dockButton : 'snow-fab'} ${active ? 'active' : ''}`}
      onClick={toggleSnow}
      aria-label={active ? t.snow.disable : t.snow.enable}
      title={active ? t.snow.disable : t.snow.enable}
    >
      <svg 
          viewBox="0 0 24 24" 
          width="24"
          height="24"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ transition: 'all 0.6s ease' }}
      >
          <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07l14.14-14.14" />
      </svg>
      
      {/* Gravity Logo Overlay */}
      {inDock && (
        <div className={styles.floatingIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#a5f3fc" strokeWidth="1.5">
            <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07l14.14-14.14" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default SnowButton;
