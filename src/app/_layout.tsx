import '@/shared/i18n/i18n'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function RootLayout() {
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
