import { Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import GradientButton from '@/components/gradientButton'
import { GLOBALSTYLES } from '@/styles/global-styles'
import { ArrowBack, EyeCloseIcon } from '@/assets/icons/icon'
import { router, Stack } from 'expo-router'
import Constants from 'expo-constants'
import { CustomInput } from '@/components/customInput'

const ResetPassword = () => {
  const [password, setPassword] = useState('')

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  
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

          <Text style={GLOBALSTYLES.title}>Reset Password</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 30 }}>
            <Text style={[GLOBALSTYLES.text]}>Create a new password to login to your account.</Text>
          </View>

          <CustomInput 
            label='New Password' 
            placeholder='••••••••••' 
            icon={<EyeCloseIcon />} 
            value={password}
            onChangeText={handlePasswordChange}
          />

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '4' }}>
            <Text style={[styles.passwordStrength, password.length >= 8 && styles.metRequirement]}>8 characters min.</Text>
            <Text style={[styles.passwordStrength, /\d/.test(password) && styles.metRequirement]}>at least one number</Text>
            <Text style={[styles.passwordStrength, /[#&@$!%*?]/.test(password) && styles.metRequirement]}>a special character</Text>
          </View>

          <CustomInput 
            label='Confirm Password' 
            placeholder='••••••••••' 
            icon={<EyeCloseIcon />} 
            value={password}
            onChangeText={handlePasswordChange}
          />

          <GradientButton onPress={handleSendOTP} title='Continue' />
        </>
      </View>
      </SafeAreaProvider>
    </View>
  )
}

export default ResetPassword


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
passwordStrength: {
  textAlign: 'center',
  backgroundColor: '#F6F6F5',
  color: '#787874',
  fontSize: 12,
  padding: 5,
  borderRadius: 20,
},
metRequirement: {
  textDecorationLine: 'line-through',
  backgroundColor: '#EFFFF2',
  padding: 5
},
})