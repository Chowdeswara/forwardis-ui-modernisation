
import { useState, useEffect } from 'react';

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

export const useTripPlans = () => {
  const [tripPlans, setTripPlans] = useState<TripPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock data loading
    setTimeout(() => {
      const mockData: TripPlan[] = [
        {
          id: '1',
          tripPlanNo: 'TRP001',
          status: 'Released',
          tripBillingStatus: 'Draft Bill Raised',
          plannedStartDateTime: '2024-01-15 09:00',
          plannedEndDateTime: '2024-01-16 18:00',
          actualStartDateTime: '2024-01-15 09:15',
          actualEndDateTime: '2024-01-16 17:45',
          departurePoint: 'Mumbai Warehouse',
          arrivalPoint: 'Delhi Distribution Center',
          customer: 'ABC Corp',
          resources: 'Truck-001, Driver-John'
        },
        {
          id: '2',
          tripPlanNo: 'TRP002',
          status: 'Under Execution',
          tripBillingStatus: 'Invoice Created',
          plannedStartDateTime: '2024-01-16 10:00',
          plannedEndDateTime: '2024-01-17 16:00',
          actualStartDateTime: '2024-01-16 10:30',
          actualEndDateTime: '-',
          departurePoint: 'Bangalore Hub',
          arrivalPoint: 'Chennai Port',
          customer: 'XYZ Ltd',
          resources: 'Truck-002, Driver-Mike'
        }
      ];
      
      setTripPlans(mockData);
      setLoading(false);
      console.log('🚛 Trip plans loaded:', mockData.length);
    }, 1000);
  }, []);

  return { tripPlans, loading, error };
};
