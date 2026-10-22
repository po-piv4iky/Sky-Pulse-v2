import { TemperatureUnit } from '@/entities/settings/model/types/units.types'
import { convertTemperature } from './convertTemperature'

export function formatTemperature(
  value: number,
  unit: TemperatureUnit,
  from: TemperatureUnit = 'celsius',
): string {
  const converted = convertTemperature(value, from, unit)
  const rounded = Math.round(converted)
  switch (unit) {
    case 'celsius':
      return `${rounded}°C`

    case 'fahrenheit':
      return `${rounded}°F`

    case 'kelvin':
      return `${rounded} K`
  }
}
