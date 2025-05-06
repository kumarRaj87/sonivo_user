

// import React, { useState } from 'react';
// import {
//   Check,
//   X,
//   Phone,
//   Smartphone,
//   Clock,
//   CreditCard,
//   Shield,
//   ChevronDown,
//   ChevronUp,
//   DollarSign
// } from 'lucide-react';
// import clsx from 'clsx';
// import { FaMoneyBillAlt } from 'react-icons/fa';
// import { FaStripeS } from 'react-icons/fa6';
// import { FaPaypal } from 'react-icons/fa';
// import { SiRazorpay } from 'react-icons/si';

// const PlanCard = ({ plan }) => {
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [activePaymentMethod, setActivePaymentMethod] = useState('stripe');
//   const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

//   const getIcon = (feature) => {
//     return feature ?
//       <Check className="w-5 h-5 text-green-500" /> :
//       <X className="w-5 h-5 text-red-500" />;
//   };

//   const toggleDescription = () => {
//     setIsDescriptionExpanded(!isDescriptionExpanded);
//   };

//   const PaymentMethodTab = ({ id, title, active, onClick }) => (
//     <button
//       className={clsx(
//         'px-4 py-3 w-full flex justify-start items-center text-md font-medium transition-colors duration-200',
//         active ? 'bg-primary-500 text-background' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
//       )}
//       onClick={() => onClick(id)}
//     >
//       {title}
//     </button>
//   );

//   const PaymentDialog = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[6500]">
//       <div className="bg-background rounded-2xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto hide-scrollbar m-4">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold">Complete Your Subscription</h2>
//           <button
//             onClick={() => setShowPaymentDialog(false)}
//             className="p-3 rounded-full hover:bg-gray-100"
//           >
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <div className="mb-6">
//           <p className="text-gray-600 mb-2">Selected Plan</p>
//           <div className="flex items-center bg-gray-50 p-3 rounded-lg">
//             <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
//               <DollarSign className="text-background h-5 w-5" />
//             </div>
//             <div>
//               <h3 className="font-medium">{plan.name}</h3>
//               <p className="text-sm text-gray-500">${plan.price} / {plan.planDuration} days</p>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 w-full">
//           <div className="flex flex-col mb-4 border-b gap-4 justify-between items-center w-full">
//             <PaymentMethodTab
//               id="offline"
//               title={<><FaMoneyBillAlt className="inline mr-3" />Offline</>}
//               active={activePaymentMethod === 'offline'}
//               onClick={setActivePaymentMethod}
//             />
//             <PaymentMethodTab
//               id="stripe"
//               title={<><FaStripeS className="inline mr-3" />Stripe</>}
//               active={activePaymentMethod === 'stripe'}
//               onClick={setActivePaymentMethod}
//             />
//             <PaymentMethodTab
//               id="paypal"
//               title={<><FaPaypal className="inline mr-3" />PayPal</>}
//               active={activePaymentMethod === 'paypal'}
//               onClick={setActivePaymentMethod}
//             />
//             <PaymentMethodTab
//               id="razorpay"
//               title={<><SiRazorpay className="inline mr-3" />Razorpay</>}
//               active={activePaymentMethod === 'razorpay'}
//               onClick={setActivePaymentMethod}
//             />
//           </div>

//           <div className="p-4 bg-gray-50 rounded-lg">
//             <p className="text-sm text-gray-600 text-center">
//               {activePaymentMethod === 'offline' &&
//                 "Please contact our support team for offline payment instructions."}
//               {activePaymentMethod === 'stripe' &&
//                 "You'll be redirected to Stripe to complete your payment securely."}
//               {activePaymentMethod === 'paypal' &&
//                 "You'll be redirected to PayPal to complete your payment."}
//               {activePaymentMethod === 'razorpay' &&
//                 "You'll be redirected to Razorpay to complete your payment."}
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3">
//           <button
//             onClick={() => setShowPaymentDialog(false)}
//             className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             className="flex-1 py-3 px-4 bg-primary-500 text-yellow-500 font-medium rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
//           >
//             <CreditCard className="w-5 h-5" />
//             Pay ${plan.price}
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-background rounded-xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:shadow-lg">
//       <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-6">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold text-yellow-500">{plan.name}</h2>
//           <div className="flex items-baseline">
//             <span className="text-xl font-medium text-yellow-500 opacity-90">$</span>
//             <span className="text-3xl font-bold text-yellow-500 ml-1">{plan.price}</span>
//           </div>
//         </div>
//         <div className="relative mt-2">
//           <p className={clsx(
//             "text-background text-opacity-90",
//             !isDescriptionExpanded && "line-clamp-2"
//           )}>
//             {plan.description}
//           </p>
//           {plan.description.length > 80 && (
//             <button
//               onClick={toggleDescription}
//               className="text-yellow-500 text-opacity-90 hover:text-opacity-100 flex items-center gap-1 mt-1"
//             >
//               {isDescriptionExpanded ? (
//                 <>Show Less <ChevronUp className="w-4 h-4" /></>
//               ) : (
//                 <>Read More <ChevronDown className="w-4 h-4" /></>
//               )}
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="flex items-center gap-2">
//             {getIcon(plan.dialer)} <span className="text-gray-700">Dialer</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {getIcon(plan.callBroadcast)} <span className="text-gray-700">Call Broadcast</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {getIcon(plan.messaging)} <span className="text-gray-700">Messaging</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {getIcon(plan.agentAccess)} <span className="text-gray-700">Agent Access</span>
//           </div>
//           <div className="flex items-center gap-2 col-span-2">
//             {getIcon(plan.isTrial)}
//             <span className="text-gray-700">
//               {plan.isTrial ? "Trial Version" : "Full Version"}
//             </span>
//           </div>
//         </div>

