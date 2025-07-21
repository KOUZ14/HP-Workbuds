import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState({
    pushNotifications: true,
    emailNotifications: false,
    chatNotifications: true,
    eventReminders: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showOnlineStatus: true,
    allowDirectMessages: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePrivacy = (key: keyof typeof privacy) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Push Notifications</Text>
            <Text style={styles.settingDescription}>Receive push notifications for new messages and updates</Text>
          </View>
          <Switch
            value={notifications.pushNotifications}
            onValueChange={() => toggleNotification('pushNotifications')}
            trackColor={{ false: Colors.light.border, true: Colors.light.tint }}
            thumbColor={notifications.pushNotifications ? '#ffffff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Email Notifications</Text>
            <Text style={styles.settingDescription}>Receive email updates for important events</Text>
          </View>
          <Switch
            value={notifications.emailNotifications}
            onValueChange={() => toggleNotification('emailNotifications')}
            trackColor={{ false: Colors.light.border, true: Colors.light.tint }}
            thumbColor={notifications.emailNotifications ? '#ffffff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Chat Notifications</Text>
            <Text style={styles.settingDescription}>Get notified when someone messages you</Text>
          </View>
          <Switch
            value={notifications.chatNotifications}
            onValueChange={() => toggleNotification('chatNotifications')}
            trackColor={{ false: Colors.light.border, true: Colors.light.tint }}
            thumbColor={notifications.chatNotifications ? '#ffffff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Event Reminders</Text>
            <Text style={styles.settingDescription}>Remind me about upcoming events</Text>
          </View>
          <Switch
            value={notifications.eventReminders}
            onValueChange={() => toggleNotification('eventReminders')}
            trackColor={{ false: Colors.light.border, true: Colors.light.tint }}
            thumbColor={notifications.eventReminders ? '#ffffff' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Profile Visibility</Text>
            <Text style={styles.settingDescription}>Make your profile visible to other users</Text>
          </View>
          <Switch
            value={privacy.profileVisible}
            onValueChange={() => togglePrivacy('profileVisible')}
            trackColor={{ false: Colors.light.border, true: Colors.light.tint }}
            thumbColor={privacy.profileVisible ? '#ffffff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Show Online Status</Text>
            <Text style={styles.settingDescription}>Let others see when you're online</Text>
          </View>
          <Switch
            value={privacy.showOnlineStatus}
            onValueChange={() => togglePrivacy('showOnlineStatus')}
            trackColor={{ false: Colors.light.border, true: Colors.light.tint }}
            thumbColor={privacy.showOnlineStatus ? '#ffffff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Allow Direct Messages</Text>
            <Text style={styles.settingDescription}>Allow other users to send you direct messages</Text>
          </View>
          <Switch
            value={privacy.allowDirectMessages}
            onValueChange={() => togglePrivacy('allowDirectMessages')}
            trackColor={{ false: Colors.light.border, true: Colors.light.tint }}
            thumbColor={privacy.allowDirectMessages ? '#ffffff' : '#f4f3f4'}
          />
        </View>
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
    padding: 20,
    paddingBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  settingTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.text,
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: Colors.light.icon,
    lineHeight: 18,
  },
});
