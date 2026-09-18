import { getWeatherIconUrl } from '../lib/getWeatherIconUrl'
import { WeatherForecast } from '../types/weatherForecast.types'
import { WeatherForecastResponse } from '../types/weatherForecastResponse.types'

export function normalizeWeatherForecast(
  data: WeatherForecastResponse,
): WeatherForecast[] {
  return data.list.map((item) => ({
    dt: item.dt,
    dt_txt: item.dt_txt,
    temp: item.main.temp,
    uri: getWeatherIconUrl(item.weather[0].icon),
    description: item.weather[0].description,
  }))
}
