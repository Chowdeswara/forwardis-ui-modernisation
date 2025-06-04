
import { useState, useEffect } from 'react';

interface TripPlan {
  id: string;
  tripId: string;
  source: string;
  destination: string;
  transporter: string;
  tatStatus: string;
  billingStatus: string;
  phone: string;
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
          tripId: 'TRP001',
          source: 'Mumbai',
          destination: 'Delhi',
          transporter: 'ABC Transport',
          tatStatus: 'On Time',
          billingStatus: 'Pending',
          phone: '+91 9876543210'
        },
        {
          id: '2',
          tripId: 'TRP002',
          source: 'Bangalore',
          destination: 'Chennai',
          transporter: 'XYZ Logistics',
          tatStatus: 'Delayed',
          billingStatus: 'Completed',
          phone: '+91 9876543211'
        }
      ];
      
      setTripPlans(mockData);
      setLoading(false);
      console.log('🚛 Trip plans loaded:', mockData.length);
    }, 1000);
  }, []);

  return { tripPlans, loading, error };
};
