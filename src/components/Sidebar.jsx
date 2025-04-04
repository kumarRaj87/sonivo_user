import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { MdDialerSip } from "react-icons/md";
import { MdPhoneForwarded } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import {
    Palette,
    Settings,
    Mail,
    Languages,
    Contact,
    ArrowDownUp
} from 'lucide-react'

import { TbArrowFork } from "react-icons/tb";
import { TbPhoneRinging } from "react-icons/tb";
import { PiPhonePlusBold } from "react-icons/pi";

const Sidebar = () => {
    const location = useLocation()

    const menuItems = [
        { divider: true, label: 'Useful' },
        { path: '/dashboard', icon: MdSpaceDashboard, label: 'Dashboard' },
        { divider: true, label: 'Voice' },
        { path: '/dailer', icon: MdDialerSip, label: 'Dailer' },
        { path: '/prepare-device', icon: MdWifiCalling3, label: 'Prepare device' },
        { path: '/call-broadcast', icon: MdPhoneForwarded, label: 'Call Broadcast' },
        { divider: true, label: 'Messaging' },
        { path: '/messaging', icon: IoMdMail, label: 'Messaging' },
        { divider: true, label: 'Productivity' },
        { path: '/phone-book', icon: Contact, label: 'Phonebook' },
        { path: '/callflow', icon: ArrowDownUp, label: 'Callflow builder' },
        { path: '/callflow-capture', icon: FaSave, label: 'Callflow capture' },
        { divider: true, label: 'Agent Management' },
        { path: '/create-agent', icon: MdOutlineSupportAgent, label: 'Create agent' },
        { path: '/call-force', icon: TbArrowFork, label: 'Call Force' },
        { path: '/incoming-agent', icon: TbPhoneRinging, label: 'Agent Incoming Calls' },
        { divider: true, label: 'Config' },
        { path: '/device-manager', icon: PiPhonePlusBold, label: 'Device Manager' },
    ]

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <aside className={`fixed inset-y-0 left-0 w-60 bg-white transform transition-transform duration-300 ease-in-out`}>
            <div className="h-16 flex items-center px-4">
                <Link to="/dashboard" className="flex items-center space-x-2">
                    <svg className="h-8 w-8" viewBox="0 0 50 50">
                        <path
                            d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 45C13.4 45 5 36.6 5 25S13.4 5 25 5s20 8.4 20 20-8.4 20-20 20z"
                            className="fill-primary"
                        />
                        <path
                            d="M25 10c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
                            className="fill-primary opacity-75"
                        />
                    </svg>
                    <span className="text-xl font-semibold text-[#1C2833]">Soniva ai</span>
                </Link>
            </div>

            <nav className="px-3 h-[88vh] overflow-y-auto pb-2">
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
                            className={`flex items-center space-x-3 px-3 py-1.5 rounded-md mb-1 text-sm ${isActive(item.path)
                                    ? 'bg-[#F7FAFC] text-[#1C2833] font-medium'
                                    : 'text-gray-800 hover:bg-[#F7FAFC]'
                                }`}
                        >
                            <item.icon className={`h-[18px] w-[18px] ${isActive(item.path) ? 'text-[#1C2833]' : 'text-gray-600'
                                }`} />
                            <span>{item.label}</span>
                        </Link>
                    )
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar