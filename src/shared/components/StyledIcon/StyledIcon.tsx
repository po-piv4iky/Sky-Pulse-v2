import { useAppTheme } from '@/shared/theme'
import { AppColors } from '@/shared/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { ColorValue, StyleSheet, View } from 'react-native'

interface IconProps {
  name: React.ComponentProps<typeof Ionicons>['name']
  size?: 'small' | 'default' | 'large' | number
  color?: ColorValue
  circle?: boolean
}

const ICON_SIZES = {
  small: 18,
  default: 24,
  large: 32,
} as const

export default function StyledIcon({
  name,
  size = 'default',
  color,
  circle = false,
}: IconProps) {
  const { colors } = useAppTheme()

  const iconColor = color ?? colors.PRIMARY

  const styles = createStyles(colors)

  return (
    <View style={circle ? styles.circleContainer : undefined}>
      <Ionicons
        name={name}
        size={typeof size === 'number' ? size : ICON_SIZES[size]}
        color={iconColor}
      />
    </View>
  )
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    circleContainer: {
      borderRadius: 50,
      backgroundColor: colors.BUTTON_PRIMARY_ACTIVE,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
