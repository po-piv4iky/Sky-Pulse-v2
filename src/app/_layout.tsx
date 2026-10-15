import { useInitializeApp } from '@/features/initialize'
import { useSyncWeatherLanguage } from '@/features/sync-weather-language'
import '@/shared/i18n/i18n'
import Toast from '@/shared/ui/Toast/Toast'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function RootLayout() {
  useInitializeApp()
  useSyncWeatherLanguage()
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
