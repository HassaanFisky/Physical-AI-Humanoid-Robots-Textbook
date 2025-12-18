import React from 'react';
import Image from 'next/image';

export default function Chapter5() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 05
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Batteries & Power Systems
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          The lifeblood of autonomy. Breaking the 4-hour operation barrier and managing the thermal load of high-performance compute.
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
          src="/images/chapter5_hero.png" 
          alt="High Density Battery Pack" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, var(--background), transparent)' }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The Energy Equation</h2>
          <p>
            A humanoid robot is an energy paradox. It must carry enough energy to move heavy limbs for hours, yet adding more battery weight increases the energy cost of moving.
          </p>
          <p>
            The critical metric is <span style={{ color: 'var(--primary)' }}>Specific Energy (Wh/kg)</span>.
            Current Li-Ion technology hovers around 250 Wh/kg. To achieve a true "all-day" worker, we need closer to 400 Wh/kg or highly efficient actuation.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Architecture & Safety</h2>
          <p>
            Unlike an EV, a robot's battery is often integrated directly into the structural torso (Structural Pack). This saves weight but increases thermal complexity.
          </p>
          
          <div style={{ marginTop: '24px', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-main)' }}>Thermal Management</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
                Robots don't have airflow from driving like cars do. They need active liquid cooling loops that route through the torso, cooling both the <span style={{ color: 'var(--accent)' }}>Inference Computer</span> and the Battery cells.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Safety Critical
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
                A punctured battery in a falling robot is a fire hazard in a factory or home. <span style={{ color: 'var(--primary)' }}>Solid State Batteries</span> are the holy grail here, offering non-flammable electrolytes and higher density.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Voltage Architectures</h2>
          <p>
            Robots are moving from 24V/48V systems to <span style={{ color: 'var(--primary)' }}>High Voltage (100V+)</span> architectures. 
            Higher voltage reduces current, allowing for thinner, lighter cabling throughout the limbs—saving precious grams where it counts most.
          </p>
        </section>

      </div>
    </div>
  );
}
