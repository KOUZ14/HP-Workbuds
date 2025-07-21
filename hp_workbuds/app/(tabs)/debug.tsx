import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { testFirebaseServices } from '@/utils/firebaseInit';
import { useAuth } from '@/contexts/AuthContext';
import { useUser } from '@/contexts/UserContext';

export default function DebugScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile } = useUser();
  const [firebaseStatus, setFirebaseStatus] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  const runFirebaseTest = async () => {
    setTesting(true);
    try {
      const results = await testFirebaseServices();
      setFirebaseStatus(results);
    } catch (error) {
      setFirebaseStatus({ error: error?.toString() });
    } finally {
      setTesting(false);
    }
  };

  useEffect(() => {
    runFirebaseTest();
  }, []);

  const StatusIndicator = ({ label, status }: { label: string; status: boolean | undefined }) => (
    <View style={styles.statusItem}>
      <Text style={styles.statusLabel}>{label}</Text>
      <View style={[styles.statusIndicator, { backgroundColor: status ? '#10b981' : '#ef4444' }]}>
        <Text style={styles.statusText}>{status ? '✓' : '✗'}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Debug Information</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authentication Status</Text>
        <StatusIndicator label="User Logged In" status={!!user} />
        <Text style={styles.infoText}>User ID: {user?.uid || 'Not logged in'}</Text>
        <Text style={styles.infoText}>Email: {user?.email || 'N/A'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Status</Text>
        <StatusIndicator label="Profile Loaded" status={!!profile} />
        <Text style={styles.infoText}>Display Name: {profile?.displayName || 'N/A'}</Text>
        <Text style={styles.infoText}>Profile UID: {profile?.uid || 'N/A'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Firebase Services</Text>
        <TouchableOpacity 
          style={styles.testButton} 
          onPress={runFirebaseTest}
          disabled={testing}
        >
          <Text style={styles.testButtonText}>
            {testing ? 'Testing...' : 'Test Firebase Connection'}
          </Text>
        </TouchableOpacity>
        
        {firebaseStatus && (
          <>
            <StatusIndicator label="Firestore" status={firebaseStatus.firestore} />
            <StatusIndicator label="Storage" status={firebaseStatus.storage} />
            <StatusIndicator label="Auth" status={firebaseStatus.auth} />
            
            {firebaseStatus.error && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorTitle}>Error Details:</Text>
                <Text style={styles.errorText}>{firebaseStatus.error.toString()}</Text>
              </View>
            )}
          </>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Troubleshooting Steps</Text>
        <Text style={styles.troubleshootText}>
          1. Check Firebase Console → Project Settings → General tab
        </Text>
        <Text style={styles.troubleshootText}>
          2. Ensure Firestore Database is created (not in Native mode)
        </Text>
        <Text style={styles.troubleshootText}>
          3. Check Firestore Security Rules (see firebase-rules.txt)
        </Text>
        <Text style={styles.troubleshootText}>
          4. Ensure Storage is enabled in Firebase Console
        </Text>
        <Text style={styles.troubleshootText}>
          5. Check Network connection
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: Colors.light.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.light.text,
  },
  section: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 16,
  },
  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusLabel: {
    fontSize: 16,
    color: Colors.light.text,
  },
  statusIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    color: Colors.light.icon,
    marginBottom: 8,
  },
  testButton: {
    backgroundColor: Colors.light.tint,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  testButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  errorContainer: {
    backgroundColor: '#fef2f2',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  errorTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.error,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 12,
    color: Colors.light.error,
    fontFamily: 'monospace',
  },
  troubleshootText: {
    fontSize: 14,
    color: Colors.light.text,
    marginBottom: 8,
    lineHeight: 20,
  },
});
