
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface TripPlan {
  id: string;
  tripPlanNo: string;
  status: string;
  tripBillingStatus: string;
  plannedStartDateTime: string;
  plannedEndDateTime: string;
  actualStartDateTime: string;
  actualEndDateTime: string;
  departurePoint: string;
  arrivalPoint: string;
  customer: string;
  resources: string;
}

interface TripPlansTableProps {
  tripPlans: TripPlan[];
  loading: boolean;
  error: string | null;
  selectedRows: string[];
  onRowSelectionChange: (selectedIds: string[]) => void;
  searchQuery: string;
  filters: string[];
}

export const TripPlansTable: React.FC<TripPlansTableProps> = ({
  tripPlans,
  loading,
  error,
  selectedRows,
  onRowSelectionChange,
  searchQuery,
  filters,
}) => {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Released': { color: 'bg-green-100 text-green-700 border-green-200', label: 'Released' },
      'Under Execution': { color: 'bg-purple-100 text-purple-700 border-purple-200', label: 'Under Execution' },
      'Initiated': { color: 'bg-blue-100 text-blue-700 border-blue-200', label: 'Initiated' },
      'Cancelled': { color: 'bg-red-100 text-red-700 border-red-200', label: 'Cancelled' },
      'Deleted': { color: 'bg-red-100 text-red-700 border-red-200', label: 'Deleted' },
      'Confirmed': { color: 'bg-green-100 text-green-700 border-green-200', label: 'Confirmed' },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Released'];
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium border ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getBillingStatusBadge = (status: string) => {
    const statusConfig = {
      'Draft Bill Raised': { color: 'bg-orange-100 text-orange-700 border-orange-200', label: 'Draft Bill Raised' },
      'Not Eligible': { color: 'bg-red-100 text-red-700 border-red-200', label: 'Not Eligible' },
      'Revenue Leakage': { color: 'bg-red-100 text-red-700 border-red-200', label: 'Revenue Leakage' },
      'Invoice Created': { color: 'bg-blue-100 text-blue-700 border-blue-200', label: 'Invoice Created' },
      'Invoice Approved': { color: 'bg-green-100 text-green-700 border-green-200', label: 'Invoice Approved' },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Not Eligible'];
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium border ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onRowSelectionChange(tripPlans.map(trip => trip.id));
    } else {
      onRowSelectionChange([]);
    }
  };

  const handleRowSelect = (tripId: string, checked: boolean) => {
    if (checked) {
      onRowSelectionChange([...selectedRows, tripId]);
    } else {
      onRowSelectionChange(selectedRows.filter(id => id !== tripId));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading trip plans...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-12 pl-4">
              <Checkbox
                checked={selectedRows.length === tripPlans.length && tripPlans.length > 0}
                onCheckedChange={handleSelectAll}
                className="border-gray-300"
              />
            </TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Trip Plan No</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Status</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Trip Billing Status</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Planned Start and End Date Time</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Actual Start and End Date Time</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Departure Point</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Arrival Point</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm">Customer</TableHead>
            <TableHead className="font-medium text-gray-700 text-sm pr-4">Resources</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tripPlans.map((trip) => (
            <TableRow key={trip.id} className="hover:bg-gray-50 border-b border-gray-100">
              <TableCell className="pl-4">
                <Checkbox
                  checked={selectedRows.includes(trip.id)}
                  onCheckedChange={(checked) => handleRowSelect(trip.id, checked as boolean)}
                  className="border-gray-300"
                />
              </TableCell>
              <TableCell>
                <span className="text-blue-600 font-medium text-sm">{trip.tripPlanNo}</span>
              </TableCell>
              <TableCell>
                {getStatusBadge(trip.status)}
              </TableCell>
              <TableCell>
                {getBillingStatusBadge(trip.tripBillingStatus)}
              </TableCell>
              <TableCell>
                <div className="text-sm space-y-1">
                  <div className="text-gray-900">{trip.plannedStartDateTime}</div>
                  <div className="text-gray-500">{trip.plannedEndDateTime}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm space-y-1">
                  <div className="text-gray-900">{trip.actualStartDateTime}</div>
                  <div className="text-gray-500">{trip.actualEndDateTime}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-900">{trip.departurePoint}</span>
                  <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">i</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-900">{trip.arrivalPoint}</span>
                  <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">i</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm text-gray-900">{trip.customer}</span>
              </TableCell>
              <TableCell className="pr-4">
                <span className="text-sm text-gray-900">{trip.resources}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
