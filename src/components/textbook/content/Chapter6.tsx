import React from 'react';

export default function Chapter6() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 06
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Edge Computing vs. Cloud Brains
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          The latency dilemma. Why reflexes must live on the body, while reasoning can live in the sky.
        </p>
      </header>

      {/* Hero Image Placeholder - Quota Limit Handling */}
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
          <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Visual Concept: Edge vs. Cloud</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>High-contrast schematic of local NPU vs. Remote Datacenter</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The Latency Budget</h2>
          <p>
            In Physical AI, <span style={{ color: 'var(--accent)' }}>Latency = Crash</span>. 
            If a robot trips, it has less than 100ms to calculate a recovery step.
            A signal taking 50ms to reach a cloud server and 50ms to return is already too late.
          </p>
          
          <div style={{ marginTop: '24px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', borderSide: 'left', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>The Split Brain Architecture</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
              <li>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>The Cerebellum (Edge)</strong>
                  <span style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--primary)', color: '#000', fontWeight: 600 }}>1kHz Loop</span>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Handles balance, walking gait, and sensor fusion. Runs on local NVIDIA Orin or custom silicon.</p>
              </li>
              <li style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>The Cortex (Cloud)</strong>
                  <span style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--accent)', color: '#000', fontWeight: 600 }}>0.5Hz Loop</span>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Handles visual reasoning, planning ("Make me a sandwich"), and speaking. Runs on H100 clusters via 5G/Wi-Fi.</p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>On-Board Compute Specs</h2>
          <p>
            To run VLA (Vision-Language-Action) models locally, humanoids utilize automotive-grade chips.
            The current standard is the <span style={{ color: 'var(--primary)' }}>NVIDIA Jetson AGX Orin</span>, capable of 275 TOPS (Trillion Operations Per Second).
          </p>
          <p>
            However, running a 70B parameter model requires significant quantization (4-bit) to fit in the limited 64GB or 128GB of unified memory. 
            This is why the "Cloud Brain" remains essential for "Smart" interaction.
          </p>
        </section>

      </div>
    </div>
  );
}
