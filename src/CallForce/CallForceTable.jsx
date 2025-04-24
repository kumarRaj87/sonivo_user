import { useEffect, useState } from 'react';
import AddCallTaskModal from './AddCallTaskModal';
import CallForceSummaryModal from './CallForceSummaryModal';
import { LuCircleCheckBig } from "react-icons/lu";
import Loader from '../components/loader/Loader';
import { callForceApi } from './callForce';
import { toast } from 'sonner';

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
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(mockData);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await callForceApi.getCallForceTasks();
      if (response.data) {
        setTasks(response.data);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      await callForceApi.deleteCallForceTask(taskId);
      toast.success('Task deleted successfully');
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  const handleViewSummary = (taskId) => {
    setSelectedTaskId(taskId);
    setIsSummaryModalOpen(true);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 w-full">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/plan.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>
          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary">Call force</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Call force</span>
            </div>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <LuCircleCheckBig className='text-background' size={20} />
            Add Call task
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="overflow-x-auto">
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
              {tasks.map((row) => (
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
                      onClick={() => handleViewSummary(row.id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View
                    </button>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => handleDeleteTask(row.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sm:hidden space-y-4 p-4">
            {tasks.map((row) => (
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
                    onClick={() => handleViewSummary(row.id)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-900 text-sm font-medium"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => handleDeleteTask(row.id)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-900 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddCallTaskModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={fetchTasks}
      />
      <CallForceSummaryModal 
        isOpen={isSummaryModalOpen} 
        onClose={() => setIsSummaryModalOpen(false)}
        taskId={selectedTaskId}
      />
    </div>
  );
}