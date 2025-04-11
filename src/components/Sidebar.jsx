// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { MdSpaceDashboard } from "react-icons/md";
// import { MdDialerSip } from "react-icons/md";
// import { MdPhoneForwarded } from "react-icons/md";
// import { MdWifiCalling3 } from "react-icons/md";
// import { IoMdMail } from "react-icons/io";
// import { FaSave } from "react-icons/fa";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import {
//     Contact,
//     ArrowDownUp
// } from 'lucide-react'

// import { TbArrowFork } from "react-icons/tb";
// import { TbPhoneRinging } from "react-icons/tb";
// import { PiPhonePlusBold } from "react-icons/pi";

// const Sidebar = () => {
//     const location = useLocation()

//     const menuItems = [
//         { divider: true, label: 'Useful' },
//         { path: '/dashboard', icon: MdSpaceDashboard, label: 'Dashboard' },
//         { divider: true, label: 'Voice' },
//         { path: '/dailer', icon: MdDialerSip, label: 'Dailer' },
//         { path: '/prepare-device', icon: MdWifiCalling3, label: 'Prepare device' },
//         { path: '/call-broadcast', icon: MdPhoneForwarded, label: 'Call Broadcast' },
//         { divider: true, label: 'Messaging' },
//         { path: '/messaging', icon: IoMdMail, label: 'Messaging' },
//         { divider: true, label: 'Productivity' },
//         { path: '/phone-book', icon: Contact, label: 'Phonebook' },
//         { path: '/callflow', icon: ArrowDownUp, label: 'Call flow builder' },
//         { path: '/callflow-capture', icon: FaSave, label: 'Call flow capture' },
//         { divider: true, label: 'Agent Management' },
//         { path: '/create-agent', icon: MdOutlineSupportAgent, label: 'Create agent' },
//         { path: '/call-force', icon: TbArrowFork, label: 'Call Force' },
//         { path: '/incoming-agent', icon: TbPhoneRinging, label: 'Agent Incoming Calls' },
//         { divider: true, label: 'Config' },
//         { path: '/device-manager', icon: PiPhonePlusBold, label: 'Device Manager' },
//     ]

//     const isActive = (path) => {
//         return location.pathname === path
//     }

//     return (
//         <aside className={`fixed hidden lg:block inset-y-0 left-0 w-60 bg-background transform transition-transform duration-300 ease-in-out`}>
//             <div className="h-20 flex items-center px-4">
//                 <Link to="/dashboard" className="flex items-center space-x-2">
//                     <img
//                         src="https://sonivo.oneoftheprojects.com/media/p3v6PjgmKVqXnG3pg1ivUTHmox7o1a3E.png"
//                         alt="Logo"
//                         className="h-12"
//                     />
//                     <span className="text-xl font-semibold text-[#1C2833] flex items-end justify-start w-full h-12">Sonivo ai</span>
//                 </Link>
//             </div>

//             <nav className="px-3 h-[88vh] overflow-y-auto pb-2">
//                 {menuItems.map((item, index) => (
//                     item.divider ? (
//                         <div key={index} className="mt-5 mb-2">
//                             <p className="px-1 text-xs font-medium text-gray-500 tracking-wider">
//                                 {item.label}
//                             </p>
//                         </div>
//                     ) : (
//                         <Link
//                             key={item.path}
//                             to={item.path}
//                             className={`flex items-center space-x-3 px-3 py-1.5 rounded-md mb-1 text-sm ${isActive(item.path)
//                                 ? 'bg-[#F7FAFC] text-[#1C2833] font-medium'
//                                 : 'text-gray-800 hover:bg-[#F7FAFC]'
//                                 }`}
//                         >
//                             <item.icon className={`h-[18px] w-[18px] ${isActive(item.path) ? 'text-[#1C2833]' : 'text-gray-600'
//                                 }`} />
//                             <span>{item.label}</span>
//                         </Link>
//                     )
//                 ))}
//             </nav>
//         </aside>
//     )
// }

// export default Sidebar


import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { FiLogOut, FiMenu } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import {
  Users,
  FileText,
  CreditCard,
  Users2,
  ShoppingCart,
  MessageSquare,
  FileEdit,
  MessageCircle,
  HelpCircle,
  Palette,
  Settings,
  Mail,
  Languages
} from 'lucide-react';
import { IoMdClose } from "react-icons/io";

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { divider: true, label: 'Useful' },
    { path: '/dashboard', icon: MdSpaceDashboard, label: 'Dashboard' },
    { path: '/users', icon: Users, label: 'Users' },
    { path: '/plan', icon: FileText, label: 'Plan' },
    { path: '/payment-gateway', icon: CreditCard, label: 'Payment Gateway' },
    { divider: true, label: 'Partnerships' },
    { path: '/front-partner', icon: Users2, label: 'Front Partner' },
    { path: '/orders', icon: ShoppingCart, label: 'Orders' },
    { path: '/leads', icon: MessageSquare, label: 'Leads' },
    { divider: true, label: 'Content Management' },
    { path: '/manage-page', icon: FileEdit, label: 'Manage Page' },
    { path: '/testimonial', icon: MessageCircle, label: 'Testimonial' },
    { path: '/faq', icon: HelpCircle, label: 'FAQ' },
    { divider: true, label: 'Appearance & Settings' },
    { path: '/web-theme', icon: Palette, label: 'Web theme' },
    { path: '/web-config', icon: Settings, label: 'Web Config' },
    { path: '/smtp-settings', icon: Mail, label: 'SMTP Settings' },
    { path: '/web-translation', icon: Languages, label: 'Web Translation' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside 
        className={`fixed inset-y-0 left-0 w-60 bg-white transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="h-20 flex items-center px-4">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <img
              src="https://sonivo.oneoftheprojects.com/media/p3v6PjgmKVqXnG3pg1ivUTHmox7o1a3E.png"
              alt="Logo"
              className="h-12"
            />
            <span className="text-xl font-semibold text-[#1C2833]">Sonivo ai</span>
          </Link>
        </div>

        <nav className="px-3 h-[calc(100vh-5rem)] overflow-y-auto pb-2">
          {menuItems.map((item, index) => (
            item.divider ? (
              <div key={index} className="mt-5 mb-2">
                <p className="px-1 text-xs font-medium text-gray-500 tracking-wider">
                  {item.label}
                </p>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleSidebar}
                className={`flex items-center space-x-3 px-3 py-1.5 rounded-md mb-1 text-sm ${
                  isActive(item.path)
                    ? 'bg-[#F7FAFC] text-[#1C2833] font-medium'
                    : 'text-gray-800 hover:bg-[#F7FAFC]'
                }`}
              >
                <item.icon className={`h-[18px] w-[18px] ${
                  isActive(item.path) ? 'text-[#1C2833]' : 'text-gray-600'
                }`} />
                <span>{item.label}</span>
              </Link>
            )
          ))}
        </nav>
      </aside>
    </>
  );
};
