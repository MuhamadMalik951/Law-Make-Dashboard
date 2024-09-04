'use client';
import { usePathname } from 'next/navigation';
import { links } from '@/app/ui/dashboard/nav-links';
import Link from 'next/link';

interface Crumb {
  name: string;
  href: string;
}


export function BreadLinks() {
  const path = usePathname();
  const crumbs: Crumb[] = [{ name: 'Dashboard', href: '/dashboard' }];
  links.map((link, set) => {
    if (link.href === path) {
      if (link.href === '/dashboard') {
        return;
      }
      crumbs.push({ name: link.label, href: link.href });
    }
  });

  return crumbs.map((crumb, index) => (
    <li key={index}>
      <Link href={crumb.href}>{crumb.name}</Link>
    </li>
  ));
}
