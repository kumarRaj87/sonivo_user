import { useState } from 'react';
import { toast } from 'sonner';
import { callForceApi } from './callForce';

export default function AddCallTaskModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    short_desc: '',
    device_id: '',
    agent: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await callForceApi.addCallForceTask(formData);
      toast.success('Call task added successfully');
      onSuccess?.();
      onClose();
      setFormData({ title: '', short_desc: '', device_id: '', agent: '' });
    } catch (error) {
      console.error('Error adding call task:', error);
      toast.error('Failed to add call task');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5005]">
      <div className="bg-background rounded-lg w-full max-w-md">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">Add call task</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              Close
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Title
              </div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Short instructions
              </div>
              <textarea
                name="short_desc"
                value={formData.short_desc}
                onChange={handleChange}
                rows="3"
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                required
              ></textarea>
            </div>

            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Device ID
              </div>
              <input
                type="text"
                name="device_id"
                value={formData.device_id}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                Agent
              </div>
              <input
                type="text"
                name="agent"
                value={formData.agent}
                onChange={handleChange}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-2">
              <p className="text-sm text-blue-900">A device can be managed by only one agent at a time.</p>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#2C3A47] text-background rounded-lg hover:bg-[#1e2832] transition-colors"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}