import React from 'react';
import Image from 'next/image';

/* Placeholder for the generated image path - to be updated after generation */
const HERO_IMAGE = "/chapter1_intro.png"; 

export default function Chapter1() {
  return (
    <div className="chapter-content">
      {/* Header */}
      <header style={{ marginBottom: '48px' }}>
        <div style={{ 
          fontSize: '14px', 
          fontWeight: 600, 
          color: 'var(--primary)', 
          letterSpacing: '0.05em', 
          textTransform: 'uppercase',
          marginBottom: '16px' 
        }}>
          Chapter 01
        </div>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 700, 
          lineHeight: 1.1, 
          marginBottom: '24px',
          letterSpacing: '-0.02em',
          color: 'var(--text-main)'
        }}>
          Introduction to Physical AI
        </h1>
        <p style={{ 
          fontSize: '20px', 
          lineHeight: 1.6, 
          color: 'var(--text-muted)', 
          maxWidth: '700px' 
        }}>
          Exploring the convergence of large foundation models (Bits) with actuated humanoid hardware (Atoms).
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
          src="/images/chapter1_hero.png" 
          alt="Robotic Hand Concept" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: 'linear-gradient(to top, var(--background), transparent)'
        }}></div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The <span style={{ color: 'var(--primary)' }}>Convergence</span> of Atoms and Bits</h2>
          <p>
            For practically the entire history of Artificial Intelligence, the field has been constrained to the <span style={{ color: 'var(--accent)' }}>digital realm</span>. 
            We have mastered the processing of information—calculating digits, classifying images, and generating human-like text. 
            However, this intelligence remained trapped behind a screen. 
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
            "Physical AI is not merely robotics. It is the embodiment of General Purpose Learning Algorithms into General Purpose Hardware."
          </blockquote>
          <p>
            <strong>Physical AI</strong> represents the breakout of this intelligence into the real world. 
            It is the transition from <span style={{ color: 'var(--primary)' }}>automation</span> (repetition) to <span style={{ color: 'var(--primary)' }}>autonomy</span> (reasoning).
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Defining Physical AI vs. Generative AI</h2>
          
          <div style={{ 
            marginTop: '24px', 
            marginBottom: '24px', 
            border: '1px solid var(--border)', 
            borderRadius: '12px', 
            overflow: 'hidden' 
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)', textAlign: 'left' }}>
                  <th style={{ padding: '20px', borderBottom: '1px solid var(--border)', color: 'var(--primary)' }}>Feature</th>
                  <th style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>Generative AI (LLMs)</th>
                  <th style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>Physical AI (Humanoids)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '20px', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 500 }}>Input</td>
                  <td style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>Text, Images, Audio</td>
                  <td style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>Multimodal + <span style={{ color: 'var(--accent)' }}>Proprioception</span>, Tactile, Force</td>
                </tr>
                <tr>
                  <td style={{ padding: '20px', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 500 }}>Output</td>
                  <td style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>Tokens (Text/Pixels)</td>
                  <td style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>Actuation (<span style={{ color: 'var(--accent)' }}>Torque/Velocity</span>)</td>
                </tr>
                <tr>
                  <td style={{ padding: '20px', color: 'var(--text-muted)', fontWeight: 500 }}>Error Cost</td>
                  <td style={{ padding: '20px' }}>Hallucination (Low Risk)</td>
                  <td style={{ padding: '20px' }}>Collision/Damage (<span style={{ color: 'var(--error)' }}>High Risk</span>)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            While Generative AI operates in a forgiving probabilistic space, Physical AI must operate in a deterministic and unforgiving <span style={{ color: 'var(--primary)' }}>physical reality</span>. 
            Gravity, friction, and inertia do not care about probabilities.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>The Humanoid Form Factor</h2>
          <p>
            Why build robots that look like us? The argument is one of <span style={{ color: 'var(--primary)' }}>infrastructure compatibility</span>. 
            Our entire world—from door handles and stairs to tools and vehicle seats—was designed for the human form constraint. 
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--primary)', fontSize: '24px', lineHeight: 1 }}>•</span>
              <span><strong style={{ color: 'var(--subtitle)' }}>Bipedalism:</strong> Allows navigation of stairs, uneven terrain, and tight corridors designed for legs, not wheels. The most versatile locomotion for human environments.</span>
            </li>
            <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--primary)', fontSize: '24px', lineHeight: 1 }}>•</span>
              <span><strong style={{ color: 'var(--subtitle)' }}>Manipulation:</strong> Five-fingered hands allow compatibility with millions of existing tools without modification. From screwdrivers to shopping carts.</span>
            </li>
            <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--primary)', fontSize: '24px', lineHeight: 1 }}>•</span>
              <span><strong style={{ color: 'var(--subtitle)' }}>Social Acceptance:</strong> A humanoid form is more intuitively understood and accepted by human coworkers. We are hardwired to predict the intent of other bipedal agents.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-main)' }}>Current Landscape</h2>
          <p>
            The race for Physical AI is heating up, driven by major players attempting to solve the <span style={{ color: 'var(--primary)' }}>Data x Hardware</span> convergence:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', transition: 'transform 0.2s', cursor: 'default' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>Tesla Optimus</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Leveraging the massive fleet data from FSD (Full Self-Driving) to train vision-to-actuation models end-to-end. The "ChatGPT moment" for robotics.</p>
             </div>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', transition: 'transform 0.2s', cursor: 'default' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>Figure AI</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Partnering with OpenAI to integrate reasoning capabilities/VLA directly into the robot's control loop. High-speed dexterity focus.</p>
             </div>
             <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', transition: 'transform 0.2s', cursor: 'default' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>Boston Dynamics</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>The transition from hydraulic (Atlas Legacy) to electric (Atlas New), focusing on superhuman agility and reliability.</p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
