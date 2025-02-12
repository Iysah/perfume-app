import { Stack } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Layout: React.FC = () => {
    return (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="notifications" options={{ headerShown: false }}  />
          <Stack.Screen name="terms" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
        </Stack>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Layout;
