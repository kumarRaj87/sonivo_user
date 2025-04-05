import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Users from './components/UserTable/index';
import Plan from './components/plan-2/PlansContainer';
import PaymentGateway from './components/payment/PaymentGateway';
import FrontPartner from './components/FrontPartnerGateway/FrontPartnerGateway';
import Orders from './components/orders/Layout';
import WebConfig from './appearance/WebConfig';
import SmtpSettings from './appearance/SmtpSettings';
import Translation from './appearance/Translation';
import Leads from './components/Leads/LeadsContainer';
import ManagePage from './components/ManagePage/index';
import Testimonial from './components/Testimonial/Testimonial';
import FAQ from './components/FAQ/FAQ';
import WebTheme from './components/Web theme/WebTheme';
import NotFound from './notfound/NotFound';
import PhoneBook from './productivity/phonebook/PhoneBook';
import { toast } from 'sonner';
import CallFlow from './productivity/callflow/CallFlow';
import DeviceManager from './components/DeviceManager.jsx/DeviceManager';
import PrepareDevice from './components/PrepareDevice.jsx/PrepareDevice';
import CallBroadcast from './components/CallBroadcast/CallBroadcast';
import RouteLoader from './loader/RouterLoader';
import Messaging from './messaging/Messaging';
import FlowCapture from './productivity/callcapture/FlowCapture';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
    if (storedAuth !== isAuthenticated) {
      setIsAuthenticated(storedAuth);
    }
  }, []);

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
    <>
      {/* <RouteLoader /> */}
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />}
        />

        {isAuthenticated ? (
          <Route element={<Layout handleLogout={handleLogout} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/phone-book' element={<PhoneBook />} />
            <Route path='/callflow' element={<CallFlow />} />
            <Route path="/dailer" element={<DeviceManager />} />
            <Route path="/prepare-device" element={<PrepareDevice />} />
            <Route path="/call-broadcast" element={<CallBroadcast />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/callflow-capture" element={<FlowCapture />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}

        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />

      </Routes>
    </>
  );
}

export default App;
