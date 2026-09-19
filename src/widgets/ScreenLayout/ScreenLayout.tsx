import { GradientBackground } from '@/shared/components/GradientBackground'
import { usePathname } from 'expo-router'
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Header } from '../../widgets/Header'
import { SCREEN_CONFIG } from './config/screen.config'

type ScreenLayoutProps = {
  children: React.ReactNode
  scrollable?: boolean
  contentStyle?: StyleProp<ViewStyle>
}

export default function ScreenLayout({
  children,
  scrollable = false,
  contentStyle,
}: ScreenLayoutProps) {
  const pathname = usePathname()
  const config =
    SCREEN_CONFIG[pathname as keyof typeof SCREEN_CONFIG] ?? SCREEN_CONFIG['/']
  return (
    <GradientBackground style={{ flex: 1, paddingTop: 20 }} colors={config.gradient}>
      <Header config={config} />

      {scrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.content, contentStyle]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, contentStyle]}>{children}</View>
      )}
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
  },
})
