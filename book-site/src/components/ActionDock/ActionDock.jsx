import React, { useState, useEffect } from 'react';
import { useLanguage, languages } from '../../context/LanguageContext';
import ChatWidget from '../ChatWidget';
import SnowButton from '../ui/SnowButton';
import styles from './ActionDock.module.css';

const ActionDock = () => {
  const { lang, changeLanguage, t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    // Trigger gravity animation shortly after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.dockContainer} ${isLoaded ? styles.loaded : ''}`}>
      {/* 1. Language Switcher */}
      <div className={styles.dockItem}>
        <button 
          className={styles.dockButton}
          onClick={() => setShowLangMenu(!showLangMenu)}
          aria-label="Change Language"
          title="Select Language"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </button>
        
        <div className={`${styles.langDropdown} ${showLangMenu ? styles.showDropdown : ''}`}>
          {Object.entries(languages).map(([key, value]) => (
            <button
              key={key}
              className={`${styles.langOption} ${lang === key ? styles.activeLang : ''}`}
              onClick={() => {
                changeLanguage(key);
                setShowLangMenu(false);
              }}
            >
              {value.name}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Snow Button (Customized for Dock) */}
      <div className={styles.dockItem}>
        <SnowButton inDock={true} />
        <div className={styles.floatingIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#a5f3fc" strokeWidth="2">
            <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07l14.14-14.14" />
          </svg>
        </div>
      </div>

      {/* 3. Chat Widget (Customized for Dock) */}
      <div className={styles.dockItem}>
        <ChatWidget inDock={true} />
      </div>
    </div>
  );
};

export default ActionDock;
