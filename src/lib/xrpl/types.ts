// XRPL Data Types

export interface RichListEntry {
  rank: number;
  address: string;
  balance: number;
  escrow: number;
  label: string | null;
  percentage: number;
  isKnown: boolean;
}

export interface AccountInfo {
  address: string;
  balance: number;
  escrow: number;
  sequence: number;
  ownerCount: number;
  previousTxnID: string;
  label: string | null;
}

export interface NetworkStats {
  ledgerIndex: number;
  txCount24h: number;
  avgTxFee: number;
  activeAccounts: number;
  totalAccounts: number;
  lastClose: string;
}

export interface PriceData {
  usd: number;
  usdChange24h: number;
  usdChange7d: number;
  usdMarketCap: number;
  usdVolume24h: number;
  btc: number;
  lastUpdated: string;
}

export interface PricePoint {
  timestamp: number;
  price: number;
  volume: number;
  marketCap: number;
}

export interface SupplyInfo {
  totalSupply: number;
  circulatingSupply: number;
  escrowedSupply: number;
  burnedSupply: number;
  percentCirculating: number;
  percentEscrowed: number;
}

export interface DistributionBracket {
  range: string;
  minXrp: number;
  maxXrp: number;
  accounts: number;
  totalXrp: number;
  percentage: number;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export interface ApiResponse<T> {
  data: T;
  cached: boolean;
  timestamp: string;
  error?: string;
}
