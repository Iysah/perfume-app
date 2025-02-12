import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { ArrowBack } from '@/assets/icons/icon'
import { router } from 'expo-router'

const ThemeBackBtn = () => {
  return (
    <Pressable style={[styles.btnContainer]} onPress={() => router.back()}>
      <ArrowBack />
    </Pressable>
  )
}

export default ThemeBackBtn

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 3,
    }
})