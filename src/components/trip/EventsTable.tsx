
import React from 'react';
import { Search, Filter, MoreHorizontal, Calendar } from 'lucide-react';

export const EventsTable: React.FC = () => {
  const events = [
    {
      leg: 'Leg: 1',
      behaviour: '',
      location: 'CHN-MUM',
      planned: '20/20',
      handed: '28-Mar-2025 09:11',
      status: 'Pick',
      statusSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><g clip-path="url(#clip0_33593_947)"><path d="M6.66683 6.66667V2.58333C6.66683 2.11662 6.66683 1.88327 6.576 1.70501C6.49611 1.54821 6.36862 1.42072 6.21182 1.34083C6.03356 1.25 5.80021 1.25 5.3335 1.25H2.16683C1.70012 1.25 1.46676 1.25 1.2885 1.34083C1.1317 1.42072 1.00422 1.54821 0.924324 1.70501C0.833496 1.88327 0.833496 2.11662 0.833496 2.58333V5.33333C0.833496 5.80004 0.833496 6.0334 0.924324 6.21166C1.00422 6.36846 1.1317 6.49594 1.2885 6.57584C1.46676 6.66667 1.70012 6.66667 2.16683 6.66667H6.66683ZM6.66683 6.66667H8.50016C8.73352 6.66667 8.8502 6.66667 8.93933 6.62125C9.01773 6.58131 9.08147 6.51756 9.12142 6.43916C9.16683 6.35003 9.16683 6.23335 9.16683 6V4.85948C9.16683 4.75756 9.16683 4.70661 9.15532 4.65865C9.14511 4.61614 9.12828 4.57549 9.10543 4.53821C9.07966 4.49617 9.04363 4.46013 8.97157 4.38807L8.11209 3.5286C8.04003 3.45653 8.004 3.4205 7.96195 3.39473C7.92467 3.37189 7.88402 3.35505 7.84151 3.34485C7.79356 3.33333 7.7426 3.33333 7.64069 3.33333H6.66683M3.75016 7.70833C3.75016 8.28363 3.28379 8.75 2.7085 8.75C2.1332 8.75 1.66683 8.28363 1.66683 7.70833C1.66683 7.13304 2.1332 6.66667 2.7085 6.66667C3.28379 6.66667 3.75016 7.13304 3.75016 7.70833ZM8.3335 7.70833C8.3335 8.28363 7.86713 8.75 7.29183 8.75C6.71653 8.75 6.25016 8.28363 6.25016 7.70833C6.25016 7.13304 6.71653 6.66667 7.29183 6.66667C7.86713 6.66667 8.3335 7.13304 8.3335 7.70833Z"  stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_33593_947"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>',
      statusColor: 'behavior-pick',
      thu: 'THU001',
      type: 'Loading',
      date: '',
      description: 'Loading completed successfully'
    },
    {
      leg: 'Leg: 2',
      behaviour: '',
      location: 'CHN-MUM',
      planned: '20/20',
      handed: '28-Mar-2025 10:30',
      status: 'Dvry',
      statusSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><g clip-path="url(#clip0_33593_20232)"><path d="M8.54165 3.03263L4.99999 5.00023M4.99999 5.00023L1.45832 3.03263M4.99999 5.00023L5 8.95857M8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72897 3.03136C8.71036 2.97503 8.67994 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.947791 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.59291 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67994 7.07715 8.71036 7.02544 8.72897 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 3.95833L3.125 1.875" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_33593_20232"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>',
      statusColor: 'behavior-dvry',
      thu: 'THU002',
      type: 'Transit',
      date: '28-Mar-2025 10:30',
      description: 'In transit to destination'
    },
    {
      leg: 'Leg: 3',
      behaviour: '',
      location: 'CHN-MUM',
      planned: '20/20',
      handed: '28-Mar-2025 11:45',
      status: 'CHA-Import',
      statusSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><g clip-path="url(#clip0_33593_13045)"><path d="M8.75 6.25V6.75C8.75 7.45007 8.75 7.8001 8.61376 8.06749C8.49392 8.30269 8.30269 8.49392 8.06749 8.61376C7.8001 8.75 7.45007 8.75 6.75 8.75H3.25C2.54993 8.75 2.1999 8.75 1.93251 8.61376C1.69731 8.49392 1.50608 8.30269 1.38624 8.06749C1.25 7.8001 1.25 7.45007 1.25 6.75V6.25M7.08333 4.16667L5 6.25M5 6.25L2.91667 4.16667M5 6.25V1.25" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_33593_13045"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>',
      statusColor: 'behavior-CHA',
      thu: 'THU003',
      type: 'Unloading',
      date: '28-Mar-2025 11:45',
      description: 'Delayed due to equipment failure'
    },
    {
      leg: 'Leg: 4',
      behaviour: '',
      location: 'CHN-MUM',
      planned: '20/20',
      handed: '28-Mar-2025 11:45',
      status: 'CHA-Import',
      statusSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><g clip-path="url(#clip0_33593_20232)"><path d="M8.54165 3.03263L4.99999 5.00023M4.99999 5.00023L1.45832 3.03263M4.99999 5.00023L5 8.95857M8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72897 3.03136C8.71036 2.97503 8.67994 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.947791 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.59291 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67994 7.07715 8.71036 7.02544 8.72897 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 3.95833L3.125 1.875" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_33593_20232"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>',
      statusColor: 'behavior-PUD',
      thu: 'THU003',
      type: 'Unloading',
      date: '28-Mar-2025 11:45',
      description: 'Delayed due to equipment failure'
    },
    {
      leg: 'Leg: 5',
      behaviour: '',
      location: 'CHN-MUM',
      planned: '20/20',
      handed: '28-Mar-2025 11:45',
      status: 'CHA-Import',
      statusSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><g clip-path="url(#clip0_33593_6252)"><path d="M1.39095 2.91683C2.11139 1.67141 3.45794 0.833496 5.00019 0.833496C7.30138 0.833496 9.16686 2.69898 9.16686 5.00016C9.16686 7.30135 7.30138 9.16683 5.00019 9.16683C3.45794 9.16683 2.11139 8.32892 1.39095 7.0835M5.00016 6.66683L6.66683 5.00016M6.66683 5.00016L5.00016 3.3335M6.66683 5.00016H0.833496" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_33593_6252"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>',
      statusColor: 'behavior-pink',
      thu: 'THU003',
      type: 'Unloading',
      date: '28-Mar-2025 11:45',
      description: 'Delayed due to equipment failure'
    },
    {
      leg: 'Leg: 6',
      behaviour: '',
      location: 'CHN-MUM',
      planned: '20/20',
      handed: '28-Mar-2025 11:45',
      status: 'CHA-Import',
      statusSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><g clip-path="url(#clip0_33593_20726)"><path d="M8.6094 7.0835C7.88897 8.32892 6.54242 9.16683 5.00016 9.16683C2.69898 9.16683 0.833496 7.30135 0.833496 5.00016C0.833496 2.69898 2.69898 0.833496 5.00016 0.833496C6.54242 0.833496 7.88897 1.67141 8.6094 2.91683M5.00019 3.3335L3.33352 5.00016M3.33352 5.00016L5.00019 6.66683M3.33352 5.00016H9.16686" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_33593_20726"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>',
      statusColor: 'behavior-GTOUT',
      thu: 'THU003',
      type: 'Unloading',
      date: '28-Mar-2025 11:45',
      description: 'Delayed due to equipment failure'
    },
    {
      leg: 'Leg: 7',
      behaviour: '',
      location: 'CHN-MUM',
      planned: '20/20',
      handed: '28-Mar-2025 11:45',
      status: 'CHA-Import',
      statusSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M0.833496 2.50016C1.0835 2.7085 1.3335 2.91683 1.87516 2.91683C2.91683 2.91683 2.91683 2.0835 3.9585 2.0835C4.50016 2.0835 4.75016 2.29183 5.00016 2.50016C5.25016 2.7085 5.50016 2.91683 6.04183 2.91683C7.0835 2.91683 7.0835 2.0835 8.12516 2.0835C8.66683 2.0835 8.91683 2.29183 9.16683 2.50016M0.833496 7.50016C1.0835 7.7085 1.3335 7.91683 1.87516 7.91683C2.91683 7.91683 2.91683 7.0835 3.9585 7.0835C4.50016 7.0835 4.75016 7.29183 5.00016 7.50016C5.25016 7.7085 5.50016 7.91683 6.04183 7.91683C7.0835 7.91683 7.0835 7.0835 8.12516 7.0835C8.66683 7.0835 8.91683 7.29183 9.16683 7.50016M0.833496 5.00016C1.0835 5.2085 1.3335 5.41683 1.87516 5.41683C2.91683 5.41683 2.91683 4.5835 3.9585 4.5835C4.50016 4.5835 4.75016 4.79183 5.00016 5.00016C5.25016 5.2085 5.50016 5.41683 6.04183 5.41683C7.0835 5.41683 7.0835 4.5835 8.12516 4.5835C8.66683 4.5835 8.91683 4.79183 9.16683 5.00016" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      statusColor: 'behavior-LHTA',
      thu: 'THU003',
      type: 'Unloading',
      date: '28-Mar-2025 11:45',
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
              <th className="px-4 py-2 whitespace-nowrap text-left text-sm font-semibold text-gray-900 ">Leg</th>
              <th className="px-4 py-2 whitespace-nowrap text-left text-sm font-semibold text-gray-900 ">Behaviour</th>
              <th className="px-4 py-2 whitespace-nowrap text-left text-sm font-semibold text-gray-900 ">Location</th>
              <th className="px-4 py-2 whitespace-nowrap text-left text-sm font-semibold text-gray-900 ">Planned/Actual</th>
              <th className="px-4 py-2 whitespace-nowrap text-left text-sm font-semibold text-gray-900 ">Handed/Taken Over</th>
              <th className="px-4 py-2 whitespace-nowrap text-left text-sm font-semibold text-gray-900 ">Status</th>
              <th className="px-4 py-2 whitespace-nowrap text-left text-sm font-semibold text-gray-900 ">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{event.leg}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-2">
                    <div className={`rounded-full sizeBehavior ${event.statusColor}`}>
                      <div
                        className="svg-icon"
                        dangerouslySetInnerHTML={{ __html: event.statusSvg }}
                      />
                      <p className='ml-1'>{event.status}</p>
                      {/* {event.status} */}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap flex items-center text-sm text-gray-900">{event.location} 
                  <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M9.99984 13.3332V9.99984M9.99984 6.6665H10.0082M18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984Z" stroke="#475467" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{event.planned}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{event.handed}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-2">
                    {/* <span className="text-gray-900">{event.status} */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#12B76A" stroke="white" stroke-width="2" >
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    {/* </span> */}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" >
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
                    </svg>
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
