"use client";

import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

export default function FinancialStatements() {
  const params = useParams();
  const { id } = params

  const [budgets, setBudgets] = useState<Budget[]>([]);
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

  // const budgets = [
  //   {
  //     category: "Keluarga 1",
  //     desc: "Keluarga Agus 1",
  //     amount: "Rp. 1.000.000",
  //     start_date: "01-01-2023",
  //     end_date: "31-12-2023",
  //     status: "Active",
  //   },
  //   {
  //     category: "Keluarga 2",
  //     desc: "Keluarga Agus 2",
  //     amount: "Rp. 2.000.000",
  //     start_date: "01-01-2023",
  //     end_date: "31-12-2023",
  //     status: "Non - Active",
  //   },
  //   {
  //     category: "Keluarga 3",
  //     desc: "Keluarga Agus 3",
  //     amount: "Rp. 3.000.000",
  //     start_date: "01-01-2023",
  //     end_date: "31-12-2023",
  //     status: "Active",
  //   },
  //   {
  //     category: "Keluarga 4",
  //     desc: "Keluarga Agus 4",
  //     amount: "Rp. 4.000.000",
  //     start_date: "01-01-2023",
  //     end_date: "31-12-2023",
  //     status: "Non - Active",
  //   },
  // ]

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/budgets");
        const json = await res.json();
        if (json.status === 200) {
          setBudgets(json.data);
        }
      } catch (err) {
        console.error("Error fetching budgets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBudgets();
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

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">Budgets</h1>
      <NavigationTabs id={`${id}`} />

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Budgets</h2>
            <p className="text-sm text-gray-600">List Budgets</p>
          </div>
          <Link
            href={`/collaborations/${id}/budget/create`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm"
          >
            Add Budget
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <div className="overflow-x-auto bg-white border border-gray-200 rounded shadow">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50 text-left text-gray-600 font-semibold">
                <tr>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                {budgets.map((budget) => (
                  <tr key={budget.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{budget.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{budget.name}</td>
                    <td className="px-6 py-4">{budget.start_date} - {budget.end_date}</td>
                    <td className="px-6 py-4">{formatRupiah(budget.amount)}</td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/collaborations/${id}/budget/edit/${budget.id}`}
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
        )}
      </div>
    </>
  );
}
