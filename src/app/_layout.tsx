import '@/shared/i18n/i18n'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { useInitializeApp } from '../features/model/useInitializeApp'

export default function RootLayout() {
  useInitializeApp()
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  )
}
