import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GLOBALSTYLES } from '@/styles/global-styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack, router } from 'expo-router'
import Constants from 'expo-constants'
import { NotificationsIcon } from '@/assets/icons/icon'

const Sell = () => {
  return (
    <View style={[GLOBALSTYLES.container, {backgroundColor: '#fff'}]}>
    <Stack.Screen options={{ headerShown: false }} />
    <SafeAreaProvider style={{ backgroundColor: 'transparent', position: 'relative', paddingTop: Constants.statusBarHeight}}>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
        <View style={[GLOBALSTYLES.wrapper]}>
          <View style={[GLOBALSTYLES.row, { justifyContent: 'space-between'}]}>
            <Text style={GLOBALSTYLES.title}>Sales</Text>

            <TouchableOpacity onPress={() => {router.push('/(app)/notifications')}}>
              <NotificationsIcon />
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaProvider>
    </View>
  )
}

export default Sell

const styles = StyleSheet.create({})