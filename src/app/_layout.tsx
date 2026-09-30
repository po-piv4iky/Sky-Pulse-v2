import { useInitializeApp } from '@/features/initialize'
import '@/shared/i18n/i18n'
import Toast from '@/shared/ui/Toast/Toast'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

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
      <Toast />
    </>
  )
}
