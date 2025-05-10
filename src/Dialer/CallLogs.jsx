import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';

const CallLogs = () => {
  // Mock call log data
  const [callLogs, setCallLogs] = useState([
    { id: 1, number: '+19792481642', date: '17 days ago', time: '00:04', type: 'outgoing' },
    { id: 2, number: '+19792481642', date: '17 days ago', time: '00:04', type: 'outgoing' },
    { id: 3, number: '+19792481642', date: '17 days ago', time: '00:04', type: 'outgoing' },
    { id: 4, number: '+19792481642', date: '17 days ago', time: '00:51', type: 'outgoing' },
    { id: 5, number: '+19792481642', date: '1 month ago', time: '00:51', type: 'outgoing' },
    { id: 6, number: '+19943008300', date: '1 month ago', time: '00:21', type: 'incoming' },
  ]);

  const handleClearLogs = () => {
    // In a real app, you would call an API here
    setCallLogs([]);
  };

  const handleCallNumber = (number) => {
    console.log('Calling:', number);
    // API call would go here
  };

  return (
    <div className="p-4 w-full bg-background rounded-2xl">
      {/* Call Logs Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FiPhone className="text-primary" />
          <span className="text-sm font-medium">Call logs</span>
        </div>
        <button
          onClick={handleClearLogs}
          className="text-xs bg-red-50 text-red-500 px-3 py-1 rounded-md hover:bg-red-100 transition-colors"
        >
          Clear Logs
        </button>
      </div>

      {/* Call Logs List */}
      <div className="space-y-1">
        {callLogs.length > 0 ? (
          callLogs.map((log) => (
            <div key={log.id} className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  {/* Outgoing/Incoming indicator */}
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={log.type === 'outgoing' ? "M5 20l14-14M19 6v14" : "M5 10l14 14M19 10v10"} />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">{log.number}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{log.date}</span>
                    <span>•</span>
                    <span>{log.time}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCallNumber(log.number)}
                className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
              >
                <FiPhone size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">No call logs available</div>
        )}
      </div>
    </div>
  );
};

export default CallLogs;