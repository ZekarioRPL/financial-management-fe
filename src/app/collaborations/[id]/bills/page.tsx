"use client";

import { useEffect, useState } from 'react';
import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function FinancialStatements() {
  const params = useParams();
  const { id } = params;

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // const bills = [
  //   {
  //     category: "kategori 1",
  //     desc: "kategori desc 1",
  //     amount: "1000000",
  //     duedate: "01-01-2023",
  //     status: "pay",
  //   },
  //   {
  //     category: "kategori 2",
  //     desc: "kategori desc 2",
  //     amount: "30000",
  //     duedate: "01-01-2023",
  //     status: "pay",
  //   },
  //   {
  //     category: "kategori 3",
  //     desc: "kategori desc 3",
  //     amount: "30000",
  //     duedate: "01-01-2023",
  //     status: "pay",
  //   },
  //   {
  //     category: "kategori 4",
  //     desc: "kategori desc 4",
  //     amount: "30000",
  //     duedate: "01-01-2023",
  //     status: "pay",
  //   },
  // ]

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/bills');
        const data = await response.json();
        setBills(data.data); // Pastikan format JSON backend sesuai
      } catch (error) {
        console.error('Error fetching bills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);


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

  const formatRupiah = (amount: number | string) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(Number(amount));
  };


  const totalBalance = bills.reduce((total: number, bill: any) => {
    return total + Number(bill.amount);
  }, 0);

  // Filter tagihan bulan ini
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const billsThisMonth = bills.filter((bill: any) => {
    const [day, month, year] = bill.duedate.split('-').map(Number);
    return month - 1 === currentMonth && year === currentYear;
  });

  const totalThisPeriode = billsThisMonth.reduce((total: number, bill: any) => {
    return total + Number(bill.amount);
  }, 0);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">{currentData.title}</h1>
      <NavigationTabs id={`${id}`} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Bills</h2>
            <p className="text-sm text-gray-600">List Bills</p>
          </div>
          <Link
            href={`/collaborations/${id}/bills/create`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm"
          >
            Add Bill
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-2 mb-2">
          <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-900 mb-2">Remaining Bills</h2>
          <div className="flex justify-between">
            <p>Balance</p>
            <p>{formatRupiah(totalBalance)}</p>
          </div>
          <div className="flex justify-between">
            <p>This Periode</p>
            <p>{formatRupiah(totalThisPeriode)}</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white border border-gray-200 rounded shadow">
          <h2 className="text-xl my-2 px-4 border-b-2">This Periode</h2>
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-left text-gray-600 font-semibold">
              <tr>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Desc</th>
                <th className="px-6 py-3">Payment Date</th>
                {/* <th className="px-6 py-3">Amount</th> */}
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {bills.map((bill: any, idx: number) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{bill.category}</td>
                  <td className="px-6 py-4">{bill.name}</td>
                  <td className="px-6 py-4">
                    <div className="">{bill.duedate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                      PENDING {formatRupiah(bill.amount)}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/collaborations/${id}/bills/edit/${bill.id}`}
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
