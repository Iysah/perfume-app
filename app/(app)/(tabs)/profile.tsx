import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack, router } from 'expo-router'
import { GLOBALSTYLES } from '@/styles/global-styles'
import Constants from 'expo-constants'
import { ArrowRightIcon, NotificationsIcon, SettingsIcon } from '@/assets/icons/icon'
import { Colors } from '@/constants/Colors'

const Profile = () => {
  const retailer = {
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '121-224-7890',
    profileImage: 'https://via.placeholder.com/150',
    totalSales: 150,
    rating: 4.8,
  };

  return (
    <View style={[GLOBALSTYLES.container, {backgroundColor: '#fff'}]}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaProvider style={{ backgroundColor: 'transparent', position: 'relative', paddingTop: Constants.statusBarHeight}}>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
        <View style={[GLOBALSTYLES.wrapper]}>
          <View style={[GLOBALSTYLES.row, { justifyContent: 'space-between'}]}>
            <TouchableOpacity>
              <Image source={require('../../../assets/images/profile.png')} style={styles.profileImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {router.push('/(app)/settings')}}>
              <SettingsIcon />
            </TouchableOpacity>
          </View>

          <>
            <View style={styles.header}>
              <Image
                source={require('../../../assets/images/profile.png')} 
                style={[styles.profileImageMain, 
                { width: 70, height: 70,}]}
              />
            </View>

            <View style={[styles.about, {marginBottom: 20 }]}>
              <View style={{ justifyContent: 'flex-start', flexDirection: 'column'}}>
                <Text style={[styles.email, { fontWeight: '700', color: '#272727' }]}>{retailer.name}</Text>
                <Text style={styles.email}>{retailer.email}</Text>
                <Text style={styles.email}>{retailer.phoneNumber}</Text>
              </View>

              <Text style={{ color: Colors.light.primary, fontWeight: '700' }}>Edit</Text>
            </View>

            <View style={styles.about}>
              <Text>Address</Text>
              <ArrowRightIcon />
            </View>
            <View style={styles.about}>
              <Text>Wishlist</Text>
              <ArrowRightIcon />
            </View>
            <View style={styles.about}>
              <Text>Payment</Text>
              <ArrowRightIcon />
            </View>
            <View style={styles.about}>
              <Text>Help</Text>
              <ArrowRightIcon />
            </View>
            <View style={styles.about}>
              <Text>Supports</Text>
              <ArrowRightIcon />
            </View>

            <Text style={{ color: '#FA3636', fontSize: 16, textAlign: 'center', fontWeight: '700', marginTop: 20}}>Sign Out</Text>
          </>
        </View>
      </SafeAreaProvider>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
  },
  header: {
    alignItems: 'center',
    padding: 24,
  },
  profileImageMain: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  about: {
    backgroundColor: "#f4f4f4",
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  email: {
    fontSize: 16,
    color: '#27272780',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B46C1',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  buttons: {
    padding: 16,
  },
  button: {
    backgroundColor: '#6B46C1',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
})