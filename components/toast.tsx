import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

interface ToastProps {
    visible: boolean; // Whether the toast is visible
    type: 'success' | 'warning' | 'error' | 'help'; // Type of toast
    title: string; // Title of the toast
    message: string; // Message body of the toast
    icon?: React.ComponentType<any>; // Icon component for the toast
    background: string; // Background color of the toast
    border: string; // Border color of the toast
  }

  const Toast: React.FC<ToastProps> = ({
    visible,
    type,
    title,
    message,
    icon: Icon,
    background,
    border,
  })=> {
    const translateY = visible ? 0 : -100; // Example animation value
  
    if (!visible) return null; // Return null when toast is not visible
  
    return (
      <Animated.View
        style={[
          styles.container,
          { backgroundColor: background, borderColor: border, transform: [{ translateY }] },
        ]}
      >
        <View style={styles.iconContainer}>
          {Icon && <Icon />} {/* Render the passed icon */}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </Animated.View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#3B3D3F',
  },
  message: {
    fontSize: 14,
    color: '#3B3D3F',
  },
});

export default Toast;
