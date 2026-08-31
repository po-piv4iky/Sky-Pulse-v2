import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { ColorValue, StyleSheet, View } from 'react-native'

interface IconProps {
  name: React.ComponentProps<typeof Ionicons>['name']
  size?: 'small' | 'default' | 'large' | number
  color?: string | ColorValue // 👈 поддержка react-native цветов
  circle?: boolean
}

const ICON_SIZES = {
  small: 18,
  default: 24,
  large: 32,
} as const

const DEFAULT_COLOR = '#007AFF' // 👈 гарантированный цвет

export default function StyledIcon({
  name,
  size = 'default',
  color = THEME.colors.PRIMARY ?? DEFAULT_COLOR, // 👈 двойная защита
  circle = false,
}: IconProps) {
  return (
    <View style={[circle && styles.circleContainer]}>
      <Ionicons
        name={name}
        size={typeof size === 'number' ? size : ICON_SIZES[size]}
        color={color}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  circleContainer: {
    borderRadius: 50,
    backgroundColor: THEME.colors.BUTTON_PRIMARY_ACTIVE,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
