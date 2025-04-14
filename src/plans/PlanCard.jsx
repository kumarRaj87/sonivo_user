import React, { useState } from 'react';
import { Check, X, Phone, Smartphone, Clock, CreditCard, DollarSign, Shield } from 'lucide-react';

const PlanCard = ({ plan }) => {
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState('stripe');

  const getIcon = (feature) => {
    return feature ? 
      <Check className="w-5 h-5 text-green-500" /> : 
      <X className="w-5 h-5 text-red-500" />;
  };

  const openPaymentDialog = () => {
    setShowPaymentDialog(true);
  };

  const closePaymentDialog = () => {
    setShowPaymentDialog(false);
  };

  const handlePaymentMethodChange = (method) => {
    setActivePaymentMethod(method);
  };

  const PaymentMethodTab = ({ id, title, active, onClick }) => (
    <button
      className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
        active ? 'bg-primary-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      }`}
      onClick={() => onClick(id)}
    >
      {title}
    </button>
  );

  const PaymentDialog = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[6500]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Complete Your Subscription</h2>
          <button 
            onClick={closePaymentDialog}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Selected Plan</p>
          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
            <div className="bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
              <DollarSign className="text-white h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">{plan.name}</h3>
              <p className="text-sm text-gray-500">${plan.price} / {plan.planDuration} days</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex mb-4 border-b">
            <PaymentMethodTab 
              id="offline" 
              title="Offline Payment" 
              active={activePaymentMethod === 'offline'} 
              onClick={handlePaymentMethodChange} 
            />
            <PaymentMethodTab 
              id="stripe" 
              title="Stripe" 
              active={activePaymentMethod === 'stripe'} 
              onClick={handlePaymentMethodChange} 
            />
            <PaymentMethodTab 
              id="paypal" 
              title="PayPal" 
              active={activePaymentMethod === 'paypal'} 
              onClick={handlePaymentMethodChange} 
            />
            <PaymentMethodTab 
              id="razorpay" 
              title="Razorpay" 
              active={activePaymentMethod === 'razorpay'} 
              onClick={handlePaymentMethodChange} 
            />
          </div>

          {activePaymentMethod === 'offline' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Payment Title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea className="w-full p-2 border rounded-md" rows="3" placeholder="Payment Description"></textarea>
              </div>
            </div>
          )}

          {activePaymentMethod === 'stripe' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stripe ID</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Stripe ID" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Keys</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter API Keys" />
              </div>
            </div>
          )}

          {activePaymentMethod === 'paypal' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PayPal ID</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter PayPal ID" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Keys</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter API Keys" />
              </div>
            </div>
          )}

          {activePaymentMethod === 'razorpay' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Razorpay ID</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Razorpay ID" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Keys</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter API Keys" />
              </div>
            </div>
          )}
        </div>

        <div className="flex space-x-3">
          <button 
            onClick={closePaymentDialog}
            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            className="flex-1 py-3 px-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
          >
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:transform hover:scale-102 hover:shadow-xl">

      <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
          <div className="flex items-baseline">
            <span className="text-xl font-medium text-white opacity-90">$</span>
            <span className="text-3xl font-bold text-white ml-1">{plan.price}</span>
          </div>
        </div>
        <p className="text-white text-opacity-90 mt-2">{plan.description}</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            {getIcon(plan.dialer)} <span className="text-gray-700">Dialer</span>
          </div>
          <div className="flex items-center gap-2">
            {getIcon(plan.callBroadcast)} <span className="text-gray-700">Call Broadcast</span>
          </div>
          <div className="flex items-center gap-2">
            {getIcon(plan.messaging)} <span className="text-gray-700">Messaging</span>
          </div>
          <div className="flex items-center gap-2">
            {getIcon(plan.agentAccess)} <span className="text-gray-700">Agent Access</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            {getIcon(plan.isTrial)} 
            <span className="text-gray-700">
              {plan.isTrial ? "Trial Version" : "Full Version"}
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-6 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Phone className="w-4 h-4 text-primary-500" />
            </div>
            <span className="text-gray-700">Phonebook limit: <strong>{plan.phonebookLimit}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Smartphone className="w-4 h-4 text-primary-500" />
            </div>
            <span className="text-gray-700">Device limit: <strong>{plan.deviceLimit}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Clock className="w-4 h-4 text-primary-500" />
            </div>
            <span className="text-gray-700">Plan duration: <strong>{plan.planDuration} days</strong></span>
          </div>
        </div>

        <button
          onClick={openPaymentDialog}
          className="w-full py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" />
          Subscribe Now
        </button>
        
        <div className="flex items-center justify-center gap-1 mt-4 text-sm text-gray-500">
          <Shield className="w-4 h-4" />
          <span>Secure payment</span>
        </div>
      </div>
    </div>
    {showPaymentDialog && <PaymentDialog />}
    </>
  );
};

export default PlanCard;