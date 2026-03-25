import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const KPICard: React.FC<{
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
  alert?: boolean;
}> = ({ title, value, subtitle, trend, trendValue, icon, alert }) => {
  return (
    <div className={twMerge(clsx(
      "bg-white rounded-lg border p-6 flex flex-col shadow-sm",
      alert ? "border-red-200 shadow-red-100" : "border-slate-200"
    ))}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</h3>
        {icon && <div className={alert ? "text-red-500" : "text-slate-400"}>{icon}</div>}
      </div>
      
      <div className="flex-1 flex flex-col justify-end">
        <div className={twMerge(clsx(
          "text-3xl font-semibold tracking-tight",
          alert ? "text-red-600" : "text-slate-900"
        ))}>
          {value}
        </div>
        
        {(subtitle || trendValue) && (
          <div className="flex items-center mt-2 text-sm">
            {trendValue && (
              <span className={twMerge(clsx(
                "mr-2 font-medium",
                trend === 'up' && "text-green-600",
                trend === 'down' && "text-red-600",
                trend === 'neutral' && "text-slate-500"
              ))}>
                {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
              </span>
            )}
            {subtitle && <span className="text-slate-500">{subtitle}</span>}
          </div>
        )}
      </div>
    </div>
  );
};
