
import React from 'react';
import { Package, Truck, AlertTriangle, Wrench, AlertCircle, Briefcase } from 'lucide-react';

interface StatsCardProps {
  icon: string;
  title: string;
  color: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

// const getIconComponent = (iconName: string) => {
//   const iconMap = {
//     '📦': Package,
//     '🚛': Truck,
//     '❌': AlertTriangle,
//     '🔧': Wrench,
//     '⚠️': AlertCircle,
//     '💼': Briefcase,
//   };
//   return iconMap[iconName as keyof typeof iconMap] || Package;
// };

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, color, stats }) => {
  // const IconComponent = getIconComponent(icon);
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 min-w-[300px] flex-1">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
          <img src={icon} className="text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-1">
            <p className="text-xs text-gray-500 font-normal">{stat.label}</p>
            <p className="text-sm font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
