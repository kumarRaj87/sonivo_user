import { useState } from 'react';
import { MdLocalPhone } from "react-icons/md";
import { TrashIcon } from '@heroicons/react/24/outline';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const DevicesList = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState("Device A");
    const [Sid, setSid] = useState("xxxxxxxxxxxxxxxxxxxxxxxxx");
    const [token, setToken] = useState("xxxxxxxxxxxxxxxxxxxxxxxxx");
    const [apiKey, setApiKey] = useState("xxxxxxxxxxxxxxxxxxxxxxxxx");
    const [apiSecret, setApiSecret] = useState("xxxxxxxxxxxxxxxxxxxxxxxxx");
    const [appSid, setAppSid] = useState("xxxxxxxxxxxxxxxxxxxxxxxxx");
    const [num, setNum] = useState("19786361859");

    return (
        <div className="w-full justify-center items-center flex flex-col">
                <div
                    className="flex items-center w-full justify-between p-4 cursor-pointer rounded-2xl bg-background shadow-sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center gap-4">
                        <div className='sm:h-12 sm:w-12 h-8 w-8 rounded-full bg-primary-200 justify-center flex items-center'>
                            <MdLocalPhone className="sm:h-6 sm:w-6 h-4 w-4 text-primary-500" />
                        </div>
                        <span className="text-primary-500 font-semibold text-md sm:text-xl">Device A</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {!isExpanded && (
                            <span className="text-primary-300 text-sm">+19786361859</span>
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


                            <div className="flex justify-end gap-3 pt-4">
                                <button className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-md flex items-center gap-2">
                                    <TrashIcon className="h-5 w-5" />
                                    Delete
                                </button>
                                <button className="px-4 py-2 bg-primary-500 text-white rounded-md">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default DevicesList;