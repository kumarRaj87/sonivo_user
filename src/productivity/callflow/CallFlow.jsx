import { PencilIcon, Plus, TrashIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Loader from '../../loader/Loader';
import FlowBuilder from './FlowBuilder';
import CreateFlowDialog from './CreateFlowDialog';

const CallFlow = () => {

    const [showCreateCall, setShowCreateCall] = useState(false);
    const [loading, setLoading] = useState(true);

    const flows = [
        { id: 1, name: 'Testing flow', date: '5 months ago' },
        { id: 2, name: 'Testing flow 2', date: '5 months ago' },
    ];

    useEffect(() => {
        setTimeout(() => setLoading(false), 300);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-[50vh] bg-primary-200 w-full">
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

            <div className="gap-5 w-full justify-center items-center flex-col flex">
                {flows.map((flow) => (
                    <div
                        key={flow.id}
                        className="flex items-center justify-between p-4 rounded-2xl bg-background w-full"
                    >
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">{flow.name}</h3>
                            <p className="text-sm text-gray-500">{flow.date}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-blue-600 hover:text-blue-700">
                                <PencilIcon className="h-5 w-5" />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                                <TrashIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <CreateFlowDialog
                open={showCreateCall}
                onClose={() => setShowCreateCall(false)}
            >
                <FlowBuilder onClose={() => setShowCreateCall(false)} />
            </CreateFlowDialog>
        </div>
    )
}

export default CallFlow