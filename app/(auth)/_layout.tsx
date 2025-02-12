import { Stack } from 'expo-router'

export default function RootLayout () {
  return (
    <Stack>
        <Stack.Screen name='login' options={{ headerShown: false }} />
        <Stack.Screen name='signup' options={{ headerShown: false }} />
        <Stack.Screen name='verify' options={{ headerShown: false }} />
        <Stack.Screen name='forget-password' options={{ headerShown: false }} />
        <Stack.Screen name='reset-password' options={{ headerShown: false }} />
    </Stack>
  )
}