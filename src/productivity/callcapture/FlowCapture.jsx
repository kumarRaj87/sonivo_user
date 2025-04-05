import React, { useEffect, useState } from 'react'
import Loader from '../../loader/Loader';

const FlowCapture = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 300);
    }, []);
  
    if (loading) {
      return <Loader />;
    }

  return (
    <div className="min-h-[50vh] bg-primary-200 w-full">
    <div className="flex flex-col items-center justify-between mb-6">
      <div className="flex justify-start items-center w-full">
        <img
          src='https://sonivo.oneoftheprojects.com/assets/flow_capture.svg'
          alt=''
          className='h-24 w-24'
        />
      </div>
      <div className='w-full justify-between items-center flex'>
        <div className='space-y-2 flex flex-col'>
          <h1 className="text-2xl font-medium text-primary"> Call flow capture</h1>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Dashboard</span>
            <span>•</span>
            <span> Call flow capture</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FlowCapture