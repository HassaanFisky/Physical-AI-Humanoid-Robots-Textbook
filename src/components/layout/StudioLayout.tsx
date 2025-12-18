'use client';

import React from 'react';
import Snowfall from '@/components/effects/Snowfall';
import Link from 'next/link';
import { BookOpen, MessageSquare, LogIn } from 'lucide-react';
import ChatInterface from '@/components/chat/ChatInterface';
import { usePathname } from 'next/navigation';

interface StudioLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const StudioLayout: React.FC<StudioLayoutProps> = ({ children, showNav = true }) => {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith('/login') || pathname?.startsWith('/signup');
  const isLandingPage = pathname === '/';
  // Simple check: show chat if not auth page and not landing page (so only inside app)
  // Or if we want it on landing page but locked? User said "accessible only after user authorization"
  // So probably hide on landing page.
  const showChat = !isAuthPage && !isLandingPage;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Snowfall />
      
      {/* Header */}
      {showNav && (
        <header style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'rgba(13, 15, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="/" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              Physical AI
            </Link>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/textbook" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)', transition: 'color 0.2s' }} className="nav-link">
              <BookOpen size={16} /> <span>Textbook</span>
            </Link>
            <Link href="/chat" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)', transition: 'color 0.2s' }} className="nav-link">
              <MessageSquare size={16} /> <span>Chat</span>
            </Link>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border)' }}></div>
            <Link href="/login" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--primary)' }}>
              <LogIn size={16} /> <span>Sign In</span>
            </Link>
          </nav>
        </header>
      )}

      {/* Main Content */}
      <main style={{ flex: 1, position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>

      {/* Chat Widget */}
      {showChat && <ChatInterface />}

      {/* Basic Footer */}
      <footer style={{
        padding: '24px',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '12px',
        zIndex: 10
      }}>
        <p>&copy; {new Date().getFullYear()} Physical AI & Humanoid Robotics. Hackathon Project.</p>
      </footer>

      <style jsx global>{`
        .nav-link:hover {
          color: var(--text-main) !important;
        }
      `}</style>
    </div>
  );
};

export default StudioLayout;
