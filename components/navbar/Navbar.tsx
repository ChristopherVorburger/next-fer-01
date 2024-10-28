import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2">
      <Link href="/" className="flex items-center">
        <IconHome className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItems) => (
        <Link className="mr-2" key={navItems.path} href={navItems.path}>
          {navItems.text}
        </Link>
      ))}
    </nav>
  );
};
