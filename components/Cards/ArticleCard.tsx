import React from 'react';
import Link from 'next/link';
import { formatCurrency, formatNumber } from '@/lib/utils';
import type { Article, Share, UsageMetrics } from '@/types';

interface ArticleCardProps {
  article: Article;
  shares?: Share;
  usage?: UsageMetrics;
  estimatedYield?: number;
  onBuyClick?: (articleId: string) => void;
}

export default function ArticleCard({
  article,
  shares,
  usage,
  estimatedYield,
  onBuyClick,
}: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl border border-neutral-300 hover:border-primary hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Article Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
              {article.journal || article.publisher}
            </p>
            <Link
              href={`/articles/${article.article_id}`}
              className="text-lg font-semibold text-neutral-900 hover:text-primary line-clamp-2"
            >
              {article.title}
            </Link>
          </div>
        </div>

        {/* Authors */}
        <p className="text-sm text-neutral-600 mb-3">
          by {article.authors[0]?.name}
          {article.authors.length > 1 && ` et al.`}
        </p>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Usage Metrics */}
        {usage && (
          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-neutral-200">
            <div>
              <p className="text-xs text-neutral-600">Usage Score</p>
              <p className="text-lg font-semibold text-neutral-900">
                {formatNumber(usage.usage_score, true)}
              </p>
              {usage.trend && (
                <p className={`text-xs ${usage.trend === 'up' ? 'text-success' : 'text-error'}`}>
                  {usage.trend === 'up' ? '↑' : '↓'} {usage.trend_percentage.toFixed(0)}%
                </p>
              )}
            </div>
            <div>
              <p className="text-xs text-neutral-600">Downloads</p>
              <p className="text-lg font-semibold text-neutral-900">
                {formatNumber(usage.downloads)}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-600">Citations</p>
              <p className="text-lg font-semibold text-neutral-900">
                {formatNumber(usage.citations)}
              </p>
            </div>
          </div>
        )}

        {/* Investment Info */}
        {shares && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-600">Price per share</span>
              <span className="text-sm font-semibold text-neutral-900">
                {formatCurrency(shares.price_per_share)}
              </span>
            </div>
            {estimatedYield && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Est. Annual Yield</span>
                <span className="text-sm font-semibold text-success">
                  {estimatedYield.toFixed(1)}%
                </span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-600">Available</span>
              <span className="text-sm font-semibold text-neutral-900">
                {shares.available_shares} of {shares.total_shares} shares
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-6 pb-6 pt-2 flex space-x-2">
        <Link
          href={`/articles/${article.article_id}`}
          className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium text-center"
        >
          View Details
        </Link>
        {shares && shares.available_shares > 0 && onBuyClick && (
          <button
            onClick={() => onBuyClick(article.article_id)}
            className="flex-1 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors text-sm font-medium"
          >
            Buy Shares →
          </button>
        )}
      </div>
    </div>
  );
}
