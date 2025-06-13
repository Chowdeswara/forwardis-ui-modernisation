import React, { useState } from 'react';
import { Search, Info, ChevronDown,  ChevronLeft, ChevronRight } from 'lucide-react';

type DropDown={
    id: Number,
    name: String,
    seqNo: Number,   
    default: String,   
    description: String

}
export const SimpleDropDown: React.FC = ({list}:{list:DropDown[]} ) => {
    const [orderType, setType] = useState('Select order type');

    return(
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Contract</label>
        <div className="relative">
           <select
              value={orderType}
              onChange={(e) =>
                setType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white"
              >
            {list.map((item, index) => (
        <option value={index}>{item.name}</option>
      ))}
           </select>
           <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
     </div>
    )
}
export default SimpleDropDown;