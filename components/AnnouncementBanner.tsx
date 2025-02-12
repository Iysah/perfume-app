import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SPACING, Colors} from '@/constants/Colors';

interface AnnouncementBannerProps {
  message: string;
  onPress?: () => void;
}

const AnnouncementBanner = ({ message, onPress }: AnnouncementBannerProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name="bullhorn" size={20} color={Colors.light.primary} />
      <Text style={styles.message}>{message}</Text>
      <FontAwesome name="chevron-right" size={16} color={Colors.light.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    padding: SPACING.md,
    marginVertical: SPACING.md,
    borderRadius: SPACING.sm,
    borderLeftWidth: 4,
    borderLeftColor: Colors.light.primary,
  },
  message: {
    flex: 1,
    marginHorizontal: SPACING.md,
    color: Colors.light.text,
    fontSize: 14,
  },
});

export default AnnouncementBanner;