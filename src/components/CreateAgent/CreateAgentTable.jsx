import { useState } from 'react';
import AddAgentModal from './AddAgentModal';
import { IoPersonAddSharp } from 'react-icons/io5';

export default function CreateAgentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-[50vh] bg-primary-200 w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/create_agent.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Create agent</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Create agent</span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoPersonAddSharp className='text-background' size={20} />
            Add agent
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-xl overflow-hidden">
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
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${agent.isActive === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${agent.isActive === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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