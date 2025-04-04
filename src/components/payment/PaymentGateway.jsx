import React, { useState, useEffect } from 'react';
import { CreditCard, Edit } from 'lucide-react';
import Skeleton from './Skeleton';
import EditModal from './EditModal';

const PaymentGateway = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGateway, setSelectedGateway] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEdit = (gateway) => {
    setSelectedGateway(gateway);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    // Handle save logic here
    setIsModalOpen(false);
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="text-blue-600" size={24} />
          <h1 className="text-2xl font-semibold text-gray-900">Payment Gateway</h1>
        </div>

        <div className="space-y-6">
          {/* Offline Pay */}
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Offline Pay</h2>
              <div className="flex items-center">
                <button
                  onClick={() => handleEdit('Offline Pay')}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <Edit size={20} />
                </button>
                <label className="relative inline-flex items-center ml-4 cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-background after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value="Pay offline"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                >Pay offline on this account number xxxxxxxxx and send a screenshot to us on this email xxx@xxx.com</textarea>
              </div>
            </div>
          </div>

          {/* Payment Gateway Sections */}
          {['Stripe Gateway', 'Paypal Gateway', 'Razorpay Gateway'].map((gateway) => (
            <div key={gateway} className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">{gateway}</h2>
                <div className="flex items-center">
                  <button
                    onClick={() => handleEdit(gateway)}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Edit size={20} />
                  </button>
                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-background after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">ID</label>
                  <input
                    type="text"
                    placeholder="Enter ID"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Keys</label>
                  <input
                    type="text"
                    placeholder="Enter Keys"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-background rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Update
        </button>
      </div>

      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gateway={selectedGateway}
        onSave={handleSave}
      />
    </div>
  );
};

export default PaymentGateway;