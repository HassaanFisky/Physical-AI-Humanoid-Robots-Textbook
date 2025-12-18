import React from 'react';

export default function Chapter9() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 09
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Sim-to-Real Transfer
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          The matrix for machines. Training agents in millions of parallel universes to master one reality to the real world.
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
          <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Visual Concept: The Metaverse for Training</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>A robot emerging from a wireframe simulation into photorealism</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Why Simulation?</h2>
          <p>
            Training a robot in the real world is slow, dangerous, and expensive. 
            In <span style={{ color: 'var(--primary)' }}>NVIDIA Isaac Sim</span> or <span style={{ color: 'var(--primary)' }}>MuJoCo</span>, we can run 10,000 robots simultaneously at 100x real-time speed.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Domain Randomization</h2>
          <p>
            The simulation is never perfect. To prevent the robot from "overfitting" to the perfect physics of the sim, we randomize everything:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
             <li style={{ padding: '16px', backgroundColor: 'var(--surface)', borderRadius: '8px' }}>
               <strong style={{ color: 'var(--accent)' }}>Visual Randomization</strong>
               <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Changing floor textures, lighting colors, and camera noise.</div>
             </li>
             <li style={{ padding: '16px', backgroundColor: 'var(--surface)', borderRadius: '8px' }}>
               <strong style={{ color: 'var(--accent)' }}>Physical Randomization</strong>
               <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Varying limb mass, friction coefficients, and motor latency.</div>
             </li>
          </ul>
        </section>

        <section>
           <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>DrEureka & LLM Reward Functions</h2>
           <p>
             Writing Reward Functions (coding what "good walking" looks like) is tedious. 
             New research like <span style={{ color: 'var(--primary)' }}>DrEureka</span> uses LLMs to write the reward code themselves, iterating on the physics simulation feedback to create superhuman behaviors automatically.
           </p>
        </section>

      </div>
    </div>
  );
}
