

// import { useState } from 'react';
// import AddAgentModal from './AddAgentModal';

// export default function CreateAgentTable() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Static data for agents
//   const agents = [
//     {
//       id: 1,
//       autoLogin: 'Yes',
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       mobile: '+1 234 567 8901',
//       comments: 'Senior agent',
//       isActive: 'Active',
//       createdAt: '2023-05-15'
//     },
//     {
//       id: 2,
//       autoLogin: 'No',
//       name: 'Jane Smith',
//       email: 'jane.smith@example.com',
//       mobile: '+1 987 654 3210',
//       comments: 'New hire',
//       isActive: 'Inactive',
//       createdAt: '2023-06-20'
//     },
//     {
//       id: 3,
//       autoLogin: 'Yes',
//       name: 'Robert Johnson',
//       email: 'robert.j@example.com',
//       mobile: '+1 555 123 4567',
//       comments: 'Team lead',
//       isActive: 'Active',
//       createdAt: '2023-04-10'
//     }
//   ];

//   return (
//     <div className="p-6">
//       <div className="flex flex-col items-center justify-between mb-8">
//                <div className="flex justify-start items-center w-full mb-2">
//                  <img
//                    src='https://sonivo.oneoftheprojects.com/assets/create_agent.svg'
//                    alt=''
//                    className='h-24 w-24'
//                  />
//                </div>
//                <div className='w-full justify-between items-center flex'>
       
//                </div>
//              </div>
//       <div className="flex justify-between items-center mb-8">
//         <div className="space-y-1">
//           <h2 className="text-2xl font-bold tracking-tight">Create Agent</h2>
//           <div className="flex items-center gap-2 text-sm text-gray-500">
//             <span>Dashboard</span>
//             <span>•</span>
//             <span>Create Agent</span>
//           </div>
//         </div>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-[#2C3A47] text-white rounded-lg hover:bg-[#1e2832] transition-colors"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//           </svg>
//           Add Agent
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auto login</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Is active</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {agents.map((agent) => (
//                 <tr key={agent.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.autoLogin}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agent.name}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.email}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.mobile}</td>
//                   <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{agent.comments}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       agent.isActive === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                     }`}>
//                       {agent.isActive}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button className="text-blue-600 hover:text-blue-900">Edit</button>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button className="text-red-600 hover:text-red-900">Delete</button>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.createdAt}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <AddAgentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }


import { useState } from 'react';
import AddAgentModal from './AddAgentModal';

export default function CreateAgentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Static data for agents
  const agents = [
    {
      id: 1,
      autoLogin: 'Yes',
      name: 'John Doe',
      email: 'john.doe@example.com',
      mobile: '+1 234 567 8901',
      comments: 'Senior agent',
      isActive: 'Active',
      createdAt: '2023-05-15'
    },
    {
      id: 2,
      autoLogin: 'No',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      mobile: '+1 987 654 3210',
      comments: 'New hire',
      isActive: 'Inactive',
      createdAt: '2023-06-20'
    },
    {
      id: 3,
      autoLogin: 'Yes',
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      mobile: '+1 555 123 4567',
      comments: 'Team lead',
      isActive: 'Active',
      createdAt: '2023-04-10'
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto lg:flex-col">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/create_agent.svg'
            alt=''
            className='h-16 w-16 sm:h-24 sm:w-24'
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Create Agent</h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>Dashboard</span>
              <span>•</span>
              <span>Create Agent</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#2C3A47] text-white rounded-lg hover:bg-[#1e2832] transition-colors w-full sm:w-auto justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          <span className="whitespace-nowrap">Add Agent</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          {/* Desktop Table */}
          <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auto login</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {agents.map((agent) => (
                <tr key={agent.id}>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.autoLogin}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agent.name}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.email}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.mobile}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{agent.comments}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      agent.isActive === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {agent.isActive}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-4 p-4">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.email}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    agent.isActive === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {agent.isActive}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Mobile</p>
                    <p>{agent.mobile}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Auto Login</p>
                    <p>{agent.autoLogin}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Comments</p>
                    <p className="truncate">{agent.comments}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Created</p>
                    <p>{agent.createdAt}</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm font-medium">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddAgentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}