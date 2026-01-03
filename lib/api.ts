// API client for FirmaFracta backend

import axios from 'axios';
import type {
  Article,
  ArticleDetail,
  Portfolio,
  ComplianceStatus,
  UsageMetrics,
  Dividend,
  Transaction,
  MarketplaceFilters,
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5004';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Articles & Marketplace
export const getArticles = async (filters?: MarketplaceFilters): Promise<Article[]> => {
  const params = new URLSearchParams();
  
  if (filters?.publisher) params.append('publisher', filters.publisher.join(','));
  if (filters?.priceMin) params.append('price_min', filters.priceMin.toString());
  if (filters?.priceMax) params.append('price_max', filters.priceMax.toString());
  if (filters?.researchArea) params.append('research_area', filters.researchArea.join(','));
  if (filters?.sortBy) params.append('sort', filters.sortBy);
  
  const response = await api.get(`/articles?${params.toString()}`);
  return response.data.articles || [];
};

export const getArticle = async (articleId: string): Promise<ArticleDetail> => {
  const response = await api.get(`/articles/${articleId}`);
  return response.data;
};

export const getArticleMetrics = async (articleId: string): Promise<UsageMetrics> => {
  const response = await api.get(`/articles/${articleId}/metrics`);
  return response.data;
};

export const getArticleShares = async (articleId: string) => {
  const response = await api.get(`/articles/${articleId}/shares/availability`);
  return response.data;
};

export const getArticleDividends = async (articleId: string): Promise<Dividend[]> => {
  const response = await api.get(`/articles/${articleId}/dividends`);
  return response.data.dividends || [];
};

export const getArticleShareholders = async (articleId: string) => {
  const response = await api.get(`/articles/${articleId}/shareholders`);
  return response.data.shareholders || [];
};

// Portfolio
export const getPortfolio = async (walletAddress: string): Promise<Portfolio> => {
  const response = await api.get(`/portfolio/${walletAddress}`);
  return response.data;
};

export const getPortfolioEarnings = async (walletAddress: string) => {
  const response = await api.get(`/portfolio/${walletAddress}/earnings`);
  return response.data;
};

export const getPortfolioTransactions = async (walletAddress: string): Promise<Transaction[]> => {
  const response = await api.get(`/portfolio/${walletAddress}/transactions`);
  return response.data.transactions || [];
};

// Share purchases
export const purchaseShares = async (
  articleId: string,
  walletAddress: string,
  shares: number
) => {
  const response = await api.post(`/articles/${articleId}/shares/purchase`, {
    buyer_wallet: walletAddress,
    shares_to_buy: shares,
  });
  return response.data;
};

// Compliance
export const getComplianceStatus = async (walletAddress: string): Promise<ComplianceStatus> => {
  const response = await api.get(`/compliance/status/${walletAddress}`);
  return response.data;
};

export const submitKYC = async (walletAddress: string, kycData: any) => {
  const response = await api.post(`/compliance/kyc`, {
    wallet_address: walletAddress,
    ...kycData,
  });
  return response.data;
};

export const checkAccreditation = async (walletAddress: string) => {
  const response = await api.get(`/compliance/accreditation/${walletAddress}`);
  return response.data;
};

// Usage dividends
export const getUsageDividendEpochs = async (limit: number = 10) => {
  const response = await api.get(`/usage-dividends/epochs?limit=${limit}`);
  return response.data.epochs || [];
};

// Publishers
export const getPublishers = async () => {
  const response = await api.get('/publishers');
  return response.data.publishers || [];
};

export default api;
