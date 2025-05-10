import React from 'react';
import { FiDelete } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';

const DialerPad = ({ phoneNumber, onNumberInput, onBackspace, onClear }) => {
  const dialerButtons = [
    { value: '1', label: '1' },
    { value: '2', label: '2', subLabel: 'ABC' },
    { value: '3', label: '3', subLabel: 'DEF' },
    { value: '4', label: '4', subLabel: 'GHI' },
    { value: '5', label: '5', subLabel: 'JKL' },
    { value: '6', label: '6', subLabel: 'MNO' },
    { value: '7', label: '7', subLabel: 'PQRS' },
    { value: '8', label: '8', subLabel: 'TUV' },
    { value: '9', label: '9', subLabel: 'WXYZ' },
    { value: '*', label: '*' },
    { value: '0', label: '0', subLabel: '+' },
    { value: '#', label: '#' },
  ];

  const handleCall = () => {
    if (phoneNumber.length > 0) {
      console.log('Calling:', phoneNumber);
      // API call would go here
    }
  };

  return (
    <div className="p-4 w-full bg-background rounded-2xl">
      {/* Phone Number Display */}
      <div className="flex justify-between items-center mb-5 px-3">
        <div className="flex-1 text-center">
          <div className="text-xl font-medium mb-2">
            {phoneNumber || '+1'}
          </div>
        </div>
        {phoneNumber && (
          <button 
            onClick={onBackspace}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <FiDelete size={20} />
          </button>
        )}
      </div>

      {/* Dialer Grid */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        {dialerButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => onNumberInput(button.value)}
            className="flex flex-col items-center justify-center h-14 w-14 mx-auto rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors"
          >
            <span className="text-xl font-medium">{button.label}</span>
            {button.subLabel && (
              <span className="text-xs text-gray-500">{button.subLabel}</span>
            )}
          </button>
        ))}
      </div>

      {/* Call Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleCall}
          className={`h-14 w-14 rounded-full flex items-center justify-center ${
            phoneNumber 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-green-600 opacity-80 cursor-not-allowed'
          }`}
          disabled={!phoneNumber}
        >
          <FiPhone size={22} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default DialerPad;