import { GradientBackground } from '@/shared/components/GradientBackground'
import { usePathname } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { Header } from '../../widgets/Header'
import { SCREEN_CONFIG } from './config/screen.config'

type ScreenLayoutProps = {
  children: React.ReactNode
}

export default function ScreenLayout({ children }: ScreenLayoutProps) {
  const pathname = usePathname()
  const config =
    SCREEN_CONFIG[pathname as keyof typeof SCREEN_CONFIG] ?? SCREEN_CONFIG['/']
  return (
    <GradientBackground style={{ flex: 1, paddingTop: 20 }} colors={config.gradient}>
      <Header config={config} />
      <View style={styles.content}>{children}</View>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
})
