import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAuth } from '@/lib/auth';
import LoadingState from './LoadingState';

const PrivateRouteWrapper = (Component) => (props) => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(user);
    if (user) {
      setLoading(false);
    } else if (!user & (user != null)) {
      console.log('No user, no dashboard');
      router.push('/');
    }
  }, [user]);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-white flex items-center justify-center">
        <LoadingState />
      </div>
    );
  } else {
    return <Component {...props} />;
  }
};

export default PrivateRouteWrapper;
