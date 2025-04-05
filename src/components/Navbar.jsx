import React, { useState } from 'react';
import { FiLogOut, FiMenu } from "react-icons/fi";
import ProfileModal from './ProfileModal';

const Navbar = ({ handleLogout, toggleSidebar }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>
      <header className="h-16 sticky top-0 px-4 justify-between flex w-full bg-primary-200 border-b-[1px] border-gray-200 z-[5000]">
        <div className="flex items-center">
          {/* Mobile menu button - shown only below md breakpoint */}
          <button
            className="lg:hidden p-2 mr-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            <FiMenu className="h-6 w-6" />
          </button>

          {/* Welcome message - hidden on mobile */}
          <p className='flex text-xl font-semibold justify-start items-center text-primary'>👋🏻 Welcome back!</p>
        </div>
        
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setShowProfileModal(true)}
            >
              <svg 
                className="h-6 w-6"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg> 
            </button>

            <button
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <FiLogOut className='text-[#808080]' size={24} />
            </button>
          </div>
        </div>
      </header>

      <ProfileModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
      />
    </>
  );
};

export default Navbar;