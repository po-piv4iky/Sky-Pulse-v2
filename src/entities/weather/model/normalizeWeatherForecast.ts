import { getWeatherIconUrl } from '../../../shared/lib/getWeatherIconUrl'
import { WeatherForecast } from '../types/weatherForecast.types'
import { WeatherForecastResponse } from '../types/weatherForecastResponse.types'

//возвращаем массив 40 объектов типа который собираем тут
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
