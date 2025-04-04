import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoCheckmarkCircle } from 'react-icons/io5';

const PrepareDevice = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('flow'); // 'flow', 'broadcast', 'dialer'

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Prepare Device</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          <span>Dashboard</span>
          <span>•</span>
          <span>Prepare Device</span>
        </div>
      </div>

      {/* Device Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div 
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-lg font-medium">Device A</h2>
          {isExpanded ? (
            <IoIosArrowUp className="text-xl text-gray-400" />
          ) : (
            <IoIosArrowDown className="text-xl text-gray-400" />
          )}
        </div>

        {isExpanded && (
          <div className="p-4 border-t">
            {/* Tabs */}
            <div className="flex gap-3 mb-6">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  activeTab === 'flow'
                    ? 'bg-green-50 border-green-100 text-green-600'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('flow')}
              >
                {activeTab === 'flow' && (
                  <IoCheckmarkCircle className="text-green-500" />
                )}
                <span>Active incoming (flow)</span>
              </button>

              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  activeTab === 'broadcast'
                    ? 'bg-green-50 border-green-100 text-green-600'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('broadcast')}
              >
                {activeTab === 'broadcast' && (
                  <IoCheckmarkCircle className="text-green-500" />
                )}
                <span>Active outgoing (boradcast)</span>
              </button>

              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  activeTab === 'dialer'
                    ? 'bg-green-50 border-green-100 text-green-600'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('dialer')}
              >
                {activeTab === 'dialer' && (
                  <IoCheckmarkCircle className="text-green-500" />
                )}
                <span>Active Dialer</span>
              </button>
            </div>

            {/* Flow Tab Content */}
            {activeTab === 'flow' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Webhook:</label>
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded">
                    https://sonivo.oneoftheprojects.com/api/ivr/gather/viWiz
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Select flow</label>
                  <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                    <option>Testing flow 2</option>
                  </select>
                </div>
              </div>
            )}

            {/* Broadcast Tab Content */}
            {activeTab === 'broadcast' && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">Select flow</label>
                <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                  <option>Testing flow</option>
                </select>
              </div>
            )}

            {/* Dialer Tab Content */}
            {activeTab === 'dialer' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Webhook:</label>
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded">
                    https://sonivo.oneoftheprojects.com/api/ivr/gather/viWiz
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">TwiML Webhook:</label>
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded">
                    https://sonivo.oneoftheprojects.com/api/call/voice/viWiz
                  </div>
                </div>
              </div>
            )}

            {/* Update Button */}
            <div className="flex justify-end mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Update Device Route
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrepareDevice;