import { Ionicons } from '@expo/vector-icons'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import StyledIcon from '../../components/StyledIcon/StyledIcon'
import StyledText from '../../components/StyledText/StyledText'
import { useToastStore } from './toast.store'
import { ToastType } from './toast.types'

type IconName = React.ComponentProps<typeof Ionicons>['name']

const ICONS: Record<ToastType, IconName> = {
  success: 'checkmark-circle',
  info: 'information-circle',
  error: 'trash',
}

const COLORS: Record<ToastType, string> = {
  success: '#10B981',
  info: '#3B82F6',
  error: '#EF4444',
}

export default function Toast() {
  const visible = useToastStore((state) => state.visible) // видимость
  const type = useToastStore((state) => state.type) //тип сооющение
  const message = useToastStore((state) => state.message) //сообщение
  const duration = useToastStore((state) => state.duration) // время
  const hideToast = useToastStore((state) => state.hideToast) // скрыть тост

  const opacity = useSharedValue(0)
  const translateY = useSharedValue(30)

  // useEffect
  // нужен здесь для запуска побочных действий — анимации и таймера.
  // для выполнения действий после того, как React уже отрендерил UI
  useEffect(() => {
    if (!visible) return
    // Появление: снизу вверх + проявление
    opacity.value = withTiming(1, {
      duration: 250,
    })
    translateY.value = withTiming(0, {
      duration: 250,
    })
    // Ждём duration, затем начинаем исчезновение
    const timer = setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: 250,
      })
      translateY.value = withTiming(
        30,
        {
          duration: 250,
        },
        (finished) => {
          if (finished) {
            runOnJS(hideToast)()
          }
        },
      )
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [visible, duration, hideToast])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  })) // функция в которой динамически меняются значения опасити и вертикальное смещение y

  if (!visible) {
    return null
  }

  return (
    <Animated.View pointerEvents="box-none" style={[styles.container, animatedStyle]}>
      <View style={[styles.content, styles[type]]}>
        <StyledIcon name={ICONS[type]} size={20} color={COLORS[type]} />

        <StyledText variant="bodyMd" style={styles.message} numberOfLines={2}>
          {message}
        </StyledText>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 100,
    zIndex: 999,
    elevation: 999,
    alignItems: 'center',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
    maxWidth: 420,
  },

  message: {
    flexShrink: 1,
    fontWeight: 500,
  },

  success: {
    backgroundColor: 'rgba(16, 185, 129, 0.35)',
    borderColor: 'rgba(16, 185, 129, 0.5)',
  },

  info: {
    backgroundColor: 'rgba(59, 130, 246, 0.35)',
    borderColor: 'rgba(59, 130, 246, 0.5)',
  },

  error: {
    backgroundColor: 'rgba(239, 68, 68, 0.35)',
    borderColor: 'rgba(239, 68, 68, 0.5)',
  },
})

// при первом render:
// visible = false
// ↓
// useEffect запускается
// ↓
// Ничего не происходит.

// Потом:

// visible = true
// ↓
// render
// ↓
// useEffect
// ↓
// анимация + timer
