import { Weather } from '@/entities/weather/types/weather.types'
import { getFeelsLikeDescription } from './getFeelsLikeDescription'
import { getHumidityDescription } from './getHumidityDescription'
import { getPressureDescription } from './getPressureDescription'
import { getVisibilityDescription } from './getVisibilityDescription'
import { getWindDirection } from './getWindDirection'
import { WeatherDetail } from './types/weatherDetails.types'

export function getWeatherDetails(weather: Weather): WeatherDetail[] {
  return [
    {
      icon: 'thermometer-outline',
      labelKey: 'weather.details.feelsLike.label',
      value: `${weather.feels_like}°`,
      description: getFeelsLikeDescription(weather.temp, weather.feels_like),
    },
    {
      icon: 'water-outline',
      labelKey: 'weather.details.humidity.label',
      value: `${weather.humidity}%`,
      description: getHumidityDescription(weather.humidity),
    },
    {
      icon: 'navigate-outline',
      labelKey: 'weather.details.wind.label',
      value: `${weather.wind.speed} m/s`,
      description: getWindDirection(weather.wind.deg),
    },
    {
      icon: 'eye-outline',
      labelKey: 'weather.details.visibility.label',
      value: `${weather.visibility / 1000} km`,
      description: getVisibilityDescription(weather.visibility),
    },
    {
      icon: 'speedometer-outline',
      labelKey: 'weather.details.pressure.label',
      value: `${weather.pressure} hPa`,
      description: getPressureDescription(weather.pressure),
    },
  ]
}
