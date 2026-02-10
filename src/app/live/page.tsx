import type { Metadata } from 'next';
import LiveContent from './LiveContent';

export const metadata: Metadata = {
  title: 'Live XRPL Globe — Real-Time XRP Transactions',
  description: 'Watch XRP Ledger transactions in real-time on an interactive 3D globe. See live payment flows, transaction volumes, and network activity as they happen.',
  openGraph: {
    title: 'Live XRPL Globe — Real-Time XRP Transactions',
    description: 'Watch XRP Ledger transactions in real-time on an interactive 3D globe.',
    url: 'https://allaboutxrp.com/live',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live XRPL Globe',
    description: 'Real-time XRP Ledger transaction visualizer on an interactive 3D globe.',
  },
};

export default function LivePage() {
  return <LiveContent />;
}
