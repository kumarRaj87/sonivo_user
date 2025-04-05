import { Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaSave } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Loader from '../loader/Loader';
import DevicesList from './DevicesList';

const DeviceManager = () => {
    const [title, setTitle] = useState("");
    const [Sid, setSid] = useState("");
    const [token, setToken] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [apiSecret, setApiSecret] = useState("");
    const [appSid, setAppSid] = useState("");
    const [num, setNum] = useState("");

    const [showDeviceMangerModal, setShowDeviceMangerModal] = useState(false);
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
                        src='https://sonivo.oneoftheprojects.com/assets/device_img.svg'
                        alt=''
                        className='h-24 w-24'
                    />
                </div>
                <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>

                    <div className='space-y-2 flex flex-col'>
                        <h1 className="text-2xl font-medium text-primary"> Device Manager</h1>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>Dashboard</span>
                            <span>•</span>
                            <span> Device Manager</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowDeviceMangerModal(true)}
                        className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                    >
                        <Plus className='text-background' size={20} />
                        Add Devices
                    </button>
                </div>
            </div>
            <DevicesList/>
            {showDeviceMangerModal && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
                        <div className="bg-background rounded-2xl shadow-lg w-full md:w-[600px]">
                            <div className='flex justify-start bg-primary-200 mb-4 rounded-t-2xl px-6 py-4 items-center w-full gap-6'>
                                <IoMdClose className='text-gray-600 cursor-pointer' size={20} onClick={() => setShowDeviceMangerModal(false)} />
                                <h2 className="text-lg font-semibold text-center">Twilio Voice Device</h2>
                            </div>

                            <form className="space-y-4 px-6 py-3">
                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        Title
                                    </div>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>
                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        SID
                                    </div>
                                    <input
                                        type="text"
                                        value={Sid}
                                        onChange={(e) => setSid(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>
                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        token
                                    </div>
                                    <input
                                        type="text"
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        Api Key
                                    </div>
                                    <input
                                        type="text"
                                        value={apiKey}
                                        onChange={(e) => setApiKey(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        Api Secret
                                    </div>
                                    <input
                                        type="text"
                                        value={apiSecret}
                                        onChange={(e) => setApiSecret(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        Outgoing app Sid
                                    </div>
                                    <input
                                        type="text"
                                        value={appSid}
                                        onChange={(e) => setAppSid(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                                        Number
                                    </div>
                                    <input
                                        type="text"
                                        value={num}
                                        onChange={(e) => setNum(e.target.value)}
                                        className="w-full pl-5 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                        placeholder=""
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                                >
                                    <FaSave className='text-background text-lg' />
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>

                </>

            )}
        </div>
    )
}

export default DeviceManager 