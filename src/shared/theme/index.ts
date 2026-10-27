import { useSettingsStore } from '@/entities/settings'
import { COLORS } from './colors'
import { GRADIENTS } from './gradients'

export const THEMES = {
  dark: {
    colors: COLORS.dark,
    gradients: GRADIENTS.dark,
  },
  light: {
    colors: COLORS.light,
    gradients: GRADIENTS.light,
  },
}

export function useAppTheme() {
  const mode = useSettingsStore((s) => s.theme)
  return THEMES[mode]
}
