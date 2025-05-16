import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

const BASE_URL = 'https://vokal-api.oyelabs.com';

const ContactModal = ({ isOpen, onClose, onSuccess, phonebookId }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    var1: '',
    var2: '',
    var3: '',
    var4: '',
    var5: '',
    phonebook_name: 'Customers'
  });

  const [csvFile, setCsvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      toast.warning('Name and mobile number are required');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${BASE_URL}/phonebook/add_single_contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access-token': localStorage.getItem('authToken')
        },
        body: JSON.stringify({
          ...formData,
          id: phonebookId,
          plan_id: localStorage.getItem('planId') // Add plan_id from localStorage
        })
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Contact added successfully');
        onSuccess?.();
        onClose();
        setFormData({
          name: '',
          mobile: '',
          var1: '',
          var2: '',
          var3: '',
          var4: '',
          var5: '',
          phonebook_name: 'Customers'
        });
      } else {
        toast.error(data.message || 'Failed to add contact');
      }
    } catch (error) {
      console.error('Error adding contact:', error);
      toast.error(error.message || 'Failed to add contact');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCsvUpload = async () => {
    if (!csvFile) {
      toast.warning('Please select a CSV file');
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('file', csvFile);
      formData.append('id', phonebookId);
      formData.append('phonebook_name', formData.phonebook_name);
      formData.append('plan_id', localStorage.getItem('planId')); // Add plan_id from localStorage

      const response = await fetch(`${BASE_URL}/phonebook/import_contacts`, {
        method: 'POST',
        headers: {
          'access-token': localStorage.getItem('authToken')
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Contacts imported successfully');
        onSuccess?.();
        onClose();
        setCsvFile(null);
      } else {
        toast.error(data.message || 'Failed to import contacts');
      }
    } catch (error) {
      console.error('Error importing contacts:', error);
      toast.error(error.message || 'Failed to import contacts');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
      <div className="bg-background rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add new contact</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-end gap-2 mb-4">
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setCsvFile(e.target.files[0])}
              className="hidden"
              id="csv-upload"
            />
            <button 
              className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
              onClick={() => document.getElementById('csv-upload').click()}
              disabled={isSubmitting}
            >
              Upload by CSV
            </button>
            {csvFile && (
              <button
                onClick={handleCsvUpload}
                className="px-4 py-2 bg-primary-400 text-background rounded-md hover:bg-primary-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Uploading...' : 'Import CSV'}
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Contact name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Mobile with country code</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm mb-1">var1</label>
                <input
                  type="text"
                  name="var1"
                  value={formData.var1}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">var2</label>
                <input
                  type="text"
                  name="var2"
                  value={formData.var2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">var3</label>
                <input
                  type="text"
                  name="var3"
                  value={formData.var3}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm mb-1">var4</label>
                <input
                  type="text"
                  name="var4"
                  value={formData.var4}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">var5</label>
                <input
                  type="text"
                  name="var5"
                  value={formData.var5}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-primary-400 text-background rounded-md hover:bg-primary-500 mt-4 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Contact'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;