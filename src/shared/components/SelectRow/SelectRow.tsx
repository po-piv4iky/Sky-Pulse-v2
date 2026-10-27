import { useAppTheme } from '@/shared/theme'
import type { AppColors } from '@/shared/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import StyledIcon from '../StyledIcon/StyledIcon'
import StyledText from '../StyledText/StyledText'

export interface SelectButtonOption<T extends string> {
  value: T
  label: string
}

interface SelectRowProps<T extends string> {
  icon: React.ComponentProps<typeof Ionicons>['name']
  title: string
  value?: string
  onPress?: () => void
  isOpen?: boolean
  isLast?: boolean

  mode?: 'select' | 'buttons'
  buttons?: readonly SelectButtonOption<T>[]
  selectedValue?: T
  onButtonSelect?: (value: T) => void
}

export default function SelectRow<T extends string>({
  title,
  icon,
  value,
  onPress,
  isOpen = false,
  isLast = false,
  mode = 'select',
  buttons = [],
  selectedValue,
  onButtonSelect,
}: SelectRowProps<T>) {
  const { colors } = useAppTheme()
  const styles = createStyles(colors)

  const [trackWidth, setTrackWidth] = useState(0)

  const foundIndex = buttons.findIndex((button) => button.value === selectedValue)

  const selectedIndex = Math.max(0, foundIndex)

  const segmentWidth =
    buttons.length > 0 ? Math.max(0, trackWidth - 8) / buttons.length : 0

  const translateX = useSharedValue(0)

  useEffect(() => {
    translateX.value = withTiming(selectedIndex * segmentWidth, {
      duration: 250,
    })
  }, [selectedIndex, segmentWidth, translateX])

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <View style={[styles.container, !isLast && styles.divider]}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <StyledIcon name={icon} />
        </View>

        <StyledText style={styles.title}>{title}</StyledText>

        {mode === 'select' && (
          <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={`${title}: ${value ?? ''}`}
            accessibilityState={{ expanded: isOpen }}
            style={styles.valueContainer}
          >
            <StyledText style={styles.value}>{value}</StyledText>

            <StyledIcon name={isOpen ? 'chevron-up' : 'chevron-down'} />
          </Pressable>
        )}

        {mode === 'buttons' && (
          <View
            style={styles.segmentedControl}
            onLayout={(event) => {
              setTrackWidth(event.nativeEvent.layout.width)
            }}
            accessibilityRole="radiogroup"
          >
            {segmentWidth > 0 && buttons.length > 0 && (
              <Animated.View
                pointerEvents="none"
                style={[styles.activeIndicator, { width: segmentWidth }, indicatorStyle]}
              />
            )}

            {buttons.map((button) => {
              const isSelected = selectedValue === button.value

              return (
                <Pressable
                  key={button.value}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: isSelected }}
                  onPress={() => onButtonSelect?.(button.value)}
                  style={styles.segment}
                >
                  <StyledText
                    style={[styles.segmentLabel, isSelected && styles.selectedLabel]}
                  >
                    {button.label}
                  </StyledText>
                </Pressable>
              )
            })}
          </View>
        )}
      </View>
    </View>
  )
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      minHeight: 34,
    },

    iconContainer: {
      width: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      flex: 1,
      fontSize: 14,
      color: colors.TEXT_PRIMARY,
    },

    valueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },

    value: {
      color: colors.TEXT_SECONDARY,
    },

    segmentedControl: {
      flexDirection: 'row',
      position: 'relative',
      width: 148,
      flexShrink: 0,
      padding: 3,
      borderRadius: 999,
      backgroundColor: colors.BG_SECONDARY,
      borderWidth: 1,
      borderColor: colors.BORDER_PRIMARY,
      overflow: 'hidden',
    },

    activeIndicator: {
      position: 'absolute',
      top: 3,
      bottom: 3,
      left: 3,
      borderRadius: 999,
      backgroundColor: colors.BUTTON_PRIMARY_ACTIVE,
    },

    segment: {
      flex: 1,
      minHeight: 30,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },

    segmentLabel: {
      color: colors.TEXT_SECONDARY,
      fontSize: 12,
      fontWeight: '500',
    },

    selectedLabel: {
      color: colors.WHITE,
      fontWeight: '600',
    },

    divider: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.BORDER_PRIMARY,
    },
  })
