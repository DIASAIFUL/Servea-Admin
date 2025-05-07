import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid';

const StatsCard = ({ title, value, change, icon, color }) => {
  const isPositive = change >= 0;

  const colorClasses = {
    purple: 'bg-purple-50 text-purple-600',
    blue: 'bg-blue-50 text-blue-600',
    violet: 'bg-violet-50 text-violet-600',
  };

  const cardClass = colorClasses[color] || 'bg-purple-50 text-purple-600';

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-3">
        <div className={`p-2 rounded-lg ${cardClass}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        <div className={`flex items-center text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? (
            <ArrowUpIcon className="w-3 h-3 mr-1" />
          ) : (
            <ArrowDownIcon className="w-3 h-3 mr-1" />
          )}
          <span>{Math.abs(change)}% than last month</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
  );
};

export default StatsCard;