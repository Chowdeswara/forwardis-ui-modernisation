// components/TripCard.tsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
type Trip = {
  id: string;
  customer: string;
  statuses: string[];
  from: string;
  to: string;
  time: string;
  tags: string[];
};
type TripCardProps = {
  trip: Trip;
  isSelect: boolean;
};

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

  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded ${colorMap[status]}`}>
      {status}
    </span>
  );
};

export const TripCard = ({ trip ,isSelect }: TripCardProps) => {
  console.log("ISSELECT : ",isSelect)
  console.log("TRIP : ",trip)
  return (
    <Card className="border shadow-sm">
       <div className="relative top-2 left-2 z-10">
       
      </div>
      <CardContent className="p-4">
        {isSelect?
          <Checkbox className="border-purple-600 text-purple-600 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white" />
          :' '
        }
        <div className="flex justify-between">
          <div>
            <div className="font-bold text-gray-800">{trip.id}</div>
            <div className="text-gray-500 text-xs">{trip.customer}</div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {trip.statuses.map((status) => (
              <StatusBadge key={status} status={status} />
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <div>{trip.from}</div>
            <div>{trip.to}</div>
          </div>
          <div className="text-xs text-gray-400">{trip.time}</div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {trip.tags.map((tag) => (
            <Badge key={tag} className="bg-gray-100 text-gray-600 text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
