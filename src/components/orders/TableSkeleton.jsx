import React from 'react';

const TableSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-gray-200 rounded mb-4"></div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-16 bg-gray-100 rounded mb-2"></div>
      ))}
    </div>
  );
};

export default TableSkeleton;