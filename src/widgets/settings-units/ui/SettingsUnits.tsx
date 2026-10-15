import { TemperatureUnit } from '@/entities/settings/model/types/temperatureUnit.types'
import { StyleSheet, View } from 'react-native'
import UnitSelectorRow from './UnitSelectorRow'

export function SettingsUnits() {
  const TEMPERATURE_OPTIONS: {
    value: TemperatureUnit
    label: string
  }[] = [
    { value: 'celsius', label: '°C' },
    { value: 'fahrenheit', label: '°F' },
    { value: 'kelvin', label: 'K' },
  ]
  const temperatureLabel =
    TEMPERATURE_OPTIONS.find((item) => item.value === temperatureUnit)?.label ?? '°C'
  return (
    <View>
      <UnitSelectorRow
        options={TEMPERATURE_OPTIONS.map((item) => item.label)}
        title="temperature"
      />
    </View>
  )
}

const styles = StyleSheet.create({})
