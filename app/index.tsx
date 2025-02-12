import React from 'react';
import { AppleIcon, EyeCloseIcon, GoogleIcon, MailIcon, SuccessIcon, UserIcon, WarningIcon, HelpIcon, ErrorIcon } from '@/assets/icons/icon';
import { Colors } from '@/constants/Colors';
import { GLOBALSTYLES } from '@/styles/global-styles';
import Constants from 'expo-constants';
import { Link, router, Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, StatusBar, Pressable, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import { ENDPOINTS } from '@/constants/api';
import { KEYS } from '@/constants/keys';
import Checkbox from 'expo-checkbox';
import Toast from '@/components/toast';
import GradientButton from '@/components/gradientButton';

export default function SignupScreen() {
    const [step, setStep] = useState<'email' | 'password'>('email')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState<'Poor' | 'Medium' | 'Strong'>('Poor')
    const [isChecked, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
    const checkPasswordStrength = (pass: string) => {
      const isLongEnough = pass.length >= 8;
      const hasSpecial = /[#&@$!%*?]/.test(pass);
      const hasNumber = /\d/.test(pass);
      
      // Count how many requirements are met
      const strengthScore = [isLongEnough, hasSpecial, hasNumber].filter(Boolean).length;
      
      if (strengthScore === 4) return 'Strong';
      if (strengthScore === 3) return 'Medium';
      return 'Poor';
    }
    
    const handleSignup = async () => {
        // Input validation
        if (!fullName || !email || !password || !isChecked) {
            showToast('warning', 'Warning','Please fill in all fields' )
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('warning', 'Warning', 'Please enter a valid email address');
            return;
        }
        
        const userData = { 
            full_name: fullName,
            email: email, 
            password: password,
        };

        
        try {    
            const response = await axios.post(ENDPOINTS.SIGNUP, { 
                full_name: fullName,
                email: email, 
                password: password,
            });
    
            const responseJson = await response;
            console.log("Response JSON:", responseJson);
    
            // Validate the server response
            if (!responseJson.data) {
                showToast('error', 'Signup Failed', 'Invalid server response');
                return;
            }
    
            // Handle successful signup
            if (responseJson.data.success) {
                showToast('success', 'Success', 'Account created successfully');
                router.push({ pathname: '/(auth)/verify', params: { email } });
            } else {
                // Handle server-side validation errors
                showToast('error', 'Signup Failed', responseJson.data || 'Unable to create account');
            }

            // Clear input fields
            setFullName('')
            setEmail('')
            setPassword('')
        } catch (error) {
            // Handle network or server errors
            if (axios.isAxiosError(error)) {
                const serverError = error.response?.data;
                console.log(error.response)
                showToast('error', 'Signup Error', serverError?.message || 'An error occurred during signup');
            } else {
                showToast('error', 'Error', 'Network error. Please try again.');
            }
          } finally {
            // Reset loading state
            setIsLoading(false);
          }
    };

    
  return (
    <View style={[GLOBALSTYLES.container, {backgroundColor: '#fff'}]}>
        <Stack.Screen options={{ headerShown: false }} />
        <SafeAreaProvider style={{ backgroundColor: 'transparent', position: 'relative', paddingTop: Constants.statusBarHeight}}>
            <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
            <KeyboardAvoidingView style={[GLOBALSTYLES.wrapper]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Text style={styles.title}>Create an Account</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 30 }}>
                    <Text style={[GLOBALSTYLES.text]}>Kindly fill in your details. Already a member?</Text> 
                    <TouchableOpacity onPress={() => router.push('/(auth)/login')}> 
                        <Text style={{ color: Colors.light.primary, }}> Login</Text></TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 30 }}>
                    {/*  ========== inputs fields =============  */}

                    {/* ======== full name ============ */}
                    <View style={{ marginBottom: 15}}>
                        <Text style={GLOBALSTYLES.label}>Full name</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Full name"
                                placeholderTextColor="#BBBBB9"
                                value={fullName}
                                onChangeText={(text) => setFullName(text)}
                            />
                            <UserIcon />
                        </View>
                    </View>

                    {/* ============ email ============= */}
                    <View style={{ marginBottom: 15}}>
                        <Text style={GLOBALSTYLES.label}>Email Address</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                placeholderTextColor="#BBBBB9"
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text)
                                }}
                            />
                            <MailIcon />
                        </View>
                    </View>

                    {/* ============= password ============= */}
                    <View style={{ marginBottom: 15 }}>
                        <Text style={GLOBALSTYLES.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="••••••••••"
                                placeholderTextColor="#BBBBB9"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    setPasswordStrength(checkPasswordStrength(text));
                                }}
                            />
                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                <EyeCloseIcon />
                            </Pressable>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '4' }}>
                            <Text style={[styles.passwordStrength, password.length >= 8 && styles.metRequirement]}>8 characters min.</Text>
                            <Text style={[styles.passwordStrength, /\d/.test(password) && styles.metRequirement]}>at least one number</Text>
                            <Text style={[styles.passwordStrength, /[#&@$!%*?]/.test(password) && styles.metRequirement]}>a special character</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={GLOBALSTYLES.label}>Confirm Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="••••••••••"
                                placeholderTextColor="#BBBBB9"
                                secureTextEntry={!showPassword}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                <EyeCloseIcon />
                            </Pressable>
                        </View>

                        {confirmPassword !== password && (
                            <Text style={GLOBALSTYLES.errorText}>Passwords do not match!</Text>
                        )}
                    </View>

                    <View style={styles.section}>
                        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? Colors.light.primary : '#DADADA  '} />
                        <Text style={styles.forgotPassword} onPress={() => router.push('/(app)/terms')}>Accept our <Text style={GLOBALSTYLES.linkText}>Terms</Text> &  
                            <Text style={GLOBALSTYLES.linkText}> conditions</Text>
                        </Text>
                    </View>

                    <GradientButton 
                        title="Create an Account"
                        onPress={handleSignup}
                        loading={isLoading}
                    />

                </ScrollView>
            </KeyboardAvoidingView>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    socialButton: {
        borderColor: '#DADADA',
        borderWidth: 1,
        paddingVertical: 17,
        paddingHorizontal: 42,
        borderRadius: 5,
        width: '48%',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: '90%',
        textTransform: 'lowercase',
        fontFamily: 'Averta-Regular',

    },
    passwordInput: {
        height: 50,
        width: '90%',
    },
    passwordContainer: {
        position: 'relative',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
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
        backgroundColor: Colors.light.primary
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    forgotPassword: {
        // marginTop: 0,
        // textAlign: 'center',
        textAlign: 'left',
        color: '#888',
    },
    passwordStrength: {
        textAlign: 'center',
        backgroundColor: '#F6F6F5',
        color: '#787874',
        fontSize: 11,
        padding: 5,
        borderRadius: 20,
    },
    metRequirement: {
        textDecorationLine: 'line-through',
        backgroundColor: '#EFFFF2',
        padding: 5
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 8,
        width: 16,
        height: 16,
        borderRadius: 4,
    },
});