import React from 'react';

export default function Chapter10() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 10
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Safety & Ethics
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          Beyond Asimov. ISO standards, emergency stops, and the societal impact of labor replacement.
        </p>
      </header>

      {/* Hero Image Placeholder */}
      <div style={{ 
        width: '100%', 
        height: '300px', 
        borderRadius: '16px', 
        marginBottom: '48px',
        border: '1px solid var(--border)',
        backgroundColor: 'rgba(76, 139, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Visual Concept: Human-Robot Collaboration</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>A human hand and robot hand near each other, with safety zones visualized</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Hardware Safety</h2>
          <p>
            Safety starts at the metal. <span style={{ color: 'var(--primary)' }}>ISO 13482</span> is the safety standard for personal care robots.
            It requires torque limits (so a robot stops if it hits you) and redundant emergency stop circuits that physically cut power to the actuators.
          </p>
        </section>

        <section>
           <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The Employment Question</h2>
           <p>
             The elephant in the room: If a $20,000 robot can work 24/7 for 10 years, what happens to human labor?
           </p>
           <blockquote style={{ 
            borderLeft: '4px solid var(--primary)', 
            paddingLeft: '24px', 
            margin: '24px 0', 
            fontStyle: 'italic',
            color: 'var(--text-muted)',
            backgroundColor: 'rgba(76, 139, 255, 0.05)',
            padding: '24px',
            borderRadius: '0 12px 12px 0'
          }}>
            "The goal is not to replace humans, but to solve the labor shortage in dangerous, repetitive, and boring jobs (the 3 Ds: Dull, Dirty, Dangerous)."
          </blockquote>
           <p>
             However, the transition will require significant societal adaptation and potentially new economic models.
           </p>
        </section>

      </div>
    </div>
  );
}
