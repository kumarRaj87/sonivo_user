import { useState } from 'react';
import { MonitorIcon, PencilIcon, Trash2Icon, XIcon } from 'lucide-react';

function Translation() {
  const [languages, setLanguages] = useState(['English', 'French']);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLanguage, setNewLanguage] = useState('');

  const handleAddLanguage = (e) => {
    e.preventDefault();
    if (newLanguage.trim()) {
      setLanguages([...languages, newLanguage.trim()]);
      setNewLanguage('');
      setIsModalOpen(false);
    }
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <MonitorIcon className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Manage Page</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Dashboard</span>
                <span>•</span>
                <span>Manage Page</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-[#2C3E50] text-background rounded-md hover:bg-[#34495E] transition-colors"
          >
            Add New Language
          </button>
        </div>

        <div className="bg-background rounded-lg shadow-sm">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border-b last:border-b-0"
            >
              <span className="text-gray-700">{language}</span>
              <div className="flex items-center gap-3">
                <button className="text-gray-600 hover:text-gray-900">
                  <PencilIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteLanguage(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2Icon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Language Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-background rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddLanguage} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  placeholder="Enter new language name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please choose one word name of your language like Spanish / English / Chinese
                </p>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Translation;