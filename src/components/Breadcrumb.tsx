
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
    active?: boolean;
  }>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-blue-500 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.label == 'Home' && <Home size={16} />}
          <span className={item.active ? 'text-foreground' : item.href ? 'text-blue-600 cursor-pointer' : 'cursor-pointer'}>
            {item.label}
          </span>
          {index < items.length - 1 && <span><ChevronRight size={16} className="text-gray-400" /></span>}
        </div>
      ))}
    </div>
  );
};
