import { THEME } from '@/shared/theme'
import { TYPOGRAPHY } from '@/shared/theme/typography'

import { Text, TextProps } from 'react-native'

interface StyledTextProps extends TextProps {
  color?: 'primary' | 'secondary' | 'error'
  variant?:
    | 'displayXl'
    | 'headlineLg'
    | 'headlineMd'
    | 'titleMd'
    | 'bodyMd'
    | 'bodySm'
    | 'labelSm'
}

const typographyStyles = {
  displayXl: TYPOGRAPHY.DISPLAY_XL,
  headlineLg: TYPOGRAPHY.HEADLINE_LG,
  headlineMd: TYPOGRAPHY.HEADLINE_MD,
  titleMd: TYPOGRAPHY.TITLE_MD,
  bodyMd: TYPOGRAPHY.BODY_MD,
  bodySm: TYPOGRAPHY.BODY_SM,
  labelSm: TYPOGRAPHY.LABEL_SM,
}
export default function StyledText({
  children,
  color = 'primary',
  variant = 'bodyMd',
  style,
  ...props
}: StyledTextProps) {
  const textColor = {
    primary: THEME.colors.TEXT_PRIMARY,
    secondary: THEME.colors.SECONDARY,
    error: THEME.colors.ERROR,
  }

  return (
    <Text
      style={[typographyStyles[variant], { color: textColor[color] }, style]}
      {...props}
    >
      {children}
    </Text>
  )
}
