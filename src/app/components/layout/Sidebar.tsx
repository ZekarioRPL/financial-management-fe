import Link from 'next/link';
import { Button } from '../ui/Button';
import { usePathname } from 'next/navigation';

type Collaboration = {
  title: string;
  desc: string;
  status: string;
  anggota: number;
  href: string;
};

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  showProfileDropdown: boolean;
  setShowProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  collaborations: Collaboration[];
  handleLogout: () => void;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({
  collapsed,
  setCollapsed,
  showProfileDropdown,
  setShowProfileDropdown,
  collaborations,
  handleLogout,
  setShowDialog,
}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-white border-r transition-all duration-300 flex flex-col md:w-64`}
    >
      <div className="flex justify-between p-4 border-b">
        <span className={`text-xl font-bold ${collapsed ? 'hidden' : 'block'}`}>DompetSehat</span>
        <button onClick={() => setCollapsed(!collapsed)} className="md:hidden">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <Button
          variant="ghost"
          className="w-full text-left py-3 px-3 border-1 border-gray-300 hover:bg-[#E9F5FE] hover:text-[#0C7FDA] hover:border-transparent transition-all duration-300"
        >
          <Link href="/dashboard" className="text-right text-gray-800">
            <i className="fas fa-home"></i> {!collapsed && 'Beranda'}
          </Link>
        </Button>

        <div className="flex justify-between items-center">
          <h3 className={`text-sm font-semibold ${collapsed ? 'hidden' : 'block'}`}>Kolaborasi</h3>
          {!collapsed && (
            <button onClick={() => setShowDialog(true)} className="text-[#0C7FDA] text-sm">
              <i className="fas fa-plus"></i> Tambah
            </button>
          )}
        </div>

        <div className="space-y-2">
          {collaborations.map((item) => (
            // <Button
            //   key={item.title}
            //   variant="ghost"
            //   className="w-full text-left py-3 px-3 border-1 border-gray-300 hover:bg-[#E9F5FE] hover:text-[#0C7FDA] hover:border-transparent transition-all duration-300"
            // >
            //   <span className="text-right text-gray-800">
            //     <i className="fas fa-user"></i> {!collapsed && item.title}
            //   </span>
            // </Button>
            <Link
              href={`/collaborations/${item.href}`}
              key={item.title}
              className={`w-full block text-left py-3 px-3 border-gray-300 transition-all duration-300 
                ${(pathname == `/collaborations/${item.href}`) ? 'bg-[#bdddf5] text-[#0C7FDA] border-transparent' : 'hover:bg-[#E9F5FE] hover:text-[#0C7FDA] hover:border-transparent'}`}
            >
              <span className="text-right text-gray-800">
                <i className="fas fa-user"></i> {!collapsed && item.title}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t">
        <div className="relative">
          <Button
            variant="ghost"
            className="w-full justify-start flex items-center gap-2 py-3 px-3 border-1 border-gray-300 hover:bg-[#E9F5FE] hover:text-[#0C7FDA] hover:border-transparent transition-all duration-300"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <span className="text-right text-gray-800">
              <i className="fas fa-user"></i> {!collapsed && 'Nama User'}
            </span>
          </Button>
          {showProfileDropdown && (
            <div className="absolute bottom-12 left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <Button
                variant="ghost"
                className="w-full justify-start px-4 py-2"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt text-right text-gray-800"> Keluar</i>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
