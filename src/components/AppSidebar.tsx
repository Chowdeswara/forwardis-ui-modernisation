
import React from 'react';
import { Home, Calendar, Truck, Users, BarChart3, Settings, MapPin } from 'lucide-react';
import { LogisticsLogo } from './LogisticsLogo';

interface AppSidebarProps {
  collapsed?: boolean;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ collapsed = false }) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: false },
    { icon: Calendar, label: 'Trip Execution Management', active: true },
    { icon: Truck, label: 'Fleet Management', active: false },
    { icon: MapPin, label: 'Route Management', active: false },
    { icon: Users, label: 'Driver Management', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside className={`bg-white border-r border-gray-200 flex flex-col shadow-sm ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b border-gray-100">
        {!collapsed && <LogisticsLogo />}
        {collapsed && (
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
        )}
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  item.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
