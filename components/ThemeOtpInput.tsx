import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export type Iprops = {
  otp: string[],
  setOtp: (otp: string[]) => void,
  error?: boolean
}
const ThemeOTPInput = ({otp, setOtp, error}:Iprops) => {
  const inputRefs = useRef<Array<any>>([]);

  // Initialize with 6 empty strings instead of 4
  useEffect(() => {
    if (otp.length !== 6) {
      setOtp(new Array(6).fill(''));
    }
  }, []);

  const handleChangeText = (text: string, index: number) => {
    // Filter out non-numeric characters
    const filteredText = text.replace(/[^0-9]/g, '');

    if (filteredText.length > 0) {
      const newOtp = [...otp];
      newOtp[index] = filteredText;
      setOtp(newOtp);

      // Move to the next input if there's another one
      // Change condition to 5 for 6-digit OTP
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = ''; // Clear the previous input
        setOtp(newOtp);
        inputRefs.current[index - 1].focus(); // Move focus to the previous input
      }
    } else if (e.nativeEvent.key === 'Backspace' && otp[index] !== '') {
      const newOtp = [...otp];
      newOtp[index] = ''; // Clear the current input
      setOtp(newOtp);
    }
  };

  return (
    <View style={[styles.container, error && styles.errorBorder]}>
      {otp.map((value, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            ref={(ref) => inputRefs.current[index] = ref}
            style={[styles.input, {borderColor: otp.length == 6 ? "green" : "#ccc"}]}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            autoFocus={index === 0}
          />
          {index === 2 && <Text style={{ fontSize: 18 }}> -</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 60,
    gap: 5,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 2,
},
});

export default ThemeOTPInput;
