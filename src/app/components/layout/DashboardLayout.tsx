import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

type Collaboration = {
  title: string;
  desc: string;
  status: string;
  anggota: number;
};

interface DashboardLayoutProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  showProfileDropdown: boolean;
  setShowProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  collaborations: Collaboration[];
  handleLogout: () => void;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const DashboardLayout = ({
  collapsed,
  setCollapsed,
  showProfileDropdown,
  setShowProfileDropdown,
  collaborations,
  handleLogout,
  setShowDialog,
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-1">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          showProfileDropdown={showProfileDropdown}
          setShowProfileDropdown={setShowProfileDropdown}
          collaborations={collaborations}
          handleLogout={handleLogout}
          setShowDialog={setShowDialog}
        />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
