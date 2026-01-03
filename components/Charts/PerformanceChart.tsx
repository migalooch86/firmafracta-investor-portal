'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency, formatDate } from '@/lib/utils';
import type { ChartDataPoint } from '@/types';

interface PerformanceChartProps {
  data: ChartDataPoint[];
  title?: string;
  height?: number;
}

export default function PerformanceChart({ data, title, height = 300 }: PerformanceChartProps) {
  return (
    <div className="bg-white rounded-xl border border-neutral-300 p-6">
      {title && <h3 className="text-lg font-semibold text-neutral-900 mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D1D1D1" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => formatDate(date, 'MMM')}
            stroke="#6B6B6B"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            tickFormatter={(value) => formatCurrency(value, 'USD').replace('.00', '')}
            stroke="#6B6B6B"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            formatter={(value: number) => [formatCurrency(value), 'Value']}
            labelFormatter={(label) => formatDate(label, 'MMM d, yyyy')}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #D1D1D1',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0066CC"
            strokeWidth={2}
            dot={{ fill: '#0066CC', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
