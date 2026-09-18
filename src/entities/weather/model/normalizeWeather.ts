import { getWeatherIconUrl } from '../lib/getWeatherIconUrl'
import { Weather } from '../types/weather.types'
import { WeatherApiResponse } from '../types/weatherApiResponse.types'

export function normalizeWeather(data: WeatherApiResponse): Weather {
  return {
    city: data.name, // город
    dt: data.dt, // дата в секундах
    uri: getWeatherIconUrl(data.weather[0].icon), //иконка
    description: data.weather[0].description,
    timezone: data.timezone,
    temp: data.main.temp, // тумпература
    temp_max: data.main.temp_max,
    temp_min: data.main.temp_min,
  }
}

// export function normalizeWeather(data: WeatherApiResponse): Weather {
//   return {
//     city: data.name,
//     dt: data.dt,
//     uri: getWeatherIconUrl(data.weather[0].icon),
//     timezone: data.timezone,
//   }
// }
