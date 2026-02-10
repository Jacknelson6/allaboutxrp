import type { Metadata } from 'next';
import ChartsContent from './ChartsContent';

export const metadata: Metadata = {
  title: 'XRP Charts — Live Price & Trading Data',
  description: 'Live XRP/USD charts powered by TradingView. Track price action, volume, market cap, and circulating supply in real-time.',
  openGraph: {
    title: 'XRP Charts — Live Price & Trading Data',
    description: 'Live XRP/USD charts with real-time trading data.',
    url: 'https://allaboutxrp.com/charts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XRP Charts — Live Price Data | AllAboutXRP',
    description: 'Live XRP/USD charts with real-time trading data.',
  },
  alternates: { canonical: 'https://allaboutxrp.com/charts' },
};

export default function ChartsPage() {
  return <ChartsContent />;
}
