import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { GLOBALSTYLES } from '@/styles/global-styles'
import { Stack, router } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import GradientButton from '@/components/gradientButton'
import { ArrowBack } from '@/assets/icons/icon'
import { Colors } from '@/constants/Colors'

const Notifications = () => {
  return (
    <View style={[GLOBALSTYLES.container, {backgroundColor: '#fff'}]}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaProvider style={{ backgroundColor: 'transparent', position: 'relative', paddingTop: Constants.statusBarHeight}}>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
        <View style={[GLOBALSTYLES.wrapper]}>

          <View style={[GLOBALSTYLES.row, { gap: 20 }]}>
            <TouchableOpacity 
              style={{ backgroundColor: '#f4f4f4', width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {router.back()}}
            >
              <ArrowBack />
            </TouchableOpacity>
            <Text style={[GLOBALSTYLES.title, { textAlign: 'center', fontWeight: '700' }]}>Notifications</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 100 }}>
            <Image source={require('../../assets/images/bell.png')} />
            <Text style={{ marginVertical: 20, fontSize: 16 }}>No Notification yet</Text>
            <View style={GLOBALSTYLES.buttonGradient}>
              <Text style={GLOBALSTYLES.buttonText}>Explore Categories</Text>
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})