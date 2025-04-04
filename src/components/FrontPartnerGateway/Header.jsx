import React from "react";
const Header = () => {
  return <div className="mb-8">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4">
          <img src="/image.png" alt="Front Partner Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Front Partner</h1>
      </div>
      <div className="text-sm text-gray-500 flex items-center">
        <span>Dashboard</span>
        <span className="mx-2">○</span>
        <span>Front Partner</span>
      </div>
    </div>;
};
export default Header;