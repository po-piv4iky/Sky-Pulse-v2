import { getWeatherIcon } from '@/shared/getWeatherIcon/getWeatherIcon'
import { Weather } from '../../types/weather.types'
import { WeatherApiResponse } from '../../types/weatherApiResponse.types'

export function normalizeWeather(data: WeatherApiResponse): Weather {
  return {
    city: data.name, // город
    dt: data.dt,
    uri: getWeatherIcon(data.weather[0].icon),
  }
}
