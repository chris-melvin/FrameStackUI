import React from 'react';

interface BentoGridProps {
  children?: React.ReactNode;
}

const BentoGrid1: React.FC<BentoGridProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {/* First Row */}
      <div className="grid grid-cols-1 @md:grid-cols-3 gap-4">
        {/* 2/3 width column */}
        <div className="@md:col-span-2 bg-gray-100 rounded-lg p-6 min-h-[200px]">
          Column 1 (2/3 width)
        </div>
        {/* 1/3 width column */}
        <div className="@mdcol-span-1 bg-gray-100 rounded-lg p-6 min-h-[200px]">
          Column 2 (1/3 width)
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 @md:grid-cols-3 gap-4">
        {/* 1/3 width column */}
        <div className="@md:col-span-1 bg-gray-100 rounded-lg p-6 min-h-[200px]">
          Column 1 (1/3 width)
        </div>
        {/* 2/3 width column */}
        <div className="@md:col-span-2 bg-gray-100 rounded-lg p-6 min-h-[200px]">
          Column 2 (2/3 width)
        </div>
      </div>
    </div>
  );
};

export default BentoGrid1;
