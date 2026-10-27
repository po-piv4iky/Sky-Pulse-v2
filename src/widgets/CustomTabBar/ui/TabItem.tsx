import StyledIcon from '@/shared/components/StyledIcon/StyledIcon'
import StyledText from '@/shared/components/StyledText/StyledText'
import { useAppTheme } from '@/shared/theme'
import type { AppColors } from '@/shared/theme/colors'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { Tab } from '../config/tabs.config'

interface TabItemProps {
  tab: Tab
  focused: boolean
  onPress: () => void
  onLongPress?: () => void
}

export default function TabItem({ tab, focused, onPress, onLongPress }: TabItemProps) {
  const { colors } = useAppTheme()
  const styles = createStyles(colors)
  const { t } = useTranslation()

  const scale = useSharedValue(1)
  const opacity = useSharedValue(0)
  const translateY = useSharedValue(0)

  useEffect(() => {
    scale.value = withSpring(focused ? 1.08 : 1)
    opacity.value = withTiming(focused ? 1 : 0, {
      duration: 180,
    })
    translateY.value = withSpring(focused ? -3 : 0)
  }, [focused, opacity, scale, translateY])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }))

  const animatedBackground = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  return (
    <Pressable
      style={styles.pressable}
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={8}
      accessibilityRole="tab"
      accessibilityState={{ selected: focused }}
      accessibilityLabel={t(tab.titleKey)}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <Animated.View
          pointerEvents="none"
          style={[styles.activeBackground, animatedBackground]}
        />

        <StyledIcon
          name={tab.icon}
          color={focused ? colors.SECONDARY : colors.TEXT_PRIMARY}
        />

        <StyledText
          variant="labelSm"
          style={[styles.label, focused && styles.activeLabel]}
        >
          {t(tab.titleKey)}
        </StyledText>
      </Animated.View>
    </Pressable>
  )
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    pressable: {
      flex: 1,
      alignItems: 'center',
    },

    container: {
      position: 'relative',
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 3,
      borderRadius: 25,
    },

    activeBackground: {
      backgroundColor: colors.BUTTON_PRIMARY_ACTIVE,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: 25,
    },

    label: {
      color: colors.TEXT_PRIMARY,
    },

    activeLabel: {
      color: colors.SECONDARY,
    },
  })
