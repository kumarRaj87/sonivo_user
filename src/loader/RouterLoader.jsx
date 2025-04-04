import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RouteLoader = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Start loading when route changes
        setIsLoading(true);

        // Simulate completion of loading after route change
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, [location]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all duration-300">
            <div className="flex items-center justify-center h-screen">
                <div className="w-12 h-12 border-4 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default RouteLoader;