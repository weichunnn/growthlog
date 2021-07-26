import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAuth } from '@/lib/auth';
import LoadingState from './LoadingState';
import SideNav from './SideNav';

const App = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    } else if (!user & (user != null)) {
      console.log('No user, no access to private route');
      console.log('Rerouted');
      // router.push('/signup');
    }
  }, [user]);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-white flex items-center justify-center">
        <LoadingState />
      </div>
    );
  } else {
    return (
      <div className="w-screen min-h-screen bg-white flex">
        <div className="w-64 border-r-2 border-gray-200 px-6 py-8">
          <SideNav />
        </div>
        <div className="px-8 py-4 flex-grow">{children}</div>
      </div>
    );
  }
};

export default App;
