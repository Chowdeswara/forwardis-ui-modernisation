
import React from 'react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
    active?: boolean;
  }>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className={item.active ? 'text-foreground' : item.href ? 'text-blue-600' : ''}>
            {item.label}
          </span>
          {index < items.length - 1 && <span>›</span>}
        </React.Fragment>
      ))}
    </div>
  );
};
