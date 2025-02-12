import { Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GLOBALSTYLES } from '@/styles/global-styles';
import { router } from 'expo-router';
import { Stack } from 'expo-router';
import { ArrowBack } from '@/assets/icons/icon';
import Constants from 'expo-constants';
import { Colors } from '@/constants/Colors';
import GradientButton from '@/components/gradientButton';

const ForgetPassword = () => {
  const [username, setUsername] = useState('');

  const handleSendOTP = async () => {
    router.push('/(auth)/verify')
  }
  
  return (
    <View style={[GLOBALSTYLES.container]}>
      <Stack.Screen options={{ headerShown: false }} />
        <SafeAreaProvider style={{ backgroundColor: '#fff', position: 'relative', paddingTop: Constants.statusBarHeight}}>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
        <View style={[GLOBALSTYLES.wrapper]}>  
        <>
          <Pressable style={[styles.btnContainer]} onPress={() => {router.back()}}>
            <ArrowBack />
          </Pressable>

          <Text style={GLOBALSTYLES.title}>Forgot Password?</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 30 }}>
            <Text style={[GLOBALSTYLES.text]}>Enter your email address to reset your password. Remember your password now? <Text onPress={() => router.push('/(auth)/login')} style={{ color: Colors.light.primary, }}>Login</Text></Text>
          </View>

          <View style={{ marginBottom: 15}}>
            <Text style={GLOBALSTYLES.label}>Email Address</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="adeleke@gmail.com"
                placeholderTextColor="#BBBBB9"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
          </View>

          <GradientButton onPress={handleSendOTP} title='Send OTP Code' />
        </>
      </View>
      </SafeAreaProvider>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 3,
},
genderOption: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: '#C9C9C9',
  borderRadius: 5,
  marginBottom: 25,
},
checkmark: {
  color: '#01AA1B',
},
saveButton: {
  backgroundColor: 'blue',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
},
saveButtonText: {
  color: 'white',
  fontWeight: 'bold',
},
passwordContainer: {
  position: 'relative',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 7,
  paddingHorizontal: 10,
  marginBottom: 10,
},
input: {
  height: 50,
  textTransform: 'lowercase',
  width: '90%'

},
})