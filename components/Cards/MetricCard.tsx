import React from 'react';
import { cn, formatCurrency, formatPercentage, formatNumber } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: number;
  trendLabel?: string;
  icon?: React.ReactNode;
  format?: 'currency' | 'percentage' | 'number' | 'text';
  className?: string;
}

export default function MetricCard({
  title,
  value,
  subtitle,
  trend,
  trendLabel,
  icon,
  format = 'text',
  className,
}: MetricCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === 'string') return val;
    
    switch (format) {
      case 'currency':
        return formatCurrency(val);
      case 'percentage':
        return formatPercentage(val, 1);
      case 'number':
        return formatNumber(val);
      default:
        return val.toString();
    }
  };

  const getTrendColor = (trendValue?: number) => {
    if (!trendValue) return 'text-neutral-600';
    return trendValue > 0 ? 'text-success' : 'text-error';
  };

  return (
    <div className={cn('bg-white rounded-xl border border-neutral-300 p-6 shadow-sm', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600 mb-1">{title}</p>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold text-neutral-900">{formatValue(value)}</p>
            {trend !== undefined && (
              <span className={cn('text-sm font-medium flex items-center', getTrendColor(trend))}>
                {trend > 0 ? '↑' : trend < 0 ? '↓' : '→'}
                {Math.abs(trend).toFixed(1)}%
              </span>
            )}
          </div>
          {subtitle && <p className="text-sm text-neutral-600 mt-1">{subtitle}</p>}
          {trendLabel && <p className="text-xs text-neutral-600 mt-1">{trendLabel}</p>}
        </div>
        {icon && <div className="text-primary text-2xl ml-4">{icon}</div>}
      </div>
    </div>
  );
}