//         <div className="space-y-4 mb-6 border-t border-gray-100 pt-4">
//           <div className="flex items-center gap-3">
//             <div className="bg-gray-100 p-2 rounded-full">
//               <Phone className="w-4 h-4 text-yellow-500" />
//             </div>
//             <span className="text-gray-700">Phonebook limit: <strong>{plan.phonebookLimit}</strong></span>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="bg-gray-100 p-2 rounded-full">
//               <Smartphone className="w-4 h-4 text-yellow-500" />
//             </div>
//             <span className="text-gray-700">Device limit: <strong>{plan.deviceLimit}</strong></span>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="bg-gray-100 p-2 rounded-full">
//               <Clock className="w-4 h-4 text-yellow-500" />
//             </div>
//             <span className="text-gray-700">Plan duration: <strong>{plan.planDuration} days</strong></span>
//           </div>
//         </div>

//         <button
//           onClick={() => setShowPaymentDialog(true)}
//           className="w-full py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-yellow-500 font-medium rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
//         >
//           <CreditCard className="w-5 h-5" />
//           Subscribe Now
//         </button>

//         <div className="flex items-center justify-center gap-1 mt-4 text-sm text-gray-500">
//           <Shield className="w-4 h-4" />
//           <span>Secure payment</span>
//         </div>
//       </div>

//       {showPaymentDialog && <PaymentDialog />}
//     </div>
//   );
// };

// export default PlanCard;



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
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaStripeS } from 'react-icons/fa6';
import { FaPaypal } from 'react-icons/fa';
import { SiRazorpay } from 'react-icons/si';

const PlanCard = ({ plan }) => {
  if (!plan) {
    return (
      <div className="bg-background rounded-xl overflow-hidden border border-gray-100 p-6 flex items-center justify-center">
        <p className="text-gray-500">Plan information not available</p>
      </div>
    );
  }

  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState('stripe');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const getIcon = (feature) => {
    return feature ?
      <Check className="w-5 h-5 text-green-500" /> :
      <X className="w-5 h-5 text-red-500" />;
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const PaymentMethodTab = ({ id, title, active, onClick }) => (
    <button
      className={clsx(
        'px-4 py-3 w-full flex justify-start items-center text-md font-medium transition-colors duration-200',
        active ? 'bg-primary-500 text-background' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      )}
      onClick={() => onClick(id)}
    >
      {title}
    </button>
  );

  const PaymentDialog = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[6500]">
      <div className="bg-background rounded-2xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto hide-scrollbar m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Complete Your Subscription</h2>
          <button
            onClick={() => setShowPaymentDialog(false)}
            className="p-3 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Selected Plan</p>
          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
            <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
              <DollarSign className="text-background h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-red-500">{plan.title}</h3>
              <p className="text-sm text-gray-500">${plan.price} / {plan.planDuration} days</p>
            </div>
          </div>
        </div>

        <div className="mb-6 w-full">
          <div className="flex flex-col mb-4 border-b gap-4 justify-between items-center w-full">
            <PaymentMethodTab
              id="offline"
              title={<><FaMoneyBillAlt className="inline mr-3" />Offline</>}
              active={activePaymentMethod === 'offline'}
              onClick={setActivePaymentMethod}
            />
            <PaymentMethodTab
              id="stripe"
              title={<><FaStripeS className="inline mr-3" />Stripe</>}
              active={activePaymentMethod === 'stripe'}
              onClick={setActivePaymentMethod}
            />
            <PaymentMethodTab
              id="paypal"
              title={<><FaPaypal className="inline mr-3" />PayPal</>}
              active={activePaymentMethod === 'paypal'}
              onClick={setActivePaymentMethod}
            />
            <PaymentMethodTab
              id="razorpay"
              title={<><SiRazorpay className="inline mr-3" />Razorpay</>}
              active={activePaymentMethod === 'razorpay'}
              onClick={setActivePaymentMethod}
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              {activePaymentMethod === 'offline' &&
                "Please contact our support team for offline payment instructions."}
              {activePaymentMethod === 'stripe' &&
                "You'll be redirected to Stripe to complete your payment securely."}
              {activePaymentMethod === 'paypal' &&
                "You'll be redirected to PayPal to complete your payment."}
              {activePaymentMethod === 'razorpay' &&
                "You'll be redirected to Razorpay to complete your payment."}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setShowPaymentDialog(false)}
            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 px-4 bg-primary-500 text-yellow-500 font-medium rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
          >
            <CreditCard className="w-5 h-5" />
            Pay ${plan.price}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-background rounded-xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-yellow-500">{plan.name}</h2>
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
          {plan.description?.length > 80 && (
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
            <span className="text-gray-700">Phonebook limit: <strong>{plan.phonebookLimit}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Smartphone className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-gray-700">Device limit: <strong>{plan.deviceLimit}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Clock className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-gray-700">Plan duration: <strong>{plan.planDuration} days</strong></span>
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

      {showPaymentDialog && <PaymentDialog />}
    </div>
  );
};

export default PlanCard;