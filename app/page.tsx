// pages/page.tsx
import React from 'react';
import Link from 'next/link';

const MyPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p style={{ fontSize: '44px' }}>
        <span style={{ color: 'red' }}>Igor Maslovskyi</span> <span style={{ color: 'white' }}>119779</span>
      </p>
      <br />
      
    </div>
  );
};

export default MyPage;
