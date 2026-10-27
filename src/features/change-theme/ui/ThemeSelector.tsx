import { useSettingsStore } from '@/entities/settings'
import { ThemeMode } from '@/entities/settings/model/types/settings.types'
import SelectRow, { SelectButtonOption } from '@/shared/components/SelectRow/SelectRow'
import { StyleSheet } from 'react-native'

export function ThemeSelector() {
  const theme = useSettingsStore((s) => s.theme)
  const setThemeMode = useSettingsStore((s) => s.setThemeMode)
  const THEME_OPTIONS: readonly SelectButtonOption<ThemeMode>[] = [
    { value: 'dark', label: 'Тёмная' },
    { value: 'light', label: 'Светлая' },
  ]
  return (
    <SelectRow
      icon="accessibility"
      title="Theme"
      mode="buttons"
      selectedValue={theme}
      buttons={THEME_OPTIONS}
      onButtonSelect={setThemeMode}
    />
  )
}

const styles = StyleSheet.create({})
