import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { IoEye } from 'react-icons/io5';
import { IoMdEyeOff } from 'react-icons/io';

export default function EditAgentModal({ isOpen, setIsEditModalOpen, agent, onAgentUpdated }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        comments: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (agent) {
            setFormData({
                name: agent.name || '',
                email: agent.email || '',
                password: '',
                mobile: agent.mobile || '',
                comments: agent.comments || ''
            });
        }
    }, [agent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const authToken = localStorage.getItem('authToken');

            if (!authToken) {
                throw new Error('No authentication token found');
            }

            // Prepare the payload - don't send password if it's empty
            const payload = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                comments: formData.comments
            };

            // Only include password if it's been changed
            if (formData.password) {
                payload.password = formData.password;
            }

            const response = await axios.patch(
                `https://vokal-api.oyelabs.com/agent/update_agent_profile/${agent.uid}`,
                payload,
                {
                    headers: {
                        'accept': 'application/json',
                        'access-token': authToken,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                toast.success("Agent updated successfully!");
                onAgentUpdated();
                setIsEditModalOpen(false);
            }
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Failed to update agent');
            console.error('Error updating agent:', err);
            toast.error('Error updating agent');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen || !agent) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5500]">
            <div className="bg-background rounded-2xl w-full max-w-md">
                <div className="p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-900">Edit Agent</h3>
                        <button
                            onClick={() => {
                                setIsEditModalOpen(false)
                                setError(null)
                                setFormData({
                                    name: agent.name || '',
                                    email: agent.email || '',
                                    password: '',
                                    mobile: agent.mobile || '',
                                    comments: agent.comments || ''
                                })
                            }}
                            className="text-gray-400 hover:text-gray-500"
                            disabled={isLoading}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input */}
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                                Email
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                                Password (leave blank to keep current)
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Leave blank to keep current"
                                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                            >
                                {showPassword ? (
                                    <IoEye className='text-accent' size={24} />
                                ) : (
                                    <IoMdEyeOff className='text-accent' size={24} />
                                )}
                            </button>
                        </div>

                        {/* Name Input */}
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                                Name
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        {/* Mobile Input */}
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                                Mobile
                            </div>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        {/* Comment Textarea */}
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                                Short comment
                            </div>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                rows="3"
                                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#2C3A47] text-background rounded-lg hover:bg-[#1e2832] transition-colors disabled:opacity-70"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Updating...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    Update
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}