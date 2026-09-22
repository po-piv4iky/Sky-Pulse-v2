import { getWeatherIconUrl } from '../../../shared/lib/getWeatherIconUrl'
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
    feels_like: data.main.feels_like, //температура ощущается как
    humidity: data.main.humidity, // влажность
    wind: { speed: data.wind.speed, deg: data.wind.deg }, // скорость ветра в м/с и направление ветра в градусах
    visibility: data.visibility, // видимость в км
    pressure: data.main.pressure, // атмосферное давление
  }
}
