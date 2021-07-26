import { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

import { supabase } from './supabase';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const checkRedirect = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('redirected');
  };

  const handleSessionState = (_event, session) => {
    console.log('session state changed', session);
    setSession(session);
    setUser(session?.user ?? false);
    setLoading(false);
    if (checkRedirect()) {
      console.log('history changed');
      window.history.replaceState(null, '', '/dashboard');
    }
  };

  const signInWithGoogle = () => {
    // Additonal Redirect URLs in GUI shouldnt contain empty spaces
    setLoading(true);
    return supabase.auth.signIn(
      {
        provider: 'google'
      },
      { redirectTo: 'http://lvh.me:3000/dashboard?redirected=true' }
    );
  };

  const signOut = () => {
    setLoading(true);
    return supabase.auth.signOut().then(() => router.push('/'));
  };

  useEffect(() => {
    const isRedirected = checkRedirect();
    // handle user flow when redirected from oauth provider
    // init state is exec for all non-redirected path
    if (!isRedirected) {
      console.log('init');
      // Get session information prior to state change
      const authSession = supabase.auth.session();
      setSession(authSession);
      setUser(authSession?.user ?? false);
      setLoading(false);
    } else {
      window.history.replaceState(null, '', '/dashboard');
    }

    // Handle session information on every subsequent state change
    const { data: authListener } =
      supabase.auth.onAuthStateChange(handleSessionState);

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return {
    loading,
    user,
    session,
    signInWithGoogle,
    signOut
  };
}
