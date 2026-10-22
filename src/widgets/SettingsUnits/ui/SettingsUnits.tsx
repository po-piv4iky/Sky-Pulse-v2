import {
  PressureUnit,
  TemperatureUnit,
  useSettingsStore,
  WindSpeedUnit,
} from '@/entities/settings'

import Card from '@/shared/components/Card/Card'
import { StyleSheet } from 'react-native'
import UnitSelectorRow from './UnitSelectorRow'

export function SettingsUnits() {
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
    <Card border="default" style={styles.container}>
      <UnitSelectorRow
        options={TEMPERATURE_OPTIONS}
        title="temperature"
        icon="thermometer-outline"
        value={temperatureUnit}
        onSelect={setTemperatureUnit}
      />
      <UnitSelectorRow
        options={WIND_OPTIONS}
        title="wind"
        icon="navigate-outline"
        value={windSpeedUnit}
        onSelect={setWindSpeedUnit}
      />
      <UnitSelectorRow
        options={PRESSURE_OPTIONS}
        title="pressure"
        icon="speedometer-outline"
        value={pressureUnit}
        onSelect={setPressureUnit}
        isLast
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
})
