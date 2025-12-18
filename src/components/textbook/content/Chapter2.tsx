import React from 'react';
import Image from 'next/image';

export default function Chapter2() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 02
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          The Humanoid Form Factor
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          Deconstructing the mechanical skeleton: Degrees of Freedom (DoF), kinematics, and the pursuit of biological mimicry.
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
          src="/images/chapter2_hero.png" 
          alt="Humanoid Anatomy Schematic" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, var(--background), transparent)' }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Skeleton & Structure</h2>
          <p>
            The fundamental challenge of a humanoid robot is structural integrity versus <span style={{ color: 'var(--primary)' }}>power-to-weight ratio</span>. 
            Unlike industrial arms bolted to a concrete floor, a humanoid carries its own power source, compute, and actuators. 
            Every gram of structural mass is a gram that the motors must lift constantly against gravity.
          </p>
          <div style={{ display: 'flex', gap: '24px', margin: '32px 0' }}>
            <div style={{ flex: 1, padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h4 style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Aircraft Grade Aluminum (7075)</h4>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Common in structural linkages due to high stiffness and machinability. Used in Tesla Optimus Gen 1.</p>
            </div>
            <div style={{ flex: 1, padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h4 style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Carbon Fiber Composites</h4>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Used in limbs (shins/thighs) to minimize rotational inertia, allowing for faster walking speeds.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Degrees of Freedom (DoF)</h2>
          <p>
            A "Degree of Freedom" allows a robot to move in a single axis. To replicate human range of motion, strictly, would require over 200 DoF. 
            However, functional humanoids optimize for a <span style={{ color: 'var(--primary)' }}>Kinematic Minimum</span>—typically between 28 and 50 DoF.
          </p>
          
          <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <li style={{ padding: '16px', borderLeft: '2px solid var(--primary)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <span style={{ display: 'block', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Legs (Per Leg)</span>
              <strong style={{ fontSize: '24px', color: 'var(--text-main)' }}>6 DoF</strong>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>Hip(3), Knee(1), Ankle(2)</div>
            </li>
            <li style={{ padding: '16px', borderLeft: '2px solid var(--primary)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <span style={{ display: 'block', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Arms (Per Arm)</span>
              <strong style={{ fontSize: '24px', color: 'var(--text-main)' }}>7 DoF</strong>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>Shoulder(3), Elbow(1), Wrist(3)</div>
            </li>
            <li style={{ padding: '16px', borderLeft: '2px solid var(--accent)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <span style={{ display: 'block', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Hands (Per Hand)</span>
              <strong style={{ fontSize: '24px', color: 'var(--text-main)' }}>6-11 DoF</strong>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>Critical for manipulation</div>
            </li>
            <li style={{ padding: '16px', borderLeft: '2px solid var(--accent)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <span style={{ display: 'block', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Spine/Torso</span>
              <strong style={{ fontSize: '24px', color: 'var(--text-main)' }}>2-3 DoF</strong>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>Pitch, Yaw for balance</div>
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The Uncanny Valley & Anthropomorphism</h2>
          <p>
            Designers face a choice: resemble a human face (Tesla, Ameca) or adopt a functional "visor" aesthetic (Figure 01, Unitree). 
            Scientific consensus is shifting towards <span style={{ color: 'var(--primary)' }}>Functional Minimalism</span>.
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
            "A robot should look like a product, not a person. It avoids the uncanny valley and sets appropriate expectations for capability."
          </blockquote>
        </section>

      </div>
    </div>
  );
}
