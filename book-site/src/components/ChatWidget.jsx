/**
 * ChatWidget.jsx - React Chat Widget for Physical AI Textbook
 * 
 * A compact, glassmorphism-styled chat widget that integrates with
 * the OpenRouter-powered chat API.
 * 
 * INTEGRATION INSTRUCTIONS:
 * 1. Copy this file to book-site/src/components/ChatWidget.jsx
 * 2. Import in book-site/src/theme/Layout/index.js:
 *    import ChatWidget from '@site/src/components/ChatWidget';
 * 3. Add <ChatWidget /> before closing </> in Layout component
 * 4. Ensure API server is running (api/chat.js) or update API_URL
 */

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Configuration - use relative path for Vercel serverless functions
const API_URL = '/api/chat';

// Styles with light/dark mode support - SSR-safe
const getStyles = () => {
  // Check if we're in browser (not SSR)
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // Return default dark styles for SSR
    return getDefaultStyles(true);
  }
  
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark' || 
                 window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  return getDefaultStyles(isDark);
};

const getDefaultStyles = (isDark) => {
  return {
    widget: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '380px',
      maxWidth: 'calc(100vw - 48px)',
      background: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      borderRadius: '16px',
      border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: isDark 
        ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
        : '0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(20px) saturate(180%)',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      zIndex: 1000,
      transition: 'all 0.3s ease',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 18px',
      borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
      cursor: 'pointer',
      background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
    },
    avatar: {
      width: '42px',
      height: '42px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      flexShrink: 0,
    },
    title: {
      flex: 1,
    },
    titleText: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 600,
      color: isDark ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
      letterSpacing: '-0.01em',
    },
    subtitle: {
      margin: 0,
      fontSize: '12px',
      color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    },
    body: {
      maxHeight: '400px',
      transition: 'max-height 0.3s ease, opacity 0.2s ease',
      opacity: 1,
    },
    bodyCollapsed: {
      maxHeight: 0,
      opacity: 0,
      overflow: 'hidden',
    },
    messages: {
      padding: '16px',
      maxHeight: '300px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      background: isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.02)',
    },
    message: {
      maxWidth: '85%',
      padding: '10px 14px',
      borderRadius: '12px',
      fontSize: '14px',
      lineHeight: 1.6,
    },
    botMessage: {
      background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
      border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
      alignSelf: 'flex-start',
      color: isDark ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
    },
    userMessage: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      alignSelf: 'flex-end',
      color: '#ffffff',
      border: 'none',
    },
    inputContainer: {
      display: 'flex',
      gap: '8px',
      padding: '14px 16px',
      borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
      background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
    },
    input: {
      flex: 1,
      background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
      border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius: '10px',
      padding: '10px 14px',
      color: isDark ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.2s ease',
    },
    sendButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 16px',
      cursor: 'pointer',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
    },
    sources: {
      fontSize: '11px',
      color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
      marginTop: '6px',
      fontStyle: 'italic',
    },
  };
};

export default function ChatWidget() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: "👋 Hi! I'm your Physical AI & Humanoid Robotics textbook assistant. Ask me anything about the chapters!",
      sources: [],
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [styles, setStyles] = useState(getStyles());
  const messagesEndRef = useRef(null);

  // Update styles when theme changes (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateStyles = () => setStyles(getStyles());
    
    // Listen for theme changes
    const themeObserver = new MutationObserver(updateStyles);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    });
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateStyles);
    
    return () => {
      themeObserver.disconnect();
      mediaQuery.removeEventListener('change', updateStyles);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage, sources: [] }]);
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-6).map((m) => ({
            role: m.role === 'bot' ? 'assistant' : 'user',
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: data.answer || "I couldn't process that request.",
          sources: data.sources || [],
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: "I'm having trouble connecting. The API server might not be running. Check Chapter 1 for an introduction to Physical AI!",
          sources: ['Chapter 1: Introduction'],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={styles.widget}>
      <div style={styles.header} onClick={() => setIsExpanded(!isExpanded)}>
        <div style={styles.avatar}>🤖</div>
        <div style={styles.title}>
          <p style={styles.titleText}>AI Textbook Assistant</p>
          <p style={styles.subtitle}>Powered by OpenRouter</p>
        </div>
        <span style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)', transition: '0.2s' }}>
          ▼
        </span>
      </div>

      <div style={isExpanded ? styles.body : { ...styles.body, ...styles.bodyCollapsed }}>
        <div style={styles.messages}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                ...styles.message,
                ...(msg.role === 'bot' ? styles.botMessage : styles.userMessage),
              }}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
              {msg.sources && msg.sources.length > 0 && (
                <div style={styles.sources}>📚 {msg.sources.join(', ')}</div>
              )}
            </div>
          ))}
          {isLoading && (
            <div style={{ ...styles.message, ...styles.botMessage }}>
              <span>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about humanoid robots..."
            style={styles.input}
            disabled={isLoading}
          />
          <button onClick={sendMessage} style={styles.sendButton} disabled={isLoading}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
