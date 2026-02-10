export interface KnownAccount {
  name: string;
  lat: number;
  lng: number;
}

export const KNOWN_ACCOUNTS: Record<string, KnownAccount> = {
  'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh': { name: 'Genesis', lat: 37.7749, lng: -122.4194 },
  'rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY': { name: 'Ripple (1)', lat: 37.7749, lng: -122.4194 },
  'rHWcuuZoFvDS6gNbmHSdpb7u1hZzxvCoMt': { name: 'Ripple (2)', lat: 37.7749, lng: -122.4194 },
  'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV': { name: 'Ripple (3)', lat: 37.7749, lng: -122.4194 },
  'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyT1': { name: 'Ripple Escrow', lat: 37.7749, lng: -122.4194 },
  'rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv': { name: 'Ripple (4)', lat: 37.7749, lng: -122.4194 },
  'rfkE1aSy9G8Upk4JssnwBxhEv5p4mn2KTy': { name: 'Ripple (5)', lat: 37.7749, lng: -122.4194 },
  'rN7v3dkG2RxiDBRuFnqXe3JYCedXdPq3X3': { name: 'Ripple (6)', lat: 37.7749, lng: -122.4194 },
  'rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh': { name: 'Binance (1)', lat: 35.8997, lng: 14.5146 },
  'rLNaPoKeeBjZe2qs6x52yVPZpZ8td4dc6w': { name: 'Binance (2)', lat: 35.8997, lng: 14.5146 },
  'raLPjTYeGezfdb6crXZzcC8RkLBEwbBHJ5': { name: 'Binance (3)', lat: 35.8997, lng: 14.5146 },
  'rJb5KsHsDHF1YS5B5DU6QCkH5NsPaQ3YSg': { name: 'Binance (4)', lat: 35.8997, lng: 14.5146 },
  'rw2ciyaNshpHe7bCHo4bRHq4pqmGNy3vjY': { name: 'Coinbase (1)', lat: 37.7749, lng: -122.4194 },
  'r9fVvKgMMPkBHQ3n28sifxi12mSmUbKEcP': { name: 'Coinbase (2)', lat: 37.7749, lng: -122.4194 },
  'rLHzPsX6oXkzU2qL12kHCH8G8cnZv1rBJh': { name: 'Kraken (1)', lat: 37.7749, lng: -122.4194 },
  'rNPRNzBB92BVpvaUjfA2i5SY3jvFNv46NT': { name: 'Kraken (2)', lat: 37.7749, lng: -122.4194 },
  'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B': { name: 'Bitstamp (1)', lat: 49.6117, lng: 6.1300 },
  'rGFuMiw48HdbnrUbkRYuitXTmfrDBNTCnX': { name: 'Bitstamp (2)', lat: 49.6117, lng: 6.1300 },
  'rPsmHDMkheWZvbAkTA8A9bVnUdikShnzRf': { name: 'Uphold (1)', lat: 40.7128, lng: -74.0060 },
  'rLW9gnQo7BQhU6igk5keqYnH3TVrCxGRzm': { name: 'Bitfinex', lat: 22.3193, lng: 114.1694 },
  'rKontEGtDju5MCEJCwtrvTWQQqVAw5juXe': { name: 'Huobi', lat: 1.3521, lng: 103.8198 },
  'rPVMhWBsfF9iMXYj3aAzJVkPDTFNSyWdKy': { name: 'Bittrex', lat: 47.6062, lng: -122.3321 },
  'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq': { name: 'GateHub', lat: 46.0569, lng: 14.5058 },
};

const FINANCIAL_CENTERS: Array<{ lat: number; lng: number; weight: number }> = [
  { lat: 40.7128, lng: -74.0060, weight: 15 },
  { lat: 37.7749, lng: -122.4194, weight: 10 },
  { lat: 51.5074, lng: -0.1278, weight: 12 },
  { lat: 48.8566, lng: 2.3522, weight: 5 },
  { lat: 52.5200, lng: 13.4050, weight: 5 },
  { lat: 50.1109, lng: 8.6821, weight: 5 },
  { lat: 47.3769, lng: 8.5417, weight: 4 },
  { lat: 35.6762, lng: 139.6503, weight: 12 },
  { lat: 37.5665, lng: 126.9780, weight: 8 },
  { lat: 1.3521, lng: 103.8198, weight: 8 },
  { lat: 22.3193, lng: 114.1694, weight: 8 },
  { lat: 31.2304, lng: 121.4737, weight: 5 },
  { lat: 19.0760, lng: 72.8777, weight: 5 },
  { lat: -33.8688, lng: 151.2093, weight: 3 },
  { lat: 55.7558, lng: 37.6173, weight: 3 },
  { lat: -23.5505, lng: -46.6333, weight: 3 },
  { lat: 25.2048, lng: 55.2708, weight: 4 },
  { lat: 35.8997, lng: 14.5146, weight: 3 },
];

const totalWeight = FINANCIAL_CENTERS.reduce((sum, c) => sum + c.weight, 0);

export function getLocationForAddress(address: string): { lat: number; lng: number } {
  const known = KNOWN_ACCOUNTS[address];
  if (known) return { lat: known.lat, lng: known.lng };

  let hash = 0;
  for (let i = 0; i < address.length; i++) {
    hash = ((hash << 5) - hash + address.charCodeAt(i)) | 0;
  }
  const rand = Math.abs(hash % totalWeight);

  let cumulative = 0;
  for (const center of FINANCIAL_CENTERS) {
    cumulative += center.weight;
    if (rand < cumulative) {
      const jitterLat = ((hash >> 8) % 600 - 300) / 100;
      const jitterLng = ((hash >> 16) % 600 - 300) / 100;
      return { lat: center.lat + jitterLat, lng: center.lng + jitterLng };
    }
  }
  return FINANCIAL_CENTERS[0];
}

export function getLabelForAddress(address: string): string | null {
  return KNOWN_ACCOUNTS[address]?.name ?? null;
}

export function truncateAddress(address: string): string {
  if (!address || address.length < 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
