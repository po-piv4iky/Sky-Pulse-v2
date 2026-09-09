import { getWeatherIconUrl } from '../lib/getWeatherIconUrl'
import { Weather } from '../types/weather.types'
import { WeatherApiResponse } from '../types/weatherApiResponse.types'

export function normalizeWeather(data: WeatherApiResponse): Weather {
  return {
    city: data.name, // город
    dt: data.dt, // дата в секундах
    uri: getWeatherIconUrl(data.weather[0].icon), //иконка
  }
}
