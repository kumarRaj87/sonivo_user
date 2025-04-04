import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import PlanDetails from './PlanDetails';

const ProfileModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: 'John',
    email: 'user@user.com',
    mobile: '19992893831',
    password: '',
    timezone: 'Asia/Kolkata'
  });

  const modalRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Add event listener when modal opens
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-[5005] overflow-y-auto pt-20 pb-10">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="bg-background w-full max-w-[500px] rounded-2xl flex flex-col max-h-[80vh] relative z-10"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoMdClose size={24} />
          </button>
          <h2 className="text-lg font-medium">Update profile</h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Form */}
          <form onSubmit={handleProfileUpdate} className='rounded-b-2xl p-6 gap-6 w-full flex flex-col'>
            {/* Name Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Name
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Email
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Password
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>

            {/* Mobile Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Mobile
              </div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>

            {/* Timezone Select */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Timezone
              </div>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary appearance-none bg-background"
              >
                <option value="Asia/Kolkata">Asia/Kolkata</option>
                {/* Add more timezone options as needed */}
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center w-full pt-2">
              <button
                type="submit"
                className="px-4 py-2 w-full text-sm bg-primary-400 text-background rounded-md hover:bg-primary"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Plan Details */}
          <PlanDetails />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;