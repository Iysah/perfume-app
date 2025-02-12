import { Colors, SPACING } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BidSummary {
    activeBids: number;
    wonBids: number;
    pendingBids: number;
  }
  
  interface BiddingStatusProps {
    summary: BidSummary;
  }
  
  const BiddingStatus = ({ summary }: BiddingStatusProps) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bidding Overview</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{summary.activeBids}</Text>
            <Text style={styles.statLabel}>Active Bids</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{summary.wonBids}</Text>
            <Text style={styles.statLabel}>Won Bids</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{summary.pendingBids}</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.light.background,
      // marginVertical: SPACING.md,
      padding: SPACING.md,
      borderRadius: SPACING.sm,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: SPACING.sm,
      color: Colors.light.text,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.light.primary,
    },
    statLabel: {
      fontSize: 12,
      color: Colors.light.text,
      marginTop: 4,
    },
  });
  
  export default BiddingStatus;