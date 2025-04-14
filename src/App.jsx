import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import NotFound from './notfound/NotFound';
import PhoneBook from './productivity/phonebook/PhoneBook';
import { toast } from 'sonner';
import CallFlow from './productivity/callflow/CallFlow';
import PrepareDevice from './components/PrepareDevice/PrepareDevice';
import CallBroadcast from './components/CallBroadcast/CallBroadcast';
import Messaging from './messaging/Messaging';
import FlowCapture from './productivity/callcapture/FlowCapture';
import CreateAgentTable from './components/CreateAgent/CreateAgentTable';
import CallForceTable from './components/CallForce/CallForceTable';

import AgentIncomingCallsTable from './components/AgentIncomingCalls/AgentIncomingCallsTable';
import Dailer from './components/Dailer/Dailer';
import DeviceManager from './deviceManager/DeviceManager';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
    if (storedAuth !== isAuthenticated) {
      setIsAuthenticated(storedAuth);
    }
  }, [isAuthenticated]);

  const handleLogin = (email, password) => {
    if (email === 'user@yopmail.com' && password === 'Test@123') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    toast.success("loggedout successfully!")
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />}
      />

      <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />

      {isAuthenticated ? (
        <Route element={<Layout handleLogout={handleLogout} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/phone-book' element={<PhoneBook />} />
          <Route path='/callflow' element={<CallFlow />} />
          <Route path="/dailer" element={<Dailer />} />
          <Route path="/prepare-device" element={<PrepareDevice />} />
          <Route path="/call-broadcast" element={<CallBroadcast />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/callflow-capture" element={<FlowCapture />} />
          <Route path="/create-agent" element={<CreateAgentTable />} />
          <Route path="/call-force" element={<CallForceTable />} />
          <Route path="/incoming-agent" element={<AgentIncomingCallsTable />} />
          <Route path="/device-manager" element={<DeviceManager />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}

    </Routes>
  );
}

export default App;