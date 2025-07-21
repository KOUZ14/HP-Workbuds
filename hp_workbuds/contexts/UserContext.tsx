import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { FIREBASE_DB } from '../firebase_config';
import { useAuth } from './AuthContext';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  department?: string;
  position?: string;
  phone?: string;
  location?: string;
  skills?: string[];
  interests?: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface UserContextType {
  profile: UserProfile | null;
  loading: boolean;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchUserProfile = async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      const userDoc = await getDoc(doc(FIREBASE_DB, 'users', user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setProfile({
          ...userData,
          createdAt: userData.createdAt?.toDate() || new Date(),
          updatedAt: userData.updatedAt?.toDate() || new Date(),
        } as UserProfile);
      } else {
        // Create initial profile
        const initialProfile: UserProfile = {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || '',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        // Filter out undefined values before saving to Firestore
        const cleanProfile = Object.fromEntries(
          Object.entries(initialProfile).filter(([_, value]) => value !== undefined)
        );
        
        await setDoc(doc(FIREBASE_DB, 'users', user.uid), {
          ...cleanProfile,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        
        setProfile(initialProfile);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !profile) return;

    try {
      // Filter out undefined values to prevent Firestore errors
      const cleanUpdates = Object.fromEntries(
        Object.entries(updates).filter(([_, value]) => value !== undefined)
      );
      
      const updatedData = {
        ...cleanUpdates,
        updatedAt: new Date(),
      };

      await updateDoc(doc(FIREBASE_DB, 'users', user.uid), updatedData);
      
      // Update Firebase Auth profile if displayName changed
      if (updates.displayName) {
        await updateProfile(user, {
          displayName: updates.displayName,
        });
      }

      setProfile(prev => ({
        ...prev!,
        ...updatedData,
        updatedAt: new Date(),
      }));
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  const refreshProfile = async () => {
    setLoading(true);
    await fetchUserProfile();
  };

  useEffect(() => {
    fetchUserProfile();
  }, [user]);

  return (
    <UserContext.Provider value={{
      profile,
      loading,
      updateUserProfile,
      refreshProfile,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}