'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Dialog } from '@/components/ui/Dialog';

interface CollaborationsLayoutProps {
  children: React.ReactNode;
}

export default function CollaborationsLayout({ children }: CollaborationsLayoutProps) {
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
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari kolaborasi..."
          className="w-full pl-10 pr-4 py-2 rounded border bg-white text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fas fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>

      {/* Children here will be [[...id]]/page.tsx */}
      {children}

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
