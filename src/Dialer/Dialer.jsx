import React, { useEffect, useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { IoMdPhonePortrait } from "react-icons/io";
import axios from 'axios';
import Loader from '../components/loader/Loader';
import DialerPad from './DialerPad';
import CallLogs from './CallLogs';

const Dailer = () => {
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deviceSelected, setDeviceSelected] = useState(false);
  const [activeTab, setActiveTab] = useState('dialer');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [devicesLoading, setDevicesLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => setLoading(false), 300);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const fetchDevices = async () => {
    try {
      setDevicesLoading(true);
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(
        'https://vokal-api.oyelabs.com/user/get_my_devices',
        {
          headers: {
            'accept': 'application/json',
            'access-token': authToken
          }
        }
      );
      setDevices(response.data.data);
    } catch (error) {
      console.error('Error fetching devices:', error);
    } finally {
      setDevicesLoading(false);
    }
  };

  const handleDeviceModalOpen = async () => {
    await fetchDevices();
    setShowDeviceModal(true);
  };

  const handleDeviceSelection = (device) => {
    setSelectedDevice(device);
    setDeviceSelected(true);
    setShowDeviceModal(false);
  };

  const handleNumberInput = (number) => {
    setPhoneNumber(prev => prev + number);
  };

  const handleBackspace = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-secondary w-full">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/dialertitle.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>
          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary">Device Manager</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Device Manager</span>
            </div>
          </div>
          <button
            onClick={handleDeviceModalOpen}
            className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            {deviceSelected ? 'Change Device' : 'Select Device'}
          </button>
        </div>
      </div>

      {!deviceSelected ? (
        <div className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg">
          <IoInformationCircleOutline className="text-xl flex-shrink-0 text-blue-600" />
          <span className='text-xs'>Please select a device</span>
        </div>
      ) : (
        <div className="bg-secondary rounded-lg overflow-hidden w-full">
          {/* Device Info */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IoMdPhonePortrait className="text-xl text-primary" />
                <div>
                  <div className="font-medium">{selectedDevice.dataValues.title}</div>
                  <div className="text-sm text-gray-500">+{selectedDevice.dataValues.number}</div>
                </div>
              </div>
              <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">Ready</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex md:hidden border-b">
            <button
              className={`flex items-center gap-1 px-4 py-3 ${activeTab === 'dialer' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab('dialer')}
            >
              <span className="text-sm font-medium">Dialer</span>
            </button>
            <button
              className={`flex items-center gap-1 px-4 py-3 ${activeTab === 'logs' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab('logs')}
            >
              <span className="text-sm font-medium">Call logs</span>
            </button>
          </div>

          {/* Content based on active tab */}
          <div className='flex md:hidden'>
            {activeTab === 'dialer' ? (
              <DialerPad
                phoneNumber={phoneNumber}
                onNumberInput={handleNumberInput}
                onBackspace={handleBackspace}
                onClear={() => setPhoneNumber('')}
              />
            ) : (
              <CallLogs />
            )}
          </div>
          <div className='md:flex bg-secondary hidden w-full justify-between items-center p-4'>
            <div className='w-1/2 justify-start items-center flex'>
              <CallLogs />
            </div>
            <div className='w-1/3 justify-start items-center flex'>
              <DialerPad
                phoneNumber={phoneNumber}
                onNumberInput={handleNumberInput}
                onBackspace={handleBackspace}
                onClear={() => setPhoneNumber('')}
              />
            </div>
          </div>
        </div>
      )}

      {/* Device Selection Modal */}
      {showDeviceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[5005]">
          <div className="bg-background w-full max-w-md rounded-xl shadow-lg">
            <div className="flex items-center gap-4 p-4 border-b">
              <button
                onClick={() => setShowDeviceModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={24} />
              </button>
              <h2 className="text-lg font-medium">Choose device</h2>
            </div> 

            <div className="p-4">
              {devicesLoading ? (
                <div className="flex justify-center items-center p-8">
                  <Loader />
                </div>
              ) : devices.length > 0 ? (
                devices.map(device => (
                  <div
                    key={device.dataValues.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors mb-2"
                    onClick={() => handleDeviceSelection(device)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <MdOutlinePhoneIphone className="text-xl text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">{device.dataValues.title}</div>
                        <div className="text-sm text-gray-500">+{device.dataValues.number}</div>
                      </div>
                    </div>
                    <IoIosArrowForward className="text-xl text-gray-400" />
                  </div>
                ))
              ) : (
                <div className="text-center p-4 text-gray-500">
                  No devices found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dailer;

// import React, { useEffect, useState } from 'react';
// import { IoInformationCircleOutline } from 'react-icons/io5';
// import { IoMdClose } from 'react-icons/io';
// import { MdOutlinePhoneIphone } from 'react-icons/md';
// import { IoIosArrowForward } from 'react-icons/io';
// import { IoMdPhonePortrait } from "react-icons/io";
// import { FiPhone } from 'react-icons/fi';
// import { Device } from '@twilio/voice-sdk';
// import axios from 'axios';
// import Loader from '../components/loader/Loader';
// import DialerPad from './DialerPad';
// import CallLogs from './CallLogs';

// const Dailer = () => {
//   const [showDeviceModal, setShowDeviceModal] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [deviceSelected, setDeviceSelected] = useState(false);
//   const [activeTab, setActiveTab] = useState('dialer');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [devices, setDevices] = useState([]);
//   const [selectedDevice, setSelectedDevice] = useState(null);
//   const [devicesLoading, setDevicesLoading] = useState(false);
//   const [twilioDevice, setTwilioDevice] = useState(null);
//   const [callLogs, setCallLogs] = useState([]);
//   const [callStatus, setCallStatus] = useState('idle');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setTimeout(() => setLoading(false), 300);
//       } catch (error) {
//         console.error('Error:', error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Initialize Twilio Device when a device is selected
//   useEffect(() => {
//     if (selectedDevice) {
//       initializeTwilioDevice(selectedDevice.dataValues.id);
//     }
//   }, [selectedDevice]);

//   const fetchDevices = async () => {
//     try {
//       setDevicesLoading(true);
//       const authToken = localStorage.getItem('authToken');
//       const response = await axios.get(
//         'https://vokal-api.oyelabs.com/user/get_my_devices',
//         {
//           headers: {
//             'accept': 'application/json',
//             'access-token': authToken
//           }
//         }
//       );
//       setDevices(response.data.data);
//     } catch (error) {
//       console.error('Error fetching devices:', error);
//     } finally {
//       setDevicesLoading(false);
//     }
//   };

//   const handleDeviceModalOpen = async () => {
//     await fetchDevices();
//     setShowDeviceModal(true);
//   };

//   const handleDeviceSelection = (device) => {
//     setSelectedDevice(device);
//     setDeviceSelected(true);
//     setShowDeviceModal(false);
//   };

//   const handleNumberInput = (number) => {
//     setPhoneNumber(prev => prev + number);
//   };

//   const handleBackspace = () => {
//     setPhoneNumber(prev => prev.slice(0, -1));
//   };

//   // Twilio Functions
//   const getToken = async (deviceId) => {
//     try {
//       const response = await axios.post('https://vokal-api.oyelabs.com/generate-token', {
//         id: deviceId,
//         identity: `user_${deviceId}` // You can customize this identity
//       });
//       return response.data.data.token;
//     } catch (error) {
//       console.error('Error getting Twilio token:', error);
//       throw error;
//     }
//   };

//   const initializeTwilioDevice = async (deviceId) => {
//     try {
//       const token = await getToken(deviceId);
//       const device = new Device(token, { debug: true });

//       device.on('ready', () => console.log('Twilio device ready'));
//       device.on('error', (error) => console.error('Twilio error:', error));
//       device.on('disconnect', handleCallEnd);
//       device.on('incoming', handleIncomingCall);

//       setTwilioDevice(device);
//     } catch (error) {
//       console.error('Error initializing Twilio device:', error);
//     }
//   };

//   const makeCall = async () => {
//     if (!twilioDevice || !phoneNumber || !selectedDevice) return;

//     try {
//       setCallStatus('calling');
//       const deviceId = selectedDevice.dataValues.id;

//       // Start the call
//       const connection = await twilioDevice.connect({
//         To: phoneNumber,
//         device: deviceId
//       });

//       // Log call started
//       await axios.post('https://vokal-api.oyelabs.com/call/log', {
//         device_id: deviceId,
//         call_id: connection.parameters.CallSid,
//         mobile_to: phoneNumber,
//         mobile_from: selectedDevice.dataValues.number,
//         status: 'started',
//         route: 'outgoing'
//       });

//       setCallStatus('active');
//     } catch (error) {
//       console.error('Error making call:', error);
//       setCallStatus('idle');
//     }
//   };

//   const handleCallEnd = async (connection) => {
//     setCallStatus('idle');

//     try {
//       // Update call log
//       await axios.put(`https://vokal-api.oyelabs.com/call/log/${connection.parameters.CallSid}`, {
//         status: 'completed',
//         timer: connection.parameters.CallDuration || 0
//       });

//       // Refresh call logs
//       if (selectedDevice) {
//         fetchCallLogs(selectedDevice.dataValues.id);
//       }
//     } catch (error) {
//       console.error('Error updating call log:', error);
//     }
//   };

//   const handleIncomingCall = (connection) => {
//     // Handle incoming call
//     setCallStatus('incoming');

//     // You can add logic to accept/reject incoming calls
//     // For now, we'll just log them
//     connection.on('disconnect', () => {
//       setCallStatus('idle');
//     });
//   };

//   const fetchCallLogs = async (deviceId) => {
//     try {
//       const response = await axios.get(`https://vokal-api.oyelabs.com/call/device/${deviceId}`);
//       setCallLogs(response.data.data);
//     } catch (error) {
//       console.error('Error fetching call logs:', error);
//     }
//   };

//   const handleClearLogs = async () => {
//     if (!selectedDevice) return;

//     try {
//       await axios.delete(`https://vokal-api.oyelabs.com/call/device/${selectedDevice.dataValues.id}`);
//       setCallLogs([]);
//     } catch (error) {
//       console.error('Error clearing call logs:', error);
//     }
//   };

//   const handleCallFromLog = (number) => {
//     setPhoneNumber(number);
//     // You might want to automatically initiate the call here
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="min-h-[50vh] bg-secondary w-full">
//       {/* ... (previous device selection and header code remains the same) ... */}

//       {!deviceSelected ? (
//         <div className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg">
//           <IoInformationCircleOutline className="text-xl flex-shrink-0 text-blue-600" />
//           <span className='text-xs'>Please select a device</span>
//         </div>
//       ) : (
//         <div className="bg-secondary rounded-lg overflow-hidden w-full">
//           {/* Device Info */}
//           <div className="p-4 border-b">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <IoMdPhonePortrait className="text-xl text-primary" />
//                 <div>
//                   <div className="font-medium">{selectedDevice.dataValues.title}</div>
//                   <div className="text-sm text-gray-500">+{selectedDevice.dataValues.number}</div>
//                 </div>
//               </div>
//               <div className={`text-xs px-2 py-1 rounded ${callStatus === 'idle' ? 'bg-green-100 text-green-600' :
//                   callStatus === 'calling' ? 'bg-yellow-100 text-yellow-600' :
//                     callStatus === 'active' ? 'bg-blue-100 text-blue-600' :
//                       'bg-purple-100 text-purple-600'
//                 }`}>
//                 {callStatus === 'idle' ? 'Ready' :
//                   callStatus === 'calling' ? 'Calling...' :
//                     callStatus === 'active' ? 'In Call' : 'Incoming Call'}
//               </div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="flex md:hidden border-b">
//             <button
//               className={`flex items-center gap-1 px-4 py-3 ${activeTab === 'dialer' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('dialer')}
//             >
//               <span className="text-sm font-medium">Dialer</span>
//             </button>
//             <button
//               className={`flex items-center gap-1 px-4 py-3 ${activeTab === 'logs' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
//               onClick={() => {
//                 setActiveTab('logs');
//                 if (selectedDevice) {
//                   fetchCallLogs(selectedDevice.dataValues.id);
//                 }
//               }}
//             >
//               <span className="text-sm font-medium">Call logs</span>
//             </button>
//           </div>

//           {/* Content based on active tab */}
//           <div className='flex md:hidden'>
//             {activeTab === 'dialer' ? (
//               <DialerPad
//                 phoneNumber={phoneNumber}
//                 onNumberInput={handleNumberInput}
//                 onBackspace={handleBackspace}
//                 onClear={() => setPhoneNumber('')}
//                 onCall={makeCall}
//                 callStatus={callStatus}
//               />
//             ) : (
//               <CallLogs
//                 logs={callLogs}
//                 onClear={handleClearLogs}
//                 onCall={handleCallFromLog}
//               />
//             )}
//           </div>
//           <div className='md:flex bg-secondary hidden w-full justify-between items-center p-4'>
//             <div className='w-1/2 justify-start items-center flex'>
//               <CallLogs
//                 logs={callLogs}
//                 onClear={handleClearLogs}
//                 onCall={handleCallFromLog}
//               />
//             </div>
//             <div className='w-1/3 justify-start items-center flex'>
//               <DialerPad
//                 phoneNumber={phoneNumber}
//                 onNumberInput={handleNumberInput}
//                 onBackspace={handleBackspace}
//                 onClear={() => setPhoneNumber('')}
//                 onCall={makeCall}
//                 callStatus={callStatus}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Device Selection Modal (same as before) */}
//       {showDeviceModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[5005]">
//           <div className="bg-background w-full max-w-md rounded-xl shadow-lg">
//             <div className="flex items-center gap-4 p-4 border-b">
//               <button
//                 onClick={() => setShowDeviceModal(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <IoMdClose size={24} />
//               </button>
//               <h2 className="text-lg font-medium">Choose device</h2>
//             </div>

//             <div className="p-4">
//               {devicesLoading ? (
//                 <div className="flex justify-center items-center p-8">
//                   <Loader />
//                 </div>
//               ) : devices.length > 0 ? (
//                 devices.map(device => (
//                   <div
//                     key={device.dataValues.id}
//                     className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors mb-2"
//                     onClick={() => handleDeviceSelection(device)}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                         <MdOutlinePhoneIphone className="text-xl text-gray-600" />
//                       </div>
//                       <div>
//                         <div className="font-medium">{device.dataValues.title}</div>
//                         <div className="text-sm text-gray-500">+{device.dataValues.number}</div>
//                       </div>
//                     </div>
//                     <IoIosArrowForward className="text-xl text-gray-400" />
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center p-4 text-gray-500">
//                   No devices found
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const CallLogs = ({ logs, onClear, onCall }) => {
//   return (
//     <div className="p-4 w-full bg-background rounded-2xl">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center gap-2">
//           <FiPhone className="text-primary" />
//           <span className="text-sm font-medium">Call logs</span>
//         </div>
//         <button
//           onClick={onClear}
//           className="text-xs bg-red-50 text-red-500 px-3 py-1 rounded-md hover:bg-red-100 transition-colors"
//         >
//           Clear Logs
//         </button>
//       </div>

//       <div className="space-y-1">
//         {logs.length > 0 ? (
//           logs.map((log) => (
//             <div key={log.id} className="flex items-center justify-between py-3 border-b">
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d={log.route === 'outgoing' ? "M5 20l14-14M19 6v14" : "M5 10l14 14M19 10v10"} />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-sm font-medium">{log.mobile_to || log.mobile_from}</div>
//                   <div className="flex items-center gap-2 text-xs text-gray-500">
//                     <span>{new Date(log.createdAt).toLocaleDateString()}</span>
//                     <span>•</span>
//                     <span>{log.timer || '00:00'}</span>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onCall(log.mobile_to || log.mobile_from)}
//                 className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
//               >
//                 <FiPhone size={16} />
//               </button>
//             </div>
//           ))
//         ) : (
//           <div className="text-center py-6 text-gray-500">No call logs available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// const DialerPad = ({ phoneNumber, onNumberInput, onBackspace, onClear, onCall, callStatus }) => {
//   const dialerButtons = [
//     { value: '1', label: '1' },
//     { value: '2', label: '2', subLabel: 'ABC' },
//     { value: '3', label: '3', subLabel: 'DEF' },
//     { value: '4', label: '4', subLabel: 'GHI' },
//     { value: '5', label: '5', subLabel: 'JKL' },
//     { value: '6', label: '6', subLabel: 'MNO' },
//     { value: '7', label: '7', subLabel: 'PQRS' },
//     { value: '8', label: '8', subLabel: 'TUV' },
//     { value: '9', label: '9', subLabel: 'WXYZ' },
//     { value: '*', label: '*' },
//     { value: '0', label: '0', subLabel: '+' },
//     { value: '#', label: '#' },
//   ];

//   return (
//     <div className="p-4 w-full bg-background rounded-2xl">
//       <div className="flex justify-between items-center mb-5 px-3">
//         <div className="flex-1 text-center">
//           <div className="text-xl font-medium mb-2">
//             {phoneNumber || '+1'}
//           </div>
//         </div>
//         {phoneNumber && (
//           <button
//             onClick={onBackspace}
//             className="text-gray-500 hover:text-gray-700 p-2"
//           >
//             <FiDelete size={20} />
//           </button>
//         )}
//       </div>

//       <div className="grid grid-cols-3 gap-5 mb-5">
//         {dialerButtons.map((button) => (
//           <button
//             key={button.value}
//             onClick={() => onNumberInput(button.value)}
//             className="flex flex-col items-center justify-center h-14 w-14 mx-auto rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors"
//           >
//             <span className="text-xl font-medium">{button.label}</span>
//             {button.subLabel && (
//               <span className="text-xs text-gray-500">{button.subLabel}</span>
//             )}
//           </button>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4">
//         <button
//           onClick={onCall}
//           className={`h-14 w-14 rounded-full flex items-center justify-center ${phoneNumber && callStatus === 'idle'
//               ? 'bg-green-600 hover:bg-green-700'
//               : 'bg-gray-400 cursor-not-allowed'
//             }`}
//           disabled={!phoneNumber || callStatus !== 'idle'}
//         >
//           {callStatus === 'calling' ? (
//             <div className="animate-pulse">...</div>
//           ) : (
//             <FiPhone size={22} className="text-background" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dailer;