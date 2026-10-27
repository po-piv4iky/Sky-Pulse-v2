export const COLORS = {
  dark: {
    // Brand
    PRIMARY: '#3E7BFA',
    SECONDARY: '#84A9FF',
    TERTIARY: '#FFD646',
    NEUTRAL: '#12141C',

    // Text
    TEXT_PRIMARY: '#E0E0ED',
    TEXT_SECONDARY: '#B1C5FF',
    TEXT_TERTIARY: '#4B71CA',

    // Backgrounds
    BG_PRIMARY: '#12141C',
    BG_SECONDARY: '#252D3E',
    BACKGROUND: '#0B1326',
    BACKGROUND_INPUT: '#282A32',

    // Surfaces
    SURFACE: '#171F33',
    SURFACE_HIGH: '#222A3D',
    SURFACE_CONTAINER_HIGH: '#BBC9CD',

    // Borders
    BORDER_PRIMARY: '#454C5B',
    BORDER: '#859397',

    // Buttons
    BUTTON_PRIMARY_ACTIVE: '#25375D',
    BUTTON_PRIMARY_HOVER: '#3B5DE7',
    BUTTON_PRIMARY_DISABLED: '#A5B4FC',
    BUTTON_SECONDARY: '#B1C5FF',
    BUTTON_SECONDARY_HOVER: '#D1D5DB',

    // Other
    PLACEHOLDER: '#8C90A0',
    ERROR: '#FFB4AB',
    WHITE: '#FFFFFF',

    OVERLAY: {
      light: 'rgba(255,255,255,0.08)',
      dark: 'rgba(0,0,0,0.05)',
      darkMedium: 'rgba(0,0,0,0.12)',
      darkStrong: 'rgba(0,0,0,0.20)',
      darkHeavy: 'rgba(0,0,0,0.30)',
    },
  },

  light: {
    // Brand
    PRIMARY: '#2864D7',
    SECONDARY: '#527AC7',
    TERTIARY: '#D6A900',
    NEUTRAL: '#12141C',

    // Text
    TEXT_PRIMARY: '#172033',
    TEXT_SECONDARY: '#40577F',
    TEXT_TERTIARY: '#5272AE',

    // Backgrounds
    BG_PRIMARY: '#FFFFFF',
    BG_SECONDARY: '#EDF2FA',
    BACKGROUND: '#F5F8FF',
    BACKGROUND_INPUT: '#E8EDF5',

    // Surfaces
    SURFACE: '#FFFFFF',
    SURFACE_HIGH: '#E7EEF9',
    SURFACE_CONTAINER_HIGH: '#D6E2F1',

    // Borders
    BORDER_PRIMARY: '#D5DEEC',
    BORDER: '#B6C4D8',

    // Buttons
    BUTTON_PRIMARY_ACTIVE: '#DCE8FF',
    BUTTON_PRIMARY_HOVER: '#D2E0FF',
    BUTTON_PRIMARY_DISABLED: '#B9C9E8',
    BUTTON_SECONDARY: '#40577F',
    BUTTON_SECONDARY_HOVER: '#34445F',

    // Other
    PLACEHOLDER: '#7D899C',
    ERROR: '#B42318',
    WHITE: '#FFFFFF',

    OVERLAY: {
      light: 'rgba(255,255,255,0.65)',
      dark: 'rgba(0,0,0,0.03)',
      darkMedium: 'rgba(0,0,0,0.06)',
      darkStrong: 'rgba(0,0,0,0.10)',
      darkHeavy: 'rgba(0,0,0,0.16)',
    },
  },
} as const

export type ThemeMode = keyof typeof COLORS
export type AppColors = (typeof COLORS)[ThemeMode]
