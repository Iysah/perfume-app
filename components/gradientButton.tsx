import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

interface GradientButtonProps {
  onPress: () => void;
  title: string;
  loading: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onPress, title, loading }) => {
  return (
    <TouchableOpacity style={styles.buttonGradient} onPress={onPress}>
        {loading ? (
        <ActivityIndicator color="#FFFFFF" size={'small'} /> // Show spinner
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

export default GradientButton

const styles = StyleSheet.create({
    buttonGradient: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.primary,
        borderRadius: 25,
        marginTop: 40,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})