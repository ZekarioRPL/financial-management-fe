"use client";

import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { act } from 'react';

export default function FinancialStatements() {
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

    const historys = [
        {
            "date": "2025-05-18 08:00:00",
            "user_name": "andra",
            "action": "andra mengubah transaksi",
            "data": "Transaksi Diubah : Internet menjadi : Kesehatan sebesar : Rp50000"
        },
        {
            "date": "2025-05-18 08:30:00",
            "user_name": "example",
            "action": "example menghapus anggaran",
            "data": "Budget Dihapus : Internet - Rp500000"
        },
        {
            "date": "2025-05-18 09:00:00",
            "user_name": "danny",
            "action": "danny menghapus anggaran",
            "data": "Budget Dihapus : Makan - Rp750000"
        },
        {
            "date": "2025-05-18 09:30:00",
            "user_name": "example",
            "action": "example menambahkan kategori",
            "data": "Kategori Ditambahkan : Makan"
        },
        {
            "date": "2025-05-18 10:00:00",
            "user_name": "danny",
            "action": "danny menghapus kategori",
            "data": "Kategori Dihapus : Donasi"
        },
        {
            "date": "2025-05-18 10:30:00",
            "user_name": "example",
            "action": "example menambahkan kategori",
            "data": "Kategori Ditambahkan : Donasi"
        },
        {
            "date": "2025-05-18 11:00:00",
            "user_name": "budi",
            "action": "budi mengubah transaksi",
            "data": "Transaksi Diubah : Kesehatan menjadi : Transportasi sebesar : Rp100000"
        },
        {
            "date": "2025-05-18 11:30:00",
            "user_name": "budi",
            "action": "budi menghapus transaksi",
            "data": "Transaksi Dihapus : Investasi sebesar : Rp300000"
        },
        {
            "date": "2025-05-18 12:00:00",
            "user_name": "danny",
            "action": "danny mengubah tagihan",
            "data": "Tagihan Diubah : Transportasi menjadi : Donasi - Rp150000"
        },
        {
            "date": "2025-05-18 12:30:00",
            "user_name": "example",
            "action": "example menghapus kategori",
            "data": "Kategori Dihapus : Belanja"
        },
        {
            "date": "2025-05-18 13:00:00",
            "user_name": "example",
            "action": "example menghapus transaksi",
            "data": "Transaksi Dihapus : Listrik sebesar : Rp150000"
        },
        {
            "date": "2025-05-18 13:30:00",
            "user_name": "danny",
            "action": "danny menghapus kategori",
            "data": "Kategori Dihapus : Kesehatan"
        },
        {
            "date": "2025-05-18 14:00:00",
            "user_name": "budi",
            "action": "budi mengubah anggaran",
            "data": "Budget Diubah : Gaji menjadi : Kesehatan - Rp300000"
        },
        {
            "date": "2025-05-18 14:30:00",
            "user_name": "danny",
            "action": "danny menghapus transaksi",
            "data": "Transaksi Dihapus : Internet sebesar : Rp750000"
        },
        {
            "date": "2025-05-18 15:00:00",
            "user_name": "danny",
            "action": "danny mengubah anggaran",
            "data": "Budget Diubah : Kesehatan menjadi : Kesehatan - Rp500000"
        },
        {
            "date": "2025-05-18 15:30:00",
            "user_name": "andra",
            "action": "andra menghapus anggaran",
            "data": "Budget Dihapus : Makan - Rp250000"
        },
        {
            "date": "2025-05-18 16:00:00",
            "user_name": "example",
            "action": "example menambahkan anggaran",
            "data": "Budget Ditambahkan : Transportasi - Rp50000"
        },
        {
            "date": "2025-05-18 16:30:00",
            "user_name": "example",
            "action": "example menghapus kategori",
            "data": "Kategori Dihapus : Gaji"
        },
        {
            "date": "2025-05-18 17:00:00",
            "user_name": "alex",
            "action": "alex mengubah anggaran",
            "data": "Budget Diubah : Listrik menjadi : Internet - Rp250000"
        },
        {
            "date": "2025-05-18 17:30:00",
            "user_name": "alex",
            "action": "alex menghapus tagihan",
            "data": "Tagihan Dihapus : Donasi - Rp1000000"
        },
        {
            "date": "2025-05-18 18:00:00",
            "user_name": "alex",
            "action": "alex menghapus transaksi",
            "data": "Transaksi Dihapus : Kesehatan sebesar : Rp1000000"
        },
        {
            "date": "2025-05-18 18:30:00",
            "user_name": "example",
            "action": "example mengubah transaksi",
            "data": "Transaksi Diubah : Donasi menjadi : Investasi sebesar : Rp300000"
        },
        {
            "date": "2025-05-18 19:00:00",
            "user_name": "budi",
            "action": "budi menghapus kategori",
            "data": "Kategori Dihapus : Internet"
        },
        {
            "date": "2025-05-18 19:30:00",
            "user_name": "andra",
            "action": "andra mengubah transaksi",
            "data": "Transaksi Diubah : Listrik menjadi : Transportasi sebesar : Rp1000000"
        },
        {
            "date": "2025-05-18 20:00:00",
            "user_name": "andra",
            "action": "andra menghapus anggaran",
            "data": "Budget Dihapus : Listrik - Rp50000"
        },
        {
            "date": "2025-05-18 20:30:00",
            "user_name": "andra",
            "action": "andra mengubah anggaran",
            "data": "Budget Diubah : Transportasi menjadi : Belanja - Rp1000000"
        },
        {
            "date": "2025-05-18 21:00:00",
            "user_name": "andra",
            "action": "andra menambahkan transaksi",
            "data": "Transaksi : Listrik sebesar : Rp1000000"
        },
        {
            "date": "2025-05-18 21:30:00",
            "user_name": "alex",
            "action": "alex menghapus tagihan",
            "data": "Tagihan Dihapus : Listrik - Rp200000"
        },
        {
            "date": "2025-05-18 22:00:00",
            "user_name": "andra",
            "action": "andra menghapus transaksi",
            "data": "Transaksi Dihapus : Transportasi sebesar : Rp100000"
        },
        {
            "date": "2025-05-18 22:30:00",
            "user_name": "example",
            "action": "example mengubah kategori",
            "data": "Kategori Diubah : Kesehatan menjadi : Kesehatan"
        },
        {
            "date": "2025-05-18 23:00:00",
            "user_name": "andra",
            "action": "andra menambahkan kategori",
            "data": "Kategori Ditambahkan : Gaji"
        },
        {
            "date": "2025-05-18 23:30:00",
            "user_name": "budi",
            "action": "budi mengubah transaksi",
            "data": "Transaksi Diubah : Internet menjadi : Investasi sebesar : Rp250000"
        },
        {
            "date": "2025-05-19 00:00:00",
            "user_name": "danny",
            "action": "danny mengubah anggaran",
            "data": "Budget Diubah : Makan menjadi : Transportasi - Rp750000"
        },
        {
            "date": "2025-05-19 00:30:00",
            "user_name": "andra",
            "action": "andra mengubah kategori",
            "data": "Kategori Diubah : Gaji menjadi : Investasi"
        },
        {
            "date": "2025-05-19 01:00:00",
            "user_name": "andra",
            "action": "andra mengubah tagihan",
            "data": "Tagihan Diubah : Donasi menjadi : Makan - Rp200000"
        },
        {
            "date": "2025-05-19 01:30:00",
            "user_name": "alex",
            "action": "alex menghapus transaksi",
            "data": "Transaksi Dihapus : Listrik sebesar : Rp1000000"
        },
        {
            "date": "2025-05-19 02:00:00",
            "user_name": "alex",
            "action": "alex menambahkan kategori",
            "data": "Kategori Ditambahkan : Belanja"
        },
        {
            "date": "2025-05-19 02:30:00",
            "user_name": "danny",
            "action": "danny mengubah anggaran",
            "data": "Budget Diubah : Transportasi menjadi : Listrik - Rp200000"
        },
        {
            "date": "2025-05-19 03:00:00",
            "user_name": "budi",
            "action": "budi mengubah tagihan",
            "data": "Tagihan Diubah : Investasi menjadi : Gaji - Rp500000"
        },
        {
            "date": "2025-05-19 03:30:00",
            "user_name": "budi",
            "action": "budi mengubah tagihan",
            "data": "Tagihan Diubah : Kesehatan menjadi : Makan - Rp750000"
        },
        {
            "date": "2025-05-19 04:00:00",
            "user_name": "danny",
            "action": "danny menambahkan transaksi",
            "data": "Transaksi : Belanja sebesar : Rp50000"
        },
        {
            "date": "2025-05-19 04:30:00",
            "user_name": "andra",
            "action": "andra menghapus kategori",
            "data": "Kategori Dihapus : Makan"
        },
        {
            "date": "2025-05-19 05:00:00",
            "user_name": "example",
            "action": "example menghapus anggaran",
            "data": "Budget Dihapus : Internet - Rp150000"
        },
        {
            "date": "2025-05-19 05:30:00",
            "user_name": "alex",
            "action": "alex mengubah tagihan",
            "data": "Tagihan Diubah : Listrik menjadi : Belanja - Rp1000000"
        },
        {
            "date": "2025-05-19 06:00:00",
            "user_name": "danny",
            "action": "danny mengubah tagihan",
            "data": "Tagihan Diubah : Transportasi menjadi : Gaji - Rp150000"
        },
        {
            "date": "2025-05-19 06:30:00",
            "user_name": "danny",
            "action": "danny menghapus kategori",
            "data": "Kategori Dihapus : Gaji"
        },
        {
            "date": "2025-05-19 07:00:00",
            "user_name": "budi",
            "action": "budi mengubah transaksi",
            "data": "Transaksi Diubah : Investasi menjadi : Investasi sebesar : Rp300000"
        },
        {
            "date": "2025-05-19 07:30:00",
            "user_name": "andra",
            "action": "andra menghapus kategori",
            "data": "Kategori Dihapus : Kesehatan"
        },
        {
            "date": "2025-05-19 08:00:00",
            "user_name": "alex",
            "action": "alex menghapus tagihan",
            "data": "Tagihan Dihapus : Kesehatan - Rp750000"
        },
        {
            "date": "2025-05-19 08:30:00",
            "user_name": "alex",
            "action": "alex menambahkan kategori",
            "data": "Kategori Ditambahkan : Donasi"
        }
    ];

    const users = [
        {
            name: "Lindsay Walton",
            title: "Front-end Developer",
            email: "lindsay.walton@example.com",
            role: "Member",
        },
        {
            name: "Courtney Henry",
            title: "Designer",
            email: "courtney.henry@example.com",
            role: "Admin",
        },
        {
            name: "Tom Cook",
            title: "Director of Product",
            email: "tom.cook@example.com",
            role: "Member",
        },
        {
            name: "Whitney Francis",
            title: "Copywriter",
            email: "whitney.francis@example.com",
            role: "Admin",
        },
        {
            name: "Leonard Krasner",
            title: "Senior Designer",
            email: "leonard.krasner@example.com",
            role: "Owner",
        },
        {
            name: "Floyd Miles",
            title: "Principal Designer",
            email: "floyd.miles@example.com",
            role: "Member",
        },
    ];

    const collaborationId = Array.isArray(id) ? id[0] : id;

    const currentData = collaborations.find((item) => item.href === collaborationId);

    if (!currentData) {
        return <div className="text-red-600">Data tidak ditemukan untuk ID: {collaborationId}</div>;
    }

    return (<>
        <h1 className="text-2xl font-bold text-gray-800">{currentData.title}</h1>
        <NavigationTabs id={`${id}`} />

        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Riwayat</h2>
                    <p className="text-sm text-gray-600">
                        Activity History User
                    </p>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white border border-gray-200 rounded shadow">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50 text-left text-gray-600 font-semibold">
                        <tr>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">User</th>
                            <th className="px-6 py-3">Action</th>
                            <th className="px-6 py-3">Data</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-800">
                        {historys.map((history, idx) => (
                            <tr key={idx}>
                                <td className="px-6 py-4 whitespace-nowrap">{history.date}</td>
                                <td className="px-6 py-4">{history.user_name}</td>
                                <td className="px-6 py-4">{history.action}</td>
                                <td className="px-6 py-4">{history.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}
