import React, { useState } from 'react';
import { Search, SlidersVertical  , Download , SquareCheck ,  LayoutGrid, List ,Calendar, User, MapPin } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; 
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AppLayout } from '@/components/AppLayout';
import { Breadcrumb } from '../components/Breadcrumb';
import { TripCard } from '@/components/HubCard/TripCard';
const breadcrumbItems = [
  { label: 'Home', href: '/dashboard', active: false },
  { label: 'Hub Search', active: true }
];
const tripData = [
  {
    id: 'TRIP00000001',
    customer: 'DB Cargo Customer',
    statuses: ['Draft Bill Raised', 'Released'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', '20 FT CT'],
  },
  {
    id: 'TRIP00000002',
    customer: 'DB Cargo Customer',
    statuses: ['Not Eligible', 'Under Execution'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  },
  {
    id: 'TRIP00000003',
    customer: 'DB Cargo Customer',
    statuses: ['Not Eligible', 'Under Execution'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  },
  {
    id: 'TRIP00000004',
    customer: 'DB Cargo Customer',
    statuses: ['Revenue Leakage', 'Invoice Created'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  },
  {
    id: 'TRIP00000005',
    customer: 'DB Cargo Customer',
    statuses: ['Cancelled', 'Under Execution'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  },
  {
    id: 'TRIP00000006',
    customer: 'DB Cargo Customer',
    statuses: ['Revenue Leakage', 'Invoice Created'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  },
  {
    id: 'TRIP00000007',
    customer: 'DB Cargo Customer',
    statuses: ['Invoice Approved', 'Confirmed'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  },
  {
    id: 'TRIP00000008',
    customer: 'DB Cargo Customer',
    statuses: ['Revenue Leakage', 'Initiated'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  },
  {
    id: 'TRIP00000009',
    customer: 'DB Cargo Customer',
    statuses: ['Confirmed', 'Invoice Created'],
    from: 'VLA-70',
    to: 'CUR-25',
    time: '25-Mar-2025 09:02:34',
    tags: ['Train ID', 'AGN01', 'Zaccs'],
  }
  // Add remaining items in the same format...
];

const StatusBadge = ({ status }: { status: string }) => {
  const colorMap: Record<string, string> = {
    'Draft Bill Raised': 'bg-yellow-100 text-yellow-600',
    Released: 'bg-green-100 text-green-600',
    'Not Eligible': 'bg-red-100 text-red-600',
    'Under Execution': 'bg-purple-100 text-purple-600',
    'Revenue Leakage': 'bg-orange-100 text-orange-600',
    Initiated: 'bg-blue-100 text-blue-600',
    'Invoice Created': 'bg-blue-100 text-blue-600',
    Cancelled: 'bg-red-100 text-red-600',
    'Invoice Approved': 'bg-green-100 text-green-600',
    Deleted: 'bg-red-200 text-red-700',
    Confirmed: 'bg-green-100 text-green-600',
  };
  return <span className={`text-xs font-semibold px-2 py-1 rounded ${colorMap[status]}`}>{status}</span>;
};
const subMenu = [
   { icon: SlidersVertical ,  active: false },
  //  { icon: FunnelPlus  ,  active: false },
   { icon: Download ,  active: false },
   { icon: SquareCheck  ,  active: false },
  ]
const HubBasicSearch = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const isSelect=false;
  return (
    <AppLayout>
    {/* Breadcrumb */}
    <div className="hidden md:block">
          <Breadcrumb items={breadcrumbItems} />
    </div>

    {/* Trip Plans */}
    <main className="px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Trip Plans <span className="text-gray-400">(9)</span></h2>
        <div className="flex items-center justify-between" >
        <Input placeholder="Search" className="w-64" />
     
          <div className="flex items-center space-x-2">
            {[ Download, SquareCheck].map((Icon, index) => (
              <button
                key={index}
                className="w-10 h-10 flex items-center justify-center border rounded-xl hover:bg-gray-100"
              >
                <Icon className="w-5 h-5 text-purple-600" />
              </button>
            ))}
          
          <ToggleGroup
            type="single"
            value={viewMode}
            onValueChange={(value) => value && setViewMode(value as 'grid' | 'list')}
            className="bg-gray-100 rounded-xl p-1"
          >
            <ToggleGroupItem value="grid" className="w-10 h-10" aria-label="Grid View">
              <LayoutGrid className={`w-5 h-5 ${viewMode === 'grid' ? 'text-blue-600' : 'text-gray-500'}`} />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" className="w-10 h-10" aria-label="List View">
              <List className={`w-5 h-5 ${viewMode === 'list' ? 'text-blue-600' : 'text-gray-500'}`} />
            </ToggleGroupItem>
          </ToggleGroup>
          </div>
        </div>
        
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tripData.map((trip, idx) => (
        <TripCard key={idx} trip={trip} isSelect={isSelect} />
      ))}
      </div>
      </main>
    </AppLayout>
  );
};

export default HubBasicSearch;