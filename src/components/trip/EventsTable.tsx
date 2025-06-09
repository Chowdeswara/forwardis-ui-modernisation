
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 8.33317H2.5M13.3333 1.6665V4.99984M6.66667 1.6665V4.99984M6.5 18.3332H13.5C14.9001 18.3332 15.6002 18.3332 16.135 18.0607C16.6054 17.821 16.9878 17.4386 17.2275 16.9681C17.5 16.4334 17.5 15.7333 17.5 14.3332V7.33317C17.5 5.93304 17.5 5.23297 17.2275 4.69819C16.9878 4.22779 16.6054 3.84534 16.135 3.60565C15.6002 3.33317 14.9001 3.33317 13.5 3.33317H6.5C5.09987 3.33317 4.3998 3.33317 3.86502 3.60565C3.39462 3.84534 3.01217 4.22779 2.77248 4.69819C2.5 5.23297 2.5 5.93304 2.5 7.33317V14.3332C2.5 15.7333 2.5 16.4334 2.77248 16.9681C3.01217 17.4386 3.39462 17.821 3.86502 18.0607C4.3998 18.3332 5.09987 18.3332 6.5 18.3332Z" stroke="#0058AF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Events & THU</h3>
          <span className="w-6 h-6 bg-blue-100 text-blue-700 text-xs font-medium rounded-full flex items-center justify-center border border-blue-200">
            7
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-48 h-9 pl-4 pr-4 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
          </div>
          <button className="w-9 h-9 bg-white-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path d="M2.25758 2.7779C1.75336 2.21435 1.50125 1.93258 1.49174 1.69311C1.48348 1.48509 1.57287 1.28514 1.73341 1.15259C1.91821 1 2.29631 1 3.0525 1H12.9477C13.7039 1 14.082 1 14.2668 1.15259C14.4273 1.28514 14.5167 1.48509 14.5085 1.69311C14.4989 1.93258 14.2468 2.21436 13.7426 2.7779L9.93849 7.02957C9.83798 7.1419 9.78772 7.19807 9.75189 7.26199C9.72011 7.31869 9.69679 7.37973 9.68267 7.44317C9.66675 7.5147 9.66675 7.59007 9.66675 7.74081V11.3055C9.66675 11.4359 9.66675 11.501 9.64572 11.5574C9.62714 11.6072 9.59692 11.6518 9.55759 11.6876C9.51307 11.728 9.45254 11.7523 9.33149 11.8007L7.06485 12.7073C6.81982 12.8053 6.69731 12.8543 6.59896 12.8339C6.51295 12.816 6.43748 12.7649 6.38895 12.6917C6.33345 12.608 6.33345 12.476 6.33345 12.2121V7.74081C6.33345 7.59007 6.33345 7.5147 6.31753 7.44317C6.30341 7.37973 6.28009 7.31869 6.24831 7.26199C6.21247 7.19807 6.16222 7.1419 6.06171 7.02957L2.25758 2.7779Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button className="w-9 h-9 bg-white-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.00064 8.66645C8.36883 8.66645 8.66731 8.36798 8.66731 7.99979C8.66731 7.6316 8.36883 7.33313 8.00064 7.33313C7.63246 7.33313 7.33398 7.6316 7.33398 7.99979C7.33398 8.36798 7.63246 8.66645 8.00064 8.66645Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.00064 3.99983C8.36883 3.99983 8.66731 3.70135 8.66731 3.33316C8.66731 2.96498 8.36883 2.6665 8.00064 2.6665C7.63246 2.6665 7.33398 2.96498 7.33398 3.33316C7.33398 3.70135 7.63246 3.99983 8.00064 3.99983Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.00064 13.3331C8.36883 13.3331 8.66731 13.0346 8.66731 12.6664C8.66731 12.2982 8.36883 11.9998 8.00064 11.9998C7.63246 11.9998 7.33398 12.2982 7.33398 12.6664C7.33398 13.0346 7.63246 13.3331 8.00064 13.3331Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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
