import React, { useState } from 'react';
import {
  Check,
  X,
  Phone,
  Smartphone,
  Clock,
  CreditCard,
  Shield,
  ChevronDown,
  ChevronUp,
  DollarSign
} from 'lucide-react';
import clsx from 'clsx';
import PaymentDialog from './PaymentDialog';

const PlanCard = ({ plan }) => {
  if (!plan) {
    return (
      <div className="bg-background rounded-xl overflow-hidden border border-gray-100 p-6 flex items-center justify-center">
        <p className="text-gray-500">Plan information not available</p>
      </div>
    );
  }

  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const getIcon = (feature) => {
    return feature ?
      <Check className="w-5 h-5 text-green-500" /> :
      <X className="w-5 h-5 text-red-500" />;
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="bg-background rounded-xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-yellow-500">{plan.title}</h2>
          <div className="flex items-baseline">
            <span className="text-xl font-medium text-yellow-500 opacity-90">$</span>
            <span className="text-3xl font-bold text-yellow-500 ml-1">{plan.price}</span>
          </div>
        </div>
        <div className="relative mt-2">
          <p className={clsx(
            "text-background text-opacity-90",
            !isDescriptionExpanded && "line-clamp-2"
          )}>
            {plan.description}
          </p>
          {plan.short_des?.length > 80 && (
            <button
              onClick={toggleDescription}
              className="text-yellow-500 text-opacity-90 hover:text-opacity-100 flex items-center gap-1 mt-1"
            >
              {isDescriptionExpanded ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Read More <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
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
              <Phone className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-gray-700">Phonebook limit: <strong>{plan.phonebook_limit}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Smartphone className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-gray-700">Device limit: <strong>{plan.device_limit}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Clock className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-gray-700">Plan duration: <strong>{plan.trial_days} days</strong></span>
          </div>
        </div>

        <button
          onClick={() => setShowPaymentDialog(true)}
          className="w-full py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-yellow-500 font-medium rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" />
          Subscribe Now
        </button>

        <div className="flex items-center justify-center gap-1 mt-4 text-sm text-gray-500">
          <Shield className="w-4 h-4" />
          <span>Secure payment</span>
        </div>
      </div>

      {showPaymentDialog && (
        <PaymentDialog 
          plan={plan} 
          onClose={() => setShowPaymentDialog(false)} 
        />
      )}
    </div>
  );
};

export default PlanCard;