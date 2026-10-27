import { useAppTheme } from '@/shared/theme'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

type LoaderProps = {
  size?: 'small' | 'large'
  color?: string
  fullScreen?: boolean
}

export default function Loader({ size = 'large', fullScreen = false }: LoaderProps) {
  const { colors } = useAppTheme()
  return (
    <View style={[styles.container, fullScreen && styles.fullScreen]}>
      <ActivityIndicator size={size} color={colors.PRIMARY} />
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
