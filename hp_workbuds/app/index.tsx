import { Redirect } from 'expo-router';
import { FIREBASE_AUTH } from '../firebase_config';
import { useEffect, useState } from 'react';

export default function Index() {
  const [user, setUser] = useState(FIREBASE_AUTH.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return null;
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
  return <Redirect href="/(tabs)" />;
}
