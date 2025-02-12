import { StyleSheet, Image, Platform, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import { GLOBALSTYLES } from '@/styles/global-styles';
import { Stack, router } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { NotificationsIcon } from '@/assets/icons/icon';
import CustomTabs from '@/components/bids/CustomTabs';
import EmptyState from '@/components/bids/EmptyState';
import BidsList from '@/components/bids/BidsList';
import { Bid } from "@/types";
import { sampleBids } from '@/data/data';


export default function BidsScreen() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Ongoing', 'Past'];
  
  const filteredBids = useMemo(() => {
    switch (activeTab) {
      case 'Ongoing':
        return sampleBids.filter(bid => bid.status === 'active');
      case 'Past':
        return sampleBids.filter(bid => ['won', 'lost', 'expired'].includes(bid.status));
      default:
        return sampleBids;
    }
  }, [activeTab]);
  
  return (
    <View style={[GLOBALSTYLES.container, {backgroundColor: '#fff'}]}>
    <Stack.Screen options={{ headerShown: false }} />
    <SafeAreaProvider style={{ backgroundColor: 'transparent', position: 'relative', paddingTop: Constants.statusBarHeight}}>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
        <View style={[GLOBALSTYLES.wrapper]}>
          <View style={[GLOBALSTYLES.row, { justifyContent: 'space-between'}]}>
            <Text style={GLOBALSTYLES.title}>Bids</Text>

            <TouchableOpacity style={styles.titleContainer} onPress={() => {router.push('/(app)/notifications')}}>
              <NotificationsIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <CustomTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            {filteredBids.length === 0 ? (
              <EmptyState />
            ) : (
              <BidsList bids={filteredBids} />
            )}
          </View>
        </View>
        </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
