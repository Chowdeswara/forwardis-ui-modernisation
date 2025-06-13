
import React, { useState } from 'react';
import { Search, Info, ChevronDown,  ChevronLeft, ChevronRight } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Calendar } from '@/components/ui/calendar';

export const CreateQuickBilling: React.FC = () => {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [internalOrderDate, setInternalOrderDate] = useState('24/06/2024');
  const [contract, setContract] = useState('DB Cargo');
  const [customerVendor, setCustomerVendor] = useState('DB Cargo');
  const [cluster, setCluster] = useState('Rithmaski ( 10-00040-6 )');
  const [dcClassified, setDcClassified] = useState('');
  const [summary, setSummary] = useState('');
  const [customerOrderNo, setCustomerOrderNo] = useState('I0/0000000042');
  const [primaryDocType, setPrimaryDocType] = useState('JO - Hire/Rent');
  const [primaryDocDate, setPrimaryDocDate] = useState('12/03/2025');
  const [customerSupplierRef, setCustomerSupplierRef] = useState('');
  const breadcrumbItems = [
    { label: 'Home', href: '/dashboard', active: false },
    { label: 'Quick Billing Management', active: false },
    { label: 'Create Quick Billing', active: true }
  ];
  return (

<AppLayout>
   {/* Breadcrumb */}
   <div className="hidden md:block">
      <Breadcrumb items={breadcrumbItems} />
   </div>
   {/* Header Section */}
   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
      <div className="flex-1">
         <h2 className="text-xl font-semibold text-gray-700 whitespace-nowrap">
            Create Quick Billing
         </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2">
         <ChevronLeft/>
         <ChevronRight/>
      </div>
   </div>
   <div className="flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200  min-h-screen">
         <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Quick Billing</h2>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">1</div>
                  <div>
                     <div className="text-sm font-medium text-gray-800">Basic Details</div>
                     <div className="text-xs text-gray-500">Contract-1</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium">2</div>
                  <div>
                     <div className="text-sm text-gray-600">Resource Group Details</div>
                     <div className="text-xs text-gray-500">Third Groups - 5</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium">3</div>
                  <div>
                     <div className="text-sm text-gray-600">Plan and Actual Details</div>
                     <div className="text-xs text-gray-500">Billing Qty - 1012</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium">4</div>
                  <div>
                     <div className="text-sm text-gray-600">Review Summary</div>
                     <div className="text-xs text-gray-500">Bill Amount - € 0.00</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 bg-white w-full">
         <div className="w-full">
            {/* Order Type Selection */}
            <div className="mb-6">
               <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                  <input
                  type="radio"
                  name="orderType"
                  value="sell"
                  checked={orderType === 'sell'}
                  onChange={(e) => setOrderType(e.target.value as 'sell')}
                  className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Sell Order</span>
                  </label>
                  <label className="flex items-center gap-2">
                  <input
                  type="radio"
                  name="orderType"
                  value="buy"
                  checked={orderType === 'buy'}
                  onChange={(e) => setOrderType(e.target.value as 'buy')}
                  className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Buy Order</span>
                  </label>
               </div>
            </div>
   
            <div className="BuyOrder">
               {/* Form Fields */}
               <div className="grid grid-cols-3 gap-6 mb-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Internal Order Date</label>
                     <input
                        type="text"
                        value={internalOrderDate}
                        onChange={(e) => setInternalOrderDate(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Contract</label>
                     <div className="relative">
                        <select
                           value={contract}
                           onChange={(e) =>
                           setContract(e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white"
                           >
                           <option value="DB Cargo">DB Cargo</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Customer/Vendor</label>
                     <div className="relative">
                        <select
                           value={customerVendor}
                           onChange={(e) =>
                           setCustomerVendor(e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white"
                           >
                           <option value="DB Cargo">DB Cargo</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-6 mb-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Cluster</label>
                     <div className="relative">
                        <select
                           value={cluster}
                           onChange={(e) =>
                           setCluster(e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white"
                           >
                           <option value="Rithmaski ( 10-00040-6 )">Rithmaski ( 10-00040-6 )</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">DC Unclassified 1</label>
                     <div className="relative">
                        <select
                           value={dcClassified}
                           onChange={(e) =>
                           setDcClassified(e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white text-gray-400"
                           >
                           <option value="">Select DC...</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>
                     <input
                        type="text"
                        placeholder="Enter Value"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mt-2 text-gray-400"
                        />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                     <input
                        type="text"
                        placeholder="Enter Summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-400"
                     />
                  </div>
               </div>
               {/* Customer Internal Order No */}
               {(orderType=='buy')?   
               <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Internal Order No.</label>
                  <div className="relative max-w-xs">
                     <input
                        type="text"
                        value={customerOrderNo}
                        onChange={(e) => setCustomerOrderNo(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm pr-8"
                     />
                     <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
               </div>
               :''}
               {/* More Info */}
               <div className="mb-8">
                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
                     <Info className="w-4 h-4" />
                     <span>More Info</span>
                  </button>
               </div>
               {/* Document and Reference Details */}
               <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Document and Reference Details</h3>
                  <div className="grid grid-cols-3 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Doc Type and No.</label>
                        <div className="relative">
                           <select
                              value={primaryDocType}
                              onChange={(e) =>
                              setPrimaryDocType(e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white"
                              >
                              <option value="JO - Hire/Rent">JO - Hire/Rent</option>
                           </select>
                           <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                        <input
                           type="text"
                           value="PR23034203"
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mt-2"
                           readOnly
                           />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Doc Date</label>
                        <input
                           type="text"
                           value={primaryDocDate}
                           onChange={(e) => setPrimaryDocDate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer/ Supplier Ref. No.</label>
                        <div className="relative">
                           <input
                              type="text"
                              placeholder="Enter Customer/Supplier Ref. No."
                              value={customerSupplierRef}
                              onChange={(e) => setCustomerSupplierRef(e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm pr-8 text-gray-400"
                           />
                           <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        
         
         {/* Action Buttons */}
         <div className="flex justify-end gap-3">
            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md text-sm font-medium hover:bg-blue-50">
            Save Draft
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600">
            Continue
            </button>
         </div>
      </div>
   </div>
   </div>
   
</AppLayout>
  )}

  export default CreateQuickBilling;