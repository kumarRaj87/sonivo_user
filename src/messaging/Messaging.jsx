import React, { useEffect, useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { IoMdPhonePortrait } from "react-icons/io";
import Loader from '../loader/Loader';

const Messaging = () => {
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 w-full">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full mb-2">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/message.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Messaging</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Messaging</span>
            </div>
          </div>
          <button
            onClick={() => setShowDeviceModal(true)}
            className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            Select Device
          </button>
        </div>
      </div>
      {/* Info Message */}
      <div className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg">
        <IoInformationCircleOutline className="text-xl flex-shrink-0 text-blue-600" />
        <span className='text-xs'>Please select a device</span>
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
              <h2 className="text-lg font-medium">Select device</h2>
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

export default Messaging;