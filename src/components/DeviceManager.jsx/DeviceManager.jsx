import React, { useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

const DeviceManager = () => {
  const [showDeviceModal, setShowDeviceModal] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Device Manager</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <span>Dashboard</span>
            <span>•</span>
            <span>Device Manager</span>
          </div>
        </div>
        <button
          onClick={() => setShowDeviceModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <MdOutlinePhoneIphone className="text-xl" />
          <span>Select Device</span>
        </button>
      </div>

      {/* Info Message */}
      <div className="flex items-center gap-2 bg-blue-50 text-blue-600 p-4 rounded-lg">
        <IoInformationCircleOutline className="text-xl flex-shrink-0" />
        <span>Please select a device</span>
      </div>

      {/* Device Selection Modal */}
      {showDeviceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[5005]">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg">
            <div className="flex items-center gap-4 p-4 border-b">
              <button 
                onClick={() => setShowDeviceModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={24} />
              </button>
              <h2 className="text-lg font-medium">Choose device</h2>
            </div>
            
            <div className="p-4">
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => {
                  // Handle device selection
                  setShowDeviceModal(false);
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <MdOutlinePhoneIphone className="text-xl text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">Device A</div>
                    <div className="text-sm text-gray-500">+19786361859</div>
                  </div>
                </div>
                <IoIosArrowForward className="text-xl text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceManager;