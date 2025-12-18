import StudioLayout from "@/components/layout/StudioLayout";
import Link from "next/link";
import { ArrowRight, Cpu, Book, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <StudioLayout>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 24px'
      }}>
        {/* Hero Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            borderRadius: '999px',
            backgroundColor: 'rgba(76, 139, 255, 0.1)',
            border: '1px solid rgba(76, 139, 255, 0.2)',
            color: 'var(--primary)',
            fontSize: '12px',
            fontWeight: 500
          }}>
            <Cpu size={14} />
            <span>Hackathon Edition 2025</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(to bottom right, #fff, #9CA3AF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            Physical AI &<br />Humanoid Robotics
          </h1>

          <p style={{
            fontSize: 'clamp(18px, 4vw, 20px)',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            maxWidth: '600px'
          }}>
            The definitive guide to the next era of embodied intelligence.
            Explore hardware specs, cloud architecture, and the future of humanoids.
          </p>

          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <Link href="/login" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'var(--primary)',
              color: '#000',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              transition: 'background-color 0.2s',
              border: 'none',
              cursor: 'pointer'
            }}>
              Start Learning <ArrowRight size={18} />
            </Link>
            
            <Link href="/textbook" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              color: 'var(--text-main)',
              fontWeight: 500,
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              transition: 'background-color 0.2s',
              border: '1px solid var(--border)',
              cursor: 'pointer'
            }}>
              <Book size={18} /> Browse Chapters
            </Link>
          </div>

        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          width: '100%',
          marginTop: '120px',
          marginBottom: '60px'
        }}>
           <FeatureCard 
             icon={<Book size={24} />}
             title="Comprehensive Textbook"
             description="Deep dive into hardware, software, and cloud architecture."
           />
           <FeatureCard 
             icon={<Cpu size={24} />}
             title="Physical Intelligence"
             description="Understanding the merge of AI models and mechanical bodies."
           />
           <FeatureCard 
             icon={<ShieldCheck size={24} />}
             title="Secure Access"
             description="Exclusive content for authorized researchers and students."
           />
        </div>

      </div>
    </StudioLayout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div style={{
      padding: '32px',
      backgroundColor: 'var(--surface)',
      borderRadius: '16px',
      border: '1px solid var(--border)',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'transform 0.2s, background-color 0.2s'
    }}>
      <div style={{ color: 'var(--primary)' }}>{icon}</div>
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{description}</p>
    </div>
  );
}
