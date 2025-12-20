/**
 * ChatWidget.jsx - React Chat Widget for Physical AI Textbook
 * Premium Edition: Glassmorphism, Animations, and High-Performance UI.
 */
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ChatWidget.module.css';
import { playThinkingCue } from '../lib/sound';
import { auth } from '../lib/auth/AuthProvider';
import AuthModal from './AuthModal';

// Configuration - use relative path for Vercel serverless functions
const API_URL = '/api/chat';

export default function ChatWidget() {
  const [isExpanded, setIsExpanded] = useState(false); // Default closed for cleaner splash
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: "👋 Hi! I'm your Physical AI & Humanoid Robotics textbook assistant. Ask me anything about the chapters!",
      sources: [],
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Auth State
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Initialize sound preference
    const storedSound = localStorage.getItem('sound_enabled');
    if (storedSound !== null) {
      setSoundEnabled(storedSound !== '0');
    }
    
    // Check Auth Session
    const sessionUser = auth.getSession();
    setUser(sessionUser);
  }, []);

  const toggleSound = (e) => {
    e.stopPropagation();
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    localStorage.setItem('sound_enabled', newState ? '1' : '0');
  };
  
  const handleLogout = (e) => {
    e.stopPropagation();
    auth.signOut();
    setUser(null);
  };
  
  const handleLoginClick = (e) => {
    e.stopPropagation();
    setShowAuthModal(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded]);

  // Focus input on open
  useEffect(() => {
    if (isExpanded && inputRef.current) {
        setTimeout(() => inputRef.current.focus(), 300); // Wait for animation
    }
  }, [isExpanded]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    // AUTH GATE CHECK
    if (!auth.isQuestionAllowed()) {
        setShowAuthModal(true);
        return;
    }

    // Play cue immediately on user action
    if (soundEnabled) playThinkingCue();

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage, sources: [] }]);
    setIsLoading(true);
    
    // Mark usage if free
    if (!user) {
        auth.markFreeQuestionUsed();
    }

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
    <div className={`${styles.widget} ${!isExpanded ? styles.widgetCollapsed : ''}`}
         onClick={!isExpanded ? () => setIsExpanded(true) : undefined}>
      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
            onClose={() => setShowAuthModal(false)} 
            onLoginSuccess={() => {
                setShowAuthModal(false);
                setUser(auth.getSession());
            }}
        />
      )}

      {/* Chat Bubble Icon (shown only when collapsed) */}
      {!isExpanded && (
        <img 
          src="/img/chat-bubble.png" 
          alt="Chat" 
          className={styles.chatBubbleIcon}
        />
      )}

      {/* Header */}
      <div className={styles.header} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.avatar}>
          <img src="/img/logo.png" alt="AI" className={styles.avatarImg} onError={(e) => e.target.style.display='none'} />
        </div>
        <div className={styles.title}>
          <p className={styles.titleText}>AI Assistant</p>
          <div className={styles.statusRow}>
              <p className={styles.subtitle}>{isLoading ? 'Thinking...' : (user ? `Hi, ${user.email.split('@')[0]}` : 'Guest')}</p>
              {isExpanded && (
                  <button 
                    className={styles.authLink}
                    onClick={user ? handleLogout : handleLoginClick}
                  >
                    {user ? '(Sign Out)' : '(Sign In)'}
                  </button>
              )}
          </div>
        </div>
        
        {/* Sound Toggle */}
        <button 
          onClick={toggleSound}
          className={styles.iconButton}
          title={soundEnabled ? "Mute Sound" : "Enable Sound"}
          style={{ marginRight: '8px', opacity: 0.8 }}
        >
          {soundEnabled ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          )}
        </button>

        <div className={styles.chevron} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className={`${styles.body} ${!isExpanded ? styles.bodyCollapsed : ''}`}>
        <div className={styles.messages}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${styles.message} ${msg.role === 'bot' ? styles.botMessage : styles.userMessage}`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
              {msg.sources && msg.sources.length > 0 && (
                <div className={styles.sources}>📚 {msg.sources.join(', ')}</div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className={styles.thinking}>
              <span>Thinking</span>
              <div className={styles.typingDot}></div>
              <div className={styles.typingDot}></div>
              <div className={styles.typingDot}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={styles.inputContainer}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about humanoid robots..."
            className={styles.input}
            disabled={isLoading}
          />
          <button 
            onClick={sendMessage} 
            className={styles.sendButton} 
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
