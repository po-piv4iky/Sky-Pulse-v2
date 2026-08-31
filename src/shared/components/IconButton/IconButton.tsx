import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native'

type IconButtonProps = PressableProps & {
  name: React.ComponentProps<typeof Ionicons>['name']
  size?: 'small' | 'default' | 'large'
  iconSize?: number
  style?: StyleProp<ViewStyle>
  color?: 'primary' | 'tertiary'
}

const SIZE_MAP = {
  small: 32,
  default: 40,
  large: 48,
} as const

const ICON_SIZE_MAP = {
  small: 16,
  default: 22,
  large: 28,
} as const

const COLOR_MAP = {
  primary: THEME.colors.TEXT_PRIMARY,
  tertiary: THEME.colors.TEXT_TERTIARY,
} as const

export default function IconButton({
  name,
  size = 'default',
  iconSize,
  style,
  color = 'primary',
  ...props
}: IconButtonProps) {
  const buttonSize = SIZE_MAP[size]

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          width: buttonSize,
          height: buttonSize,
          borderRadius: buttonSize / 2,
          opacity: pressed ? 0.6 : 1,
        },
        style,
      ]}
      hitSlop={8}
      {...props}
    >
      <Ionicons
        name={name}
        size={iconSize ?? ICON_SIZE_MAP[size]}
        color={COLOR_MAP[color]}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
