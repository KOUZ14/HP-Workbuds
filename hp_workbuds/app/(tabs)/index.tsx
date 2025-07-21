import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import FunCard from '@/components/ui/FunCard';

export default function HomeScreen() {
  const quickActions = [
    {
      title: 'Start Chatting',
      description: 'Connect with your work buddies! 💬',
      emoji: '🚀',
      color: Colors.light.primary,
    },
    {
      title: 'Join Events',
      description: 'Discover what\'s happening! 🎉',
      emoji: '📅',
      color: Colors.light.accent,
    },
    {
      title: 'Find Communities',
      description: 'Join your favorite groups! 👥',
      emoji: '🌟',
      color: Colors.light.yellow,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcomeEmoji}>👋</Text>
          <Text style={styles.title}>Welcome to HP Workbuds!</Text>
          <Text style={styles.subtitle}>Where work meets awesome people ✨</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚀 Quick Actions</Text>
          
          {quickActions.map((action, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}>
              <FunCard color={action.color + '20'} shadowColor={action.color}>
                <View style={styles.actionCard}>
                  <Text style={styles.actionEmoji}>{action.emoji}</Text>
                  <View style={styles.actionContent}>
                    <Text style={styles.actionTitle}>{action.title}</Text>
                    <Text style={styles.actionDescription}>{action.description}</Text>
                  </View>
                </View>
              </FunCard>
            </TouchableOpacity>
          ))}
          
          <FunCard style={styles.motivationCard}>
            <Text style={styles.motivationEmoji}>🎯</Text>
            <Text style={styles.motivationTitle}>You're doing great!</Text>
            <Text style={styles.motivationText}>
              Keep connecting and building amazing relationships with your colleagues!
            </Text>
          </FunCard>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 40,
  },
  welcomeEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  title: { 
    fontSize: 28, 
    fontWeight: '800',
    marginBottom: 8,
    color: Colors.light.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.icon,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 22,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: Colors.light.text,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionEmoji: {
    fontSize: 32,
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: Colors.light.icon,
    lineHeight: 20,
  },
  motivationCard: {
    marginTop: 20,
    alignItems: 'center',
  },
  motivationEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  motivationTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  motivationText: {
    fontSize: 14,
    color: Colors.light.icon,
    textAlign: 'center',
    lineHeight: 20,
  },
});
