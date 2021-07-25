import { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';

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

  const handleSessionState = async (_event, session) => {
    console.log('session state changed', session);
    setSession(session);
    setUser(session?.user ?? null);
    setLoading(false);
  };

  const signInWithGoogle = () => {
    // Additonal Redirect URLs in GUI shouldnt contain empty spaces
    setLoading(true);
    return supabase.auth.signIn(
      {
        provider: 'google'
      },
      { redirectTo: 'http://lvh.me:3000/dashboard' }
    );
  };

  const signOut = () => {
    return supabase.auth.signOut().then(() => Router.push('/'));
  };

  useEffect(() => {
    // Get session information prior to state change
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

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
