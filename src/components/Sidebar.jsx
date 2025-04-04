import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import {
    //   LayoutDashboard,
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
} from 'lucide-react'

const Sidebar = () => {
    const location = useLocation()

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