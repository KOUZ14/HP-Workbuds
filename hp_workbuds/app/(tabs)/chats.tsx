import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function ChatsScreen() {
  const mockChats = [
    { 
      id: 1, 
      name: 'John Doe', 
      lastMessage: "Let's grab coffee! ☕", 
      time: '2:45 PM', 
      unread: 2,
      avatar: '👨‍💻',
      color: Colors.light.primary
    },
    { 
      id: 2, 
      name: 'Ultimate Frisbee Squad', 
      lastMessage: 'Great game today! 🥏 See you Friday!', 
      time: '1:30 PM', 
      unread: 0,
      avatar: '🏃‍♂️',
      color: Colors.light.accent
    },
    { 
      id: 3, 
      name: 'Photography Nerds', 
      lastMessage: 'Check out this shot! 📸✨', 
      time: '11:15 AM', 
      unread: 1,
      avatar: '📷',
      color: Colors.light.yellow
    },
    { 
      id: 4, 
      name: 'Lunch Buddies', 
      lastMessage: 'Thai food today? 🍜', 
      time: '10:20 AM', 
      unread: 3,
      avatar: '🍽️',
      color: Colors.light.pink
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>💬 Chats</Text>
        <Text style={styles.subtitle}>Your work squad awaits! 🚀</Text>
      </View>
      
      <ScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
        {mockChats.map((chat) => (
          <TouchableOpacity key={chat.id} style={[styles.chatItem, { borderLeftColor: chat.color }]}>
            <View style={[styles.avatarContainer, { backgroundColor: chat.color }]}>
              <Text style={styles.avatarEmoji}>{chat.avatar}</Text>
            </View>
            
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{chat.name}</Text>
                <Text style={styles.chatTime}>{chat.time}</Text>
              </View>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {chat.lastMessage}
              </Text>
            </View>
            
            {chat.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{chat.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
        
        {/* Empty state for fun */}
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>🎉</Text>
          <Text style={styles.emptyText}>Start a new conversation!</Text>
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
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: Colors.light.card,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: { 
    fontSize: 32, 
    fontWeight: '800',
    color: Colors.light.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.icon,
    textAlign: 'center',
    fontWeight: '500',
  },
  chatList: {
    flex: 1,
    paddingTop: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: Colors.light.card,
    borderRadius: 20,
    borderLeftWidth: 4,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarEmoji: {
    fontSize: 24,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  chatName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.light.text,
  },
  chatTime: {
    fontSize: 12,
    color: Colors.light.icon,
    fontWeight: '600',
  },
  lastMessage: {
    fontSize: 14,
    color: Colors.light.icon,
    lineHeight: 18,
  },
  unreadBadge: {
    backgroundColor: Colors.light.primary,
    borderRadius: 15,
    minWidth: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  unreadText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    marginTop: 20,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.light.icon,
    fontWeight: '600',
  },
});
