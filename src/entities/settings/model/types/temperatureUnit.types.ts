export type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin'

export type WindSpeedUnit = 'm/s' | 'km/h' | 'mph'

export type PressureUnit = 'hPa' | 'mmHg' | 'inHg'

export interface SettingsState {
  temperatureUnit: TemperatureUnit
  windSpeedUnit: WindSpeedUnit
  pressureUnit: PressureUnit
}
