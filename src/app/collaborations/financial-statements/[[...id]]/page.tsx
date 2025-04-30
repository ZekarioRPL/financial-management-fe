"use client";

import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Collaborations() {
  const params = useParams();
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
  console.log(params);
  if (!currentData) {
    return <div className="text-red-600">Data tidak ditemukan untuk ID: {collaborationId}</div>;
  }

  return (<>
    <h1 className="text-2xl font-bold text-gray-800">{currentData.title}</h1>
    <NavigationTabs id={`${id}`} />

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
      <div className="bg-gray-50 p-3 rounded border">
        <p className="text-xs text-gray-500">Uang Saat Ini 12</p>
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
