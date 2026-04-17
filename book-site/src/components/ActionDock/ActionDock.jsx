import React, { useState, useEffect, useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Sun, Snowflake, CloudRain, CloudLightning, Cloud, MessageSquare, BookOpen } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.js";
import { useColorMode } from "@docusaurus/theme-common";
import { useCompanion } from "../companion/CompanionContext.jsx";

// Spring presets for elite fluidity
const SPRING_ZOOP   = { type: "spring", stiffness: 620, damping: 18, mass: 0.8 };
const SPRING_ICON   = { type: "spring", stiffness: 500, damping: 14, mass: 0.6 };

const WEATHER_CYCLE = ["clear", "snow", "rain", "storm", "cloudy", "sunny"];

const WEATHER_ICONS = {
  clear:  <Sun size={20} />,
  snow:   <Snowflake size={20} />,
  rain:   <CloudRain size={20} />,
  storm:  <CloudLightning size={20} />,
  cloudy: <Cloud size={20} />,
  sunny:  <Sun size={20} className="text-yellow-400" />,
};

const WEATHER_LABELS = {
  clear:  "Clear",
  snow:   "Snow",
  rain:   "Rain",
  storm:  "Storm",
  cloudy: "Cloudy",
  sunny:  "Sunny",
};

function ActionDockContent() {
  const { lang, changeLanguage, t, languages } = useLanguage();
  const { isOpen: companionOpen, toggle: toggleCompanion } = useCompanion();
  const [showLanguage, setShowLanguage] = useState(false);
  const [weatherIndex, setWeatherIndex] = useState(0);
  
  const dockRef     = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("weather_mode") || "clear";
    const idx = WEATHER_CYCLE.indexOf(saved);
    setWeatherIndex(idx >= 0 ? idx : 0);
    
    document.documentElement.setAttribute("data-weather", saved);

    const handleClickOutside = (event) => {
      if (showLanguage && languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLanguage]);

  const cycleWeather = () => {
    const nextIdx = (weatherIndex + 1) % WEATHER_CYCLE.length;
    setWeatherIndex(nextIdx);
    const newMode = WEATHER_CYCLE[nextIdx];
    localStorage.setItem("weather_mode", newMode);
    document.documentElement.setAttribute("data-weather", newMode);
    window.dispatchEvent(new CustomEvent("weather-change", { detail: { mode: newMode } }));
  };

  const currentWeather = WEATHER_CYCLE[weatherIndex];

  const navItems = [
    { 
      id: "lang", 
      icon: <Languages size={20} />, 
      label: t.ui.language, 
      action: () => setShowLanguage(!showLanguage),
      active: showLanguage 
    },
    { 
      id: "weather", 
      icon: (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWeather}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1,   rotate: 0   }}
            exit={   { opacity: 0, scale: 0.5, rotate: 45  }}
            transition={SPRING_ICON}
            style={{ willChange: "transform, opacity" }}
          >
            {WEATHER_ICONS[currentWeather]}
          </motion.div>
        </AnimatePresence>
      ),
      label: `Weather: ${WEATHER_LABELS[currentWeather]}`, 
      action: cycleWeather,
      active: currentWeather !== 'clear' 
    },
    {
      id: "chat",
      icon: <MessageSquare size={20} />,
      label: t.ui.companion,
      action: toggleCompanion,
      active: companionOpen,
      isCompanionOrb: true,
    },
    { 
      id: "notebook", 
      icon: <BookOpen size={20} />, 
      label: t.ui.notebook, 
      action: () => window.dispatchEvent(new CustomEvent("toggle-notebook")),
      active: false 
    }
  ];

  return (
    <div ref={dockRef} className={`fixed bottom-10 z-[9999] flex flex-col items-center gap-4 ${lang === 'ur' ? 'left-10' : 'right-10'}`}>
      <AnimatePresence>
        {showLanguage && (
          <motion.div
            ref={languageRef}
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={   { opacity: 0, scale: 0.88, y: 16 }}
            className="flex flex-col gap-2 humanist-glass p-2 rounded-2xl mb-2"
          >
            {Object.keys(languages).map((l) => (
              <button
                key={l}
                onClick={() => {
                  changeLanguage(l);
                  setShowLanguage(false);
                }}
                className={`px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all border-none cursor-pointer ${
                  lang === l ? 'bg-accent text-white shadow-md' : 'text-text-secondary hover:text-accent hover:bg-bg-elevated'
                }`}
                style={{
                  background: lang === l ? 'var(--accent)' : 'transparent',
                  color:      lang === l ? 'white'         : 'var(--text-secondary)',
                }}
              >
                {languages[l].name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="flex flex-col gap-3 humanist-glass p-2.5 rounded-full shadow-float border-white/20"
        style={{ border: '0.8px solid var(--border-fine)' }}
      >
        {navItems.map((item) => {
          const isOrb   = !!item.isCompanionOrb;
          const isGhost = isOrb && companionOpen;

          return (
            <motion.button
              key={item.id}
              layoutId={isOrb ? "companion-orb" : undefined}
              onClick={item.action}
              whileHover={!isGhost ? { scale: 1.12, y: -3 } : {}}
              whileTap={!isGhost  ? { scale: 0.82 }         : {}}
              transition={SPRING_ZOOP}
              aria-hidden={isGhost ? true : undefined}
              className={`w-14 h-14 rounded-full flex items-center justify-center relative group transition-all ${
                item.active ? 'bg-accent text-white' : 'text-text-secondary hover:bg-bg-elevated hover:text-accent'
              }`}
              style={{
                cursor:         isGhost ? "default" : "pointer",
                background:     item.active ? "var(--accent)" : "transparent",
                color:          item.active ? "white" : "var(--text-secondary)",
                willChange:     "transform, border-radius",
                pointerEvents:  isGhost ? "none" : "auto",
                opacity:        isGhost ? 0 : 1,
              }}
              title={item.label}
            >
              {item.icon}
              {!isGhost && (
                <div
                  className={`absolute ${lang === "ur" ? "left-full ml-4" : "right-full mr-4"} px-3 py-1.5 bg-text-primary text-bg text-[9px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-[0.2em] font-bold shadow-xl border border-white/20`}
                  aria-hidden="true"
                >
                  {item.label}
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export function ActionDock() {
  return (
    <BrowserOnly>
      {() => <ActionDockContent />}
    </BrowserOnly>
  );
}
