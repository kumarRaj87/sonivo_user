import React from 'react';
import { BsGift } from 'react-icons/bs';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsPhoneFill } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';

const PlanDetails = () => {
  return (
    <div className="p-6 border-t">
      <h3 className="text-lg font-medium text-center mb-6">Plan</h3>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <BsGift className="text-2xl text-primary" />
          <span className="text-xl font-medium">Gold</span>
        </div>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold">$99</span>
          <span className="text-gray-600">/ 1 month(s)</span>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Whats included?</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              <span>Dialer</span>
            </div>
            
            <div className="flex items-center gap-2">
              <IoCloseCircleOutline className="text-red-500 text-xl" />
              <span>Call Broadcast</span>
            </div>
            
            <div className="flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              <span>Messaging</span>
            </div>
            
            <div className="flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              <span>Agent access</span>
            </div>
            
            <div className="flex items-center gap-2">
              <HiOutlineUsers className="text-gray-600 text-xl" />
              <span>Phonebook limit: 10000</span>
            </div>
            
            <div className="flex items-center gap-2">
              <BsPhoneFill className="text-gray-600 text-xl" />
              <span>Device limit: 5</span>
            </div>
            
            <div className="flex items-center gap-2">
              <BiTime className="text-gray-600 text-xl" />
              <span>Plan duration: 30</span>
            </div>
            
            <div className="flex items-center gap-2">
              <IoCloseCircleOutline className="text-red-500 text-xl" />
              <span>Is trial?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;