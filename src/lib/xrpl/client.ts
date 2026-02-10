import type {
  RichListEntry,
  AccountInfo,
  NetworkStats,
  PriceData,
  PricePoint,
  SupplyInfo,
  DistributionBracket,
} from './types';
import { cachedFetch, CACHE_TTLS } from './cache';
import { getAccountLabel, isKnownAccount } from './known-accounts';

const XRPSCAN_BASE = 'https://api.xrpscan.com/api/v1';
const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';

const TOTAL_XRP = 100_000_000_000; // 100 billion

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Accept': 'application/json', 'User-Agent': 'AllAboutXRP/1.0' },
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return res.json() as Promise<T>;
}

// --- XRPSCAN types (raw API shapes) ---

interface XrpscanRichListItem {
  account: string;
  balance: number;
  supply: number;
  escrow?: number;
  name?: { name?: string; desc?: string; username?: string } | null;
  accountName?: { name?: string; desc?: string };
}

interface XrpscanAccountInfo {
  account: string;
  xrpBalance: number;
  ownerCount: number;
  sequence: number;
  previousAffectingTransactionID: string;
  escrow?: number;
  accountName?: { name?: string };
}

interface CoinGeckoMarketData {
  market_data: {
    current_price: { usd: number; btc: number };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
    total_supply: number;
    circulating_supply: number;
  };
  last_updated: string;
}

interface CoinGeckoPriceHistoryPoint {
  0: number; // timestamp
  1: number; // value
}

interface CoinGeckoPriceHistory {
  prices: CoinGeckoPriceHistoryPoint[];
  total_volumes: CoinGeckoPriceHistoryPoint[];
  market_caps: CoinGeckoPriceHistoryPoint[];
}

// --- Fallback data ---

const FALLBACK_PRICE: PriceData = {
  usd: 0,
  usdChange24h: 0,
  usdChange7d: 0,
  usdMarketCap: 0,
  usdVolume24h: 0,
  btc: 0,
  lastUpdated: new Date().toISOString(),
};

const FALLBACK_NETWORK_STATS: NetworkStats = {
  ledgerIndex: 0,
  txCount24h: 0,
  avgTxFee: 0,
  activeAccounts: 0,
  totalAccounts: 0,
  lastClose: new Date().toISOString(),
};

const FALLBACK_SUPPLY: SupplyInfo = {
  totalSupply: TOTAL_XRP,
  circulatingSupply: 60_917_315_351,
  escrowedSupply: 39_068_405_697,
  burnedSupply: 14_278_952,
  percentCirculating: 60.92,
  percentEscrowed: 39.07,
};

// --- Public API ---

export async function getRichList(limit: number = 100): Promise<RichListEntry[]> {
  return cachedFetch<RichListEntry[]>('richList', CACHE_TTLS.richList, async () => {
    try {
      const data = await fetchJson<XrpscanRichListItem[]>(
        `${XRPSCAN_BASE}/balances`
      );
      // API returns balances in drops (1 XRP = 1,000,000 drops)
      return data.slice(0, Math.min(limit, 500)).map((item, i) => {
        const balanceXrp = item.balance / 1_000_000;
        const escrowXrp = (item.escrow ?? 0) / 1_000_000;
        return {
          rank: i + 1,
          address: item.account,
          balance: Number(balanceXrp.toFixed(6)),
          escrow: Number(escrowXrp.toFixed(6)),
          label: getAccountLabel(item.account) ?? item.name?.name ?? item.name?.username ?? null,
          percentage: Number(((balanceXrp / TOTAL_XRP) * 100).toFixed(6)),
          isKnown: isKnownAccount(item.account) || !!item.name,
        };
      });
    } catch (error) {
      console.error('getRichList failed:', error);
      return [];
    }
  });
}

export async function getAccountInfo(address: string): Promise<AccountInfo> {
  return cachedFetch<AccountInfo>(`accountInfo:${address}`, CACHE_TTLS.accountInfo, async () => {
    try {
      const data = await fetchJson<XrpscanAccountInfo>(
        `${XRPSCAN_BASE}/account/${address}`
      );
      return {
        address: data.account,
        balance: Number(data.xrpBalance.toFixed(6)),
        escrow: Number((data.escrow ?? 0).toFixed(6)),
        sequence: data.sequence,
        ownerCount: data.ownerCount,
        previousTxnID: data.previousAffectingTransactionID,
        label: getAccountLabel(data.account) ?? data.accountName?.name ?? null,
      };
    } catch (error) {
      console.error('getAccountInfo failed:', error);
      return {
        address,
        balance: 0,
        escrow: 0,
        sequence: 0,
        ownerCount: 0,
        previousTxnID: '',
        label: getAccountLabel(address),
      };
    }
  });
}

export async function getNetworkStats(): Promise<NetworkStats> {
  return cachedFetch<NetworkStats>('networkStats', CACHE_TTLS.networkStats, async () => {
    try {
      // XRPSCAN doesn't have a single stats endpoint, so we approximate
      const data = await fetchJson<{
        ledger_index: number;
        close_time_human: string;
      }>(`${XRPSCAN_BASE}/ledger`);

      return {
        ledgerIndex: data.ledger_index,
        txCount24h: 0, // Not available from this endpoint
        avgTxFee: 0.000012,
        activeAccounts: 0,
        totalAccounts: 0,
        lastClose: data.close_time_human,
      };
    } catch (error) {
      console.error('getNetworkStats failed:', error);
      return FALLBACK_NETWORK_STATS;
    }
  });
}

