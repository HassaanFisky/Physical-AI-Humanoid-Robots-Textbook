import React from 'react';

export default function Chapter7() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 07
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Control Theory & RL
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          From PID loops to End-to-End Neural Nets. How we tell the motors what to do without falling over.
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
          <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Visual Concept: The Control Loop</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>Graph of Reference Trajectory vs. Actual Motion</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Classical Control (MPC)</h2>
          <p>
            For decades, robots walked using <span style={{ color: 'var(--accent)' }}>Model Predictive Control</span>. 
            The robot solves a complex physics equation 1000 times a second: 
            <em>"Given my current mass, velocity, and gravity, how much torque should I apply to land my foot at X?"</em>
          </p>
          <p>
            This is robust but rigid. It fails in scenarios it hasn't modeled (like slipping on ice or carrying a sloshing bucket of water).
          </p>
        </section>

        <section>
           <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The RL Revolution</h2>
           <p>
             Enter <span style={{ color: 'var(--primary)' }}>Reinforcement Learning</span>. 
             Instead of manually coding the physics, we train a neural network in a simulation (Sim).
             We reward the agent for walking forward and punish it for falling. After billions of simulated years, it learns robust walking policies that no human could write.
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
            "RL Policies are 'Black Boxes'. We don't know exactly how the robot balances, we just know that the matrix multiplication results in stability."
          </blockquote>
        </section>

        <section>
           <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Sim-to-Real Gap</h2>
           <p>
             The hardest part is transferring this policy to the real world. Simulation is perfect; reality is noisy.
             Techniques like <span style={{ color: 'var(--primary)' }}>Domain Randomization</span> (randomizing friction, mass, and sensor noise in Sim) train the brain to be adaptable to the chaotic real world.
           </p>
        </section>

      </div>
    </div>
  );
}
