'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react';
import { clsx } from 'clsx';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am the Physical AI assistant. Ask me anything about humanoid robotics, actuators, or control theory.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Play thinking sound effect
    try {
      const { playThinkingSound } = await import('@/lib/audio');
      playThinkingSound();
    } catch (err) {
      console.warn('Audio not available');
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble accessing my knowledge base. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 h-16 w-16 bg-gradient-to-br from-[#4C8BFF] to-[#2563eb] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 group border-2 border-[#4C8BFF]/30"
        style={{
          boxShadow: '0 0 30px rgba(76, 139, 255, 0.3), 0 0 60px rgba(76, 139, 255, 0.1)'
        }}
      >
        {/* Custom "Neural" Bot Icon */}
        <div className="relative">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2" fill="none"/>
            <circle cx="16" cy="16" r="2" fill="white"/>
            <circle cx="8" cy="12" r="1.5" fill="white" opacity="0.7"/>
            <circle cx="24" cy="12" r="1.5" fill="white" opacity="0.7"/>
            <circle cx="8" cy="20" r="1.5" fill="white" opacity="0.7"/>
            <circle cx="24" cy="20" r="1.5" fill="white" opacity="0.7"/>
            <line x1="11" y1="16" x2="8.5" y2="12.5" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="21" y1="16" x2="23.5" y2="12.5" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="11" y1="16" x2="8.5" y2="19.5" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="21" y1="16" x2="23.5" y2="19.5" stroke="white" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 w-[400px] h-[600px] bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 backdrop-blur-md">
      <div className="p-4 border-b border-[var(--border)] bg-[rgba(255,255,255,0.03)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#4C8BFF] to-[#2563eb] flex items-center justify-center shadow-lg border border-[#4C8BFF]/30">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
              <circle cx="16" cy="16" r="2" fill="white"/>
              <circle cx="8" cy="12" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="24" cy="12" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="8" cy="20" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="24" cy="20" r="1.5" fill="white" opacity="0.8"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-main)] text-sm">Physical AI Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4C8BFF] animate-pulse"></span>
              <span className="text-xs text-[var(--text-muted)]">Textbook Mode</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors text-[var(--text-muted)] hover:text-[var(--text-main)]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent">
        {messages.map((msg, idx) => (
          <div key={idx} className={clsx("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
             <div className={clsx(
               "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center",
               msg.role === 'assistant' ? "bg-[rgba(255,255,255,0.05)]" : "bg-[var(--primary)]"
             )}>
               {msg.role === 'assistant' ? <Bot className="w-4 h-4 text-[var(--primary)]" /> : <User className="w-4 h-4 text-black" />}
             </div>
             <div className={clsx(
               "p-3 rounded-2xl max-w-[80%] text-sm leading-relaxed",
               msg.role === 'assistant' 
                 ? "bg-[rgba(255,255,255,0.03)] border border-[var(--border)] text-[var(--text-main)] rounded-tl-none" 
                 : "bg-[var(--primary)] text-black font-medium rounded-tr-none"
             )}>
               {msg.content}
             </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex-shrink-0 flex items-center justify-center">
               <Bot className="w-4 h-4 text-[var(--primary)]" />
             </div>
             <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--border)] p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
               <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
               <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
               <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-bounce"></span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--border)] bg-[rgba(255,255,255,0.02)]">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about torque control..."
            className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--border)] rounded-full pl-5 pr-12 py-3 text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 bg-[var(--primary)] rounded-full text-black hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
