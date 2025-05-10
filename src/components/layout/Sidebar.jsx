import React from 'react';
import SidebarItem from './SidebarItem';
import { useAuth } from '../../hooks/useAuth';

// Import icons
import {
  ChartBarIcon,
  DocumentReportIcon,
  UserGroupIcon,
  UserIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  ChatAlt2Icon,
  MailIcon,
  ChatIcon,
  CogIcon,
  SparklesIcon
} from '@heroicons/react/outline';

const Sidebar = () => {
  const { currentUser } = useAuth();
  
  const menuItems = [
    { icon: <ChartBarIcon />, text: 'Dashboard', to: '/' },
    { icon: <DocumentReportIcon />, text: 'Listing Reporting', to: '/listing-reporting' },
    { icon: <UserIcon />, text: 'Users', to: '/users' },
    { icon: <SparklesIcon />, text: 'Categories', to: '/categories' },
    { icon: <UserGroupIcon />, text: 'Providers', to: '/providers' },
    { icon: <CurrencyDollarIcon />, text: 'Transactions', to: '/transactions' },
    { icon: <BriefcaseIcon />, text: 'Careers', to: '/careers' },
    { icon: <ChatAlt2Icon />, text: 'Community', to: '/community' },
    { icon: <MailIcon />, text: 'Newsletter Subscribers', to: '/newsletter-subscribers' },
    { icon: <ChatIcon />, text: 'Chats', to: '/chats' },
    { icon: <CogIcon />, text: 'Settings', to: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center">
        <div className="h-12 w-12 rounded bg-primary flex items-center justify-center">
          <span className="text-white text-2xl">—</span>
        </div>
      </div>
      
      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            to={item.to}
          />
        ))}
      </div>
      
      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center p-2 rounded-lg bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-white">
            {currentUser?.name?.charAt(0) || 'E'}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">{currentUser?.name || 'Elena'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;