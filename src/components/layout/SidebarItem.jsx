import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-3 rounded-lg transition-all ${
          isActive
            ? 'bg-primary-light bg-opacity-20 text-primary-dark'
            : 'text-gray-500 hover:bg-gray-100'
        }`
      }
    >
      <div className="w-6 h-6 mr-3">{icon}</div>
      <span className="font-medium">{text}</span>
    </NavLink>
  );
};

export default SidebarItem;