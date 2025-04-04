import React from 'react';

const LeadsHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <img src="/vite.svg" alt="Leads Icon" className="w-16 h-16" />
        <h1 className="text-3xl font-bold">Leads</h1>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <span>Dashboard</span>
        <span>•</span>
        <span>Leads</span>
      </div>
    </div>
  );
};

export default LeadsHeader;