// import React, { useState } from 'react';
// import { IoMdClose } from "react-icons/io";
// import PlanDetails from './PlanDetails';

// const ProfileModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: 'John',
//     email: 'user@user.com',
//     mobile: '19992893831',
//     newPassword: '',
//     timezone: 'Asia/Kolkata'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-[5005] overflow-y-auto pt-20 pb-10">
//       <div className="bg-background w-full max-w-[500px] rounded-2xl">
//         {/* Header */}
//         <div className="flex items-center gap-4 p-4 border-b">
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <IoMdClose size={24} />
//           </button>
//           <h2 className="text-lg font-medium">Update profile</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           {/* Name Input */}
//           <div className="space-y-1">
//             <div className="flex items-center">
//               <span className="text-sm text-gray-600">Name</span>
//               <div className="flex-1 ml-2 border-b border-dashed border-gray-300"></div>
//             </div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//             />
//           </div>

//           {/* Email Input */}
//           <div className="space-y-1">
//             <div className="flex items-center">
//               <span className="text-sm text-gray-600">Email</span>
//               <div className="flex-1 ml-2 border-b border-dashed border-gray-300"></div>
//             </div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//             />
//           </div>

//           {/* Mobile Input */}
//           <div className="space-y-1">
//             <div className="flex items-center">
//               <span className="text-sm text-gray-600">Mobile</span>
//               <div className="flex-1 ml-2 border-b border-dashed border-gray-300"></div>
//             </div>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//             />
//           </div>

//           {/* New Password Input */}
//           <div className="space-y-1">
//             <div className="flex items-center">
//               <span className="text-sm text-gray-600">New password</span>
//               <div className="flex-1 ml-2 border-b border-dashed border-gray-300"></div>
//             </div>
//             <input
//               type="password"
//               name="newPassword"
//               value={formData.newPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
//             />
//           </div>

//           {/* Timezone Select */}
//           <div className="space-y-1">
//             <div className="flex items-center">
//               <span className="text-sm text-gray-600">Your timezone</span>
//               <div className="flex-1 ml-2 border-b border-dashed border-gray-300"></div>
//             </div>
//             <select
//               name="timezone"
//               value={formData.timezone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none bg-background"
//             >
//               <option value="Asia/Kolkata">Asia/Kolkata</option>
//               {/* Add more timezone options as needed */}
//             </select>
//           </div>

//           {/* Save Button */}
//           <button
//             type="submit"
//             className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Save
//           </button>
//         </form>

//         {/* Plan Details */}
//         <PlanDetails />
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;



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