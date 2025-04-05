// import { useState } from 'react';
// import AddCallTaskModal from './AddCallTaskModal';
// import CallForceSummaryModal from './CallForceSummaryModal';

// const mockData = [
//   {
//     id: 1,
//     title: 'Testing task for the agent',
//     agent: 'NA',
//     device: 'Main',
//     status: 'INITIATED',
//     createdAt: '14/11/24'
//   },
//   {
//     id: 2,
//     title: 'Testing',
//     agent: 'NA',
//     device: 'Main',
//     status: 'INITIATED',
//     createdAt: '30/10/24'
//   }
// ];

// export default function CallForceTable() {
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

//   return (
//     <div className="p-6">
//       <div className="flex flex-col items-center justify-between mb-8">
//                <div className="flex justify-start items-center w-full mb-2">
//                  <img
//                    src='https://sonivo.oneoftheprojects.com/assets/call_force.svg'
//                    alt=''
//                    className='h-24 w-24'
//                  />
//                </div>
//                <div className='w-full justify-between items-center flex'>
       
//                </div>
//              </div>
//       <div className="flex justify-between items-center mb-8">
//         <div className="space-y-1">
//           <h2 className="text-2xl font-bold tracking-tight">Call Force</h2>
//           <div className="flex items-center gap-2 text-sm text-gray-500">
//             <span>Dashboard</span>
//             <span>•</span>
//             <span>Call Force</span>
//           </div>
//         </div>
//         <button
//           onClick={() => setIsAddModalOpen(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-[#2C3A47] text-white rounded-lg hover:bg-[#1e2832] transition-colors"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//           </svg>
//           Add Call Task
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">createdAt</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {mockData.map((row) => (
//                 <tr key={row.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.title}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.agent}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.device}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.status}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button onClick={() => setIsSummaryModalOpen(true)} className="text-blue-500 hover:text-blue-700">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button className="text-red-500 hover:text-red-700">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                       </svg>
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.createdAt}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <AddCallTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
//       <CallForceSummaryModal isOpen={isSummaryModalOpen} onClose={() => setIsSummaryModalOpen(false)} />
//     </div>
//   );
// }





import { useState } from 'react';
import AddCallTaskModal from './AddCallTaskModal';
import CallForceSummaryModal from './CallForceSummaryModal';

const mockData = [
  {
    id: 1,
    title: 'Testing task for the agent',
    agent: 'NA',
    device: 'Main',
    status: 'INITIATED',
    createdAt: '14/11/24'
  },
  {
    id: 2,
    title: 'Testing',
    agent: 'NA',
    device: 'Main',
    status: 'INITIATED',
    createdAt: '30/10/24'
  }
];

export default function CallForceTable() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 ">
        <div className="flex items-center gap-4 w-full sm:w-auto lg:flex-col" >
          <img
            src='https://sonivo.oneoftheprojects.com/assets/call_force.svg'
            alt=''
            className='h-16 w-16 sm:h-24 sm:w-24'
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Call Force</h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>Dashboard</span>
              <span>•</span>
              <span>Call Force</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#2C3A47] text-white rounded-lg hover:bg-[#1e2832] transition-colors w-full sm:w-auto justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="whitespace-nowrap">Add Call Task</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          {/* Desktop Table */}
          <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockData.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.title}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.agent}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.device}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      row.status === 'INITIATED' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => setIsSummaryModalOpen(true)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-red-600 hover:text-red-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-4 p-4">
            {mockData.map((row) => (
              <div key={row.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{row.title}</h3>
                    <p className="text-sm text-gray-500">{row.device}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    row.status === 'INITIATED' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {row.status}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Agent</p>
                    <p>{row.agent}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Created</p>
                    <p>{row.createdAt}</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button 
                    onClick={() => setIsSummaryModalOpen(true)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-900 text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View
                  </button>
                  <button className="flex items-center gap-1 text-red-600 hover:text-red-900 text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddCallTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <CallForceSummaryModal isOpen={isSummaryModalOpen} onClose={() => setIsSummaryModalOpen(false)} />
    </div>
  );
}