import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'
import StyledText from '../StyledText/StyledText'

type StyledButtonProps = PressableProps & {
  label?: string
  icon?: React.ComponentProps<typeof Ionicons>['name']
  style?: StyleProp<ViewStyle>
}

export default function StyledButton({
  label,
  icon,
  style,
  ...props
}: StyledButtonProps) {
  return (
    <Pressable style={style} {...props}>
      {icon && <Ionicons name={icon} size={24} color={THEME.colors.PRIMARY} />}
      {label && <StyledText>{label}</StyledText>}
    </Pressable>
  )
}
