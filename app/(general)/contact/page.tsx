import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Title',
  description: 'Contact description',
  keywords: ['Contact Page'],
};

export default function ContactPage() {
  return <span className="text-7xl">Contact page</span>;
}
