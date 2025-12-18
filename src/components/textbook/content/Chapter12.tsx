import React from 'react';

export default function Chapter12() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 12
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          Future Frontiers
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          The path to General Purpose Robots. Space exploration, elderly care, and the convergence of biological and synthetic intelligence.
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
          <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Visual Concept: Mars Colonization</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>A humanoid robot planting a flag on the Martian surface</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The "iPhone Moment" for Robotics</h2>
          <p>
            We are waiting for the <span style={{ color: 'var(--primary)' }}>ChatGPT moment</span> for physical motion. 
            Currently, robots are "Narrow AI"—good at walking OR good at welding.
            The future is a single model that can learn to knit, cook, and repair a car just by watching a YouTube video.
          </p>
        </section>

        <section>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '12px' }}>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>Space Exploration</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                 NASA's Valkyrie and successor projects aim to send humanoids to Mars <em>before</em> humans.
                 They can build habitats in radiation zones without needing life support systems.
               </p>
             </div>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>Elderly Care</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                 With aging populations in Japan and the West, there simply aren't enough human caregivers.
                 A soft-touch, safe humanoid that can lift a patient and bring medication is a demographic necessity.
               </p>
             </div>
          </div>
        </section>

        <section style={{ 
            marginTop: '40px', 
            padding: '40px', 
            background: 'linear-gradient(135deg, rgba(76, 139, 255, 0.1), transparent)', 
            borderRadius: '16px',
            border: '1px solid var(--primary)'
          }}>
           <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--primary)' }}>Conclusion</h2>
           <p style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '0' }}>
             "We are witnessing the Cambrian Explosion of mechanical life. The hardware is ready. The brains are waking up. The next decade will define the relationship between silicon and carbon lifeforms."
           </p>
        </section>

      </div>
    </div>
  );
}
