import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Title',
  description: 'About description',
  keywords: ['About Page', 'Chris', 'InformaTION', '...'],
};

export default function AboutPage() {
  return <span className="text-7xl">About page</span>;
}