import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GLOBALSTYLES } from '@/styles/global-styles';
import ThemeBackBtn from '@/components/ThemeBackBtn';
import ThemeOTPInput from '@/components/ThemeOtpInput';
import Toast from '@/components/toast';
import ThemeText from '@/components/ThemeText';
import { ENDPOINTS } from '@/constants/api';
import Constants from 'expo-constants';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeTimer from '@/components/ThemeTimer';
import { SuccessIcon } from '@/assets/icons/icon';
import { WarningIcon } from '@/assets/icons/icon';
import { ErrorIcon } from '@/assets/icons/icon';
import { Colors } from '@/constants/Colors';
import { HelpIcon } from '@/assets/icons/icon';

const VerifyScreen = () => {
    // const { phoneNumber, pinId, accInfo} = route.params || ""
    const [loading, setLoading] = useState(false)
    const { email } = useLocalSearchParams();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [accType, setAccType] = useState<any>("")
    const [otpError, setOtpError] = useState(false);
    const [toast, setToast] = useState({
        visible: false,
        type: '',
        title: '',
        message: '',
      });
    
      const showToast = (type: string, title: string, message: string) => {
        setToast({
          visible: true,
          type,
          title,
          message,
        });
    
        // Automatically hide toast after 3 seconds
        setTimeout(() => setToast({ ...toast, visible: false }), 3000);
    };

    const handleVerification = async () => {
        router.push('/(app)/terms')
        if (!otp || otp.length !== 6) {
            setOtpError(true);
            return;
          }
      
          setOtpError(false);
          setLoading(true);
        try {
            setLoading(true);
            
            // Combine OTP array into a single string
            // const email = route.params.email;
            const pinCode = otp.join('');
            
            // Make API call to verify OTP
            const response = await axios.post(`${ENDPOINTS.VERIFY_OTP}`, {
                email,
                pinCode,
              }
            );

            console.log('Verification Response:', response.data);

            if (response.data.status) {
                setOtpError(false);
                // Extract user token from the response
                const userToken = response.data?.token; // Adjust key based on API response

                // Store the token in AsyncStorage
                await AsyncStorage.setItem('userToken', userToken);
                // Store user data in auth context
                // await login(response.data.result);
                showToast('success', 'Success', 'Account verified successfully');
                router.push('/(app)/terms')
            } else {
                setOtpError(true);
                setOtp(['', '', '', '']);
                showToast('warning', 'Verification Failed', response.data.message || 'Unable to create account');
            }
        } catch (error) {
            console.error('Verification error:', error);
            if (axios.isAxiosError(error)) {
                const serverError = error.response?.data;
                console.log(error.response)
                showToast('error', 'Verification Error', serverError?.message || 'An error occurred during signup');
            } else {
                showToast('error', 'Error', 'Network error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <View style={[GLOBALSTYLES.container]}>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaProvider style={{ backgroundColor: '#fff', position: 'relative', paddingTop: Constants.statusBarHeight}}>
            <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
            <View style={[GLOBALSTYLES.wrapper]}>
                
                <ThemeBackBtn/>
                <View style={[{gap: 8}]}>
                    <ThemeText type='header'>Verify Account </ThemeText>
                    <ThemeText type='primaryNormalText'>Check the OTP code sent to {email}</ThemeText>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <ThemeOTPInput otp={otp} setOtp={setOtp} error={otpError} />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleVerification}>
                    <Text style={styles.buttonText}>{loading ? 'Verifying...' : 'Verify'}</Text>
                </TouchableOpacity>
                
                <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={GLOBALSTYLES.text}>Didn’t receive the code? Resend in </Text>
                    <ThemeTimer />
                </View>
                
            </View>
            </SafeAreaProvider>
            <Toast
                visible={toast.visible}
                type={toast.type as 'success' | 'warning' | 'error' | 'help'}
                title={toast.title}
                message={toast.message}
                icon={
                    toast.type === 'success' ? SuccessIcon : 
                    toast.type === 'warning' ? WarningIcon : 
                    toast.type === 'error' ? ErrorIcon : 
                    HelpIcon
                }
                background={
                    toast.type === 'success' ? '#D4EDDA' : 
                    toast.type === 'warning' ? '#FFF3CD' : 
                    toast.type === 'error' ? '#F8D7DA' : 
                    '#E2F0FF'  // Default help color
                }
                border={
                    toast.type === 'success' ? '#155724' : 
                    toast.type === 'warning' ? '#856404' : 
                    toast.type === 'error' ? Colors.error.errorBorder : 
                    '#0070F3'  // Default help border color
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        fontFamily: 'Averta-Black'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'AvertaDemoPECuttedDemo-Regular',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    socialButton: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 5,
        width: '48%',
        alignItems: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 12,
    },
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
        marginTop: 40,
    },
    buttonGradient: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'AvertaDemoPECuttedDemo-Regular',
    },
    forgotPassword: {
        marginTop: 10,
        textAlign: 'center',
        color: '#888',
        fontFamily: 'AvertaDemoPECuttedDemo-Regular',
    },
});

export default VerifyScreen;
