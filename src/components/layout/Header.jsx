import React from 'react';
import { BellIcon } from '@heroicons/react/outline';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800"> Super Admin 👋</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="relative group">
          <button 
            onClick={() => logout()}
            className="text-sm text-gray-600 hover:text-primary-dark"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;