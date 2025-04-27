'use client';

import { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Dialog } from '../components/ui/Dialog'; 
import { Card } from '../components/ui/Card';
import CustomImage from '../components/ui/Image';

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const collaborations = [
    {
      title: 'Keuangan Keluarga',
      desc: 'Manajemen Keuangan Keluarga Agus',
      status: 'Active',
      anggota: 3,
    },
    {
      title: 'Perusahaan A',
      desc: 'Manajemen Keuangan Perusahaan A',
      status: 'Non - Active',
      anggota: 5,
    },
  ];

  const filteredCollaborations = collaborations.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      showProfileDropdown={showProfileDropdown}
      setShowProfileDropdown={setShowProfileDropdown}
      collaborations={collaborations}
      handleLogout={handleLogout}
      setShowDialog={setShowDialog}
    >
      <h1 className="text-3xl font-bold mb-6">Beranda</h1>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Cari kolaborasi..."
          className="w-full pl-10 pr-4 py-2 rounded border bg-white text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fas fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCollaborations.map((item, idx) => (
          <Card key={idx} className="p-4">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.desc}</p>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span
                className={`${
                  item.status === 'Active' ? 'text-green-600' : 'text-gray-500'
                } flex items-center gap-1`}
              >
                ● {item.status}
              </span>
              <span>{item.anggota} Anggota</span>
            </div>
            <div className="flex justify-center mt-4">
              <CustomImage src="/team-icon.svg" alt="team" width={64} height={64} />
            </div>
          </Card>
        ))}
      </div>
      <Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
  <h2 className="text-lg font-semibold mb-4">Tambah Kolaborasi</h2>
  <p className="text-sm text-gray-600 mb-4">Form atau input lain bisa kamu taruh di sini.</p>
  <button
    onClick={() => setShowDialog(false)}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    Tutup
  </button>
</Dialog>

    </DashboardLayout>
  );
}
