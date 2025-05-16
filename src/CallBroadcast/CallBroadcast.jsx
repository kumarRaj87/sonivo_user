import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import Loader from '../components/loader/Loader';

const CallBroadcast = () => {
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [campaigns, setCampaigns] = useState([
    // Static data for fallback
    {
      id: 1,
      title: 'Summer Promotion',
      campaignId: 'CAMP-001',
      deviceName: 'Device 1',
      phonebook: 'Customers',
      status: 'Active',
      schedule: '2023-06-15 10:00',
      createdAt: '2023-06-10',
    },
    {
      id: 2,
      title: 'Product Launch',
      campaignId: 'CAMP-002',
      deviceName: 'Device 2',
      phonebook: 'Leads',
      status: 'Pending',
      schedule: '2023-06-20 14:30',
      createdAt: '2023-06-12',
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    device: '',
    phonebook: '',
    schedule: ''
  });

  const tableHeaders = [
    'Title',
    'Campaign ID',
    'Device name',
    'Phonebook',
    'Status',
    'Schedule',
    'Created at',
    'Logs',
    'Delete'
  ];

  // API Functions
  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/campaign/get_my_campaign');
      const data = await response.json();
      if (data.statusCode === 200 && data.data) {
        setCampaigns(data.data);
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      // Keep static data as fallback
    }
  };

  const createCampaign = async (campaignData) => {
    try {
      const response = await fetch('/campaign/add_new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaignData),
      });
      const data = await response.json();
      if (data.statusCode === 201) {
        fetchCampaigns(); // Refresh the list
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error creating campaign:', error);
      return false;
    }
  };

  const deleteCampaign = async (campaignId) => {
    try {
      const response = await fetch(`/campaign/del_broadcast/${campaignId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.statusCode === 200) {
        fetchCampaigns(); // Refresh the list
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting campaign:', error);
      return false;
    }
  };

  const fetchCampaignLogs = async (campaignId) => {
    try {
      const response = await fetch(`/campaign/get_logs/${campaignId}`);
      const data = await response.json();
      if (data.statusCode === 200) {
        // Handle logs data
        console.log('Campaign logs:', data.data);
      }
    } catch (error) {
      console.error('Error fetching campaign logs:', error);
    }
  };

  const handleRingCallback = async (device, outgoing) => {
    try {
      const response = await fetch('/campaign/ring', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          callStatus: "string",
          device,
          outgoing
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Ring callback successful:', data);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error in ring callback:', error);
      return false;
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const campaignData = {
      title: formData.title,
      device_id: formData.device,
      phonebook: formData.phonebook,
      schedule: formData.schedule || new Date().toISOString()
    };

    const success = await createCampaign(campaignData);
    
    if (success) {
      // Trigger ring callback after successful campaign creation
      await handleRingCallback(formData.device, formData.phonebook);
      
      setFormData({
        title: '',
        device: '',
        phonebook: '',
        schedule: ''
      });
      setShowCampaignModal(false);
    }
  };

  const handleDelete = async (id) => {
    const success = await deleteCampaign(id);
    if (success) {
      setCampaigns(campaigns.filter(campaign => campaign.id !== id));
    }
  };

  const handleViewLogs = (campaignId) => {
    fetchCampaignLogs(campaignId);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-secondary w-full">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/call_broadcast.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full sm:justify-between justify-start sm:items-center items-start sm:flex-row flex flex-col'>
          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary">Call Broadcast</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Call Broadcast</span>
            </div>
          </div>
          <button
            onClick={() => setShowCampaignModal(true)}
            className="text-sm self-end bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            Set Campaign
          </button>
        </div>
      </div>

      <div className="bg-background rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {campaign.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.campaignId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.deviceName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.phonebook}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.schedule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button 
                    className="text-primary hover:text-primary/80"
                    onClick={() => handleViewLogs(campaign.id)}
                  >
                    View
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleDelete(campaign.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showCampaignModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[5005]">
          <div className="bg-background w-full max-w-md rounded-xl shadow-lg">
            <div className="flex items-center gap-4 p-4 border-b">
              <button
                onClick={() => setShowCampaignModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={24} />
              </button>
              <h2 className="text-lg font-medium">Set campaign</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                  Title
                </div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                  Select device
                </div>
                <select
                  name="device"
                  value={formData.device}
                  onChange={handleInputChange}
                  className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary appearance-none bg-background"
                >
                  <option value="">Select a device</option>
                  <option value="Device 1">Device 1</option>
                  <option value="Device 2">Device 2</option>
                  <option value="Device 3">Device 3</option>
                </select>
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                  Select phonebook
                </div>
                <select
                  name="phonebook"
                  value={formData.phonebook}
                  onChange={handleInputChange}
                  className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary appearance-none bg-background"
                >
                  <option value="">Select a phonebook</option>
                  <option value="Customers">Customers</option>
                  <option value="Leads">Leads</option>
                  <option value="VIP Clients">VIP Clients</option>
                </select>
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                  Schedule
                </div>
                <div className="relative">
                  <input
                    type="datetime-local"
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleInputChange}
                    className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  />
                  <FaRegCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 italic mt-1">Ignore it to send immediately</p>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-2 px-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallBroadcast;