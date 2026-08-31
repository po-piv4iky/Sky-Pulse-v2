import { Ionicons } from '@expo/vector-icons'

type TabIcon = React.ComponentProps<typeof Ionicons>['name']

export const tabsMap = {
  index: {
    name: 'index',
    titleKey: 'navigationTab.home',
    icon: 'home' as TabIcon,
  },
  forecast: {
    name: 'forecast',
    titleKey: 'navigationTab.forecast',
    icon: 'cloud' as TabIcon,
  },
  save: {
    name: 'save',
    titleKey: 'navigationTab.saved',
    icon: 'bookmark' as TabIcon,
  },
  settings: {
    name: 'settings',
    titleKey: 'navigationTab.settings',
    icon: 'settings' as TabIcon,
  },
} as const

export const tabs = Object.values(tabsMap)

// Результат:
// [
//   { name: 'index', title: 'Home', icon: 'home' },
//   { name: 'forecast', title: 'Forecast', icon: 'cloud' },
//   { name: 'save', title: 'Saved', icon: 'save' },
//   { name: 'settings', title: 'Settings', icon: 'settings' },
// ]
export type Tab = (typeof tabs)[number]
export type TabName = keyof typeof tabsMap
