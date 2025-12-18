import React from 'react';

export default function Chapter8() {
  return (
    <div className="chapter-content">
      <header style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Chapter 08
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
          VLA Models
        </h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '700px' }}>
          Vision-Language-Action models. When LLMs gained eyes and hands, the "General Purpose" robot became possible.
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
          <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Visual Concept: VLA Architecture</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>Tokenizing "Pick up apple" into Actuator Commands</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>From Chatbots to Robots</h2>
          <p>
            Traditional robots were coded: <code>if (object_detected) move_to(x,y)</code>. 
            VLA models (like Google's RT-2 or Tesla's End-to-End net) treat robot control as a <span style={{ color: 'var(--primary)' }}>Token Prediction Problem</span>.
          </p>
          <p>
            Just as GPT-4 predicts the next word, a VLA predicts the next set of joint angles (action tokens) based on the image input.
          </p>
        </section>

        <section>
          <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
             <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>The RT-2 Paradigm</h3>
             <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
               RT-2 takes an image of a table and a text command ("Pick up the extinct animal"). 
               It uses its pre-trained knowledge to identify a plastic dinosaur (semantic understanding) and output the gripper commands to lift it (affordance understanding). 
               This bridges the gap between high-level reasoning and low-level motor control.
             </p>
          </div>
        </section>

        <section>
           <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Data Famine</h2>
           <p>
             LLMs had the entire internet of text to learn from. Physical AI has no such dataset. 
             Robots break, experiments are slow, and data is scarce. This is why projects like the <span style={{ color: 'var(--primary)' }}>Open X-Embodiment Dataset</span> are crucial—aggregating robot arm data from labs worldwide to create a "ImageNet for Robotics".
           </p>
        </section>

      </div>
    </div>
  );
}
