
import React, { useState } from 'react';
import { TripPlansTable } from '../components/TripPlansTable';
import { AppLayout } from '../components/AppLayout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useTripPlans } from '../hooks/useTripPlans';

const TripExecutionManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  
  const { tripPlans, loading, error } = useTripPlans();

  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Trip Execution Management', active: true }
  ];

  console.log('🚛 Trip Execution Management page rendered');

  return (
      <AppLayout>
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">Trip Plans</h1>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">9</span>
          </div>
        </div>

        {/* <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedFilters={selectedFilters}
          onFiltersChange={setSelectedFilters}
          showAdvancedFilters={showAdvancedFilters}
          onToggleAdvancedFilters={setShowAdvancedFilters}
          selectedRowsCount={selectedRows.length}
        /> */}

        <TripPlansTable
          tripPlans={tripPlans}
          loading={loading}
          error={error}
          selectedRows={selectedRows}
          onRowSelectionChange={setSelectedRows}
          searchQuery={searchQuery}
          filters={selectedFilters}
        />
      </AppLayout>
  );
};

export default TripExecutionManagement;
