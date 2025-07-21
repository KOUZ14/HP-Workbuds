import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

interface FunCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  color?: string;
  shadowColor?: string;
}

export default function FunCard({ 
  children, 
  style, 
  color = Colors.light.card,
  shadowColor = Colors.light.shadow 
}: FunCardProps) {
  return (
    <View style={[
      styles.card,
      {
        backgroundColor: color,
        shadowColor: shadowColor,
      },
      style
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 16,
  },
});
