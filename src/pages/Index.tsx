
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Gallery } from '@/components/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen flex font-inter bg-white">
      {/* Left Sidebar - Fixed */}
      <div className="w-80 fixed left-0 top-0 h-full">
        <Sidebar />
      </div>
      
      {/* Dotted vertical divider */}
      <div className="fixed left-80 top-0 h-full w-px border-l border-dashed border-gray-300"></div>
      
      {/* Right Gallery - Scrollable */}
      <div className="ml-80 flex-1">
        <Gallery />
      </div>
    </div>
  );
};

export default Index;
