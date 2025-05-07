import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = () => {
  const data = [
    { name: 'Mon', revenue: 1000 },
    { name: 'Tue', revenue: 3000 },
    { name: 'Wed', revenue: 2000 },
    { name: 'Thu', revenue: 4500 },
    { name: 'Fri', revenue: 3500 },
    { name: 'Sat', revenue: 4000 },
    { name: 'Sun', revenue: 2500 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Revenues</h2>
        <div className="text-xs text-gray-500 mt-1">
          Weekly Analytics
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-2 shadow-md rounded-md z-10">
          <div className="text-xs font-semibold text-gray-600">Selected Point</div>
          <div className="text-lg font-bold text-gray-800">+$2.2k</div>
          <div className="text-xs text-gray-500">25 Apr, 2024</div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              tickFormatter={(value) => `$${value}`} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
              }} 
              formatter={(value) => [`$${value}`, 'Revenue']}
              labelFormatter={(label) => `Day: ${label}`}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7dd3fc" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7dd3fc" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#38bdf8" 
              strokeWidth={3} 
              dot={{ stroke: '#38bdf8', strokeWidth: 2, r: 4, fill: 'white' }} 
              activeDot={{ r: 6, fill: '#38bdf8' }} 
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;