import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import BidCard from './BidCard';
import { Colors } from '@/constants/Colors';
import { Bid } from "@/types";

interface BidsListProps {
  bids: Bid[];
}

const BidsList = ({ bids }: BidsListProps) => {
  return (
    <FlatList
      data={bids}
      renderItem={({ item }) => (
        <BidCard
          product={item.product}
          currentBid={item.currentBid}
          endTime={item.endTime}
          status={item.status}
          bidCount={item.bidCount}
          onBidPress={() => {
            // Handle bid press
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.light.background,
  },
});

export default BidsList;