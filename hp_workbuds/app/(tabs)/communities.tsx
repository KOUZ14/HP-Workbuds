import { View, Text, StyleSheet } from 'react-native';

export default function CommunitiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communities</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold' },
});
