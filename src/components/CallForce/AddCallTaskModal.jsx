

export default function AddCallTaskModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5005]">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">Add call task</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form className="space-y-4">
            {/* Title Input */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
                Title
              </div>
              <input
                type="text"
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              />
            </div>

            {/* Instructions Textarea */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
                Short instructions
              </div>
              <textarea
                rows="3"
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                placeholder=""
              ></textarea>
            </div>

            {/* Import Numbers Select */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
                Import numbers
              </div>
              <select className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary appearance-none bg-white">
                <option value=""></option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>

            {/* Select Device */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 transition-all duration-300 text-primary text-[11px]">
                Select device
              </div>
              <select className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary appearance-none bg-white">
                <option value=""></option>
                <option value="device1">Device 1</option>
                <option value="device2">Device 2</option>
              </select>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-sm text-blue-900">A device can be managed by only one agent at a time.</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#2C3A47] text-white rounded-lg hover:bg-[#1e2832] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}