import { PencilIcon, Plus, TrashIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader';
import FlowBuilder from './FlowBuilder';
import CreateFlowDialog from './CreateFlowDialog';
import axios from 'axios';
import { toast } from 'sonner';

const CallFlow = () => {
    const [showCreateCall, setShowCreateCall] = useState(false);
    const [loading, setLoading] = useState(true);
    const [flows, setFlows] = useState([]);
    const [error, setError] = useState(null);

    const fetchFlows = async () => {
        setLoading(true);
        setError(null);
        try {
            const authToken = localStorage.getItem('authToken');
            const uid = localStorage.getItem('uId');

            const response = await axios.get('https://vokal-api.oyelabs.com/chatflow/get_mine', {
                headers: {
                    'accept': 'application/json',
                    'uid': uid,
                    'access-token': authToken
                }
            });

            if (response.data.success) {
                setFlows(response.data.data);
            } else {
                setError(response.data.message || 'Failed to fetch flows');
                toast.error(response.data.message || 'Failed to fetch flows');
            }
        } catch (err) {
            console.error('Error fetching flows:', err);
            setError(err.message || 'Failed to fetch flows');
            toast.error(err.message || 'Failed to fetch flows');
        } finally {
            setLoading(false);
        }
    };

    const deleteFlow = async (id, flowId) => {
        try {
            const authToken = localStorage.getItem('authToken');
            const uid = localStorage.getItem('uid');

            const response = await axios.delete(`https://vokal-api.oyelabs.com/chatflow/del_flow/${id}/${flowId}`, {
                headers: {
                    'accept': 'application/json',
                    'uid': uid,
                    'access-token': authToken
                }
            });

            if (response.data.success) {
                toast.success("Flow deleted successfully!");
                fetchFlows(); // Refresh the list after deletion
            } else {
                toast.error(response.data.message || 'Failed to delete flow');
            }
        } catch (err) {
            console.error('Error deleting flow:', err);
            toast.error(err.message || 'Failed to delete flow');
        }
    };

    useEffect(() => {
        fetchFlows();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-[50vh] bg-secondary w-full">
            <div className="flex flex-col items-center justify-between mb-8">
                <div className="flex justify-start items-center w-full">
                    <img
                        src='https://sonivo.oneoftheprojects.com/assets/call_flow.svg'
                        alt=''
                        className='h-24 w-24'
                    />
                </div>
                <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>

                    <div className='space-y-2 flex flex-col'>
                        <h1 className="text-2xl font-medium text-primary"> Call flow builder</h1>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>Dashboard</span>
                            <span>•</span>
                            <span> Call flow builder</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowCreateCall(true)}
                        className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                    >
                        <Plus className='text-background' size={20} />
                        Create Call
                    </button>
                </div>
            </div>

            {error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                    {error}
                </div>
            ) : flows.length === 0 ? (
                <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
                    No flows found. Create your first flow!
                </div>
            ) : (
                <div className="gap-5 w-full justify-center items-center flex-col flex">
                    {flows.map((flow) => (
                        <div
                            key={flow.id}
                            className="flex items-center justify-between p-4 rounded-2xl bg-background w-full"
                        >
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">{flow.title}</h3>
                                <p className="text-sm text-gray-500">
                                    {new Date(flow.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                                {/* <p className="text-xs text-gray-400 mt-1">ID: {flow.flow_id}</p> */}
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    className="text-blue-600 hover:text-blue-700"
                                    onClick={() => {
                                        // You can implement edit functionality here
                                        toast.info("Edit functionality coming soon!");
                                    }}
                                >
                                    <PencilIcon className="h-5 w-5" />
                                </button>
                                <button
                                    className="text-red-600 hover:text-red-700"
                                    onClick={() => {
                                        deleteFlow(flow.id, flow.flow_id);
                                    }}
                                >
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <CreateFlowDialog
                open={showCreateCall}
                onClose={() => setShowCreateCall(false)}
            >
                <FlowBuilder
                    onClose={() => {
                        setShowCreateCall(false);
                        fetchFlows(); // Refresh the list after creating a new flow
                    }}
                />
            </CreateFlowDialog>
        </div>
    )
}

export default CallFlow