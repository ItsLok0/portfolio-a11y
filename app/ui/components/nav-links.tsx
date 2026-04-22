'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Textes', href: '/text' },
  { name: 'Boutton', href: '/button' },
  { name: 'Inputs', href: '/input' },
];
 
export default function NavLinks() {
    const pathname = usePathname();
 
    return (
        <nav className="flex gap-4 p-4">
            { links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                        'flex h-12 grow items-center justify-center gap-2 rounded-md bg-bg-surface p-3 text-sm font-medium hover:bg-primary/70 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-primary/70 text-white': pathname === link.href,
                        },
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </nav>
    );
}