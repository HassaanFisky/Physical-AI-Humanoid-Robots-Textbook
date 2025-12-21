import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const languages = {
  en: {
    name: "English",
    chat: {
      title: "AI Robotics Guide",
      subtitle: "Knowledge Base v2.4",
      placeholder: "Ask me anything...",
      send: "Send",
      thinking: "Thinking...",
      greeting:
        "Hello! I am your Physical AI guide. How can I help you explore robotics today?",
      authRequired: "Please sign in to continue.",
    },
    snow: {
      enable: "Let it Snow",
      disable: "Stop Snow",
    },
    ui: {
      modules: "Modules",
      chapters: "Chapters",
      startReading: "Start Reading",
      backToTop: "Back to Top",
    },
  },
  ru: {
    name: "Roman Urdu",
    chat: {
      title: "AI Robotics Rahnuma",
      subtitle: "Ilmi Khazana v2.4",
      placeholder: "Kuch bhi pochen...",
      send: "Bhejen",
      thinking: "Soch raha hoon...",
      greeting:
        "Assalam-o-Alaikum! Main aapka AI guide hoon. Aaj robotics mein kya seekhna chahenge?",
      authRequired: "Aagay barhne ke liye sign-in karen.",
    },
    snow: {
      enable: "Barf girao",
      disable: "Barf roko",
    },
    ui: {
      modules: "Modules",
      chapters: "Chapters",
      startReading: "Parhna shuru karen",
      backToTop: "Oopar jayen",
    },
  },
  ar: {
    name: "العربية",
    chat: {
      title: "دليل الروبوتات الذكي",
      subtitle: "قاعدة المعرفة v2.4",
      placeholder: "اسألني أي شيء...",
      send: "إرسال",
      thinking: "يفكر...",
      greeting:
        "مرحباً! أنا دليلك للذكاء الاصطناعي الفيزيائي. كيف يمكنني مساعدتك في استكشاف الروبوتات اليوم؟",
      authRequired: "يرجى تسجيل الدخول للمتابعة.",
    },
    snow: {
      enable: "دعها تثلج",
      disable: "إيقاف الثلج",
    },
    ui: {
      modules: "الوحدات",
      chapters: "الفصول",
      startReading: "ابدأ القراءة",
      backToTop: "العودة للأعلى",
    },
  },
  es: {
    name: "Español",
    chat: {
      title: "Guía de Robótica IA",
      subtitle: "Base de Conocimiento v2.4",
      placeholder: "Pregúntame lo que sea...",
      send: "Enviar",
      thinking: "Pensando...",
      greeting:
        "¡Hola! Soy tu guía de IA Física. ¿Cómo puedo ayudarte a explorar la robótica hoy?",
      authRequired: "Por favor inicia sesión para continuar.",
    },
    snow: {
      enable: "Que nieve",
      disable: "Detener nieve",
    },
    ui: {
      modules: "Módulos",
      chapters: "Capítulos",
      startReading: "Empezar a leer",
      backToTop: "Volver arriba",
    },
  },
  zh: {
    name: "中文",
    chat: {
      title: "AI 机器人指南",
      subtitle: "知识库 v2.4",
      placeholder: "问我任何问题...",
      send: "发送",
      thinking: "思考中...",
      greeting:
        "你好！我是您的物理 AI 指南。今天我能如何帮助您探索机器人技术？",
      authRequired: "请登录以继续。",
    },
    snow: {
      enable: "下雪吧",
      disable: "停止下雪",
    },
    ui: {
      modules: "模块",
      chapters: "章节",
      startReading: "开始阅读",
      backToTop: "回到顶部",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("app_lang");
    if (saved && languages[saved]) {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (languages[newLang]) {
      setLang(newLang);
      localStorage.setItem("app_lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  const t = languages[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
