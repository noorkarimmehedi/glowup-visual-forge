import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Gallery } from '@/components/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-inter bg-white">
      {/* Sidebar - Full width on mobile, fixed width on desktop */}
      <div className="w-full md:w-[440px] md:fixed md:left-0 md:top-0 md:h-full">
        <Sidebar />
      </div>
      
      {/* Dotted vertical divider - Visible on all screens */}
      <div className="fixed left-[440px] top-0 h-full w-px border-l border-dashed border-gray-300"></div>
      
      {/* Gallery - Full width on mobile, offset on desktop */}
      <div className="w-full md:ml-[440px] md:flex-1">
        <Gallery />
      </div>
    </div>
  );
};

export default Index;
