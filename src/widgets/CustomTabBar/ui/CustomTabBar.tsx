import { useInitializationStore } from '@/features/initialize/model/initializationStore'
import { useAppTheme } from '@/shared/theme'
import type { AppColors } from '@/shared/theme/colors'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

import { TabName, tabsMap } from '../config/tabs.config'
import TabItem from './TabItem'

type CustomTabBarProps = Parameters<
  NonNullable<React.ComponentProps<typeof Tabs>['tabBar']>
>[0]

export default function CustomTabBar({ state, navigation }: CustomTabBarProps) {
  const status = useInitializationStore((s) => s.status)
  const { colors } = useAppTheme()
  const styles = createStyles(colors)

  if (status !== 'success') {
    return null
  }

  return (
    <Animated.View entering={FadeIn.duration(400).delay(100)} style={styles.container}>
      {state.routes.map((route, index) => {
        const focused = state.index === index
        const tab = tabsMap[route.name as TabName]

        if (!tab) {
          return null
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TabItem
            key={route.key}
            tab={tab}
            focused={focused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        )
      })}
    </Animated.View>
  )
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      position: 'absolute',

      left: 16,
      right: 16,
      bottom: 30,
      height: 68,

      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',

      borderRadius: 50,
      paddingHorizontal: 4,

      backgroundColor: colors.BG_SECONDARY,

      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 12,
      shadowOffset: {
        width: 0,
        height: 4,
      },

      elevation: 10,
    },
  })
