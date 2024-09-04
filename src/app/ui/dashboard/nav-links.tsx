'use client';

import {
  HomeIcon,
  DocumentDuplicateIcon,
  WalletIcon,
  DocumentIcon,
  UserGroupIcon,
  UserIcon,


} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
export const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, label: 'Dashboard' },
  {
    name: 'View My Profile',
    href: '/dashboard/myprofile',
    icon: UserIcon,
    label: 'Profile',
  },
  {
    name: 'Appointments',
    href: '/dashboard/appointments',
    icon: UserGroupIcon,
    label: 'Appointments',
  },
  {
    name: 'Manage Articles',
    href: '/dashboard/articlemanagement',
    icon: DocumentIcon,
    label: 'Articles',
  },
  {
    name: 'Wallet',
    href: '/dashboard/wallet',
    icon: WalletIcon,
    label: 'Wallet',
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
    label: 'Invoices',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center  gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-cyan-600 md:flex-none md:justify-start md:p-2 md:px-3 ',
              {
                'bg-sky-100 text-cyan-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

