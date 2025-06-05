
import React, { useState } from 'react';
import { TripPlansTable } from '../components/TripPlansTable';
import { AppLayout } from '../components/AppLayout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useTripPlans } from '../hooks/useTripPlans';
import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TripForm } from '@/components/trip/TripForm';
import { StatsCard } from '@/components/trip/StatsCard';
import { EventsTable } from '@/components/trip/EventsTable';

const TripExecutionForm: React.FC = () => {
    //   const [searchQuery, setSearchQuery] = useState('');
    //   const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    //   const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const { tripPlans, loading, error } = useTripPlans();

    const breadcrumbItems = [
        { label: 'Home', href: '/dashboard', active: false },
        { label: 'Trip Execution Management', active: false },
        { label: 'Trip Execution', active: true }
    ];
    const statsData = [
        {
            icon: 'src/assets/images/package-check-stroke.svg',
            title: 'Booking Requests',
            color: 'bg-blue-50',
            stats: [
                { label: 'Total Booking Request', value: '100' },
                { label: 'Total Weight / Volume', value: '100 TON / 100 CBM' }
            ]
        },
        {
            icon: 'src/assets/images/users-check-stroke.svg',
            title: 'Resources',
            color: 'bg-pink-50',
            stats: [
                { label: 'No. of Resource', value: '4' },
                { label: 'Total Cost', value: 'USD 400' }
            ]
        },
        {
            icon: 'src/assets/images/alert-triangle-stroke.svg',
            title: 'Failed Deliveries',
            color: 'bg-red-50',
            stats: [
                { label: 'Total Delivery', value: '3' },
                { label: 'No. Of Attempts', value: '3' }
            ]
        },
        {
            icon: 'src/assets/images/settings-01-stroke.svg',
            title: 'VAS',
            color: 'bg-orange-50',
            stats: [
                { label: 'Total VAS', value: '5' },
                { label: 'Total Consumables', value: '5' }
            ]
        },
        {
            icon: 'src/assets/images/car-01-stroke.svg',
            title: 'Incidents',
            color: 'bg-yellow-50',
            stats: [
                { label: 'Total Incident', value: '3' },
                { label: 'Closed Incident', value: '3' }
            ]
        },
        {
            icon: 'src/assets/images/coins-hand-stroke.svg',
            title: 'Jobs',
            color: 'bg-green-50',
            stats: [
                { label: 'Total Jobs', value: '5' },
                { label: 'Completed Jobs', value: '3' }
            ]
        }
    ];

    return (
        <AppLayout>
            <div className="space-y-4 md:space-y-6">
                <div className="hidden md:block">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                <div className="">
                    {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 border-b border-gray-100 gap-3">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto"> */}
                            <div className="relative w-full sm:w-auto">
                                <div className="flex gap-6">
                                    {/* Left Panel - Trip Form */}
                                    <div className="w-2/5">
                                        <TripForm />
                                    </div>

                                    {/* Right Panel - Stats and Events */}
                                    <div className="flex-1 space-y-6 w-3/5 rightPanel-scroll">
                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                                            {statsData.map((stat, index) => (
                                                <StatsCard key={index} {...stat} />
                                            ))}
                                        </div>

                                        {/* Events Table */}
                                        <EventsTable />
                                    </div>
                                </div>
                            </div>


                        {/* </div>


                    </div> */}

                </div>
            </div>
        </AppLayout>
    );
};

export default TripExecutionForm;
