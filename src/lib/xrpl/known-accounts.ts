interface KnownAccount {
  label: string;
  category: 'genesis' | 'ripple' | 'exchange' | 'custodian' | 'gateway' | 'other';
}

const KNOWN_ACCOUNTS: Record<string, KnownAccount> = {
  // Genesis & Ripple
  'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh': { label: 'Genesis Account', category: 'genesis' },
  'rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY': { label: 'Ripple (1)', category: 'ripple' },
  'rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv': { label: 'Ripple (2)', category: 'ripple' },
  'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV': { label: 'Ripple (3)', category: 'ripple' },
  'rKLpjpCoXgLQQYQyj13rxfczEFhH1yrGr4': { label: 'Ripple (4)', category: 'ripple' },
  'rHKueQebtVU9cEAmvquRvBYfXPbBQrBXaD': { label: 'Ripple (5)', category: 'ripple' },
  'rEy8TFcrAPvhpKrwyrscNYyqBGUkE7vF9T': { label: 'Ripple (6)', category: 'ripple' },
  'rUobSiUpYMXoJRqmMcrFnGLEsN7UyGMpVc': { label: 'Ripple (7)', category: 'ripple' },
  'rpXTzCuXtjiPDFysxq8uNmtZBe9Xo97JbW': { label: 'Ripple Escrow (1)', category: 'ripple' },
  'rBg2FuYrwFQBMYjAoFMDkP3wXzmztW1LUU': { label: 'Ripple Escrow (2)', category: 'ripple' },

  // Major Exchanges
  'rLHzPsX6oXkzU2qL12kHCH8G8cnZv1rBJh': { label: 'Binance (1)', category: 'exchange' },
  'rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh': { label: 'Binance (2)', category: 'exchange' },
  'rNxp4h8apvRis6mJf9Sh8C6iRxfrDWN7AV': { label: 'Binance (3)', category: 'exchange' },
  'r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59': { label: 'Ripple (OG)', category: 'ripple' },
  'rLNaPoKeeBjZe2qs6x52yVPKpg8HU36Mfq': { label: 'Uphold (1)', category: 'exchange' },
  'rPVMhWBsfF9iMXYj3aAzJVkPDTFNSyWdKy': { label: 'Bitfinex (1)', category: 'exchange' },
  'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq': { label: 'GateHub (1)', category: 'exchange' },
  'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y': { label: 'Bitstamp (1)', category: 'exchange' },
  'rDCjE83Gs4ECrgqv4nz2XLLQX3LVH7N3JV': { label: 'Bitstamp (2)', category: 'exchange' },
  'rN7v3dWXMwkiJ4Dyqe67gBTWYezXe3rVUU': { label: 'Bitstamp (3)', category: 'exchange' },
  'r3fqUSmTXAyJhsmTGDSCTQR7qCEkHo7WGq': { label: 'Kraken (1)', category: 'exchange' },
  'rLbKbPyuvs4wc1Jo165VTcGeHhKrAMN1QK': { label: 'Kraken (2)', category: 'exchange' },
  'rGDreBvnHrX1get7na3CE4hYyGnGHgXUfm': { label: 'Bittrex (1)', category: 'exchange' },
  'rwU8rAiE2eyEPz3sikfbHuqCuiAtdXqa2v': { label: 'Coinbase (1)', category: 'exchange' },
  'rw2ciyaNshpHe7bCHo4bRHq4pqmGNy4998': { label: 'Coinbase (2)', category: 'exchange' },

  // Other notable
  'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn': { label: 'Jed McCaleb', category: 'other' },
  'rrrrrrrrrrrrrrrrrrrrrhoLvTp': { label: 'Account Zero (Burn)', category: 'other' },
  'rrrrrrrrrrrrrrrrrNAMEtxvNvQ': { label: 'Name Reservation', category: 'other' },
};

export function getAccountLabel(address: string): string | null {
  return KNOWN_ACCOUNTS[address]?.label ?? null;
}

export function isKnownAccount(address: string): boolean {
  return address in KNOWN_ACCOUNTS;
}

export function getAccountCategory(address: string): KnownAccount['category'] | null {
  return KNOWN_ACCOUNTS[address]?.category ?? null;
}

export function getAllKnownAccounts(): Record<string, KnownAccount> {
  return { ...KNOWN_ACCOUNTS };
}
