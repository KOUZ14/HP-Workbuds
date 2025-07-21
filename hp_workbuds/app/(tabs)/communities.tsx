import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function CommunitiesScreen() {
  const mockCommunities = [
    { id: 1, name: 'Gaming', members: 156, description: 'A space for all kinds of gamers' },
    { id: 2, name: 'Ultimate Frisbee', members: 89, description: 'A community for Ultimate Frisbee enthusiasts' },
    { id: 3, name: 'Next Gen Employees', members: 43, description: 'A group for the next generation of employees' },
    { id: 4, name: 'Photography', members: 234, description: 'A community for photography lovers' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Communities</Text>
        <Text style={styles.subtitle}>Join groups that match your interests</Text>
      </View>
      
      <ScrollView style={styles.communityList}>
        {mockCommunities.map((community) => (
          <TouchableOpacity key={community.id} style={styles.communityCard}>
            <View style={styles.communityHeader}>
              <Text style={styles.communityName}>{community.name}</Text>
              <Text style={styles.memberCount}>{community.members} members</Text>
            </View>
            <Text style={styles.communityDescription}>{community.description}</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Community</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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
  },
  title: { 
    fontSize: 28, 
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.icon,
  },
  communityList: {
    flex: 1,
    padding: 20,
  },
  communityCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  communityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  communityName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
  },
  memberCount: {
    fontSize: 14,
    color: Colors.light.icon,
  },
  communityDescription: {
    fontSize: 14,
    color: Colors.light.icon,
    lineHeight: 20,
    marginBottom: 16,
  },
  joinButton: {
    backgroundColor: Colors.light.tint,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
