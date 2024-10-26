import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing description',
  keywords: ['Pricing Page', 'Chris', 'InformaTION', '...'],
};

export default function PricingPage() {
  return <span className="text-7xl">Pricing page</span>;
}
