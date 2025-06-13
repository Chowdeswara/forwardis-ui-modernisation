import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Breadcrumb } from '@/components/Breadcrumb';
import ExpandableSearch from '@/components/ExpandedSearch/ExpandableSearch';
import BillingGrid from '@/components/BillingGrid/BillingGrid';
import { useNavigate } from 'react-router-dom';
const breadcrumbItems = [
    { label: 'Home', href: '/dashboard', active: false },
    { label: 'Quick Billing Management', active: true }
  ];
const QuickBillingManagement = () => {
    const navigate = useNavigate();
    const [isOpen, setMessage] = useState(false);

    const handleChildValue = (value: boolean) => {
        setMessage(value);
    };
    const navigateToCreateBilling = () => {
        navigate('/create-billing');
    }
  return (
    <AppLayout>
        {/* Breadcrumb */}
        <div className="hidden md:block">
            <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-700 whitespace-nowrap">
                    Quick Billing Management
                </h2>
            </div>
            <div className="flex items-center gap-2">
                <button className="flex items-center border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-100">
                <span className="mr-1">📄</span> CIM/CUV Report
                </button>
                <button onClick={()=> navigateToCreateBilling()} className="flex items-center bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700">
                <span className="mr-1">➕</span> Create Bill
                </button>
            </div>
        </div>
            {/* Search Card */}
            <div className="bg-white rounded-md shadow-sm p-4 flex-[3] w-full">
                
            <div className="flex items-center mb-4">
            <ExpandableSearch onValueChange={handleChildValue}/>
            </div>
        </div>
        {isOpen &&
         <BillingGrid />
        }
    </AppLayout>
  )}
  export default QuickBillingManagement;
