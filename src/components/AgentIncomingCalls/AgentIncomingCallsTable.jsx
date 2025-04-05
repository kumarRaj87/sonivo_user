const mockData = [
  {
    id: 1,
    device: 'Main',
    agent: 'Nina',
    callFrom: '+19782481662',
    callTo: '+19786361859',
    callDuration: '0:09',
    agentComments: 'it was an azmign call',
    createdAt: '31/10/24'
  },
  {
    id: 2,
    device: 'Main',
    agent: 'Nina',
    callFrom: '+19782481662',
    callTo: '+19786361859',
    callDuration: '0:06',
    agentComments: 'hello this is test',
    createdAt: '31/10/24'
  },
  {
    id: 3,
    device: 'Main',
    agent: 'Nina',
    callFrom: '+19782481662',
    callTo: '+19786361859',
    callDuration: '00:00',
    agentComments: 'Rejected',
    createdAt: '31/10/24'
  },
  {
    id: 4,
    device: 'Main',
    agent: 'Nina',
    callFrom: '+19782481662',
    callTo: '+19786361859',
    callDuration: '00:00',
    agentComments: 'Rejected',
    createdAt: '31/10/24'
  },
  {
    id: 5,
    device: 'Main',
    agent: 'Nina',
    callFrom: '+19782481662',
    callTo: '+19786361859',
    callDuration: '00:00',
    agentComments: 'Rejected',
    createdAt: '31/10/24'
  },
  {
    id: 6,
    device: 'Main',
    agent: 'Nina',
    callFrom: '+19782481662',
    callTo: '+19786361859',
    callDuration: '00:00',
    agentComments: 'Rejected',
    createdAt: '31/10/24'
  },
  {
    id: 7,
    device: 'Main',
    agent: 'Nina',
    callFrom: '+19782481662',
    callTo: '+19786361859',
    callDuration: '00:00',
    agentComments: 'Rejected',
    createdAt: '31/10/24'
  }
];

export default function AgentIncomingCallsTable() {
  return (
    <div className="min-h-[50vh] bg-primary-200 w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto  lg:flex-col">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/agent_incoming.svg'
            alt=''
            className='h-16 w-16 sm:h-24 sm:w-24'
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Agent Incoming Calls</h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>Dashboard</span>
              <span>•</span>
              <span>Agent Incoming Calls</span>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span className="whitespace-nowrap">Export</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden">
        <div className="overflow-x-auto">
          {/* Desktop Table */}
          <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Call From</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Call To</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockData.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.device}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.agent}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a href={`tel:${row.callFrom}`} className="text-blue-500 hover:text-blue-700">{row.callFrom}</a>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a href={`tel:${row.callTo}`} className="text-blue-500 hover:text-blue-700">{row.callTo}</a>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      row.callDuration === '00:00' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {row.callDuration}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{row.agentComments}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.createdAt}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-red-500 hover:text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </td>
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
                    <h3 className="text-lg font-medium text-gray-900">{row.agent}</h3>
                    <p className="text-sm text-gray-500">{row.device}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    row.callDuration === '00:00' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {row.callDuration}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">From</p>
                    <a href={`tel:${row.callFrom}`} className="text-blue-500 hover:text-blue-700">{row.callFrom}</a>
                  </div>
                  <div>
                    <p className="text-gray-500">To</p>
                    <a href={`tel:${row.callTo}`} className="text-blue-500 hover:text-blue-700">{row.callTo}</a>
                  </div>
                  <div>
                    <p className="text-gray-500">Created</p>
                    <p>{row.createdAt}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Comments</p>
                    <p className="truncate">{row.agentComments}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="text-red-600 hover:text-red-900 text-sm font-medium flex items-center gap-1">
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
    </div>
  );
}