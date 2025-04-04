import React, { useRef } from "react";
const AddButton = ({
  onFileSelect
}) => {
  const fileInputRef = useRef(null);
  const handleAddClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = e => {
    if (e.target.files.length > 0) {
      onFileSelect(e.target.files);
    }
  };
  return <div className="flex justify-end my-6">
      <button onClick={handleAddClick} className="px-6 py-2 bg-background text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
        Add
      </button>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" multiple />
    </div>;
};
export default AddButton;