import React from 'react';
import StudioLayout from '@/components/layout/StudioLayout';
import Sidebar from '@/components/textbook/Sidebar';

export default function TextbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StudioLayout>
      <div style={{ display: 'flex', flex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <Sidebar />
        <div style={{ 
          flex: 1, 
          padding: '40px 60px', 
          minWidth: 0, // Prevent overflow issues
          maxWidth: '900px', // Limit reading width
          margin: '0 auto'
        }}>
          {children}
        </div>
      </div>
    </StudioLayout>
  );
}
