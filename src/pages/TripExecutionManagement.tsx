
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

  return (
    <AppLayout>
      <div className="space-y-4 md:space-y-6">
        <div className="hidden md:block">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900">Trip Plans</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">9</span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 border-b border-gray-100 gap-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 md:w-80 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filter</span>
              </Button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="flex items-center gap-2 flex-1 sm:flex-none justify-center">
                <Download className="h-4 w-4" />
                <span className="text-sm">Export</span>
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
