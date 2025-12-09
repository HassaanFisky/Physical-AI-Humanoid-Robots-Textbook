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

// Configuration
const API_URL = process.env.REACT_APP_CHAT_API_URL || 'http://localhost:3002/api/chat';

// Styles (can be moved to CSS module)
const styles = {
  widget: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '380px',
    maxWidth: 'calc(100vw - 48px)',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(14px) saturate(180%)',
    overflow: 'hidden',
    fontFamily: "'Inter', -apple-system, sans-serif",
    zIndex: 1000,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
  },
  avatar: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
  },
  title: {
    flex: 1,
  },
  titleText: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.95)',
  },
  subtitle: {
    margin: 0,
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.5)',
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
  },
  message: {
    maxWidth: '85%',
    padding: '10px 14px',
    borderRadius: '12px',
    fontSize: '14px',
    lineHeight: 1.5,
  },
  botMessage: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    alignSelf: 'flex-start',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  userMessage: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    alignSelf: 'flex-end',
    color: 'white',
  },
  inputContainer: {
    display: 'flex',
    gap: '8px',
    padding: '12px 16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  input: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '8px 12px',
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: '14px',
    outline: 'none',
  },
  sendButton: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 14px',
    cursor: 'pointer',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sources: {
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: '8px',
    fontStyle: 'italic',
  },
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
  const messagesEndRef = useRef(null);

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
