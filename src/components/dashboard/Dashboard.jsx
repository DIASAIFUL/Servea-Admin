import React from 'react';
import StatsCard from './StatsCard';
import RevenueChart from './RevenueChart';
import { UserGroupIcon, UserIcon, CurrencyDollarIcon } from '@heroicons/react/outline';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Overview</h1>
        <p className="text-sm text-gray-500 mt-1">Activities summary at a glance</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard 
          title="Total Providers" 
          value="37k" 
          change={17} 
          icon={<UserGroupIcon className="w-5 h-5" />}
          color="purple"
        />
        <StatsCard 
          title="Total Consumers" 
          value="37k" 
          change={25} 
          icon={<UserIcon className="w-5 h-5" />}
          color="blue"
        />
        <StatsCard 
          title="Earnings" 
          value="37k" 
          change={-17} 
          icon={<CurrencyDollarIcon className="w-5 h-5" />}
          color="violet"
        />
      </div>
      
      {/* Revenue Chart */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Stats Analytics</h2>
          <div className="relative">
            <select className="bg-white border border-gray-300 rounded-md text-sm px-3 py-1 pr-8 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <RevenueChart />
      </div>
    </div>
  );
};

export default Dashboard;