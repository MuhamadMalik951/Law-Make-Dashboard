import Link from 'next/link';
import { BreadLinks } from './breadcrumbLinks';
interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <BreadLinks />
      </ul>
    </div>
  );
}
