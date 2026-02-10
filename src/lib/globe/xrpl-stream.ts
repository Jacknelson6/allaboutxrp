export interface XRPLTransaction {
  id: string;
  hash: string;
  type: string;
  account: string;
  destination: string;
  amount: number; // in XRP
  timestamp: number;
}

type TransactionCallback = (tx: XRPLTransaction) => void;

const WS_URLS = [
  'wss://xrplcluster.com',
  'wss://s1.ripple.com',
  'wss://s2.ripple.com',
];

let ws: WebSocket | null = null;
let urlIndex = 0;
let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;
let listeners: TransactionCallback[] = [];
let txCounter = 0;

function parseTransaction(data: Record<string, unknown>): XRPLTransaction | null {
  const tx = data.transaction as Record<string, unknown> | undefined;
  if (!tx) return null;

  const type = tx.TransactionType as string;
  const account = (tx.Account as string) || '';
  const hash = (tx.hash as string) || '';
  let destination = '';
  let amount = 0;

  if (type === 'Payment') {
    destination = (tx.Destination as string) || '';
    const rawAmount = tx.Amount;
    if (typeof rawAmount === 'string') {
      amount = parseInt(rawAmount, 10) / 1_000_000;
    } else if (rawAmount && typeof rawAmount === 'object') {
      amount = 0;
    }
  } else {
    destination = account;
    amount = 0;
  }

  return {
    id: `tx-${txCounter++}`,
    hash,
    type,
    account,
    destination,
    amount,
    timestamp: Date.now(),
  };
}

function connect() {
  if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) return;

  const url = WS_URLS[urlIndex % WS_URLS.length];
  ws = new WebSocket(url);

  ws.onopen = () => {
    console.log(`[XRPL] Connected to ${url}`);
    ws?.send(JSON.stringify({
      command: 'subscribe',
      streams: ['transactions'],
    }));
  };

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data as string);
      if (data.type === 'transaction') {
        const tx = parseTransaction(data);
        if (tx) {
          listeners.forEach(cb => cb(tx));
        }
      }
    } catch {
      // ignore parse errors
    }
  };

  ws.onclose = () => {
    console.log('[XRPL] Disconnected, reconnecting...');
    scheduleReconnect();
  };

  ws.onerror = () => {
    urlIndex++;
    ws?.close();
  };
}

function scheduleReconnect() {
  if (reconnectTimeout) return;
  reconnectTimeout = setTimeout(() => {
    reconnectTimeout = null;
    connect();
  }, 2000);
}

export function subscribe(callback: TransactionCallback): () => void {
  listeners.push(callback);
  if (listeners.length === 1) connect();

  return () => {
    listeners = listeners.filter(cb => cb !== callback);
    if (listeners.length === 0) {
      ws?.close();
      ws = null;
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
        reconnectTimeout = null;
      }
    }
  };
}
