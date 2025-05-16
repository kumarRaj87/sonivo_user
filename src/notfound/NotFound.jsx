import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader/Loader';

const NotFound = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center h-full bg-secondary relative overflow-hidden w-full">
      {/* Background decorative elements */}
      {/* <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary-400/20 blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-primary-400/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-40 w-72 h-72 rounded-full bg-primary-400/15 blur-3xl"></div> */}

      {/* Main content container */}
      <div className="relative z-10 max-w-8xl w-full py-16 text-center">
        {/* 404 large text */}
        <h1 className="font-bold text-9xl tracking-tight text-primary mb-2">404</h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-primary-400/30"></div>
          <div className="mx-4 text-sm font-medium text-primary-400">Page Not Found</div>
          <div className="h-px w-12 bg-primary-400/30"></div>
        </div>

        {/* Descriptive text */}
        <h2 className="text-2xl font-semibold text-primary mb-4">Oops! We've lost this page</h2>
        <p className="text-primary-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-background font-medium rounded-lg 
                      shadow-lg hover:shadow-xl transition-all duration-300 transform 
                      hover:-translate-y-1 w-full sm:w-auto"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-secondary text-primary border border-primary/20 
                      font-medium rounded-lg shadow hover:shadow-md transition-all 
                      duration-300 hover:bg-secondary/80 w-full sm:w-auto"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-primary/20 rounded-md animate-bounce"
        style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-primary/20 rounded-full animate-ping"
        style={{ animationDuration: '4s', animationDelay: '1s' }}>
      </div>
      <div className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-primary/10 rotate-45 animate-pulse"
        style={{ animationDuration: '5s' }}>
      </div>
    </div>
  );
};

export default NotFound;