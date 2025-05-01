import { useState, useEffect } from 'react';
import axios from 'axios';
import AddAgentModal from './AddAgentModal';
import { IoPersonAddSharp } from 'react-icons/io5';
import Loader from '../components/loader/Loader';
import { toast } from 'sonner';
import EditAgentModal from './EditAgentModal';

export default function CreateAgentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [togglingAgent, setTogglingAgent] = useState(null);
  const [editingAgent, setEditingAgent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchAgents = async () => {
    try {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        throw new Error('No authentication token found');
      }

      const response = await axios.get(
        'https://vokal-api.oyelabs.com/agent/get_my_agents',
        {
          headers: {
            'accept': 'application/json',
            'access-token': authToken
          }
        }
      );

      if (response.data.success) {
        setAgents(response.data.data);
      } else {
        throw new Error(response.data.message || 'Failed to fetch agents');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch agents');
      console.error('Error fetching agents:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAgent = async (uid) => {
    try {
      setDeleteLoading(true);
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        throw new Error('No authentication token found');
      }

      const response = await axios.delete(
        `https://vokal-api.oyelabs.com/agent/del_agent/${uid}`,
        {
          headers: {
            'accept': 'application/json',
            'access-token': authToken
          }
        }
      );

      if (response.data.success) {
        fetchAgents();
        toast.success("Agent deleted successfully!")
      } else {
        throw new Error(response.data.message || 'Failed to delete agent');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to delete agent');
      console.error('Error deleting agent:', err);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleToggleActiveness = async (uid, currentStatus) => {
    try {
      setTogglingAgent(uid);

      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        throw new Error('No authentication token found');
      }

      setAgents(prevAgents =>
        prevAgents.map(agent =>
          agent.uid === uid ? { ...agent, is_active: !currentStatus } : agent
        )
      );

      const response = await axios.patch(
        `https://vokal-api.oyelabs.com/agent/change_agent_activeness/${uid}`,
        { is_active: !currentStatus },
        {
          headers: {
            'accept': 'application/json',
            'access-token': authToken
          }
        }
      );

      if (!response.data.success) {
        // Revert if API call fails
        setAgents(prevAgents =>
          prevAgents.map(agent =>
            agent.uid === uid ? { ...agent, is_active: currentStatus } : agent
          )
        );
        throw new Error(response.data.message || 'Failed to update agent status');
      }

      toast.success(`Agent status updated to ${!currentStatus ? 'Active' : 'Inactive'}`);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to update agent status');
      console.error('Error updating agent status:', err);
    } finally {
      setTogglingAgent(null); // Reset the toggling agent
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const handleAgentAdded = async () => {
    setIsModalOpen(false);
    await fetchAgents();
  };

  const handleEditClick = (agent) => {
    setEditingAgent(agent);
    setIsEditModalOpen(true);
  };

  const handleAgentUpdated = async () => {
    setIsEditModalOpen(false);
    await fetchAgents();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 w-full">
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
            <h1 className="text-2xl font-medium text-primary">Create agent</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Create agent</span>
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
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {agent.call_force ? 'Yes' : 'No'}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agent.name}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.email}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.mobile}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{agent.comments}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleActiveness(agent.uid, agent.is_active)}
                      disabled={togglingAgent === agent.uid}
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${agent.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} ${togglingAgent === agent.uid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {agent.is_active ? 'Active' : 'Inactive'}
                      {togglingAgent === agent.uid && '...'}
                    </button>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                    <button className="text-blue-600 hover:text-blue-900"
                      onClick={() => handleEditClick(agent)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAgent(agent.uid)}
                      disabled={deleteLoading}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    >
                      {deleteLoading ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(agent.createdAt).toLocaleDateString()}
                  </td>
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
                  <button
                    onClick={() => handleToggleActiveness(agent.uid, agent.is_active)}
                    disabled={togglingAgent === agent.uid}
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${agent.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} ${togglingAgent === agent.uid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {agent.is_active ? 'Active' : 'Inactive'}
                    {togglingAgent === agent.uid && '...'}
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Mobile</p>
                    <p>{agent.mobile}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Auto Login</p>
                    <p>{agent.call_force ? 'Yes' : 'No'}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Comments</p>
                    <p className="truncate">{agent.comments}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Created</p>
                    <p>{new Date(agent.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">Edit</button>
                  <button
                    onClick={() => handleDeleteAgent(agent.uid)}
                    disabled={deleteLoading}
                    className="text-red-600 hover:text-red-900 text-sm font-medium disabled:opacity-50"
                  >
                    {deleteLoading ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddAgentModal
        isOpen={isModalOpen}
        onClose={handleAgentAdded}
      />
      <EditAgentModal
        isOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        agent={editingAgent}
        onAgentUpdated={handleAgentUpdated}
      />
    </div>
  );
}