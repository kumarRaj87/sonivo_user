import React, { useState } from 'react';

export default function AddAgentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    mobile: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5500]">
      <div className="bg-white rounded-2xl w-full max-w-md">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">Add agent</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
                Email
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
                Password
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
                required
              />
            </div>

            {/* Name Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
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

            {/* Mobile Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
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

            {/* Comment Textarea */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
                Short comment
              </div>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows="3"
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#2C3A47] text-white rounded-lg hover:bg-[#1e2832] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}