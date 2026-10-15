import { LanguageSelector } from '@/features/change-language'
import TemperatureUnitSelector from '@/features/temperature-unit/ui/TemperatureUnitSelector'
import { ScreenLayout } from '@/widgets/ScreenLayout'

export default function Settings() {
  return (
    <ScreenLayout>
      <LanguageSelector />
      <TemperatureUnitSelector />
    </ScreenLayout>
  )
}
