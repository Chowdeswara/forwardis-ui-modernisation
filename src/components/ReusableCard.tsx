
import React from 'react';
import { cn } from '@/lib/utils';

interface ReusableCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  isClickable?: boolean;
}

export const ReusableCard: React.FC<ReusableCardProps> = ({
  title,
  subtitle,
  children,
  className,
  variant = 'default',
  size = 'md',
  onClick,
  isClickable = false,
}) => {
  const baseClasses = "rounded-lg transition-all duration-200";
  
  const variantClasses = {
    default: "bg-white border border-gray-200 shadow-sm",
    elevated: "bg-white shadow-lg border-0",
    bordered: "bg-white border-2 border-gray-300",
    glass: "bg-white/10 backdrop-blur-md border border-white/20"
  };

  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const clickableClasses = isClickable || onClick 
    ? "cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-[0.98]" 
    : "";

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};
