import { TemperatureUnit } from '@/entities/settings/model/types/temperatureUnit.types'

export function convertTemperature(
  value: number,
  from: TemperatureUnit,
  to: TemperatureUnit,
): number {
  if (from === to) {
    return value
  }
  let celsius: number
  switch (from) {
    case 'celsius':
      celsius = value
      break
    case 'fahrenheit':
      celsius = (value - 32) * (5 / 9)
      break
    case 'kelvin':
      celsius = value - 273.15
      break
  }
  switch (to) {
    case 'celsius':
      return celsius
    case 'fahrenheit':
      return celsius * (9 / 5) + 32
    case 'kelvin':
      return celsius + 273.15
  }
}
