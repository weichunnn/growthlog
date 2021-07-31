import {
  FaCubes,
  FaFeatherAlt,
  FaCalendarAlt,
  FaPaperclip,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import router, { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';

import Logo from './Logo';

export const SideNavButton = ({ title, onClick }) => {
  const router = useRouter();

  const iconSwitch = () => {
    switch (title) {
      case 'Dashboard':
        return <FaCubes className="mr-4 text-xl" />;
      case 'Journal':
        return <FaFeatherAlt className="mr-4 text-xl" />;
      case 'Planner':
        return <FaCalendarAlt className="mr-4 text-xl" />;
      case 'Notes':
        return <FaPaperclip className="mr-4 text-xl" />;
      case 'Settings':
        return <FaCog className="mr-4 text-xl" />;
      case 'Logout':
        return <FaSignOutAlt className="mr-4 text-xl" />;
    }
  };
  return (
    <button
      className={`flex items-center w-full py-2 px-4 rounded-md transistion duration-200 ease-in-out  ${
        router.route.slice(1) == title.toLowerCase()
          ? 'text-white bg-blue-600 hover:bg-blue-700'
          : 'hover:bg-gray-200'
      }`}
      onClick={onClick}
    >
      {iconSwitch()}
      <span>{title}</span>
    </button>
  );
};

export default function SideNav() {
  const { signOut } = useAuth();

  return (
    <div className="h-full flex flex-col">
      <Logo additionalClasses="mb-12" />
      <div className="h-full flex flex-col justify-between text-gray-600">
        <nav className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-xs px-4 uppercase">Analytics</h1>
            <SideNavButton title="Dashboard" linkTo="/dashboard" />
          </div>
          <div className="space-y-4">
            <h1 className="text-xs px-4 uppercase">Content</h1>
            <SideNavButton
              title="Journal"
              onClick={() => router.push('/journal')}
            />
            <SideNavButton
              title="Planner"
              onClick={() => router.push('/planner')}
            />
            <SideNavButton
              title="Notes"
              onClick={() => router.push('/notes')}
            />
          </div>
        </nav>
        <nav className="space-y-4">
          <SideNavButton
            title="Settings"
            onClick={() => router.push('/settings')}
          />
          <SideNavButton
            title="Logout"
            linkTo="/logout"
            onClick={() => signOut()}
          />
        </nav>
      </div>
    </div>
  );
}
