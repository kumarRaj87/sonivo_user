import { useState } from 'react';
import { MdLocalPhone } from "react-icons/md";
import { TrashIcon } from '@heroicons/react/24/outline';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'sonner';

const DevicesList = ({ device, onDelete, onEdit }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState(device.title);
    const [sid, setSid] = useState(device.sid);
    const [token, setToken] = useState(device.token);
    const [apiKey, setApiKey] = useState(device.api_key);
    const [apiSecret, setApiSecret] = useState(device.api_secret);
    const [appSid, setAppSid] = useState(device.outgoing_app_sid);
    const [num, setNum] = useState(device.number);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async () => {
        setIsUpdating(true);
        try {
            const authToken = localStorage.getItem('authToken');
            const response = await axios.put(
                `https://vokal-api.oyelabs.com/user/update_device/${device.device_id}`,
                {
                    sid,
                    title,
                    api_key: apiKey,
                    api_secret: apiSecret,
                    number: num,
                    outgoing_app_sid: appSid,
                    token,
                    status: "active",
                },
                {
                    headers: {
                        'accept': 'application/json',
                        'access-token': authToken,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.success) {
                toast.success('Device updated successfully!');
                onEdit(response.data.data); // Update parent state
                setIsExpanded(false);
            }
        } catch (error) {
            console.error('Error updating device:', error);
            toast.error(error.response?.data?.message || 'Failed to update device');
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="w-full justify-center items-center flex flex-col mb-4">
            <div
                className="flex items-center w-full justify-between p-4 cursor-pointer rounded-2xl bg-background shadow-sm"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-4">
                    <div className='sm:h-12 sm:w-12 h-8 w-8 rounded-full bg-secondary justify-center flex items-center'>
                        <MdLocalPhone className="sm:h-6 sm:w-6 h-4 w-4 text-primary-500" />
                    </div>
                    <span className="text-primary-500 font-semibold text-md sm:text-xl">{device.title}</span>
                </div>
                <div className="flex items-center gap-2">
                    {!isExpanded && (
                        <span className="text-primary-300 text-sm">+{device.number}</span>
                    )}
                    {isExpanded ? (
                        <FaAngleUp className="h-4 w-4 text-primary-300" />
                    ) : (
                        <FaAngleDown className="h-4 w-4 text-primary-300" />
                    )}
                </div>
            </div>

            {isExpanded && (
                <div className="bg-background p-8 rounded-xl mt-5 w-full lg:w-[95%]">
                    <div className="space-y-4">

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
                                value={sid}
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

                        <div className="flex justify-end gap-3 pt-4">
                            <button 
                                className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-md flex items-center gap-2"
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this device?')) {
                                        onDelete(device.device_id);
                                    }
                                }}
                            >
                                <TrashIcon className="h-5 w-5" />
                                Delete
                            </button>
                            <button 
                                className="px-4 py-2 bg-primary-500 text-background rounded-md disabled:opacity-70"
                                onClick={handleUpdate}
                                disabled={isUpdating}
                            >
                                {isUpdating ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DevicesList;