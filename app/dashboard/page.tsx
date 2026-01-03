'use client';

import React, { useState, useEffect } from 'react';
import MetricCard from '@/components/Cards/MetricCard';
import PerformanceChart from '@/components/Charts/PerformanceChart';
import { getPortfolio, getPortfolioEarnings, getUsageDividendEpochs } from '@/lib/api';
import { formatCurrency, formatNumber } from '@/lib/utils';
import type { ChartDataPoint } from '@/types';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [walletAddress] = useState('0x7a4b...c91f'); // TODO: Get from wallet context
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [totalDividends, setTotalDividends] = useState(0);
  const [monthlyDividends, setMonthlyDividends] = useState(0);
  const [activeHoldings, setActiveHoldings] = useState(0);
  const [portfolioTrend, setPortfolioTrend] = useState(0);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, [walletAddress]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load portfolio summary
      const portfolio = await getPortfolio(walletAddress);
      setPortfolioValue(portfolio.total_value);
      setActiveHoldings(portfolio.holdings.length);
      setPortfolioTrend(portfolio.total_return_percentage);

      // Load earnings
      const earnings = await getPortfolioEarnings(walletAddress);
      setTotalDividends(earnings.total_earnings || 0);
      setMonthlyDividends(earnings.monthly_earnings || 0);

      // Generate mock chart data (replace with real data)
      const mockChartData: ChartDataPoint[] = [
        { date: '2025-08-01', value: 50000 },
        { date: '2025-09-01', value: 65000 },
        { date: '2025-10-01', value: 78000 },
        { date: '2025-11-01', value: 95000 },
        { date: '2025-12-01', value: 112000 },
        { date: '2026-01-01', value: 125450 },
      ];
      setChartData(mockChartData);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
          <p className="text-neutral-600 mt-1">Welcome back! Here's your portfolio overview.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Portfolio Value"
            value={portfolioValue}
            format="currency"
            trend={portfolioTrend}
            icon="💰"
          />
          <MetricCard
            title="Total Dividends"
            value={totalDividends}
            format="currency"
            subtitle="This month"
            icon="💵"
          />
          <MetricCard
            title="Active Holdings"
            value={`${activeHoldings} articles`}
            icon="📊"
          />
        </div>

        {/* Performance Chart */}
        <div className="mb-8">
          <PerformanceChart
            data={chartData}
            title="Portfolio Performance (Last 6 Months)"
            height={320}
          />
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Dividends */}
          <div className="bg-white rounded-xl border border-neutral-300 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">💰 Recent Dividends</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                <div>
                  <p className="text-sm font-medium text-neutral-900">Article #47291</p>
                  <p className="text-xs text-neutral-600">Jan 1, 2026</p>
                </div>
                <p className="text-sm font-semibold text-success">{formatCurrency(142.50)}</p>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                <div>
                  <p className="text-sm font-medium text-neutral-900">Article #46103</p>
                  <p className="text-xs text-neutral-600">Jan 1, 2026</p>
                </div>
                <p className="text-sm font-semibold text-success">{formatCurrency(89.23)}</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="text-sm font-medium text-neutral-900">Article #45877</p>
                  <p className="text-xs text-neutral-600">Dec 31, 2025</p>
                </div>
                <p className="text-sm font-semibold text-success">{formatCurrency(67.11)}</p>
              </div>
            </div>
            <button className="mt-4 text-sm text-primary hover:text-primary-hover font-medium">
              View All Dividends →
            </button>
          </div>

          {/* Trending Articles */}
          <div className="bg-white rounded-xl border border-neutral-300 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">🔥 Trending Articles</h3>
            <div className="space-y-3">
              <div className="py-2 border-b border-neutral-200">
                <p className="text-sm font-medium text-neutral-900">Nature Chem: CRISPR</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-neutral-600">↑ 1,234 downloads</p>
                  <p className="text-xs font-semibold text-neutral-900">$15,000</p>
                </div>
              </div>
              <div className="py-2 border-b border-neutral-200">
                <p className="text-sm font-medium text-neutral-900">Science: Fusion</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-neutral-600">↑ 892 downloads</p>
                  <p className="text-xs font-semibold text-neutral-900">$22,000</p>
                </div>
              </div>
              <div className="py-2">
                <p className="text-sm font-medium text-neutral-900">Cell: Immunology</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-neutral-600">↑ 756 downloads</p>
                  <p className="text-xs font-semibold text-neutral-900">$18,500</p>
                </div>
              </div>
            </div>
            <button className="mt-4 text-sm text-primary hover:text-primary-hover font-medium">
              View All Trending →
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl border border-neutral-300 p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="px-6 py-4 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors">
              🛒 Browse Marketplace
            </button>
            <button className="px-6 py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-lg font-medium transition-colors">
              💼 View Portfolio
            </button>
            <button className="px-6 py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-lg font-medium transition-colors">
              📥 Export Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
