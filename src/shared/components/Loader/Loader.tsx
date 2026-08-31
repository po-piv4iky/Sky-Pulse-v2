import { THEME } from '@/shared/theme'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

type LoaderProps = {
  size?: 'small' | 'large'
  color?: string
  fullScreen?: boolean
}

export default function Loader({
  size = 'large',
  color = THEME.colors.PRIMARY,
  fullScreen = false,
}: LoaderProps) {
  return (
    <View style={[styles.container, fullScreen && styles.fullScreen]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  fullScreen: {
    flex: 1,
  },
})
