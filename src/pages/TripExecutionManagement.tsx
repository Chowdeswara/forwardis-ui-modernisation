
import React, { useState } from 'react';
import { TripPlansTable } from '../components/TripPlansTable';
import { AppLayout } from '../components/AppLayout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useTripPlans } from '../hooks/useTripPlans';
import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';

const TripExecutionManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  
  const { tripPlans, loading, error } = useTripPlans();

  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Trip Execution Management', active: true }
  ];

  console.log('🚛 Trip Execution Management page rendered');

  return (
    <AppLayout>
      <div className="space-y-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-gray-900">Trip Plans</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">9</span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TripPlansTable
            tripPlans={tripPlans}
            loading={loading}
            error={error}
            selectedRows={selectedRows}
            onRowSelectionChange={setSelectedRows}
            searchQuery={searchQuery}
            filters={selectedFilters}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default TripExecutionManagement;
