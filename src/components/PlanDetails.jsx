import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsGift } from 'react-icons/bs';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsPhoneFill } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';

const PlanDetails = () => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await axios.get('https://vokal-api.oyelabs.com/get_user_plan', {
          headers: {
            'accept': 'application/json',
            'access-token': localStorage.getItem('authToken')
          }
        });
        
        if (response.data.success) {
          setPlan(response.data.data.plan);
        } else {
          setError('Failed to fetch plan details');
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching plan details');
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading plan details...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  if (!plan) {
    return <div className="p-6 text-center">No plan information available</div>;
  }

  return (
    <div className="p-6 border-t">
      <h3 className="text-lg font-medium text-center mb-6">Plan</h3>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <BsGift className="text-2xl text-primary" />
          <span className="text-xl font-medium">{plan.title}</span>
        </div>
 
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold">{plan.currency === 'INR' && '₹'}{plan.currency === 'USD' && '$'}{plan.price}</span>
          <span className="text-gray-600">/ {plan.plan_duration} day(s)</span>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Whats included?</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {plan.dialer ? (
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              ) : (
                <IoCloseCircleOutline className="text-red-500 text-xl" />
              )}
              <span>Dialer</span>
            </div>
            
            <div className="flex items-center gap-2">
              {plan.call_broadcast ? (
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              ) : (
                <IoCloseCircleOutline className="text-red-500 text-xl" />
              )}
              <span>Call Broadcast</span>
            </div>
            
            <div className="flex items-center gap-2">
              {plan.messaging ? (
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              ) : (
                <IoCloseCircleOutline className="text-red-500 text-xl" />
              )}
              <span>Messaging</span>
            </div>
            
            <div className="flex items-center gap-2">
              {plan.agent_access ? (
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              ) : (
                <IoCloseCircleOutline className="text-red-500 text-xl" />
              )}
              <span>Agent access</span>
            </div>
            
            <div className="flex items-center gap-2">
              <HiOutlineUsers className="text-gray-600 text-xl" />
              <span>Phonebook limit: {plan.phonebook_limit}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <BsPhoneFill className="text-gray-600 text-xl" />
              <span>Device limit: {plan.device_limit}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <BiTime className="text-gray-600 text-xl" />
              <span>Plan duration: {plan.plan_duration} days</span>
            </div>
            
            <div className="flex items-center gap-2">
              {plan.isTrial ? (
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
              ) : (
                <IoCloseCircleOutline className="text-red-500 text-xl" />
              )}
              <span>Is trial? {plan.isTrial ? `Yes (${plan.trial_days} days)` : 'No'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;