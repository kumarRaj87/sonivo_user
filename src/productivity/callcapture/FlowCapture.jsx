import React, { useEffect, useState } from 'react';
import { EllipsisVerticalIcon, ChevronLeftIcon, ChevronRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import Loader from '../../loader/Loader';

const staticData = [
  {
    id: 1,
    text: "Call back: +19786361859",
    recipientNumber: "+19786361859",
    myNumber: "+19782481662",
    digit: "NA",
    createdAt: "09/11/24 | 05:31:PM"
  },
  {
    id: 2,
    text: "Call back: +19786361859",
    recipientNumber: "+19786361859",
    myNumber: "+19782481662",
    digit: "NA",
    createdAt: "09/11/24 | 05:01:PM"
  },
];

const FlowCapture = () => {

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showColumnMenu, setShowColumnMenu] = useState({});

  const totalPages = Math.ceil(staticData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = staticData.slice(startIndex, endIndex);

  const handleColumnMenu = (index, type) => {
    setShowColumnMenu(prev => ({
      index: prev.index === index && prev.type === type ? null : index,
      type: prev.index === index && prev.type === type ? null : type
    }));
  };

  const columnMenu = (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
      <div className="py-1">
        <button className="w-full text-left px-4 py-2 text-sm text-primary-300 hover:bg-primary-200">
          Sort by ASC
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-primary-300 hover:bg-primary-200">
          Sort by DESC
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-primary-300 hover:bg-primary-200">
          Filter
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-primary-300 hover:bg-primary-200">
          Hide column
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-primary-300 hover:bg-primary-200">
          Manage columns
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 w-full">
      <div className="flex flex-col items-center justify-between mb-6">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/flow_capture.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>
          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Call flow capture</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Call flow capture</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-background min-h-[20vh] w-full overflow-x-auto">
        <div className="flex justify-end p-4">
          <button className="text-primary-300 flex lg:items-center items-start gap-2">
            <span className='text-sm'>Export</span>
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-primary-200">
            <tr>
              <th className="px-6 py-3 text-left relative">
                <div className="flex items-center">
                  <span className="text-primary-300 font-medium text-sm">Text</span>
                  <button
                    onClick={() => handleColumnMenu(0, 'text')}
                    className="ml-2"
                  >
                    <EllipsisVerticalIcon className="h-5 w-5 text-primary-300" />
                  </button>
                </div>
                {showColumnMenu.index === 0 && showColumnMenu.type === 'text' && columnMenu}
              </th>
              <th className="px-6 py-3 text-left relative">
                <div className="flex items-center">
                  <span className="text-primary-300 font-medium text-sm">Recipient number</span>
                  <button
                    onClick={() => handleColumnMenu(1, 'recipient')}
                    className="ml-2"
                  >
                    <EllipsisVerticalIcon className="h-5 w-5 text-primary-300" />
                  </button>
                </div>
                {showColumnMenu.index === 1 && showColumnMenu.type === 'recipient' && columnMenu}
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-primary-300 font-medium text-sm">My number</span>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-primary-300 font-medium text-sm">Digit</span>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-primary-300 font-medium text-sm">createdAt</span>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-primary-300 font-medium text-sm">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="px-6 py-4 text-primary-500 text-sm">{row.text}</td>
                <td className="px-6 py-4 text-primary-500 text-sm">{row.recipientNumber}</td>
                <td className="px-6 py-4 text-primary-500 text-sm">{row.myNumber}</td>
                <td className="px-6 py-4 text-primary-500 text-sm">{row.digit}</td>
                <td className="px-6 py-4 text-primary-500 text-sm">{row.createdAt}</td>
                <td className="px-6 py-4">
                  <button className="text-red-500">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full items-center justify-between px-6 py-4">
          <div className="flex gap-2">
            <span className="text-primary-300 text-sm">Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="border rounded p-1 text-primary-300"
            >
              <option value={100}>100</option>
              <option value={50}>50</option>
              <option value={25}>25</option>
            </select>
          </div>

          <div className="flex gap-4">
            <span className="text-primary-300">
              {startIndex + 1}-{Math.min(endIndex, staticData.length)} of {staticData.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-1 rounded hover:bg-primary-200 disabled:opacity-50"
              >
                <ChevronLeftIcon className="h-5 w-5 text-primary-300" />
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-1 rounded hover:bg-primary-200 disabled:opacity-50"
              >
                <ChevronRightIcon className="h-5 w-5 text-primary-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowCapture