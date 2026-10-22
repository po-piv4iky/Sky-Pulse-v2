import { ScreenLayout } from '@/widgets/ScreenLayout'
import { SettingsAppearance } from '@/widgets/SettingsAppearance'
import { SettingsUnits } from '@/widgets/SettingsUnits'

export default function Settings() {
  return (
    <ScreenLayout contentStyle={{ gap: 20 }}>
      <SettingsAppearance />
      <SettingsUnits />
    </ScreenLayout>
  )
}
