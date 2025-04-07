import { useState, useCallback } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    addEdge,
    useNodesState,
    useEdgesState,
    Panel
} from 'reactflow';
import { LuCirclePlus } from "react-icons/lu";
import { FaAnglesLeft } from "react-icons/fa6";
import 'reactflow/dist/style.css';


const initialNodes = [
    {
        id: '1',
        type: 'default',
        position: { x: 120, y: 200 },
        data: {
            label: (
                <div className="p-2">
                    <div className="flex items-center mb-2">
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <span className="font-medium text-sm">On call</span>
                    </div>
                    <div className="flex items-center text-blue-500 text-xs mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                        <span>{"{recipient_number}"}</span>
                    </div>
                    <div className="flex items-center text-blue-500 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                        <span>{"{my_number}"}</span>
                    </div>
                </div>
            )
        },
        style: {
            background: 'white',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            width: 180
        }
    }
];

const initialEdges = [];

const nodeTypes = [
    {
        id: 'gather',
        name: 'Gather',
        color: 'bg-blue-100',
        textColor: 'text-blue-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
        ),
        content: (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Gather</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select language</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>English (US)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select voice model</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>Joanna-Neural</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Say</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            rows="4"
                            defaultValue="Hello there, Welcome to Codeyon I.T. Services. I am Joey, and you have reached our IVR system. Please choose an option to proceed further."
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Press 1 for Sales.</p>
                        <p className="text-sm text-gray-600">Press 2 for Support.</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Enter number key</label>
                        <div className="relative">
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'say',
        name: 'Say',
        color: 'bg-blue-50',
        textColor: 'text-blue-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
        ),
        content: (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Say</span>
                    </div>
                    <div className="text-blue-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                        This node is used to utilize dynamic variables
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select language</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>English (US)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select voice model</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>Salli</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Say</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            rows="3"
                            defaultValue="You have entered {{digits}}. We are retrieving your product details, please stay on the line."
                        />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'condition',
        name: 'Condition',
        color: 'bg-orange-50',
        textColor: 'text-orange-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
        content: (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Condition</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-600">
                        Gather response can be passed from condition node
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">If response equal to:</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">If response not equal to:</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'api-request',
        name: 'Make API Request',
        color: 'bg-green-50',
        textColor: 'text-green-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
        ),
        content: (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Make API Request</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded">GET</button>
                        <button className="px-3 py-1 border border-gray-300 rounded">POST</button>
                        <button className="px-3 py-1 border border-gray-300 rounded">PUT</button>
                        <button className="px-3 py-1 border border-gray-300 rounded">DELETE</button>
                    </div>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="https://api.example.com/endpoint"
                    />
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded">Content-Type</button>
                        <button className="px-3 py-1 border border-gray-300 rounded">application/json</button>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                        Try This API
                    </button>
                </div>
            </div>
        )
    },
    {
        id: 'capture',
        name: 'Capture Data',
        color: 'bg-teal-100',
        textColor: 'text-teal-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
        ),
        content: (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Capture Data</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Capture text</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            defaultValue="Call lead"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Variable</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            defaultValue="{{captured_number}}"
                        />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'send-sms',
        name: 'Send SMS',
        color: 'bg-purple-50',
        textColor: 'text-purple-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
        ),
        content: (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Send SMS</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select device</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>Default Device</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">SMS text</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            rows="4"
                        />
                        <p className="text-sm text-gray-500 mt-1">Recommended characters are 320</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'open-ai',
        name: 'Open AI',
        color: 'bg-green-600',
        textColor: 'text-white',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        ),
        content: (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Open AI</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select language</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>English (US)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select voice model</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>Joanna-Neural</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">System message</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            rows="4"
                            defaultValue="Hello, my name is Salli. I am an AI assistant for Codeyon I.T. Services, and I can help you with any questions about our services."
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Old number of messages history</label>
                            <input type="number" className="w-20 border border-gray-300 rounded-md px-2 py-1" defaultValue="3" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Wait for reply per sec</label>
                            <input type="number" className="w-20 border border-gray-300 rounded-md px-2 py-1" defaultValue="3" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="add-ai-task" />
                        <label htmlFor="add-ai-task" className="text-sm text-gray-700">Add ai task</label>
                    </div>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="When asked to arrange a call back"
                    />
                </div>
            </div>
        )
    },
];

export default function FlowBuilder({ onClose }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [selectedNode, setSelectedNode] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onNodeClick = useCallback((_, node) => {
        setSelectedNode(node);
    }, []);

    const addNode = useCallback((type) => {
        const newNode = {
            id: `${Date.now()}`,
            type: 'default',
            position: { x: 250, y: nodes.length * 150 + 200 },
            data: {
                label: type.content
            },
            style: {
                background: 'white',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                width: 320
            }
        };

        setNodes((nds) => [...nds, newNode]);
        setShowSidebar(false);
    }, [nodes, setNodes]);

    const toggleSidebar = useCallback(() => {
        setShowSidebar(prev => !prev);
    }, []);

    return (
        <div className="h-screen w-full bg-white">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-2">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-xl font-semibold">Create Flow</h2>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Testing flow</span>
                    <button className="text-green-600 hover:text-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                    <button
                        onClick={toggleSidebar}
                        className="flex items-center p-3 bg-blue-50 text-blue-500 rounded-full  hover:bg-blue-100 transition-colors"
                    >
                        <FaAnglesLeft className='text-blue-500 text-md' />
                    </button>
                </div>
            </div>
            <div className="flex h-[calc(100vh-64px)]">
                <div style={{ height: '100%', width: '100%' }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeClick={onNodeClick}
                        fitView
                    >
                        <Background />
                        <Controls />
                        <MiniMap />
                    </ReactFlow>
                </div>
                {showSidebar && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-[5500]"
                            onClick={() => setShowSidebar(false)}
                        />
                        <div className="z-[6000] p-4 fixed inset-y-0 right-0 w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                            <div className="mb-4 flex justify-between items-center">
                                <h3 className="text-lg font-medium flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    Select node
                                </h3>
                            </div>
                            <div className="space-y-2">
                                {nodeTypes.map((type) => (
                                    <div
                                        key={type.id}
                                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer hover:bg-opacity-80 ${type.color}`}
                                        onClick={() => addNode(type)}
                                    >
                                        <div className={`flex items-center ${type.textColor}`}>
                                            {type.icon}
                                            {type.name}
                                        </div>
                                        <LuCirclePlus className={`${type.textColor} text-lg`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}