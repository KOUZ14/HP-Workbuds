import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function EventsScreen() {
  const mockEvents = [
    { 
      id: 1, 
      title: 'Ultimate Frisbee Tournament', 
      date: 'July 15, 2025', 
      time: '2:00 PM - 4:00 PM',
      location: 'Football Field',
      attendees: 12
    },
    { 
      id: 2, 
      title: 'Next Gen Lunch & Networking', 
      date: 'July 18, 2025', 
      time: '12:00 PM - 1:30 PM',
      location: 'Cafeteria',
      attendees: 45
    },
    { 
      id: 3, 
      title: 'Photography Workshop', 
      date: 'July 22, 2025', 
      time: '3:00 PM - 4:00 PM',
      location: 'Maple Conference Room',
      attendees: 8
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Events</Text>
        <Text style={styles.subtitle}>Stay updated with upcoming events</Text>
      </View>
      
      <ScrollView style={styles.eventList}>
        {mockEvents.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <View style={styles.eventHeader}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <View style={styles.attendeeBadge}>
                <Text style={styles.attendeeText}>{event.attendees} attending</Text>
              </View>
            </View>
            
            <View style={styles.eventDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Date:</Text>
                <Text style={styles.detailValue}>{event.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Time:</Text>
                <Text style={styles.detailValue}>{event.time}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Location:</Text>
                <Text style={styles.detailValue}>{event.location}</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Event</Text>
            </TouchableOpacity>
          </View>
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
  eventList: {
    flex: 1,
    padding: 20,
  },
  eventCard: {
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
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
    flex: 1,
    marginRight: 12,
  },
  attendeeBadge: {
    backgroundColor: Colors.light.secondary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  attendeeText: {
    fontSize: 12,
    color: Colors.light.icon,
    fontWeight: '500',
  },
  eventDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.light.text,
    width: 80,
  },
  detailValue: {
    fontSize: 14,
    color: Colors.light.icon,
    flex: 1,
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
