import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from 'react-native';
import React from 'react';
import { FIREBASE_AUTH } from '../../firebase_config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAvoidingView } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const handleLogin = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Navigate to the next screen or show success message
        } catch (error) {
            console.error(error);
            // Show error message to the user
        } finally {
            setLoading(false);
            router.replace('/(tabs)');
        }
    };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> 
        : <>
        <Button title="Login" onPress={handleLogin} />
        </>}
      <Text style={styles.link} onPress={() => router.push('../register')}>Don't have an account? Register</Text>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 16 },
  link: { color: '#007AFF', marginTop: 16, textAlign: 'center' },
});
