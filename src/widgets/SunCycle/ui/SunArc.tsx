import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Circle, Path } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const WIDTH = 320
const HEIGHT = 160

const CENTER_X = WIDTH / 2
const BASELINE_Y = 130

const RADIUS_X = 130
const RADIUS_Y = 95

interface SunArcProps {
  progress: number
}

export default function SunArc({ progress }: SunArcProps) {
  const normalizedProgress = Math.max(
    0,
    Math.min(1, progress > 1 ? progress / 100 : progress),
  )

  const animatedProgress = useSharedValue(normalizedProgress)

  useEffect(() => {
    animatedProgress.value = withTiming(normalizedProgress, {
      duration: 700,
    })
  }, [normalizedProgress, animatedProgress])

  const sunAnimatedProps = useAnimatedProps(() => {
    const angle = Math.PI * (1 - animatedProgress.value)

    const cx = CENTER_X + RADIUS_X * Math.cos(angle)
    const cy = BASELINE_Y - RADIUS_Y * Math.sin(angle)

    return {
      cx,
      cy,
    }
  })

  return (
    <View style={styles.container}>
      <Svg width="100%" height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
        {/* Полная траектория солнца */}
        <Path
          d={`M ${CENTER_X - RADIUS_X} ${BASELINE_Y}
              A ${RADIUS_X} ${RADIUS_Y} 0 0 1
              ${CENTER_X + RADIUS_X} ${BASELINE_Y}`}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />

        {/* Пройденная часть траектории */}
        {normalizedProgress > 0 && (
          <Path
            d={`
              M ${CENTER_X - RADIUS_X} ${BASELINE_Y}
              A ${RADIUS_X} ${RADIUS_Y} 0 0 1
              ${CENTER_X - RADIUS_X * Math.cos(Math.PI * normalizedProgress)}
              ${BASELINE_Y - RADIUS_Y * Math.sin(Math.PI * normalizedProgress)}
            `}
            stroke="#FBBF24"
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* Точка восхода */}
        <Circle cx={CENTER_X - RADIUS_X} cy={BASELINE_Y} r={4} fill="#FBBF24" />

        {/* Точка заката */}
        <Circle
          cx={CENTER_X + RADIUS_X}
          cy={BASELINE_Y}
          r={4}
          fill="rgba(255,255,255,0.5)"
        />

        {/* Солнце */}
        <AnimatedCircle
          animatedProps={sunAnimatedProps}
          r={11}
          fill="#FBBF24"
          stroke="#FDE68A"
          strokeWidth={3}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },
})
