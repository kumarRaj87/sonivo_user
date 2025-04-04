import React from 'react';
import Header from './Header';
import Table from './Table';

const LayoutOrder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <div className="bg-background shadow rounded-lg overflow-hidden">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default LayoutOrder;