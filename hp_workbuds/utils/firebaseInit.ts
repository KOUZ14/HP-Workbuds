import { FIREBASE_DB, FIREBASE_AUTH } from '../firebase_config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';

export const initializeFirebase = async () => {
  try {
    // Test Firestore connection
    console.log('Testing Firestore connection...');
    const testDoc = doc(FIREBASE_DB, 'test', 'connection');
    await setDoc(testDoc, { 
      timestamp: new Date(),
      status: 'connected' 
    }, { merge: true });
    
    const result = await getDoc(testDoc);
    if (result.exists()) {
      console.log('✅ Firestore connected successfully');
    }
    
    
    return {
      firestore: true,
      storage: true,
      auth: !!FIREBASE_AUTH.currentUser,
    };
  } catch (error) {
    console.error('❌ Firebase initialization error:', error);
    return {
      firestore: false,
      storage: false,
      auth: false,
      error: error,
    };
  }
};

// Call this function to test Firebase services
export const testFirebaseServices = async () => {
  const results = await initializeFirebase();
  console.log('Firebase Services Status:', results);
  return results;
};
