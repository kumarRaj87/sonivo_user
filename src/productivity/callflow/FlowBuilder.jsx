import { useState, useCallback } from 'react';
import axios from 'axios';
import { nodeTypes } from './nodeTypes';
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
import { toast } from 'sonner';

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

export default function FlowBuilder({ onClose }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [selectedNode, setSelectedNode] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [flowTitle, setFlowTitle] = useState('Testing flow');
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [saveError, setSaveError] = useState(null);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onNodeClick = useCallback((_, node) => {
        setSelectedNode(node);
    }, []);

    const removeNode = useCallback((id) => {
        setNodes((nds) => nds.filter(node => node.id !== id));
    }, [setNodes]);

    const addNode = useCallback((type) => {
        const newNodeId = `${Date.now()}`;

        const newNode = {
            id: newNodeId,
            type: 'default',
            position: { x: 250, y: nodes.length * 150 + 200 },
            data: {
                label: (
                    <div className="p-2 relative">
                        <button
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                            onClick={() => removeNode(newNodeId)}
                        >
                            ✖
                        </button>
                        {type.content}
                    </div>
                )
            },
            style: {
                background: 'white',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                width: 320
            }
        };

        setNodes((nds) => [...nds, newNode]);
        setShowSidebar(false);
    }, [nodes, setNodes]);

    const toggleSidebar = useCallback(() => {
        setShowSidebar(prev => !prev);
    }, []);

    const saveFlow = useCallback(async () => {
        setIsSaving(true);
        setSaveSuccess(false);
        setSaveError(null);

        try {
            // Prepare the flow data for the API
            const flowData = {
                title: flowTitle,
                nodes: nodes.map(node => ({
                    id: node.id,
                    type: node.type,
                    data: node.data
                })),
                edges: edges.map(edge => ({
                    source: edge.source,
                    target: edge.target
                })),
                flowId: `flow-${Date.now()}`
            };
            const authToken = localStorage.getItem('authToken');
            // Make the API call
            const response = await axios.post('https://vokal-api.oyelabs.com/chatflow/add_new',
                flowData,
                {
                    headers: {
                        'accept': 'application/json',
                        'access-token': authToken
                    }
                }
            );

            if (response.data.success) {
                toast.success("Flow chat saved successfully!")
                setSaveSuccess(true);
                setTimeout(() => setSaveSuccess(false), 3000);
            } else {
                toast.error(response.data.message || 'Failed to save flow')
                setSaveError(response.data.message || 'Failed to save flow');
            }
        } catch (error) {
            toast.error(response.data.message || 'Failed to save flow')
            console.error('Error saving flow:', error);
            setSaveError(error.message || 'Failed to save flow');
        } finally {
            setIsSaving(false);
        }
    }, [flowTitle, nodes, edges]);

    return (
        <div className="h-screen w-full bg-background">
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
                    <input
                        type="text"
                        value={flowTitle}
                        onChange={(e) => setFlowTitle(e.target.value)}
                        className="border-b border-gray-300 focus:border-blue-500 outline-none px-1 py-0.5"
                    />
                    <button
                        onClick={saveFlow}
                        disabled={isSaving}
                        className="text-green-600 hover:text-green-700 flex items-center"
                    >
                        {isSaving ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Saving...
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Save
                            </>
                        )}
                    </button>
                    <button
                        onClick={toggleSidebar}
                        className="flex items-center p-3 bg-blue-50 text-blue-500 rounded-full hover:bg-blue-100 transition-colors"
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
                        <Panel position="top-right">
                            {saveSuccess && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                                    Flow saved successfully!
                                </div>
                            )}
                            {saveError && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                    {saveError}
                                </div>
                            )}
                        </Panel>
                    </ReactFlow>
                </div>
                {showSidebar && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-[5500]"
                            onClick={() => setShowSidebar(false)}
                        />
                        <div className="z-[6000] p-4 fixed inset-y-0 right-0 w-96 bg-background shadow-xl transform transition-transform duration-300 ease-in-out">
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