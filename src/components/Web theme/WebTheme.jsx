import React, { useState, useEffect } from 'react';
import ColorPalette from './ColorPalette';
import Skeleton from './Skeleton';

const WebTheme = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gray-50 border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Web theme</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <span>Dashboard</span>
              <span>•</span>
              <span>Web theme</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-background rounded-lg hover:bg-blue-700 transition-colors">
            Save
          </button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Text</h2>
          </div>
          {loading ? <Skeleton /> : <ColorPalette />}
        </div>
      </main>
    </div>
  );
};

export default WebTheme;