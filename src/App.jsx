import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './login/Login';
import Layout from './components/Layout';
import Dashboard from './dashboard/Dashboard';
import NotFound from './notfound/NotFound';
import PhoneBook from './productivity/phonebook/PhoneBook';
import { toast } from 'sonner';
import CallFlow from './productivity/callflow/CallFlow';
import PrepareDevice from './PrepareDevice/PrepareDevice';
import CallBroadcast from './CallBroadcast/CallBroadcast';
import Messaging from './messaging/Messaging';
import FlowCapture from './productivity/callcapture/FlowCapture';
import CreateAgentTable from './CreateAgent/CreateAgentTable';
import CallForceTable from './CallForce/CallForceTable';

import AgentIncomingCallsTable from './AgentIncomingCalls/AgentIncomingCallsTable';
import Dialer from './Dialer/Dialer';
import DeviceManager from './deviceManager/DeviceManager';
import PlansContainer from './plans/PlansContainer';

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

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    toast.success("loggedout successfully!")
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />}
      />

      <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />

      {isAuthenticated ? (
        <Route element={<Layout handleLogout={handleLogout} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/phone-book' element={<PhoneBook />} />
          <Route path='/callflow' element={<CallFlow />} />
          <Route path="/dialer" element={<Dialer />} />
          <Route path="/prepare-device" element={<PrepareDevice />} />
          <Route path="/call-broadcast" element={<CallBroadcast />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/callflow-capture" element={<FlowCapture />} />
          <Route path="/create-agent" element={<CreateAgentTable />} />
          <Route path="/call-force" element={<CallForceTable />} />
          <Route path="/incoming-agent" element={<AgentIncomingCallsTable />} />
          <Route path="/device-manager" element={<DeviceManager />} />
          <Route path="/plans" element={<PlansContainer/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}

    </Routes>
  );
}

export default App;