export async function getPrice(): Promise<PriceData> {
  return cachedFetch<PriceData>('price', CACHE_TTLS.price, async () => {
    try {
      const data = await fetchJson<CoinGeckoMarketData>(
        `${COINGECKO_BASE}/coins/ripple?localization=false&tickers=false&community_data=false&developer_data=false`
      );
      const md = data.market_data;
      return {
        usd: md.current_price.usd,
        usdChange24h: md.price_change_percentage_24h,
        usdChange7d: md.price_change_percentage_7d,
        usdMarketCap: md.market_cap.usd,
        usdVolume24h: md.total_volume.usd,
        btc: md.current_price.btc,
        lastUpdated: data.last_updated,
      };
    } catch (error) {
      console.error('getPrice failed:', error);
      return FALLBACK_PRICE;
    }
  });
}

export async function getPriceHistory(days: number = 7): Promise<PricePoint[]> {
  const key = `priceHistory:${days}`;
  return cachedFetch<PricePoint[]>(key, CACHE_TTLS.priceHistory, async () => {
    try {
      const data = await fetchJson<CoinGeckoPriceHistory>(
        `${COINGECKO_BASE}/coins/ripple/market_chart?vs_currency=usd&days=${days}`
      );
      return data.prices.map((p, i) => ({
        timestamp: p[0],
        price: p[1],
        volume: data.total_volumes[i]?.[1] ?? 0,
        marketCap: data.market_caps[i]?.[1] ?? 0,
      }));
    } catch (error) {
      console.error('getPriceHistory failed:', error);
      return [];
    }
  });
}

export async function getSupplyInfo(): Promise<SupplyInfo> {
  return cachedFetch<SupplyInfo>('supplyInfo', CACHE_TTLS.supplyInfo, async () => {
    try {
      const data = await fetchJson<CoinGeckoMarketData>(
        `${COINGECKO_BASE}/coins/ripple?localization=false&tickers=false&community_data=false&developer_data=false`
      );
      const md = data.market_data;
      const circulating = md.circulating_supply;
      const total = md.total_supply || TOTAL_XRP;
      const burned = TOTAL_XRP - total;
      // Escrowed = total supply minus circulating supply (approximate)
      const escrowed = total - circulating;

      return {
        totalSupply: TOTAL_XRP,
        circulatingSupply: Number(circulating.toFixed(6)),
        escrowedSupply: Math.max(0, escrowed),
        burnedSupply: Math.max(0, burned),
        percentCirculating: Number(((circulating / TOTAL_XRP) * 100).toFixed(2)),
        percentEscrowed: Number(((Math.max(0, escrowed) / TOTAL_XRP) * 100).toFixed(2)),
      };
    } catch (error) {
      console.error('getSupplyInfo failed:', error);
      return FALLBACK_SUPPLY;
    }
  });
}

export async function getDistribution(): Promise<DistributionBracket[]> {
  return cachedFetch<DistributionBracket[]>('distribution', CACHE_TTLS.distribution, async () => {
    // XRPSCAN doesn't provide distribution brackets directly.
    // Return static approximation based on known data.
    return [
      { range: '0 - 1 XRP', minXrp: 0, maxXrp: 1, accounts: 1_200_000, totalXrp: 400_000, percentage: 0.0004 },
      { range: '1 - 10 XRP', minXrp: 1, maxXrp: 10, accounts: 800_000, totalXrp: 3_200_000, percentage: 0.0032 },
      { range: '10 - 100 XRP', minXrp: 10, maxXrp: 100, accounts: 600_000, totalXrp: 24_000_000, percentage: 0.024 },
      { range: '100 - 1K XRP', minXrp: 100, maxXrp: 1_000, accounts: 450_000, totalXrp: 180_000_000, percentage: 0.18 },
      { range: '1K - 10K XRP', minXrp: 1_000, maxXrp: 10_000, accounts: 300_000, totalXrp: 1_200_000_000, percentage: 1.2 },
      { range: '10K - 100K XRP', minXrp: 10_000, maxXrp: 100_000, accounts: 85_000, totalXrp: 2_800_000_000, percentage: 2.8 },
      { range: '100K - 1M XRP', minXrp: 100_000, maxXrp: 1_000_000, accounts: 12_000, totalXrp: 3_500_000_000, percentage: 3.5 },
      { range: '1M - 10M XRP', minXrp: 1_000_000, maxXrp: 10_000_000, accounts: 1_200, totalXrp: 4_200_000_000, percentage: 4.2 },
      { range: '10M - 100M XRP', minXrp: 10_000_000, maxXrp: 100_000_000, accounts: 180, totalXrp: 5_800_000_000, percentage: 5.8 },
      { range: '100M+ XRP', minXrp: 100_000_000, maxXrp: Infinity, accounts: 35, totalXrp: 82_292_400_000, percentage: 82.29 },
    ];
  });
}
