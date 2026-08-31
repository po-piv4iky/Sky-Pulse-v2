import { THEME } from '@/shared/theme'

export const SCREEN_CONFIG = {
  '/': {
    titleKey: 'navigationHeader.home',
    iconName: 'location-outline',
    showLocation: true,
    title: 'Current Location',
    showSearch: true,
    gradient: THEME.gradients.BACKGROUND,
  },

  '/forecast': {
    titleKey: 'navigationHeader.forecast',
    iconName: undefined,
    showLocation: false,
    title: 'Current City',
    showSearch: false,
    gradient: THEME.gradients.BACKGROUND_SECONDARY,
  },

  '/save': {
    titleKey: 'navigationHeader.saved',
    iconName: undefined,
    showLocation: false,
    title: 'Saved Cities',
    showSearch: false,
    gradient: THEME.gradients.BACKGROUND,
  },

  '/settings': {
    titleKey: 'navigationHeader.settings',
    iconName: undefined,
    showLocation: false,
    title: 'Settings',
    showSearch: false,
    gradient: THEME.gradients.BACKGROUND_TERTIARY,
  },
} as const
