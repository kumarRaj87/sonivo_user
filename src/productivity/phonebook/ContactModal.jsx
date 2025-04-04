import React from 'react';
import { X } from 'lucide-react';

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
      <div className="bg-background rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add new contact</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-end gap-2 mb-4">
            <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
              Upload by pasting
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
              Upload by CSV
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Contact name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Mobile with country code</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">var1</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">var2</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">var3</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">var4</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">var5</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <button className="w-full py-3 bg-primary-400 text-background rounded-md hover:bg-primary-500 mt-4">
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;