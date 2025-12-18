import React from 'react';
import Image from 'next/image';

export default function Chapter3() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 03
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Actuators & Locomotion
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          The hidden muscles of the machine. Understanding torque density, harmonic drives, and the quest for backdrivability.
        </p>
      </header>

      {/* Hero Image */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '400px', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        marginBottom: '48px',
        border: '1px solid var(--border)' 
      }}>
        <Image 
          src="/images/chapter3_hero.png" 
          alt="Robotic Actuator Cutaway" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, var(--background), transparent)' }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The Electric Muscle</h2>
          <p>
            While human muscles are chemically powered linear actuators, most modern humanoids rely on <span style={{ color: 'var(--primary)' }}>Rotary Electric Actuators</span>. 
            The goal is simple but difficult to achieve: maximize torque while minimizing mass.
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
            "Torque Density (Nm/kg) is the single most important metric in humanoid hardware. It dictates whether the robot can jump, or barely stand."
          </blockquote>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Transmission Systems</h2>
          <p>
            An electric motor spins too fast and is too weak on its own. It needs a gearbox.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '24px' }}>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>Harmonic Drives (Strain Wave)</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                 Zero backlash and high reduction ratios (100:1). Used in precise joints like wrists and elbows. However, they are fragile against impact shock.
               </p>
             </div>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>Planetary Gears</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                 Robust and impact-resistant. Ideal for legs and hips where <span style={{ color: 'var(--accent)' }}>Ground Reaction Forces</span> are highest. Lower reduction ratios (10:1).
               </p>
             </div>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>Quasi-Direct Drive (QDD)</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  High-torque motors with low gear reduction (6:1). Allows for <span style={{ color: 'var(--accent)' }}>Backdrivability</span> (Proprioception) and compliant motion. Used in the MIT Mini Cheetah and Unitree robots.
                </p>
             </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Hydraulic vs. Electric</h2>
          <p>
            For a decade, <strong>Boston Dynamics' Atlas</strong> proved that hydraulics offered superior power density. They could perform backflips that electric motors couldn't dream of.
          </p>
          <p>
            However, in 2024, they retired the hydraulic Atlas for a fully <span style={{ color: 'var(--primary)' }}>Electric Atlas</span>. Why?
            <ul style={{ paddingLeft: '20px', marginTop: '16px', color: 'var(--text-muted)' }}>
              <li><strong>Fluid Leaks:</strong> Messy and require maintenance.</li>
              <li><strong>Complexity:</strong> Hoses, pumps, and valves vs. simple wires.</li>
              <li><strong>Efficiency:</strong> Electric motors regeneratively brake; hydraulics waste heat.</li>
            </ul>
          </p>
        </section>

      </div>
    </div>
  );
}
