"use client";

import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export default function Collaborations() {
  const params = useParams();
  const pathname = usePathname();
  const { id } = params

  const collaborations = [
    {
      title: 'Keuangan Keluarga',
      desc: 'Manajemen Keuangan Keluarga Agus',
      status: 'Active',
      href: '1',
      anggota: 3,
    },
    {
      title: 'Perusahaan A',
      desc: 'Manajemen Keuangan Perusahaan A',
      status: 'Non - Active',
      href: '2',
      anggota: 5,
    },
  ];

  const collaborationId = Array.isArray(id) ? id[0] : id;

  const currentData = collaborations.find((item) => item.href === collaborationId);

  if (!currentData) {
    return <div className="text-red-600">Data tidak ditemukan untuk ID: {collaborationId}</div>;
  }

  const menuHeaders: MenuItem[] = [
    { label: 'Home', href: `/collaborations/${id}` },
    { label: 'Laporan Keuangan', href: `/collaborations/financial-statements/${id}` },
    { label: 'Transaksi', href: `/collaborations/transactions/${id}` },
    { label: 'History', href: `/collaborations/history/${id}` },
    { label: 'Budget', href: `/collaborations/budget/${id}` },
  ];

  return (<>
    <h1 className="text-2xl font-bold text-gray-800">{currentData.title}</h1>
    {/* <div className="mb-4">
      <nav className="flex flex-wrap items-center text-sm text-gray-600 space-x-4 space-y-2 mt-2">
        {menuHeaders.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`cursor-pointer ${pathname === item.href ? 'text-blue-600 font-semibold underline' : 'hover:underline'}`}
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
    </div> */}
    <NavigationTabs id={`${id}`} />

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
      <div className="bg-gray-50 p-3 rounded border">
        <p className="text-xs text-gray-500">Uang Saat Ini 12213</p>
        <p className="text-lg font-semibold text-gray-800">Rp. 23.000.000</p>
      </div>
      <div className="bg-gray-50 p-3 rounded border">
        <p className="text-xs text-gray-500">Anggota</p>
        <p className="text-lg font-semibold text-gray-800">{currentData.anggota}</p>
      </div>
      <div className="bg-gray-50 p-3 rounded border">
        <p className="text-xs text-gray-500">Pemasukan Bulan Ini</p>
        <p className="text-lg font-semibold text-gray-800">Rp. 1.000.000</p>
      </div>
      <div className="bg-gray-50 p-3 rounded border">
        <p className="text-xs text-gray-500">Pengeluaran Bulan Ini</p>
        <p className="text-lg font-semibold text-gray-800">Rp. 200.000</p>
      </div>
    </div>

  </>
  );
}
