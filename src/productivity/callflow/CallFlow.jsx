import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Loader from '../../loader/Loader';

const CallFlow = () => {

    const [showCreateCall, setShowCreateCall] = useState(false);
    const [loading, setLoading] = useState(true);

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
                <div className='w-full justify-between items-center flex'>

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
                        className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                    >
                        <Plus className='text-background' size={20} />
                        Create Call
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CallFlow