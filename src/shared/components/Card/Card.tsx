import { useAppTheme } from '@/shared/theme'
import { AppColors } from '@/shared/theme/colors'
import { ReactNode } from 'react'
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

type CardProps = PressableProps & {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg'
  radius?: 'sm' | 'md' | 'lg'
  border?: 'none' | 'subtle' | 'default' | 'strong'
  background?: 'transparent' | 'dark' | 'light'
  style?: StyleProp<ViewStyle>
}

const RADIUS_SIZE = {
  sm: 10,
  md: 20,
  lg: 25,
} as const

const PADDING_SIZE = {
  sm: 10,
  md: 15,
  lg: 20,
} as const

function getBackgroundColors(colors: AppColors) {
  return {
    transparent: 'transparent',
    dark: colors.OVERLAY.darkStrong,
    light: colors.OVERLAY.light,
  } as const
}

function getBorderColors(colors: AppColors) {
  return {
    none: {
      width: 0,
      color: 'transparent',
    },

    subtle: {
      width: 0.5,
      color: colors.BORDER,
    },

    default: {
      width: 1,
      color: colors.BORDER_PRIMARY,
    },

    strong: {
      width: 1.5,
      color: colors.TEXT_SECONDARY,
    },
  } as const
}

export default function Card({
  children,
  border = 'none',
  padding = 'md',
  radius = 'md',
  background = 'transparent',
  style,
  onPress,
  ...pressableProps
}: CardProps) {
  const { colors } = useAppTheme()
  const borders = getBorderColors(colors)
  const bacground = getBackgroundColors(colors)
  const cardStyle = [
    {
      padding: PADDING_SIZE[padding],
      borderWidth: borders[border].width,
      borderColor: borders[border].color,
      borderRadius: RADIUS_SIZE[radius],
      backgroundColor: bacground[background],
    },
    style,
  ]
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [cardStyle, pressed && styles.pressed]}
        {...pressableProps}
      >
        {children}
      </Pressable>
    )
  }
  return <View style={cardStyle}>{children}</View>
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
})
