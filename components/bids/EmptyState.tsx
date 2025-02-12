import { SPACING, Colors} from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No orders yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl * 2,
  },
  text: {
    fontSize: 16,
    color: Colors.light.text,
  },
});

export default EmptyState;