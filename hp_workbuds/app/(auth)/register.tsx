import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase_config';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleRegister = async () => {
    setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Navigate to the next screen or show success message
        } catch (error) {
            console.error(error);
            // Show error message to the user
        } finally {
            setLoading(false);
            router.replace('/(auth)/login');
        }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> 
        : <>
      <Button title="Register" onPress={handleRegister} />
      </>}
      <Text style={styles.link} onPress={() => router.push('../login')}>Already have an account? Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 16 },
  link: { color: '#007AFF', marginTop: 16, textAlign: 'center' },
});
