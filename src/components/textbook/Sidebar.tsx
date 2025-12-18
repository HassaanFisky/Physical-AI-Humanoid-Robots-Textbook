"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Book, Cpu, Activity, Eye, Battery, 
  Wifi, Brain, Layers, Box, ShieldAlert, 
  Search, Rocket, ChevronRight 
} from 'lucide-react';
import React from 'react';

const chapters = [
  { id: '01-intro', title: '1. Introduction to Physical AI', icon: Book },
  { id: '02-anatomy', title: '2. The Humanoid Form Factor', icon: Activity },
  { id: '03-actuators', title: '3. Actuators & Locomotion', icon: Cpu },
  { id: '04-sensors', title: '4. Sensors & Perception', icon: Eye },
  { id: '05-power', title: '5. Batteries & Power Systems', icon: Battery },
  { id: '06-compute', title: '6. Edge vs. Cloud Brains', icon: Wifi },
  { id: '07-control', title: '7. Control Theory & RL', icon: Layers },
  { id: '08-vla', title: '8. VLA Models (Vision-Action)', icon: Brain },
  { id: '09-sim2real', title: '9. Sim-to-Real Transfer', icon: Box },
  { id: '10-safety', title: '10. Safety & Ethics', icon: ShieldAlert },
  { id: '11-cases', title: '11. Case Studies', icon: Search },
  { id: '12-future', title: '12. Future Frontiers', icon: Rocket },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: '320px',
      borderRight: '1px solid var(--border)',
      height: 'calc(100vh - 64px)',
      position: 'sticky',
      top: '64px',
      backgroundColor: 'rgba(13, 15, 18, 0.5)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      overflowY: 'auto'
    }} className="hidden md:flex">
      <div style={{ marginBottom: '24px', paddingLeft: '12px', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Table of Contents
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {chapters.map((chapter) => {
          const isActive = pathname.includes(chapter.id);
          const Icon = chapter.icon;
          
          return (
            <Link 
              key={chapter.id} 
              href={`/textbook/${chapter.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 12px', // Larger touch target
                borderRadius: '8px',
                backgroundColor: isActive ? 'rgba(76, 139, 255, 0.1)' : 'transparent',
                color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                fontSize: '14px',
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.2s',
                border: isActive ? '1px solid rgba(76, 139, 255, 0.1)' : '1px solid transparent'
              }}
            >
              <Icon size={18} style={{ color: isActive ? 'var(--primary)' : 'var(--text-muted)', opacity: isActive ? 1 : 0.7 }} />
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{chapter.title}</span>
              {isActive && <ChevronRight size={14} />}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
