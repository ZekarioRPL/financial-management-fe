"use client";

import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FinancialStatements() {
  const params = useParams();
  const router = useRouter();
  const { id } = params

  const [formData, setFormData] = useState({
    name: '',
    category_id: '',
    amount: '',
    start_date: '',
    end_date: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:8000/api/budgets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // tambahkan Authorization jika perlu
        },
        body: JSON.stringify({
          ...formData,
          collaboration_id: collaborationId,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to save budget');
      }

      router.push(`/collaborations/${collaborationId}/budget`);
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal menyimpan budget!');
    }
  };

  return (<>
    <h1 className="text-2xl font-bold text-gray-800">{currentData.title}</h1>
    <NavigationTabs id={`${id}`} />

    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="my-3 text-base/7 font-semibold text-gray-900">Add Budget</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="category_id" className="block text-sm/6 font-medium text-gray-900">
                Select Category
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  required
                >
                  <option value="">-- Select Category --</option>
                  <option value="6">Makanan dan Minuman</option>
                  <option value="7">Transportasi</option>
                  <option value="8">Tagihan</option>
                  <option value="9">Hiburan</option>
                  <option value="10">Kesehatan</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="amount" className="block text-sm/6 font-medium text-gray-900">
                Amount
              </label>
              <div className="mt-2">
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="start_date" className="block text-sm/6 font-medium text-gray-900">
                Start Date
              </label>
              <div className="mt-2">
                <input
                  id="start_date"
                  name="start_date"
                  type="date"
                  value={formData.start_date}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="end_date" className="block text-sm/6 font-medium text-gray-900">
                End Date
              </label>
              <div className="mt-2">
                <input
                  id="end_date"
                  name="end_date"
                  type="date"
                  value={formData.end_date}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        <Link href={`/collaborations/${id}/budget`} className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </Link>
      </div>
    </form>
  </>
  );
}
