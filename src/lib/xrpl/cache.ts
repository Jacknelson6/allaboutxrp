import type { CacheEntry } from './types';

export const CACHE_TTLS = {
  price: 60,
  richList: 3600,
  networkStats: 300,
  priceHistory: 900,
  distribution: 3600,
  accountInfo: 300,
  supplyInfo: 600,
} as const;

type CacheKey = keyof typeof CACHE_TTLS | string;

const cache = new Map<string, CacheEntry<unknown>>();
const pendingRequests = new Map<string, Promise<unknown>>();

function isValid<T>(entry: CacheEntry<T>): boolean {
  return Date.now() - entry.timestamp < entry.ttl * 1000;
}

function isStale<T>(entry: CacheEntry<T>): boolean {
  // Stale if past TTL but within 2x TTL (serve stale, revalidate)
  const age = Date.now() - entry.timestamp;
  return age >= entry.ttl * 1000 && age < entry.ttl * 2000;
}

export function getCached<T>(key: CacheKey): T | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (isValid(entry)) return entry.data;
  return null;
}

export function getStale<T>(key: CacheKey): T | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (isValid(entry) || isStale(entry)) return entry.data;
  return null;
}

export function setCache<T>(key: CacheKey, data: T, ttl: number): void {
  cache.set(key, { data, timestamp: Date.now(), ttl });
}

/**
 * Stale-while-revalidate wrapper.
 * Returns cached data immediately if fresh. If stale, returns stale data
 * and triggers background revalidation. If missing, fetches fresh.
 */
export async function cachedFetch<T>(
  key: CacheKey,
  ttl: number,
  fetcher: () => Promise<T>
): Promise<T> {
  // Fresh cache hit
  const fresh = getCached<T>(key);
  if (fresh !== null) return fresh;

  // Stale hit — return stale, revalidate in background
  const stale = getStale<T>(key);
  if (stale !== null) {
    // Deduplicate background revalidation
    if (!pendingRequests.has(key)) {
      const revalidate = fetcher()
        .then((data) => {
          setCache(key, data, ttl);
          return data;
        })
        .finally(() => pendingRequests.delete(key));
      pendingRequests.set(key, revalidate);
    }
    return stale;
  }

  // No cache — deduplicate concurrent requests
  const pending = pendingRequests.get(key) as Promise<T> | undefined;
  if (pending) return pending;

  const request = fetcher()
    .then((data) => {
      setCache(key, data, ttl);
      return data;
    })
    .finally(() => pendingRequests.delete(key));

  pendingRequests.set(key, request);
  return request;
}

export function clearCache(key?: CacheKey): void {
  if (key) {
    cache.delete(key);
  } else {
    cache.clear();
  }
}
