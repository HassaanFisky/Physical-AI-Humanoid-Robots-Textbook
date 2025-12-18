"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StudioLayout from '@/components/layout/StudioLayout';
import { Loader2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid credentials. Try password: "demo"');
        setLoading(false);
      } else {
        router.push('/textbook');
      }
    } catch (err) {
      setError('An error occurred.');
      setLoading(false);
    }
  };

  return (
    <StudioLayout showNav={false}>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '400px',
          padding: '40px',
          backgroundColor: 'var(--surface)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Sign in</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>to continue to Physical AI</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '14px'
                }}
                placeholder="researcher@university.edu"
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '14px'
                }}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'rgba(255, 137, 125, 0.1)', 
                color: 'var(--error)', 
                borderRadius: '8px',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              style={{
                marginTop: '8px',
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary)',
                color: '#000',
                fontWeight: 600,
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : 'Continue'}
            </button>
          </form>

          <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
            No account? <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: 500 }}>Create one</Link>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
}
