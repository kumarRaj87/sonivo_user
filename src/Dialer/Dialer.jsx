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