// Core domain types for FirmaFracta investor portal

export interface Article {
  article_id: string;
  title: string;
  abstract: string;
  authors: Author[];
  publisher: string;
  journal: string;
  published_date: string;
  doi?: string;
  tags: string[];
  metadata: ArticleMetadata;
}

export interface Author {
  author_id: string;
  name: string;
  email: string;
  affiliation: string;
  orcid?: string;
  wallet_address?: string;
}

export interface ArticleMetadata {
  research_area: string;
  article_type: string;
  peer_reviewed: boolean;
  open_access: boolean;
}

export interface Share {
  article_id: string;
  total_shares: number;
  available_shares: number;
  price_per_share: number;
  valuation: number;
  author_reserve_percentage: number;
}

export interface UsageMetrics {
  article_id: string;
  reads: number;
  downloads: number;
  citations: number;
  usage_score: number;
  trend: 'up' | 'down' | 'stable';
  trend_percentage: number;
}

export interface Dividend {
  dividend_id: string;
  article_id: string;
  epoch_id: string;
  epoch_date: string;
  total_pool: number;
  per_share: number;
  your_shares?: number;
  your_earnings?: number;
}

export interface Holding {
  article_id: string;
  article_title: string;
  publisher: string;
  journal: string;
  shares: number;
  ownership_percentage: number;
  current_value: number;
  cost_basis: number;
  unrealized_gain: number;
  unrealized_gain_percentage: number;
  last_dividend: number;
  last_dividend_date: string;
}

export interface Portfolio {
  wallet_address: string;
  total_value: number;
  total_cost: number;
  total_return: number;
  total_return_percentage: number;
  total_shares: number;
  total_articles: number;
  holdings: Holding[];
}

export interface PortfolioSummary {
  total_value: number;
  total_dividends: number;
  monthly_dividends: number;
  active_holdings: number;
  total_articles: number;
}

export interface Transaction {
  transaction_id: string;
  type: 'purchase' | 'transfer' | 'dividend';
  article_id: string;
  article_title: string;
  shares?: number;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  transaction_hash?: string;
}

export interface ComplianceStatus {
  wallet_address: string;
  kyc_verified: boolean;
  kyc_verified_date?: string;
  aml_passed: boolean;
  aml_last_screened?: string;
  sanctions_passed: boolean;
  accredited_investor: boolean;
  accreditation_status: 'verified' | 'pending' | 'not_submitted' | 'rejected';
  investment_limit: number;
  investment_used: number;
  investment_remaining: number;
}

export interface MarketplaceFilters {
  publisher?: string[];
  priceMin?: number;
  priceMax?: number;
  researchArea?: string[];
  tier?: string[];
  availability?: 'in_stock' | 'sold_out';
  sortBy?: 'newest' | 'highest_yield' | 'most_popular' | 'price_low' | 'price_high';
}

export interface ArticleDetail extends Article {
  shares: Share;
  usage: UsageMetrics;
  dividends: Dividend[];
  shareholders: Shareholder[];
  estimated_yield: number;
}

export interface Shareholder {
  wallet_address: string;
  shares: number;
  ownership_percentage: number;
  type: 'author' | 'investor';
  is_you?: boolean;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface DiversificationData {
  category: string;
  value: number;
  percentage: number;
  color: string;
}
