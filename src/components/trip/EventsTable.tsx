
import React from 'react';
import { Search, Filter, MoreHorizontal, Calendar } from 'lucide-react';

export const EventsTable: React.FC = () => {
  const events = [
    {
      status: 'Active',
      statusColor: 'bg-green-500',
      thu: 'THU001',
      type: 'Loading',
      date: '28-Mar-2025 09:11',
      location: 'Station A',
      description: 'Loading completed successfully'
    },
    {
      status: 'In Progress',
      statusColor: 'bg-yellow-500',
      thu: 'THU002',
      type: 'Transit',
      date: '28-Mar-2025 10:30',
      location: 'Station B',
      description: 'In transit to destination'
    },
    {
      status: 'Delayed',
      statusColor: 'bg-red-500',
      thu: 'THU003',
      type: 'Unloading',
      date: '28-Mar-2025 11:45',
      location: 'Station C',
      description: 'Delayed due to equipment failure'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center border border-blue-200">
            <Calendar size={20} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Events & THU</h3>
          <span className="w-6 h-6 bg-blue-100 text-blue-700 text-xs font-medium rounded-full flex items-center justify-center border border-blue-200">
            7
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="w-48 h-9 pl-10 pr-4 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-200">
            <Filter size={16} className="text-gray-600" />
          </button>
          <button className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-200">
            <MoreHorizontal size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">THU</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${event.statusColor}`}></div>
                    <span className="text-gray-900 font-medium">{event.status}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 font-medium">{event.thu}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{event.type}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{event.date}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{event.location}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{event.description}</td>
                <td className="px-4 py-4 text-sm">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
