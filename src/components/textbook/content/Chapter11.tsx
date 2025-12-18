import React from 'react';

export default function Chapter11() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 11
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Case Studies
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          State of the Art (SOTA) in 2024. Analyzing the engineering decisions behind the leading platforms.
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
          <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Visual Concept: The Titan Trio</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>Silhouette comparison of Optimus Gen 2, Figure 01, and Unitree H1</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
               <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-main)' }}>Tesla Optimus (Gen 2)</h2>
               <div style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Custom Actuators</span>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Visual-Only Navigation</span>
               </div>
            </div>
            <div style={{ padding: '24px' }}>
              <p>
                <strong>Philosophy:</strong> "The car is a robot on wheels; Optimus is a robot on legs."
                Tesla leverages its massive fleet data and FSD computer. Uniquely, they design their own rotary and linear actuators to optimize for mass manufacturing, targeting a $20k price point.
              </p>
            </div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
               <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-main)' }}>Figure 01</h2>
               <div style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>OpenAI Partnership</span>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Warehouse First</span>
               </div>
            </div>
            <div style={{ padding: '24px' }}>
              <p>
                <strong>Philosophy:</strong> "Speed to market via heavy partnership."
                Figure partners with OpenAI for the brain (speech-to-speech reasoning) and BMW for the deployment environment. Their demo of making coffee showed the first seamless integration of VLA models in real-time.
              </p>
            </div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
               <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-main)' }}>Unitree H1 / G1</h2>
               <div style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>High Agility</span>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Low Cost</span>
               </div>
            </div>
            <div style={{ padding: '24px' }}>
              <p>
                <strong>Philosophy:</strong> "Agility through high-torque density."
                Known for backflips and running speeds (3.3 m/s). They use high-performance reduced-gear motors similar to their quadruped dogs. They provide the hardware platform for many RL researchers.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
