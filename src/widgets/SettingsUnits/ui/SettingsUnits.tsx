import {
  PressureUnit,
  TemperatureUnit,
  useSettingsStore,
  WindSpeedUnit,
} from '@/entities/settings'

import Card from '@/shared/components/Card/Card'
import StyledText from '@/shared/components/StyledText/StyledText'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import UnitSelectorRow from './UnitSelectorRow'

export function SettingsUnits() {
  const { i18n, t } = useTranslation()
  const setTemperatureUnit = useSettingsStore((s) => s.setTemperatureUnit)
  const setWindSpeedUnit = useSettingsStore((s) => s.setWindSpeedUnit)
  const setPressureUnit = useSettingsStore((s) => s.setPressureUnit)
  const temperatureUnit = useSettingsStore((s) => s.temperatureUnit)
  const windSpeedUnit = useSettingsStore((s) => s.windSpeedUnit)
  const pressureUnit = useSettingsStore((s) => s.pressureUnit)

  const TEMPERATURE_OPTIONS: TemperatureUnit[] = ['celsius', 'fahrenheit', 'kelvin']
  const WIND_OPTIONS: WindSpeedUnit[] = ['km/h', 'm/s', 'mph']
  const PRESSURE_OPTIONS: PressureUnit[] = ['hPa', 'inHg', 'mmHg']

  return (
    <View style={{ gap: 10 }}>
      <StyledText color="secondary">{t('settings.unitsMetric')}</StyledText>
      <Card border="default" style={styles.container}>
        <UnitSelectorRow
          options={TEMPERATURE_OPTIONS}
          title={t('settings.temperatureTitle')}
          icon="thermometer-outline"
          value={temperatureUnit}
          onSelect={setTemperatureUnit}
        />
        <UnitSelectorRow
          options={WIND_OPTIONS}
          title={t('settings.windTitle')}
          icon="navigate-outline"
          value={windSpeedUnit}
          onSelect={setWindSpeedUnit}
        />
        <UnitSelectorRow
          options={PRESSURE_OPTIONS}
          title={t('settings.pressureTitle')}
          icon="speedometer-outline"
          value={pressureUnit}
          onSelect={setPressureUnit}
          isLast
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
})
