export const SCREEN_CONFIG = {
  '/': {
    titleKey: 'navigationHeader.home',
    iconName: 'location-outline',
    showLocation: true,
    buttonSave: true,
    title: 'Current Location',
    showSearch: true,
    gradient: 'BACKGROUND',
  },

  '/forecast': {
    titleKey: 'navigationHeader.forecast',
    iconName: undefined,
    showLocation: false,
    buttonSave: false,
    title: 'Current City',
    showSearch: false,
    gradient: 'BACKGROUND_SECONDARY',
  },

  '/save': {
    titleKey: 'navigationHeader.saved',
    iconName: undefined,
    showLocation: false,
    buttonSave: false,
    title: 'Saved Cities',
    showSearch: false,
    gradient: 'BACKGROUND',
  },

  '/settings': {
    titleKey: 'navigationHeader.settings',
    iconName: undefined,
    showLocation: false,
    buttonSave: false,
    title: 'Settings',
    showSearch: false,
    gradient: 'BACKGROUND_TERTIARY',
  },
} as const
