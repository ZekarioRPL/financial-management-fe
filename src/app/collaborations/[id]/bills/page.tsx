"use client";

import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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

  const bills = [
    {
      category: "kategori 1",
      desc: "kategori desc 1",
      amount: "1000000",
      duedate: "01-01-2023",
      status: "pay",
    },
    {
      category: "kategori 2",
      desc: "kategori desc 2",
      amount: "30000",
      duedate: "01-01-2023",
      status: "pay",
    },
    {
      category: "kategori 3",
      desc: "kategori desc 3",
      amount: "30000",
      duedate: "01-01-2023",
      status: "pay",
    },
    {
      category: "kategori 4",
      desc: "kategori desc 4",
      amount: "30000",
      duedate: "01-01-2023",
      status: "pay",
    },
  ]

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
          <h2 className="text-xl font-semibold text-gray-900">Bills</h2>
          <p className="text-sm text-gray-600">
            List Bills
          </p>
        </div>
        <Link href={`/collaborations/${id}/bills/create`} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm">
          Add Bill
        </Link>
      </div>


      <div className="bg-white border border-gray-200 rounded shadow p-2 mb-2">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-900 mb-2">Remaining Bills</h2>
        <div className="flex justify-between">
          <p>Balance</p>
          <p>3,2000.000</p>
        </div>
        <div className="flex justify-between">
          <p>This Periode</p>
          <p>200,000</p>
        </div>
      </div>


      {/* Table */}
      <div className="overflow-x-auto bg-white border border-gray-200 rounded shadow">
        <h2 className="text-xl my-2 px-4 border-b-2">This Periode</h2>
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left text-gray-600 font-semibold">
            <tr>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Desc</th>
              <th className="px-6 py-3">Payment Date</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            {bills.map((bill, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{bill.category}</td>
                <td className="px-6 py-4">{bill.desc}</td>
                <td className="px-6 py-4">
                  <div className="text-red-500">Due in 4 days</div>
                </td>
                <td className="px-6 py-4">
                  <button className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm'>
                    PAY {bill.amount}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href={`/collaborations/${id}/bills/edit/100`} className="text-indigo-600 hover:underline text-sm">
                    Edit
                  </a>
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
