'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavigationTabs {
    id: string;
}
export function NavigationTabs({ id = '#' }: NavigationTabs) {
    const pathname = usePathname();

    const menu = [
        { label: 'Home', href: `/collaborations/${id}` },
        { label: 'Laporan Keuangan', href: `/collaborations/${id}/financial-statements` },
        { label: 'Transaksi', href: `/collaborations/${id}/transactions` },
        { label: 'History', href: `/collaborations/${id}/history` },
        { label: 'Budget', href: `/collaborations/${id}/budget` },
        { label: 'Bills', href: `/collaborations/${id}/bills` },
        { label: 'Setting', href: `/collaborations/${id}/setting` },
    ];

    return (
        <div className="mb-3 border-b pb-3 border-gray-300">
            <nav className="flex flex-wrap items-center text-sm text-gray-600 space-x-4 mt-2">
                {menu.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`cursor-pointer ${pathname === item.href ? 'text-blue-600 font-semibold underline' : 'hover:underline'
                            }`}
                    >
                        {item.label}
                        {item.label === 'History' && (
                            <span className="bg-gray-200 px-1 rounded text-xs ml-1">6</span>
                        )}
                    </Link>
                ))}
                <span className="hover:underline cursor-pointer">
                    <i className="fa-solid fa-ellipsis"></i>
                </span>
            </nav>
        </div>
    );
}
