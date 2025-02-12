import { Image, StyleSheet, Platform, View, StatusBar, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { GLOBALSTYLES } from '@/styles/global-styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack, router } from 'expo-router';
import Constants from 'expo-constants';
import { NotificationsIcon } from '@/assets/icons/icon';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import BiddingStatus from '@/components/BidsSummary';
import ProductSection from '@/components/ProductSection';
import { featuredProducts } from '@/data/data';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Living' },
    { id: 'sports', name: 'Sports' },
  ];

  const bidSummary = {
    activeBids: 5,
    wonBids: 12,
    pendingBids: 3,
  };

  return (
    <View style={[GLOBALSTYLES.container, {backgroundColor: '#fff'}]}>
    <Stack.Screen options={{ headerShown: false }} />
    <SafeAreaProvider style={{ backgroundColor: 'transparent', position: 'relative', paddingTop: Constants.statusBarHeight}}>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
        <View style={[GLOBALSTYLES.wrapper]}>
          <View style={[GLOBALSTYLES.row, { justifyContent: 'space-between'}]}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', gap: 15 }}>
              <TouchableOpacity onPress={() => {router.push('/(app)/settings')}}>
                <Image source={require('../../../assets/images/profile.png')} style={styles.profileImage} />
              </TouchableOpacity>
              <Text style={GLOBALSTYLES.title}>Welcome, Iysah.</Text>
            </View>

            <TouchableOpacity style={styles.titleContainer} onPress={() => {router.push('/(app)/notifications')}}>
              <NotificationsIcon />
            </TouchableOpacity>
          </View>

          {/* main content */}
          <ScrollView showsVerticalScrollIndicator={false} >
            <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
            
            <BiddingStatus summary={bidSummary} />
        
            {/* <AnnouncementBanner 
              message="New products available for bidding!"
              onPress={() => {}}
            /> */}

            <View style={[GLOBALSTYLES.row, { justifyContent: 'space-between'}]}>
              <Text style={GLOBALSTYLES.title}>Categories</Text>
              <Text style={GLOBALSTYLES.linkText} >See All</Text>
            </View>
            
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />


            <ProductSection
              title="Featured Products"
              products={featuredProducts}
              onProductPress={(product) => {}}
            />

            <ProductSection
              title="New Arrivals"
              products={featuredProducts}
              onProductPress={(product) => {}}
            />
            <View style={{ paddingBottom: 150 }} />
          </ScrollView>

        </View>
        </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  profileImage: {
    width: 40,
    height: 40,
    backgroundColor: "#f4f4f4",
  },
});
