import { useInitializeApp } from '@/features/initialize'
import { useSyncWeatherLanguage } from '@/features/sync-weather-language'
import '@/shared/i18n/i18n'
import Toast from '@/shared/ui/Toast/Toast'
import { BottomSheetModalProvider } from '@expo/ui/community/bottom-sheet'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  useInitializeApp()
  useSyncWeatherLanguage()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
        <Toast />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
