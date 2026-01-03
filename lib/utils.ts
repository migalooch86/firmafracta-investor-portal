// Utility functions

import { type ClassValue, clsx } from 'clsx';
import { format, formatDistance, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format currency
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Format percentage
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

// Format large numbers (1,234,567 → 1.2M)
export function formatNumber(num: number, compact: boolean = false): string {
  if (compact && num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (compact && num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return new Intl.NumberFormat('en-US').format(num);
}

// Format date
export function formatDate(date: string | Date, formatStr: string = 'MMM d, yyyy'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
}

// Format relative time (2 days ago)
export function formatRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistance(dateObj, new Date(), { addSuffix: true });
}

// Truncate wallet address (0x1234...5678)
export function truncateAddress(address: string, startLength: number = 6, endLength: number = 4): string {
  if (address.length <= startLength + endLength) return address;
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}

// Calculate trend percentage
export function calculateTrend(current: number, previous: number): number {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

// Get trend direction
export function getTrendDirection(percentage: number): 'up' | 'down' | 'stable' {
  if (percentage > 1) return 'up';
  if (percentage < -1) return 'down';
  return 'stable';
}

// Determine return color class
export function getReturnColorClass(value: number): string {
  if (value > 0) return 'text-success';
  if (value < 0) return 'text-error';
  return 'text-neutral-600';
}

// Sleep utility for loading states
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
