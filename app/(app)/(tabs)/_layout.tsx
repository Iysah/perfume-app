import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BuyIcon, HomeOutline, ProfileIcon, SalesIcon, } from '@/assets/icons/icon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
          position: 'absolute',
          backgroundColor: 'transparent',
        },
      }),
      }}>
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeOutline color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="bids" 
        options={{
          tabBarLabel: 'Bids',
          tabBarIcon: ({ color }) => (
            <BuyIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: 'Sales',
          tabBarIcon: ({ color }) => <SalesIcon color={color} />,
        }}  
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
