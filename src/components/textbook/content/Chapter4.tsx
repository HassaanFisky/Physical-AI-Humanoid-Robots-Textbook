import React from 'react';
import Image from 'next/image';

export default function Chapter4() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 04
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Sensors & Perception
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          The vestibular system of the machine. Fusing vision, depth, and proprioception to map the world in real-time.
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
          src="/images/chapter4_hero.png" 
          alt="Robot Vision System" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, var(--background), transparent)' }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The Sensor Suite</h2>
          <p>
            Just as humans rely on eyes (vision), inner ears (vestibular), and skin (tactile), a humanoid relies on <span style={{ color: 'var(--primary)' }}>Sensor Fusion</span> to build a coherent world model. 
            If any single sensor fails, the robot must gracefully degenerate, not catastrophically fail.
          </p>
          
           <div style={{ marginTop: '24px', borderLeft: '4px solid var(--primary)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-main)' }}>Sensor Hierarchy</h3>
            <ul style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)' }}>
              <li><strong style={{ color: 'var(--accent)' }}>Proprioception (Internal):</strong> Joint encoders (position/velocity). "Where are my limbs?"</li>
              <li><strong style={{ color: 'var(--accent)' }}>IMU (Vestibular):</strong> Gyroscopes/Accelerometers. "Which way is down?"</li>
              <li><strong style={{ color: 'var(--accent)' }}>Exteroception (External):</strong> Cameras/LiDAR. "What is in front of me?"</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Vision & Depth</h2>
          <p>
            The primary input for modern humanoids is RGB Vision. However, 2D pixels are not enough. The robot needs <span style={{ color: 'var(--primary)' }}>Depth Maps</span>.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '24px' }}>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>LiDAR (Light Detection and Ranging)</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                 Uses spinning lasers to create a millimetre-perfect <span style={{ color: 'var(--accent)' }}>Point Cloud</span>. Extremely accurate but expensive and fragile. Used in Waymo and older prototypes.
               </p>
             </div>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>Pure Vision (Occupancy Networks)</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                 Uses stereo cameras and AI to predict depth (pseudo-LiDAR). Used by Tesla Optimus to reduce cost and complexity. Relies on <span style={{ color: 'var(--accent)' }}>Vexel</span> (Video Voxel) reconstruction.
               </p>
             </div>
          </div>
        </section>

        <section>
           <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Tactile Sensing</h2>
           <p>
             A hand without feeling is just a claw. To manipulate eggs or use tools, a robot needs <span style={{ color: 'var(--primary)' }}>Tactile Feedback</span>.
           </p>
           <p>
             Modern sensors (like GelSight) use internal cameras *inside* the rubber fingertip to measure deformation, allowing the robot to feel texture and slip.
           </p>
        </section>

      </div>
    </div>
  );
}
