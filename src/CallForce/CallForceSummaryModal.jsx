import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { callForceApi } from './callForce';

export default function CallForceSummaryModal({ isOpen, onClose, taskId }) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLogs = async () => {
    if (!taskId) return;
    setLoading(true);
    try {
      const response = await callForceApi.getCallForceLogs(taskId);
      if (response.data?.logs) {
        setLogs(response.data.logs);
      }
    } catch (error) {
      console.error('Error fetching logs:', error);
      toast.error('Failed to fetch logs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && taskId) {
      fetchLogs();
    }
  }, [isOpen, taskId]);

  const handleDeleteLog = async (logId) => {
    try {
      await callForceApi.deleteCallForceLog(logId);
      toast.success('Log deleted successfully');
      fetchLogs();
    } catch (error) {
      console.error('Error deleting log:', error);
      toast.error('Failed to delete log');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5005]">
      <div className="bg-background rounded-lg w-full max-w-6xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Call force summary</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              Close
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">Please call all the numbers and mention the output of every call</p>
            <button className="text-gray-600 hover:text-gray-800">
              Export
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Call from</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Call to</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent comments</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Call duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-gray-200">
                    {logs.map((log) => (
                      <tr key={log.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.callFrom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.callTo}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.agentComments}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.callDuration}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button 
                            onClick={() => handleDeleteLog(log.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>Rows per page:</span>
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option>100</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <span>1-{logs.length} of {logs.length}</span>
                <div className="flex gap-2">
                  <button className="p-1 rounded hover:bg-gray-200">Previous</button>
                  <button className="p-1 rounded hover:bg-gray-200">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}