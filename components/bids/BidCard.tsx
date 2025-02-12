import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, SPACING } from '@/constants/Colors';
import CountdownTimer from './CountdownTimer';

interface BidCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
  currentBid: number;
  endTime: Date;
  status: 'active' | 'won' | 'lost' | 'expired';
  bidCount: number;
  onBidPress: () => void;
}

const BidCard = ({  product,
  currentBid,
  endTime,
  status,
  bidCount,
  onBidPress }: BidCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.bidInfo}>
          <View>
            <Text style={styles.label}>Current Bid</Text>
            <Text style={styles.price}>${currentBid}</Text>
          </View>
          {status === 'active' ? (
            <CountdownTimer endTime={endTime} />
          ) : (
            <Text style={[styles.status, styles[status]]}>{status.toUpperCase()}</Text>
          )}
        </View>
        {status === 'active' && (
          <TouchableOpacity style={styles.button} onPress={onBidPress}>
            <Text style={styles.buttonText}>Place Bid</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    borderRadius: SPACING.sm,
    margin: SPACING.sm,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: SPACING.sm,
    borderTopRightRadius: SPACING.sm,
  },
  content: {
    padding: SPACING.md,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  description: {
    fontSize: 14,
    color: Colors.light.text,
    marginTop: SPACING.xs,
  },
  bidInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  label: {
    fontSize: 12,
    color: Colors.light.text,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.primary,
  },
  button: {
    backgroundColor: Colors.light.primary,
    padding: SPACING.sm,
    borderRadius: SPACING.sm,
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: SPACING.xs,
  },
  active: {
    backgroundColor: Colors.light.primary + '20',
    color: Colors.light.primary,
  },
  won: {
    backgroundColor: '#22C55E20',
    color: '#22C55E',
  },
  lost: {
    backgroundColor: '#EF444420',
    color: '#EF4444',
  },
  expired: {
    backgroundColor: Colors.light.tabIconDefault,
    color: Colors.light.text,
  },
});

export default BidCard;