import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react'; // optional: use emojis if no icon lib
import SimpleDropDown from '../SimpleDropDown/SimpleDropDown';

const ExpandableSearch = ({ onValueChange }: { onValueChange: (val: boolean) => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const orderTypes=[
    {
      "id": "1",
      "name": "Option A",
      "seqNo": 1,   // Optional
      "default": "Y",   // Optional
      "description": "Option A - 1" // Optional
    },
    {
      "id": "2",
      "name": "Option B",
      "seqNo": 2,
      "default": "N",
      "description": "Option B - 2"
    },
    {
      "id": "3",
      "name": "Option C",
      "seqNo": 3,
      "default": "N",
      "description": "Option C - 3"
    }
  
  ]
  return (
    <div className="bg-white w-full rounded-md shadow-sm border border-gray-200">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Search</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </div>

      {/* Expandable Content */}
      {isExpanded && (
            <div className="px-4 pb-4 transition-all duration-300 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <SimpleDropDown list={orderTypes}/>
              <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Supplier Name</label>
    <input
      type="text"
      placeholder="Select Supplier Name"
      className="border rounded p-2 text-sm text-gray-600 w-full"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Supplier/Customer Contract</label>
    <select className="form-select border rounded p-2 text-sm text-gray-600 w-full">
      <option>Supplier/Customer Contract</option>
      <option>DB Cargo</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
    <input
      type="text"
      placeholder="Select Customer Name"
      className="border rounded p-2 text-sm text-gray-600 w-full"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Customer/Supplier Reference No.</label>
    <input
      type="text"
      placeholder="Customer/Supplier Reference No."
      className="border rounded p-2 text-sm text-gray-600 w-full"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Draft Bill No.</label>
    <input
      type="text"
      placeholder="Draft Bill No."
      className="border rounded p-2 text-sm text-gray-600 w-full"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Point</label>
    <select className="form-select border rounded p-2 text-sm text-gray-600 w-full">
      <option>Arrival Point</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
    <select className="form-select border rounded p-2 text-sm text-gray-600 w-full">
      <option>Service</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">From Date & Time</label>
    <input
      type="datetime-local"
      className="border rounded p-2 text-sm text-gray-600 w-full"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Departure Point</label>
    <select className="form-select border rounded p-2 text-sm text-gray-600 w-full">
      <option>Departure Point</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">To Date & Time</label>
    <input
      type="datetime-local"
      className="border rounded p-2 text-sm text-gray-600 w-full"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Cluster</label>
    <select className="form-select border rounded p-2 text-sm text-gray-600 w-full">
      <option>Cluster</option>
      <option>Riihimäki (10-00040-6)</option>
    </select>
  </div>
              </div>
    
              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button className="text-blue-600 text-sm font-medium">Clear Search</button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                     onClick={()=>{setIsExpanded(false); onValueChange(true);}}>
                  Search
                </button>
              </div>
            </div>
          )}
    
    </div>
  );
};

export default ExpandableSearch;
