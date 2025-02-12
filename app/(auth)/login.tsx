import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, StatusBar, Pressable, Alert } from 'react-native';
import { AppleIcon, EyeCloseIcon, GoogleIcon, UserIcon } from '@/assets/icons/icon';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router, Stack, useRouter } from 'expo-router';
import { GLOBALSTYLES } from '@/styles/global-styles';
import Constants from 'expo-constants';
import { Colors } from '@/constants/Colors';
import axios from 'axios';
import { ENDPOINTS } from '@/constants/api';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { observer } from 'mobx-react-lite';
import { useUserStore } from '@/store/user';
import Toast from '@/components/toast';
import { KEYS } from '@/constants/keys';
import GradientButton from '@/components/gradientButton';

const LoginScreen =  observer(() => {
    const [identifier, setIdentifier] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useUserStore()
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

        setTimeout(() => setToast({ ...toast, visible: false}), 3000);
    }

    const validateInputs = () => {
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            Alert.alert('Validation Error', 'A valid email is required.');
            return false;
        }
        if (!password.trim()) {
            Alert.alert('Validation Error', 'Password is required.');
            return false;
        }
        return true;
    };
    

    const handleLogin = async () => {
        if (!validateInputs()) return;
        router.push('/(app)/(tabs)')
        const loginData = { 
            username: identifier,
            password: password,
        };
    
        try {
            const response = await axios.post(ENDPOINTS.LOGIN,{
               loginData,
            });

            const responseJson = await response;
            console.log("Response JSON:", responseJson);

            // Handle successful login
            if (!responseJson.data) {
                showToast('success', 'Success', 'Login successful!')
                // Navigate to the home screen or dashboard
                return;
            }
            // Clear input fields
            setIdentifier('')
            setPassword('')
        } catch (error) {
        // Handle server or network errors
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            showToast('error', 'Login Error', errorMessage);
        } else {
            showToast('error', 'Error', 'Network error. Please try again.');
        }
        } finally {
            setIsLoading(false); // Stop loader
        }
    };
    
    return (
        <View style={[GLOBALSTYLES.container, {backgroundColor: '#fff'}]}>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaProvider style={{ backgroundColor: 'transparent', position: 'relative', paddingTop: Constants.statusBarHeight}}>
                <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
                <View style={[GLOBALSTYLES.wrapper]}>
                    <Text style={styles.title}>Login to your Account</Text>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginBottom: 30 }}>
                        <Text style={[GLOBALSTYLES.text]}>Not a member yet?</Text> 
                        <TouchableOpacity onPress={() => router.push('/')}> 
                            <Text style={{ color: Colors.light.primary, }}> Join us now!</Text></TouchableOpacity>
                    </View>

                    {/*  ========== inputs fields =============  */}
                    <View style={{ marginBottom: 15}}>
                        <Text style={GLOBALSTYLES.label}>Email Address</Text>
                        <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            placeholderTextColor="#BBBBB9"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="default" // Allows text or email input
                        />
                            <UserIcon />
                        </View>
                    </View>

                    <View>
                        <Text style={GLOBALSTYLES.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#BBBBB9"
                                secureTextEntry={!showPassword}
                            />
                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                <EyeCloseIcon />
                            </Pressable>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/(auth)/forget-password')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <GradientButton
                        title="Login"
                        onPress={handleLogin}
                        loading={isLoading}
                    />
                </View>
            </SafeAreaProvider>
        </View>
    );
});

export default LoginScreen;

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
        borderRadius: 7,
        width: '48%',
        alignItems: 'center',
    },
    input: {
        height: 50,

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
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 10,
        // textAlign: 'center',
        textAlign: 'right',
        color: '#888',
    },
});


        // setUser({
        //     firstname: "John",
        //     lastname: "Doe"
        // })
        // console.log("user")
        // getUser();
        // return;