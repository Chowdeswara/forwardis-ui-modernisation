
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
    // Mock data loading to match the screenshot
    setTimeout(() => {
      const mockData: TripPlan[] = [
        {
          id: '1',
          tripPlanNo: 'TRP000000001',
          status: 'Released',
          tripBillingStatus: 'Draft Bill Raised',
          plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
          plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
          actualStartDateTime: '25-Mar-2025 11:22:34 PM',
          actualEndDateTime: '27-Mar-2025 11:22:34 PM',
          departurePoint: 'VLA-70',
          arrivalPoint: 'CUR-25',
          customer: '+3',
          resources: '+3'
        },
        {
          id: '2',
          tripPlanNo: 'TRP000000002',
          status: 'Under Execution',
          tripBillingStatus: 'Not Eligible',
          plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
          plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
          actualStartDateTime: '25-Mar-2025 11:22:34 PM',
          actualEndDateTime: '27-Mar-2025 11:22:34 PM',
          departurePoint: 'VLA-70',
          arrivalPoint: 'CUR-25',
          customer: '+3',
          resources: '+3'
        },
        {
          id: '3',
          tripPlanNo: 'TRP000000003',
          status: 'Initiated',
          tripBillingStatus: 'Revenue Leakage',
          plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
          plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
          actualStartDateTime: '25-Mar-2025 11:22:34 PM',
          actualEndDateTime: '27-Mar-2025 11:22:34 PM',
          departurePoint: 'VLA-70',
          arrivalPoint: 'CUR-25',
          customer: '+3',
          resources: '+3'
        },
        {
          id: '4',
          tripPlanNo: 'TRP000000004',
          status: 'Cancelled',
          tripBillingStatus: 'Invoice Created',
          plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
          plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
          actualStartDateTime: '25-Mar-2025 11:22:34 PM',
          actualEndDateTime: '27-Mar-2025 11:22:34 PM',
          departurePoint: 'VLA-70',
          arrivalPoint: 'CUR-25',
          customer: '+3',
          resources: '+3'
        },
        {
          id: '5',
          tripPlanNo: 'TRP000000005',
          status: 'Deleted',
          tripBillingStatus: 'Invoice Approved',
          plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
          plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
          actualStartDateTime: '25-Mar-2025 11:22:34 PM',
          actualEndDateTime: '27-Mar-2025 11:22:34 PM',
          departurePoint: 'VLA-70',
          arrivalPoint: 'CUR-25',
          customer: '+3',
          resources: '+3'
        },
        {
          id: '6',
          tripPlanNo: 'TRP000000006',
          status: 'Confirmed',
          tripBillingStatus: 'Not Eligible',
          plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
          plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
          actualStartDateTime: '25-Mar-2025 11:22:34 PM',
          actualEndDateTime: '27-Mar-2025 11:22:34 PM',
          departurePoint: 'VLA-70',
          arrivalPoint: 'CUR-25',
          customer: '+3',
          resources: '+3'
        },
        {
          id: '7',
          tripPlanNo: 'TRP000000007',
          status: 'Under Execution',
          tripBillingStatus: 'Revenue Leakage',
          plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
          plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
          actualStartDateTime: '25-Mar-2025 11:22:34 PM',
          actualEndDateTime: '27-Mar-2025 11:22:34 PM',
          departurePoint: 'VLA-70',
          arrivalPoint: 'CUR-25',
          customer: '+3',
          resources: '+3'
        }
      ];
      
      setTripPlans(mockData);
      setLoading(false);
      console.log('🚛 Trip plans loaded:', mockData.length);
    }, 1000);
  }, []);

  return { tripPlans, loading, error };
};
