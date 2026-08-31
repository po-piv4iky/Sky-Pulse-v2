import { THEME } from '@/shared/theme'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

type GradientBackgroundProps = Omit<LinearGradientProps, 'colors'> & {
  colors?: LinearGradientProps['colors']
}

export default function GradientBackground({
  colors = THEME.gradients.BACKGROUND,
  start = { x: 0.5, y: 0.5 },
  end = { x: 0.5, y: 1 },
  style,
  children,
  ...props
}: GradientBackgroundProps) {
  return (
    <LinearGradient colors={colors} start={start} end={end} style={[style]} {...props}>
      {children}
    </LinearGradient>
  )
}
